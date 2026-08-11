export default function Footer() {
  return (
    <footer className="py-8 border-t border-[rgba(200,75,49,0.1)] bg-[#F0E5D8]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-[#8FA6AC]">
          Designed & built by{' '}
          <span className="text-[#55677A]">Harsh Kumar</span>
        </p>
        <div className="flex items-center gap-1 text-xs font-mono text-[#D9BF77]/60">
          <span className="text-[#8FA6AC]">Built with</span>
          <span className="mx-1">Next.js · Tailwind · Framer</span>
        </div>
        <p className="font-mono text-[10px] text-[#8FA6AC] tracking-widest">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
