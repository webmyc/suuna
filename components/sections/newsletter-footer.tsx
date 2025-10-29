export function NewsletterFooter() {
  return (
    <footer className="py-16 bg-suuna-bg border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-spartan font-semibold tracking-tight text-suuna-text-light mb-4">
            Stay Connected
          </h2>
          <p className="text-suuna-text-muted max-w-xl mx-auto mb-8">
            Subscribe to our community newsletter for the latest events, wisdom, and offerings
          </p>

          {/* Substack embed */}
          <div className="max-w-md mx-auto">
            <iframe
              src="https://suuna.substack.com/embed"
              width="100%"
              height="320"
              style={{ border: '1px solid rgba(158, 230, 214, 0.2)', borderRadius: '1rem', background: 'transparent' }}
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>

        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-suuna-text-muted">
            <p>© 2025 <span className="font-suuna text-suuna-accent">SUUNA</span>. All rights reserved.</p>

            <div className="flex gap-6">
              <a
                href="https://suuna.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-suuna-accent transition-colors"
              >
                About
              </a>
              <a
                href="https://lu.ma/suuna"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-suuna-accent transition-colors"
              >
                Events
              </a>
              <a
                href="https://suuna.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-suuna-accent transition-colors"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
