export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <img src="/images/wizzy-logo.png" alt="" className="h-10 w-auto" />
          <div className="text-sm">
            <p className="font-display font-bold text-gradient-chrome">WIZZY VENTURE</p>
            <p className="text-xs text-muted-foreground">Transportation Incorporated</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Wizzy Venture Transportation Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
