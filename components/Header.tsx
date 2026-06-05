import { Button } from "@/components/Button";

export function Header() {
  return (
    <header className="rounded-[2rem] border border-denana-line bg-white p-5 shadow-soft sm:p-7">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-denana-goldDark">
            Content Plan
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-denana-ink sm:text-4xl">
            Rencana Konten DenanavBeauty Salon
          </h2>
          <p className="mt-3 text-base leading-7 text-denana-muted">
            Generate dan kelola rencana konten sosial media untuk Instagram dan
            Facebook dengan kalender konten yang rapi.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row xl:justify-end">
          <Button variant="secondary" className="w-full sm:w-auto">
            Download CSV
          </Button>
          <Button className="w-full sm:w-auto">Generate Konten</Button>
        </div>
      </div>
    </header>
  );
}
