import { skills, education } from "@/app/lib/data";

export default function Skills() {
  return (
    <section className="border-b border-[var(--border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Systems &amp; skills
          </h2>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            capabilities
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-[12px] border border-[var(--border)] bg-[var(--bg-panel)] p-5"
            >
              <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--accent-cyan)]">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[var(--text-secondary)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-2 rounded-[12px] border border-[var(--border)] bg-[var(--bg-panel)] p-5">
          <span className="font-mono text-xs uppercase tracking-wide text-[var(--accent-amber)]">
            education
          </span>
          <span className="text-sm text-[var(--text-primary)]">
            {education.degree}
          </span>
          <span className="text-sm text-[var(--text-muted)]">
            — {education.school}, {education.period}
          </span>
        </div>
      </div>
    </section>
  );
}

