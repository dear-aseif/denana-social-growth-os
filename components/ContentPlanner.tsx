import { CalendarView } from "@/components/CalendarView";
import { ContentCard } from "@/components/ContentCard";
import { EmptyState } from "@/components/EmptyState";
import { plannerMetrics, sampleContent } from "@/data/sampleContent";

export function ContentPlanner() {
  return (
    <main className="min-w-0 space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {plannerMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[1.75rem] border border-denana-line bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-semibold text-denana-muted">
              {metric.label}
            </p>
            <p className="mt-2 text-4xl font-bold text-denana-ink">
              {metric.value}
            </p>
            <p className="mt-1 text-sm text-denana-goldDark">{metric.helper}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] border border-denana-line bg-white p-5 shadow-soft sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-denana-goldDark">
              Generated Content
            </p>
            <h2 className="mt-2 text-2xl font-bold text-denana-ink">
              Daftar Rencana Konten
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-denana-muted">
              Konten yang sudah dihasilkan untuk publikasi mingguan. Semua kartu
              dibuat dari data agar mudah diperluas pada fase berikutnya.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-full bg-denana-ink px-4 py-2 text-sm font-semibold text-white"
            >
              Semua
            </button>
            <button
              type="button"
              className="rounded-full border border-denana-line px-4 py-2 text-sm font-semibold text-denana-muted"
            >
              Instagram
            </button>
            <button
              type="button"
              className="rounded-full border border-denana-line px-4 py-2 text-sm font-semibold text-denana-muted"
            >
              Facebook
            </button>
          </div>
        </div>

        <div className="mt-6 grid min-w-0 gap-4 xl:grid-cols-2">
          {sampleContent.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <CalendarView items={sampleContent} />
      <EmptyState />
    </main>
  );
}
