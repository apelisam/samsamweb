"use client";

import { useEffect, useState } from "react";
import { profile, stats } from "@/app/lib/data";

const bootLines = [
  "nyota_os v0.3 — operator console",
  "initializing operator profile...",
  `operator: ${profile.name}`,
  `role: ${profile.role}`,
  "systems nominal. awaiting input_",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Avatar() {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[var(--accent-cyan)]/50 bg-[var(--bg-panel)] md:h-32 md:w-32">
      {!imgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="h-full w-full object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-mono text-2xl font-medium text-[var(--accent-cyan)] md:text-3xl">
          {initials(profile.name)}
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleLines(bootLines.length);
      setShowContent(true);
      return;
    }
    if (visibleLines < bootLines.length) {
      const t = setTimeout(() => setVisibleLines((n) => n + 1), 260);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(t);
    }
  }, [visibleLines, prefersReducedMotion]);

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] px-6 py-20 md:py-28">
      <div className="scanline-overlay" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl">
        <div className="font-mono text-[13px] leading-relaxed text-[var(--accent-cyan)] min-h-[130px]">
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="opacity-90">
              <span className="text-[var(--text-muted)]">{">"} </span>
              {line}
            </div>
          ))}
        </div>

        <div
          className={`mt-8 transition-opacity duration-700 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-start gap-5 md:gap-6">
            <Avatar />
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-amber)]/40 bg-[var(--accent-amber)]/10 px-3 py-1 font-mono text-[11px] text-[var(--accent-amber)]">
                {profile.availability}
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-2 font-mono text-sm text-[var(--accent-cyan)] md:text-base">
                {profile.role}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-base text-[var(--text-secondary)] md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.itchUrl}
              className="rounded-[var(--radius,8px)] border border-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 px-5 py-2.5 text-sm font-medium text-[var(--accent-cyan)] transition-colors hover:bg-[var(--accent-cyan)]/20"
            >
              Play Nyota Vanguard
            </a>
            <a
              href={profile.resumePdf}
              className="rounded-[var(--radius,8px)] border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)]"
            >
              Download resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-[var(--radius,8px)] px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Contact
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-[var(--bg-panel)] px-4 py-4">
                <div className="font-mono text-lg font-medium text-[var(--text-primary)] md:text-xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-[var(--text-muted)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
