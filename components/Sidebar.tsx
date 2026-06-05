const navigationItems = [
  { label: "Dashboard", active: false },
  { label: "Rencana Konten", active: true },
  { label: "Kalender", active: false },
  { label: "Ide Konten", active: false },
  { label: "Export", active: false },
];

export function Sidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col rounded-[2rem] border border-denana-line bg-white p-5 shadow-soft lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:w-72">
      <div className="mb-7 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-denana-gold text-lg font-bold text-white">
          D
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-denana-goldDark">
            Denana
          </p>
          <h1 className="text-lg font-bold text-denana-ink">
            Social Growth OS
          </h1>
        </div>
      </div>

      <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
        {navigationItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`whitespace-nowrap rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
              item.active
                ? "bg-denana-cream text-denana-goldDark shadow-sm"
                : "text-denana-muted hover:bg-denana-cream hover:text-denana-ink"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-6 rounded-3xl bg-denana-cream p-4 lg:mt-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-denana-goldDark">
          Internal App
        </p>
        <p className="mt-2 text-sm leading-6 text-denana-muted">
          Untuk DenanavBeauty Salon dalam mengatur konten Instagram dan
          Facebook.
        </p>
      </div>
    </aside>
  );
}
