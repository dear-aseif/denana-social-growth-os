import { ContentPlanner } from "@/components/ContentPlanner";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-denana-cream px-4 py-4 text-denana-ink sm:px-6 lg:px-6 lg:py-6">
      <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-5 lg:flex-row lg:items-start">
        <Sidebar />
        <div className="min-w-0 flex-1 space-y-6">
          <Header />
          <ContentPlanner />
        </div>
      </div>
    </div>
  );
}
