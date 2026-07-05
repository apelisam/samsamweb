import { availableFor } from "@/app/lib/data";

export default function AvailableFor() {
  return (
    <section className="border-b border-[var(--border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Available for
          </h2>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            contract &amp; freelance
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {availableFor.map((item) => (
            <div
              key={item.title}
              className="rounded-[12px] border border-[var(--border)] bg-[var(--bg-panel)] p-5"
            >
              <h3 className="text-base font-medium text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
