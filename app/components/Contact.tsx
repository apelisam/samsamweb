import { profile } from "@/app/lib/data";

export default function Contact() {
  return (
    <footer className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs text-[var(--text-muted)]">
          transmission
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
          Open to remote Unity roles &amp; contract work
        </h2>
        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          {profile.location} · {profile.phone} · usually replies within a day
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-[8px] border border-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 px-5 py-2.5 text-sm font-medium text-[var(--accent-cyan)] transition-colors hover:bg-[var(--accent-cyan)]/20"
          >
            {profile.email}
          </a>
          <a
            href={profile.githubUrl}
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-16 font-mono text-[11px] text-[var(--text-muted)]">
          nyota_os — end of transmission
        </p>
      </div>
    </footer>
  );
}
