import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Only initialize in the browser. Next.js evaluates page modules on the
// server too (even for static pages with no data fetching), and getAuth()
// throws immediately if the config is missing/placeholder — which would
// break `next build` before the site is even deployed. All real usage of
// `db`/`auth` happens inside useEffect/handlers, which only run client-side.
let app, db, auth

if (typeof window !== 'undefined') {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  db = getFirestore(app)
  auth = getAuth(app)
}

export { db, auth }
export default app
