import type { ContentItem } from "@/types/content";
import { Button } from "@/components/Button";

const accentClasses: Record<ContentItem["color"], string> = {
  gold: "border-l-denana-gold bg-white",
  cream: "border-l-[#e0c891] bg-white",
  rose: "border-l-[#d8a89b] bg-white",
  green: "border-l-[#9eb58b] bg-white",
};

const statusClasses: Record<ContentItem["status"], string> = {
  "Siap Posting": "bg-[#eef7ea] text-[#537744]",
  Draft: "bg-denana-cream text-denana-goldDark",
  "Perlu Review": "bg-[#fff0ec] text-[#a45c4b]",
};

export function ContentCard({ item }: { item: ContentItem }) {
  return (
    <article
      className={`min-w-0 rounded-[1.75rem] border border-denana-line border-l-4 p-5 shadow-sm ${accentClasses[item.color]}`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-denana-goldDark">
            {item.date}
          </p>
          <h3 className="mt-2 break-words text-xl font-bold leading-snug text-denana-ink">
            {item.title}
          </h3>
        </div>
        <span
          className={`w-fit whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[item.status]}`}
        >
          {item.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-denana-muted">
        <span className="rounded-full bg-denana-cream px-3 py-1">
          {item.time}
        </span>
        <span className="rounded-full bg-denana-cream px-3 py-1">
          {item.platform}
        </span>
        <span className="rounded-full bg-denana-cream px-3 py-1">
          {item.category}
        </span>
      </div>

      <p className="mt-4 break-words text-sm leading-7 text-denana-muted">
        {item.caption}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.hashtags.map((hashtag) => (
          <span
            key={hashtag}
            className="break-all rounded-full border border-denana-line px-3 py-1 text-xs font-semibold text-denana-goldDark"
          >
            {hashtag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Button variant="secondary" className="w-full sm:w-auto">
          Edit Caption
        </Button>
        <Button variant="ghost" className="w-full sm:w-auto">
          Copy
        </Button>
      </div>
    </article>
  );
}
