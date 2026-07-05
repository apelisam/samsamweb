import { deployments } from "@/app/lib/data";

export default function Deployments() {
  return (
    <section id="deployments" className="border-b border-[var(--border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Deployment log
          </h2>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            experience
          </span>
        </div>

        <div className="space-y-8">
          {deployments.map((d) => (
            <article
              key={d.id}
              className="relative border-l border-[var(--border)] pl-6"
            >
              <div
                className="absolute -left-[3.5px] top-1.5 h-[7px] w-[7px] rounded-full bg-[var(--accent-cyan)]"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-[var(--accent-cyan)]">
                  {d.id}
                </span>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {d.period}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-medium text-[var(--text-primary)]">
                {d.title}
              </h3>
              <p className="font-mono text-xs text-[var(--text-secondary)]">
                {d.org}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
                {d.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border-strong)] px-2.5 py-1 text-[11px] text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
