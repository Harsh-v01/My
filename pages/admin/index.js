import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { db, auth } from '../../lib/firebase'
import { useAdminAuth } from '../../lib/useAdminAuth'
import { defaultContent } from '../../lib/defaultContent'

const TABS = ['Hero', 'About', 'Projects', 'Skills', 'Journey', 'Experiments', 'Contact', 'Resume']

const cls = {
  card: 'rounded-2xl border border-[color:var(--border,#e7e5e4)] bg-[var(--surface,#fff)] p-6',
  label: 'mb-1 block font-body text-xs text-[var(--text-muted,#57534e)]',
  input:
    'w-full rounded-lg border border-[color:var(--border,#e7e5e4)] bg-transparent px-3 py-2 font-body text-sm text-[var(--text,#292524)] outline-none focus:border-[var(--accent,#C84B31)]',
  textarea:
    'w-full rounded-lg border border-[color:var(--border,#e7e5e4)] bg-transparent px-3 py-2 font-body text-sm text-[var(--text,#292524)] outline-none focus:border-[var(--accent,#C84B31)] resize-y',
  btnPrimary:
    'rounded-full bg-[var(--text,#292524)] px-5 py-2.5 font-body text-sm font-medium text-[var(--surface,#fff)] transition-colors hover:bg-[var(--accent,#C84B31)] disabled:opacity-60',
  btnGhost:
    'rounded-full border border-[color:var(--border,#e7e5e4)] px-4 py-2 font-body text-xs font-medium text-[var(--text-muted,#57534e)] transition-colors hover:border-red-400 hover:text-red-500',
  btnSmall:
    'rounded-full border border-[color:var(--border,#e7e5e4)] px-3 py-1.5 font-body text-xs font-medium text-[var(--text-muted,#57534e)] transition-colors hover:border-[var(--accent,#C84B31)] hover:text-[var(--accent,#C84B31)]',
}

function Field({ label, ...props }) {
  return (
    <div className="mb-4">
      <label className={cls.label}>{label}</label>
      <input className={cls.input} {...props} />
    </div>
  )
}

function TextArea({ label, ...props }) {
  return (
    <div className="mb-4">
      <label className={cls.label}>{label}</label>
      <textarea className={cls.textarea} rows={3} {...props} />
    </div>
  )
}

export default function AdminPanel() {
  const router = useRouter()
  const { user, checking } = useAdminAuth()
  const [data, setData] = useState(null)
  const [tab, setTab] = useState('Hero')
  const [saving, setSaving] = useState(false)
  const [savedAt, setSavedAt] = useState(null)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    if (!checking && !user) {
      router.replace('/admin/login')
    }
  }, [checking, user, router])

  useEffect(() => {
    if (!user) return
    const base = JSON.parse(JSON.stringify(defaultContent))
    getDoc(doc(db, 'content', 'site'))
      .then((snap) => {
        setData(snap.exists() ? { ...base, ...snap.data() } : base)
      })
      .catch(() => {
        setLoadError('Could not load saved content — showing defaults.')
        setData(base)
      })
  }, [user])

  const handleSave = async () => {
  setSaving(true)

  try {
    const dataToSave = {
      ...data,

      projects: data.projects.map((project) => ({
        ...project,
        stack: Array.isArray(project.stack)
          ? project.stack
          : project.stack
              .split(',')
              .map((item) => item.trim())
              .filter(Boolean),
      })),

      skills: data.skills.map((category) => ({
        ...category,
        skills: Array.isArray(category.skills)
          ? category.skills
          : category.skills
              .split(',')
              .map((item) => item.trim())
              .filter(Boolean),
      })),
    }

    await setDoc(doc(db, 'content', 'site'), dataToSave)

    setSavedAt(new Date())
  } catch (err) {
    alert('Save failed: ' + err.message)
  } finally {
    setSaving(false)
  }
}

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/admin/login')
  }

  if (checking || !user || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--soft-bg,#F0E5D8)]">
        <p className="font-body text-sm text-[var(--text-muted,#57534e)]">Loading…</p>
      </div>
    )
  }

  const set = (section, value) => setData((prev) => ({ ...prev, [section]: value }))

  return (
    <div className="min-h-screen bg-[var(--soft-bg,#F0E5D8)] pb-24">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[color:var(--border,#e7e5e4)] bg-[var(--soft-bg,#F0E5D8)]/95 px-6 py-4 backdrop-blur-sm">
        <div>
          <h1 className="font-display text-xl font-light text-[var(--text,#292524)]">
            Portfolio Admin
          </h1>
          <p className="font-body text-xs text-[var(--text-soft,#78716c)]">
            Signed in as {user.email}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {savedAt && (
            <span className="font-body text-xs text-green-600">
              Saved {savedAt.toLocaleTimeString()}
            </span>
          )}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={cls.btnSmall}
          >
            View site ↗
          </a>
          <button onClick={handleSave} disabled={saving} className={cls.btnPrimary}>
            {saving ? 'Saving…' : 'Save changes'}
          </button>
          <button onClick={handleLogout} className={cls.btnGhost}>
            Log out
          </button>
        </div>
      </header>

      {loadError && (
        <p className="mx-6 mt-4 font-body text-xs text-amber-600">{loadError}</p>
      )}

      <div className="mx-auto max-w-4xl px-6 pt-6">
        <div className="mb-8 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-2 font-body text-sm transition-colors ${
                tab === t
                  ? 'bg-[var(--text,#292524)] text-[var(--surface,#fff)]'
                  : 'border border-[color:var(--border,#e7e5e4)] text-[var(--text-muted,#57534e)] hover:border-[var(--accent,#C84B31)]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 'Hero' && <HeroTab value={data.hero} onChange={(v) => set('hero', v)} />}
        {tab === 'About' && <AboutTab value={data.about} onChange={(v) => set('about', v)} />}
        {tab === 'Projects' && <ProjectsTab value={data.projects} onChange={(v) => set('projects', v)} />}
        {tab === 'Skills' && <SkillsTab value={data.skills} onChange={(v) => set('skills', v)} />}
        {tab === 'Journey' && <JourneyTab value={data.journey} onChange={(v) => set('journey', v)} />}
        {tab === 'Experiments' && <ExperimentsTab value={data.experiments} onChange={(v) => set('experiments', v)} />}
        {tab === 'Contact' && <ContactTab value={data.contact} onChange={(v) => set('contact', v)} />}
        {tab === 'Resume' && <ResumeTab value={data.resume} onChange={(v) => set('resume', v)} />}
      </div>
    </div>
  )
}

// ---------- Hero ----------
function HeroTab({ value, onChange }) {
  const set = (k, v) => onChange({ ...value, [k]: v })
  const setStat = (i, k, v) => {
    const stats = [...value.stats]
    stats[i] = { ...stats[i], [k]: v }
    onChange({ ...value, stats })
  }
  const addStat = () => onChange({ ...value, stats: [...value.stats, { num: '', label: '' }] })
  const removeStat = (i) => onChange({ ...value, stats: value.stats.filter((_, idx) => idx !== i) })

  return (
    <div className={cls.card}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" value={value.firstName} onChange={(e) => set('firstName', e.target.value)} />
        <Field label="Last name" value={value.lastName} onChange={(e) => set('lastName', e.target.value)} />
      </div>
      <Field label="Role (shown above your name)" value={value.role} onChange={(e) => set('role', e.target.value)} />
      <TextArea label="Tagline" value={value.tagline} onChange={(e) => set('tagline', e.target.value)} />

      <p className={cls.label}>Stats row</p>
      {value.stats.map((s, i) => (
        <div key={i} className="mb-2 flex items-center gap-2">
          <input className={cls.input} style={{ maxWidth: 90 }} value={s.num} onChange={(e) => setStat(i, 'num', e.target.value)} placeholder="4+" />
          <input className={cls.input} value={s.label} onChange={(e) => setStat(i, 'label', e.target.value)} placeholder="Projects shipped" />
          <button onClick={() => removeStat(i)} className={cls.btnGhost}>Remove</button>
        </div>
      ))}
      <button onClick={addStat} className={cls.btnSmall}>+ Add stat</button>
    </div>
  )
}

// ---------- About ----------
function AboutTab({ value, onChange }) {
  const setParagraph = (i, v) => {
    const paragraphs = [...value.paragraphs]
    paragraphs[i] = v
    onChange({ ...value, paragraphs })
  }
  const setTrait = (i, k, v) => {
    const traits = [...value.traits]
    traits[i] = { ...traits[i], [k]: v }
    onChange({ ...value, traits })
  }
  const addTrait = () => onChange({ ...value, traits: [...value.traits, { icon: '[]', title: '', desc: '' }] })
  const removeTrait = (i) => onChange({ ...value, traits: value.traits.filter((_, idx) => idx !== i) })

  return (
    <div className="space-y-6">
      <div className={cls.card}>
        <p className={cls.label}>Bio paragraph 1</p>
        <textarea className={cls.textarea} rows={4} value={value.paragraphs[0]} onChange={(e) => setParagraph(0, e.target.value)} />
        <p className={`${cls.label} mt-4`}>Bio paragraph 2</p>
        <textarea className={cls.textarea} rows={4} value={value.paragraphs[1]} onChange={(e) => setParagraph(1, e.target.value)} />
        <Field label="Availability badge text" value={value.availabilityText} onChange={(e) => onChange({ ...value, availabilityText: e.target.value })} />
      </div>

      <div className={cls.card}>
        <p className="mb-3 font-body text-sm font-medium text-[var(--text,#292524)]">Traits</p>
        {value.traits.map((t, i) => (
          <div key={i} className="mb-4 rounded-xl border border-[color:var(--border,#e7e5e4)] p-4">
            <div className="mb-2 flex items-center gap-2">
              <input className={cls.input} style={{ maxWidth: 70 }} value={t.icon} onChange={(e) => setTrait(i, 'icon', e.target.value)} placeholder="[]" />
              <input className={cls.input} value={t.title} onChange={(e) => setTrait(i, 'title', e.target.value)} placeholder="Title" />
            </div>
            <textarea className={cls.textarea} rows={2} value={t.desc} onChange={(e) => setTrait(i, 'desc', e.target.value)} placeholder="Description" />
            <button onClick={() => removeTrait(i)} className={`${cls.btnGhost} mt-2`}>Remove trait</button>
          </div>
        ))}
        <button onClick={addTrait} className={cls.btnSmall}>+ Add trait</button>
      </div>
    </div>
  )
}

// ---------- Projects ----------
function ProjectsTab({ value, onChange }) {
  const set = (i, k, v) => {
    const projects = [...value]
    projects[i] = { ...projects[i], [k]: v }
    onChange(projects)
  }
  const setStack = (i, v) => set(i, 'stack', v)
  const add = () =>
    onChange([
      ...value,
      { index: String(value.length + 1).padStart(2, '0'), name: '', tagline: '', desc: '', stack: [], image: '', github: '', live: '' },
    ])
  const remove = (i) => onChange(value.filter((_, idx) => idx !== i))
  const move = (i, dir) => {
    const next = [...value]
    const j = i + dir
    if (j < 0 || j >= next.length) return
    ;[next[i], next[j]] = [next[j], next[i]]
    onChange(next)
  }

  return (
    <div className="space-y-6">
      {value.map((p, i) => (
        <div key={i} className={cls.card}>
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-xs text-[var(--text-soft,#78716c)]">#{p.index}</span>
            <div className="flex gap-2">
              <button onClick={() => move(i, -1)} className={cls.btnSmall}>↑</button>
              <button onClick={() => move(i, 1)} className={cls.btnSmall}>↓</button>
              <button onClick={() => remove(i)} className={cls.btnGhost}>Remove</button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" value={p.name} onChange={(e) => set(i, 'name', e.target.value)} />
            <Field label="Tagline" value={p.tagline} onChange={(e) => set(i, 'tagline', e.target.value)} />
          </div>
          <TextArea label="Description" value={p.desc} onChange={(e) => set(i, 'desc', e.target.value)} />
          <Field
            label="Tech stack (comma separated)"
            value={Array.isArray(p.stack) ? p.stack.join(', ') : p.stack || ''}
            onChange={(e) => setStack(i, e.target.value)}
          />
          <Field label="Image path (in /public, e.g. /projects/samvad.png)" value={p.image} onChange={(e) => set(i, 'image', e.target.value)} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="GitHub URL" value={p.github} onChange={(e) => set(i, 'github', e.target.value)} />
            <Field label="Live demo URL (blank = none)" value={p.live || ''} onChange={(e) => set(i, 'live', e.target.value)} />
          </div>
        </div>
      ))}
      <button onClick={add} className={cls.btnSmall}>+ Add project</button>
    </div>
  )
}

// ---------- Skills ----------
function SkillsTab({ value, onChange }) {
  const setCat = (i, k, v) => {
    const cats = [...value]
    cats[i] = { ...cats[i], [k]: v }
    onChange(cats)
  }
  const setSkills = (i, v) => setCat(i, 'skills', v)
  const add = () => onChange([...value, { label: '', icon: '//', skills: [] }])
  const remove = (i) => onChange(value.filter((_, idx) => idx !== i))

  return (
    <div className="space-y-6">
      {value.map((c, i) => (
        <div key={i} className={cls.card}>
          <div className="mb-2 flex items-center gap-2">
            <input className={cls.input} style={{ maxWidth: 70 }} value={c.icon} onChange={(e) => setCat(i, 'icon', e.target.value)} />
            <input className={cls.input} value={c.label} onChange={(e) => setCat(i, 'label', e.target.value)} placeholder="Category name" />
            <button onClick={() => remove(i)} className={cls.btnGhost}>Remove</button>
          </div>
          <Field
  label="Skills (comma separated)"
  value={Array.isArray(c.skills) ? c.skills.join(', ') : c.skills || ''}
  onChange={(e) => setSkills(i, e.target.value)}
/>
        </div>
      ))}
      <button onClick={add} className={cls.btnSmall}>+ Add category</button>
    </div>
  )
}

// ---------- Journey ----------
function JourneyTab({ value, onChange }) {
  const set = (i, k, v) => {
    const next = [...value]
    next[i] = { ...next[i], [k]: v }
    onChange(next)
  }
  const add = () => onChange([...value, { year: '', title: '', desc: '' }])
  const remove = (i) => onChange(value.filter((_, idx) => idx !== i))

  return (
    <div className="space-y-4">
      {value.map((m, i) => (
        <div key={i} className={cls.card}>
          <div className="mb-2 flex items-center gap-2">
            <input className={cls.input} style={{ maxWidth: 100 }} value={m.year} onChange={(e) => set(i, 'year', e.target.value)} placeholder="2026" />
            <input className={cls.input} value={m.title} onChange={(e) => set(i, 'title', e.target.value)} placeholder="Milestone title" />
            <button onClick={() => remove(i)} className={cls.btnGhost}>Remove</button>
          </div>
          <textarea className={cls.textarea} rows={2} value={m.desc} onChange={(e) => set(i, 'desc', e.target.value)} />
        </div>
      ))}
      <button onClick={add} className={cls.btnSmall}>+ Add milestone</button>
    </div>
  )
}

// ---------- Experiments ----------
function ExperimentsTab({ value, onChange }) {
  const set = (i, k, v) => {
    const next = [...value]
    next[i] = { ...next[i], [k]: v }
    onChange(next)
  }
  const add = () => onChange([...value, { title: '', desc: '', tag: '' }])
  const remove = (i) => onChange(value.filter((_, idx) => idx !== i))

  return (
    <div className="space-y-4">
      {value.map((it, i) => (
        <div key={i} className={cls.card}>
          <div className="mb-2 flex items-center gap-2">
            <input className={cls.input} value={it.title} onChange={(e) => set(i, 'title', e.target.value)} placeholder="Title" />
            <input className={cls.input} style={{ maxWidth: 140 }} value={it.tag} onChange={(e) => set(i, 'tag', e.target.value)} placeholder="Tag e.g. Exploring" />
            <button onClick={() => remove(i)} className={cls.btnGhost}>Remove</button>
          </div>
          <textarea className={cls.textarea} rows={2} value={it.desc} onChange={(e) => set(i, 'desc', e.target.value)} />
        </div>
      ))}
      <button onClick={add} className={cls.btnSmall}>+ Add item</button>
    </div>
  )
}

// ---------- Contact ----------
function ContactTab({ value, onChange }) {
  const setLink = (i, k, v) => {
    const links = [...value.links]
    links[i] = { ...links[i], [k]: v }
    onChange({ ...value, links })
  }
  const addLink = () => onChange({ ...value, links: [...value.links, { key: 'other', label: '', value: '', href: '' }] })
  const removeLink = (i) => onChange({ ...value, links: value.links.filter((_, idx) => idx !== i) })

  return (
    <div className="space-y-6">
      <div className={cls.card}>
        <TextArea label="Description text" value={value.description} onChange={(e) => onChange({ ...value, description: e.target.value })} />
        <Field label="Email address" value={value.email} onChange={(e) => onChange({ ...value, email: e.target.value })} />
      </div>

      <div className={cls.card}>
        <p className="mb-3 font-body text-sm font-medium text-[var(--text,#292524)]">Links</p>
        {value.links.map((l, i) => (
          <div key={i} className="mb-4 rounded-xl border border-[color:var(--border,#e7e5e4)] p-4">
            <div className="mb-2 grid grid-cols-2 gap-2">
              <select className={cls.input} value={l.key} onChange={(e) => setLink(i, 'key', e.target.value)}>
                <option value="email">Email icon</option>
                <option value="linkedin">LinkedIn icon</option>
                <option value="github">GitHub icon</option>
                <option value="other">Generic icon</option>
              </select>
              <input className={cls.input} value={l.label} onChange={(e) => setLink(i, 'label', e.target.value)} placeholder="Label" />
            </div>
            <Field label="Display value" value={l.value} onChange={(e) => setLink(i, 'value', e.target.value)} />
            <Field label="Link URL" value={l.href} onChange={(e) => setLink(i, 'href', e.target.value)} />
            <button onClick={() => removeLink(i)} className={cls.btnGhost}>Remove link</button>
          </div>
        ))}
        <button onClick={addLink} className={cls.btnSmall}>+ Add link</button>
      </div>
    </div>
  )
}

// ---------- Resume ----------
function ResumeTab({ value, onChange }) {
  return (
    <div className={cls.card}>
      <p className="mb-4 font-body text-sm text-[var(--text-muted,#57534e)]">
        By default the resume button downloads <code>/resume.pdf</code> from your{' '}
        <code>public</code> folder — replace that file whenever you update your resume, no
        redeploy of this admin config needed. If you'd rather point the button somewhere else
        (e.g. a Drive link), change the URL below.
      </p>
      <Field label="Resume URL" value={value.url} onChange={(e) => onChange({ ...value, url: e.target.value })} />
      <Field label="Downloaded file name" value={value.fileName} onChange={(e) => onChange({ ...value, fileName: e.target.value })} />
    </div>
  )
}
