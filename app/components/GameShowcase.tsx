import { project } from "@/app/lib/data";
import GameCover from "./GameCover";

export default function GameShowcase() {
  return (
    <section
      id="build-log"
      className="border-b border-[var(--border)] px-6 py-20"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Build log
          </h2>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            shipped work
          </span>
        </div>

        <div className="overflow-hidden rounded-[12px] border border-[var(--border)] bg-[var(--bg-panel)]">
          <div className="aspect-[2/1] w-full">
            <GameCover />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-medium text-[var(--text-primary)]">
                {project.name}
              </h3>
              <span className="rounded-full border border-[var(--accent-amber)]/40 bg-[var(--accent-amber)]/10 px-3 py-1 font-mono text-[11px] text-[var(--accent-amber)]">
                {project.status}
              </span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href={project.playUrl}
                className="rounded-[8px] border border-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 px-4 py-2 text-sm font-medium text-[var(--accent-cyan)] transition-colors hover:bg-[var(--accent-cyan)]/20"
              >
                Play on itch.io
              </a>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--border-strong)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
