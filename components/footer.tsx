export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-xs text-muted-foreground sm:text-sm">
        <p className="text-pretty">© {new Date().getFullYear()}</p>
        <p className="text-pretty">Designed and developed by Lavanya Sharma</p>
      </div>
    </footer>
  )
}
