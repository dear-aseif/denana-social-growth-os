import { Button } from "@/components/Button";

export function EmptyState() {
  return (
    <section className="rounded-[2rem] border border-dashed border-denana-line bg-white p-6 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-denana-cream text-2xl">
        ✨
      </div>
      <h2 className="mt-4 text-xl font-bold text-denana-ink">
        Siap membuat ide konten baru?
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-denana-muted">
        Gunakan tombol generate untuk menambahkan rencana konten baru. Pada
        Phase 1 tombol ini masih placeholder dan siap disambungkan ke AI pada
        fase berikutnya.
      </p>
      <Button className="mt-5">Generate Konten Baru</Button>
    </section>
  );
}
