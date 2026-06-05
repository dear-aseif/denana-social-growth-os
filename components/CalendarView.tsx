import type { ContentItem } from "@/types/content";

export function CalendarView({ items }: { items: ContentItem[] }) {
  return (
    <section className="rounded-[2rem] border border-denana-line bg-white p-5 shadow-soft sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-denana-goldDark">
            Calendar View
          </p>
          <h2 className="mt-2 text-2xl font-bold text-denana-ink">
            Kalender Konten Mingguan
          </h2>
        </div>
        <p className="text-sm text-denana-muted">Februari 2024</p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-0 rounded-3xl border border-denana-line bg-denana-cream p-4"
          >
            <p className="text-sm font-bold text-denana-ink">{item.day}</p>
            <p className="mt-1 text-xs font-semibold text-denana-goldDark">
              {item.time}
            </p>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-denana-muted">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
