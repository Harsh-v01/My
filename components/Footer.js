export default function Footer() {
  return (
    <footer className="py-8 border-t border-[rgba(139,111,71,0.1)] bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-[#a8a29e]">
          Designed & built by{' '}
          <span className="text-[#78716c]">Harsh Kumar</span>
        </p>
        <div className="flex items-center gap-1 text-xs font-mono text-[#c9a55a]/60">
          <span className="text-[#a8a29e]">Built with</span>
          <span className="mx-1">Next.js · Tailwind · Framer</span>
        </div>
        <p className="font-mono text-[10px] text-[#a8a29e] tracking-widest">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
