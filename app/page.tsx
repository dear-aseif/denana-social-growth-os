"use client";

import { useEffect, useMemo, useState } from "react";

type PageKey = "home" | "brand" | "campaign" | "content";

type ContentRow = {
  id: number;
  day: number;
  date: string;
  platform: "Instagram" | "Facebook" | "Instagram + Facebook";
  pillar: string;
  format: string;
  topic: string;
  angle: string;
  cta: string;
  status: "Draft" | "Siap Produksi" | "Perlu Review";
};

type EditableRowField = Exclude<keyof ContentRow, "id" | "day">;

type BrandProfile = {
  brandName: string;
  businessType: string;
  primaryService: string;
  audience: string;
  tone: string;
  promise: string;
  notes: string;
};

type CampaignPlan = {
  campaignName: string;
  periodStart: string;
  periodEnd: string;
  goal: string;
  platforms: string;
  focusServices: string;
  keyMessage: string;
};

type DraftDetail = {
  rowId: number;
  caption: string;
  shortCaption: string;
  videoScript: string;
  visualDirection: string;
  overlayText: string;
  hashtags: string;
  checklist: string;
};

const STORAGE_KEYS = {
  brand: "denana-brand-profile-v7",
  campaign: "denana-campaign-plan-v7",
  content: "denana-content-plan-v7",
  drafts: "denana-content-drafts-v7",
};

const defaultBrand: BrandProfile = {
  brandName: "DenanavBeauty Salon",
  businessType: "Beauty salon dengan fokus facial treatment",
  primaryService: "Facial Treatment only",
  audience:
    "Perempuan usia 18-40 tahun yang ingin kulit wajah terlihat lebih bersih, segar, sehat, dan terawat tanpa proses yang terasa rumit.",
  tone: "Hangat, profesional, clean, edukatif, dan meyakinkan.",
  promise:
    "Membantu customer memahami pilihan facial treatment yang sesuai: Microdermabrasion, Hydra Peel, dan totok wajah.",
  notes:
    "Konten tidak membahas layanan salon di luar perawatan wajah. Fokus hanya pada facial treatment.",
};

const defaultCampaign: CampaignPlan = {
  campaignName: "Organic Foundation Facial Treatment",
  periodStart: "2024-02-01",
  periodEnd: "2024-03-01",
  goal: "Awareness",
  platforms: "Instagram and Facebook",
  focusServices: "Microdermabrasion, Hydra Peel, dan totok wajah",
  keyMessage:
    "Facial treatment rutin membantu kulit wajah terlihat lebih bersih, segar, dan terawat dengan pilihan treatment yang mudah dipahami.",
};

const navItems: Array<{ key: PageKey; label: string }> = [
  { key: "home", label: "Home" },
  { key: "brand", label: "Profil Brand" },
  { key: "campaign", label: "Rencana Campaign" },
  { key: "content", label: "Rencana Konten" },
];

const pillars = [
  "Edukasi Facial",
  "Service Highlight",
  "Problem-Solution",
  "Trust Builder",
  "Soft Promotion",
];

const formats = ["Carousel", "Reels", "Story", "Feed Post", "Facebook Post"];

const services = ["Microdermabrasion", "Hydra Peel", "totok wajah"];

const topicTemplates = [
  "Kulit kusam dan cara facial membantu tampilan wajah lebih segar",
  "Kenapa Microdermabrasion cocok untuk bantu mengangkat sel kulit mati",
  "Hydra Peel untuk rasa kulit lebih lembap, bersih, dan glowing",
  "Totok wajah sebagai ritual relaksasi untuk wajah yang terasa lelah",
  "Perbedaan Microdermabrasion, Hydra Peel, dan totok wajah",
  "Tanda wajah butuh facial treatment rutin",
  "Persiapan sebelum datang facial agar hasil treatment lebih nyaman",
  "Aftercare sederhana setelah facial treatment",
  "Mitos dan fakta seputar facial treatment",
  "Rekomendasi treatment sesuai concern kulit wajah",
];

function safeRead<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const value = window.localStorage.getItem(key);
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function toDateLabel(index: number) {
  const date = new Date(2024, 1, index + 1);
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

function generateContentPlan(): ContentRow[] {
  return Array.from({ length: 30 }, (_, index) => {
    const service = services[index % services.length];
    const pillar = pillars[index % pillars.length];
    const format = formats[index % formats.length];
    const platform = (
      index % 3 === 0
        ? "Instagram + Facebook"
        : index % 3 === 1
          ? "Instagram"
          : "Facebook"
    ) as ContentRow["platform"];

    return {
      id: index + 1,
      day: index + 1,
      date: toDateLabel(index),
      platform,
      pillar,
      format,
      topic: `${service}: ${topicTemplates[index % topicTemplates.length]}`,
      angle:
        index % 2 === 0
          ? `Edukasi ringan tentang manfaat ${service} dengan bahasa yang mudah dipahami.`
          : `Ajak audience mengenali concern wajah dan memilih ${service} sebagai opsi perawatan.`,
      cta:
        index % 2 === 0
          ? "Konsultasikan kebutuhan facial kamu dengan DenanavBeauty Salon."
          : "Simpan dulu ide ini dan jadwalkan facial treatment berikutnya.",
      status:
        index % 5 === 0
          ? "Perlu Review"
          : index % 2 === 0
            ? "Siap Produksi"
            : "Draft",
    };
  });
}

function buildDraft(row: ContentRow): DraftDetail {
  const service =
    services.find((item) => row.topic.includes(item)) ?? services[0];
  return {
    rowId: row.id,
    caption: `${row.topic}\n\nKulit wajah yang dirawat dengan tepat akan terasa lebih bersih, segar, dan nyaman. ${row.angle} Di DenanavBeauty Salon, fokus treatment kami adalah Facial Treatment only: Microdermabrasion, Hydra Peel, dan totok wajah.\n\n${row.cta}`,
    shortCaption: `${service} untuk wajah yang terasa lebih bersih dan segar. ${row.cta}`,
    videoScript: `Opening: tampilkan wajah/model dengan ekspresi fresh.\nScene 1: highlight concern kulit wajah secara singkat.\nScene 2: tampilkan suasana treatment ${service}.\nScene 3: berikan edukasi manfaat dengan tone hangat.\nClosing: ajak audience booking atau konsultasi facial treatment.`,
    visualDirection: `Gunakan visual clean, close-up wajah, hand movement lembut, nuansa putih dan gold, pencahayaan natural, serta frame treatment ${service} yang terlihat rapi dan higienis.`,
    overlayText: `${service}\nWajah lebih segar\nFacial Treatment DenanavBeauty`,
    hashtags:
      "#DenanavBeautySalon #FacialTreatment #Microdermabrasion #HydraPeel #TotokWajah #PerawatanWajah #KulitSehat",
    checklist:
      "Siapkan ruang treatment bersih\nAmbil close-up produk/alat facial\nRekam proses treatment singkat\nPastikan caption sesuai service facial only\nCek ulang CTA sebelum posting",
  };
}

function csvEscape(value: string | number) {
  const text = String(value).replaceAll('"', '""');
  return `"${text}"`;
}

export default function Home() {
  const [activePage, setActivePage] = useState<PageKey>("home");
  const [brand, setBrand] = useState<BrandProfile>(defaultBrand);
  const [campaign, setCampaign] = useState<CampaignPlan>(defaultCampaign);
  const [rows, setRows] = useState<ContentRow[]>(() => generateContentPlan());
  const [pillarFilter, setPillarFilter] = useState("Semua");
  const [formatFilter, setFormatFilter] = useState("Semua");
  const [selectedRow, setSelectedRow] = useState<ContentRow | null>(null);
  const [draft, setDraft] = useState<DraftDetail | null>(null);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    setBrand(safeRead(STORAGE_KEYS.brand, defaultBrand));
    setCampaign(safeRead(STORAGE_KEYS.campaign, defaultCampaign));
    setRows(safeRead(STORAGE_KEYS.content, generateContentPlan()));
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 2400);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const matchesPillar =
        pillarFilter === "Semua" || row.pillar === pillarFilter;
      const matchesFormat =
        formatFilter === "Semua" || row.format === formatFilter;
      return matchesPillar && matchesFormat;
    });
  }, [formatFilter, pillarFilter, rows]);

  const saveBrand = () => {
    window.localStorage.setItem(STORAGE_KEYS.brand, JSON.stringify(brand));
    setNotice("Profil brand tersimpan di localStorage.");
  };

  const saveCampaign = () => {
    window.localStorage.setItem(
      STORAGE_KEYS.campaign,
      JSON.stringify(campaign),
    );
    setNotice("Rencana campaign tersimpan di localStorage.");
  };

  const saveContent = (nextRows = rows) => {
    window.localStorage.setItem(STORAGE_KEYS.content, JSON.stringify(nextRows));
    setNotice("Rencana konten tersimpan di localStorage.");
  };

  const updateRow = (id: number, field: EditableRowField, value: string) => {
    setRows((currentRows) =>
      currentRows.map((row) =>
        row.id === id ? ({ ...row, [field]: value } as ContentRow) : row,
      ),
    );
  };

  const regenerate = () => {
    const nextRows = generateContentPlan();
    setRows(nextRows);
    window.localStorage.setItem(STORAGE_KEYS.content, JSON.stringify(nextRows));
    setNotice("30-day content plan berhasil digenerate ulang.");
  };

  const copyCalendar = async () => {
    const text = filteredRows
      .map(
        (row) =>
          `${row.day}. ${row.date} | ${row.platform} | ${row.pillar} | ${row.format} | ${row.topic} | CTA: ${row.cta}`,
      )
      .join("\n");
    await navigator.clipboard.writeText(text);
    setNotice("Calendar berhasil dicopy.");
  };

  const exportCsv = () => {
    const header = [
      "Day",
      "Date",
      "Platform",
      "Pillar",
      "Format",
      "Topic",
      "Angle",
      "CTA",
      "Status",
    ];
    const body = filteredRows.map((row) =>
      [
        row.day,
        row.date,
        row.platform,
        row.pillar,
        row.format,
        row.topic,
        row.angle,
        row.cta,
        row.status,
      ]
        .map(csvEscape)
        .join(","),
    );
    const csv = [header.map(csvEscape).join(","), ...body].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "denana-30-day-facial-content-plan.csv";
    link.click();
    URL.revokeObjectURL(url);
    setNotice("CSV berhasil diexport.");
  };

  const openDetail = (row: ContentRow) => {
    const drafts = safeRead<Record<string, DraftDetail>>(
      STORAGE_KEYS.drafts,
      {},
    );
    const nextDraft = drafts[row.id] ?? buildDraft(row);
    setSelectedRow(row);
    setDraft(nextDraft);
  };

  const saveDraft = () => {
    if (!draft || !selectedRow) return;
    const drafts = safeRead<Record<string, DraftDetail>>(
      STORAGE_KEYS.drafts,
      {},
    );
    window.localStorage.setItem(
      STORAGE_KEYS.drafts,
      JSON.stringify({ ...drafts, [selectedRow.id]: draft }),
    );
    setNotice("Draft content detail tersimpan di localStorage.");
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-mark" aria-hidden="true">
          D
        </div>
        <div className="brand-copy">
          <strong>Denana Social Growth OS</strong>
          <span>Phase 1 · Organic Foundation</span>
        </div>
        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={activePage === item.key ? "active" : ""}
              type="button"
              onClick={() => setActivePage(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {notice ? <div className="notice">{notice}</div> : null}

      {activePage === "home" && (
        <main className="page page-narrow">
          <section className="hero-card">
            <p className="eyebrow">Phase 1 · Organic Foundation</p>
            <h1>Bangun fondasi konten organik DenanavBeauty Salon.</h1>
            <p>
              Prototype ini membantu tim menyimpan profil brand, merancang
              campaign awareness, dan membuat rencana konten 30 hari khusus
              Facial Treatment.
            </p>
          </section>

          <section className="status-grid">
            <StatusCard
              title="Profil Brand"
              status="Tersedia"
              description="Default DenanavBeauty Salon, fokus Facial Treatment only."
            />
            <StatusCard
              title="Rencana Campaign"
              status="Tersedia"
              description="Goal awareness untuk Instagram dan Facebook."
            />
            <StatusCard
              title="Rencana Konten"
              status={`${rows.length} Hari`}
              description="Calendar 30 hari untuk Microdermabrasion, Hydra Peel, dan totok wajah."
            />
          </section>

          <section className="card-section">
            <div className="section-heading">
              <p className="eyebrow">Langkah cepat</p>
              <h2>Mulai dari data dasar, lalu generate konten.</h2>
            </div>
            <div className="quick-grid">
              {navItems.slice(1).map((item, index) => (
                <button
                  className="quick-step"
                  key={item.key}
                  type="button"
                  onClick={() => setActivePage(item.key)}
                >
                  <span>{index + 1}</span>
                  <strong>{item.label}</strong>
                  <small>Buka halaman {item.label.toLowerCase()}.</small>
                </button>
              ))}
            </div>
          </section>

          <section className="scope-note">
            <strong>Scope note:</strong> Phase 1 tidak memakai database,
            autentikasi, atau AI API. Semua data tersimpan di localStorage dan
            seluruh konten dibatasi pada Facial Treatment: Microdermabrasion,
            Hydra Peel, dan totok wajah.
          </section>
        </main>
      )}

      {activePage === "brand" && (
        <main className="page page-narrow">
          <FormHeader
            eyebrow="Profil Brand"
            title="Editable brand form"
            description="Simpan identitas brand ke localStorage. Default value mengikuti DenanavBeauty Salon dan fokus hanya pada Facial Treatment."
          />
          <section className="form-card">
            <Field
              label="Nama Brand"
              value={brand.brandName}
              onChange={(value) => setBrand({ ...brand, brandName: value })}
            />
            <Field
              label="Jenis Bisnis"
              value={brand.businessType}
              onChange={(value) => setBrand({ ...brand, businessType: value })}
            />
            <Field
              label="Layanan Utama"
              value={brand.primaryService}
              onChange={(value) =>
                setBrand({ ...brand, primaryService: value })
              }
            />
            <Field
              label="Target Audience"
              textarea
              value={brand.audience}
              onChange={(value) => setBrand({ ...brand, audience: value })}
            />
            <Field
              label="Tone Komunikasi"
              textarea
              value={brand.tone}
              onChange={(value) => setBrand({ ...brand, tone: value })}
            />
            <Field
              label="Brand Promise"
              textarea
              value={brand.promise}
              onChange={(value) => setBrand({ ...brand, promise: value })}
            />
            <Field
              label="Catatan Scope"
              textarea
              value={brand.notes}
              onChange={(value) => setBrand({ ...brand, notes: value })}
            />
            <button
              className="primary-button"
              type="button"
              onClick={saveBrand}
            >
              Save to localStorage
            </button>
          </section>
        </main>
      )}

      {activePage === "campaign" && (
        <main className="page page-narrow">
          <FormHeader
            eyebrow="Rencana Campaign"
            title="Editable campaign form"
            description="Campaign awareness untuk Instagram dan Facebook dengan periode yang bisa diedit dan disimpan."
          />
          <section className="form-card two-column-form">
            <Field
              label="Nama Campaign"
              value={campaign.campaignName}
              onChange={(value) =>
                setCampaign({ ...campaign, campaignName: value })
              }
            />
            <Field
              label="Goal"
              value={campaign.goal}
              onChange={(value) => setCampaign({ ...campaign, goal: value })}
            />
            <Field
              label="Campaign Period Start"
              type="date"
              value={campaign.periodStart}
              onChange={(value) =>
                setCampaign({ ...campaign, periodStart: value })
              }
            />
            <Field
              label="Campaign Period End"
              type="date"
              value={campaign.periodEnd}
              onChange={(value) =>
                setCampaign({ ...campaign, periodEnd: value })
              }
            />
            <Field
              label="Platform"
              value={campaign.platforms}
              onChange={(value) =>
                setCampaign({ ...campaign, platforms: value })
              }
            />
            <Field
              label="Focus Services"
              value={campaign.focusServices}
              onChange={(value) =>
                setCampaign({ ...campaign, focusServices: value })
              }
            />
            <Field
              className="span-2"
              label="Key Message"
              textarea
              value={campaign.keyMessage}
              onChange={(value) =>
                setCampaign({ ...campaign, keyMessage: value })
              }
            />
            <button
              className="primary-button span-2"
              type="button"
              onClick={saveCampaign}
            >
              Save to localStorage
            </button>
          </section>
        </main>
      )}

      {activePage === "content" && (
        <main className="page page-wide">
          <section className="content-toolbar">
            <div>
              <p className="eyebrow">Rencana Konten</p>
              <h1>30-Day Content Plan</h1>
              <p>
                Fokus hanya pada Facial Treatment: Microdermabrasion, Hydra
                Peel, dan totok wajah.
              </p>
            </div>
            <div className="toolbar-actions">
              <button
                className="secondary-button"
                type="button"
                onClick={copyCalendar}
              >
                Copy Calendar
              </button>
              <button
                className="secondary-button"
                type="button"
                onClick={exportCsv}
              >
                Export CSV
              </button>
              <button
                className="primary-button"
                type="button"
                onClick={regenerate}
              >
                Regenerate Content
              </button>
            </div>
          </section>

          <section className="filter-card">
            <label>
              Filter Pilar
              <select
                value={pillarFilter}
                onChange={(event) => setPillarFilter(event.target.value)}
              >
                <option>Semua</option>
                {pillars.map((pillar) => (
                  <option key={pillar}>{pillar}</option>
                ))}
              </select>
            </label>
            <label>
              Filter Format
              <select
                value={formatFilter}
                onChange={(event) => setFormatFilter(event.target.value)}
              >
                <option>Semua</option>
                {formats.map((format) => (
                  <option key={format}>{format}</option>
                ))}
              </select>
            </label>
            <button
              className="secondary-button"
              type="button"
              onClick={() => saveContent()}
            >
              Save Draft to localStorage
            </button>
          </section>

          <section className="table-card">
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Platform</th>
                    <th>Pillar</th>
                    <th>Format</th>
                    <th>Topic</th>
                    <th>Angle</th>
                    <th>CTA</th>
                    <th>Status</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((row) => (
                    <tr key={row.id}>
                      <td className="day-cell">{row.day}</td>
                      <td>
                        <input
                          value={row.date}
                          onChange={(event) =>
                            updateRow(row.id, "date", event.target.value)
                          }
                        />
                      </td>
                      <td>
                        <select
                          value={row.platform}
                          onChange={(event) =>
                            updateRow(row.id, "platform", event.target.value)
                          }
                        >
                          <option>Instagram</option>
                          <option>Facebook</option>
                          <option>Instagram + Facebook</option>
                        </select>
                      </td>
                      <td>
                        <select
                          value={row.pillar}
                          onChange={(event) =>
                            updateRow(row.id, "pillar", event.target.value)
                          }
                        >
                          {pillars.map((pillar) => (
                            <option key={pillar}>{pillar}</option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select
                          value={row.format}
                          onChange={(event) =>
                            updateRow(row.id, "format", event.target.value)
                          }
                        >
                          {formats.map((format) => (
                            <option key={format}>{format}</option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <textarea
                          value={row.topic}
                          onChange={(event) =>
                            updateRow(row.id, "topic", event.target.value)
                          }
                        />
                      </td>
                      <td>
                        <textarea
                          value={row.angle}
                          onChange={(event) =>
                            updateRow(row.id, "angle", event.target.value)
                          }
                        />
                      </td>
                      <td>
                        <textarea
                          value={row.cta}
                          onChange={(event) =>
                            updateRow(row.id, "cta", event.target.value)
                          }
                        />
                      </td>
                      <td>
                        <select
                          value={row.status}
                          onChange={(event) =>
                            updateRow(row.id, "status", event.target.value)
                          }
                        >
                          <option>Draft</option>
                          <option>Siap Produksi</option>
                          <option>Perlu Review</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="mini-button"
                          type="button"
                          onClick={() => openDetail(row)}
                        >
                          Open
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      )}

      {selectedRow && draft ? (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Content detail modal"
        >
          <section className="modal-card">
            <div className="modal-header">
              <div>
                <p className="eyebrow">Content Detail</p>
                <h2>{selectedRow.topic}</h2>
              </div>
              <button
                className="icon-button"
                type="button"
                onClick={() => setSelectedRow(null)}
              >
                ×
              </button>
            </div>
            <div className="detail-grid">
              <Field
                textarea
                label="Caption"
                value={draft.caption}
                onChange={(value) => setDraft({ ...draft, caption: value })}
              />
              <Field
                textarea
                label="Short Caption"
                value={draft.shortCaption}
                onChange={(value) =>
                  setDraft({ ...draft, shortCaption: value })
                }
              />
              <Field
                textarea
                label="Video Script"
                value={draft.videoScript}
                onChange={(value) => setDraft({ ...draft, videoScript: value })}
              />
              <Field
                textarea
                label="Visual Direction"
                value={draft.visualDirection}
                onChange={(value) =>
                  setDraft({ ...draft, visualDirection: value })
                }
              />
              <Field
                textarea
                label="Overlay Text"
                value={draft.overlayText}
                onChange={(value) => setDraft({ ...draft, overlayText: value })}
              />
              <Field
                textarea
                label="Hashtags"
                value={draft.hashtags}
                onChange={(value) => setDraft({ ...draft, hashtags: value })}
              />
              <Field
                className="span-2"
                textarea
                label="Production Checklist"
                value={draft.checklist}
                onChange={(value) => setDraft({ ...draft, checklist: value })}
              />
            </div>
            <div className="modal-actions">
              <button
                className="secondary-button"
                type="button"
                onClick={() => setDraft(buildDraft(selectedRow))}
              >
                Generate Detail
              </button>
              <button
                className="primary-button"
                type="button"
                onClick={saveDraft}
              >
                Save Draft to localStorage
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}

function StatusCard({
  title,
  status,
  description,
}: {
  title: string;
  status: string;
  description: string;
}) {
  return (
    <article className="status-card">
      <span>{status}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}

function FormHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="form-header">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  textarea = false,
  type = "text",
  className = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`field ${className}`}>
      {label}
      {textarea ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </label>
  );
}
