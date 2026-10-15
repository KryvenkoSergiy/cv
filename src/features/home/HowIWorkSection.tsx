import { howIWork } from "../../shared/data/cv";

export const HowIWorkSection = () => (
  <section data-scene className="border-t border-border py-section">
    <div className="mx-auto max-w-5xl">
      <div className="mb-10">
        <span aria-hidden className="mb-5 block h-px w-6 bg-accent" />
        <h2 className="mb-1.5 text-h2 text-fg">How I work</h2>
        <p className="text-small text-fg-muted">From the problem to a measured result</p>
      </div>

      <ol className="stagger grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {howIWork.map((step, i) => (
          <li
            key={step.title}
            className="group bg-surface-1 p-5 transition-colors duration-[var(--dur-fast)] hover:bg-surface-2"
          >
            <span className="font-mono text-label text-accent-fg">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 mb-1.5 text-h3 text-fg">{step.title}</h3>
            <p className="text-small text-fg-muted">{step.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
