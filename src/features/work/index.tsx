import { PageHeader } from "../../shared/components/ui/PageHeader";
import { Card } from "../../shared/components/ui/Card";
import { portfolio } from "../../shared/data/cv";

export default function Work() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl pb-section">
      <PageHeader
        eyebrow="Portfolio"
        title="Selected"
        titleHighlight="Work"
        subtitle="Live demo sites: how I build UI, not just where."
      />

      <ul className="stagger grid gap-6 md:grid-cols-2">
        {portfolio.map(item => (
          <li key={item.id}>
            <Card interactive className="flex h-full flex-col overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}previews/${item.id}.webp`}
                alt=""
                width={1200}
                height={502}
                loading="lazy"
                decoding="async"
                className="aspect-[1200/502] w-full bg-surface-2 object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h2 className="mb-2 text-h3 text-fg">{item.title}</h2>
                <p className="mb-5 text-body text-fg-muted">{item.summary}</p>
                <ul className="mb-6 flex flex-wrap gap-1.5" aria-label="Stack">
                  {item.stack.map(tech => (
                    <li
                      key={tech}
                      className="rounded-chip border border-border bg-surface-2 px-2 py-0.5 font-mono text-code text-fg-dim"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={item.url}
                  className="mt-auto self-start rounded-control bg-accent px-5 py-2.5 font-mono text-label text-accent-ink uppercase transition-colors duration-[var(--dur-fast)] hover:bg-accent-hover"
                >
                  Open demo
                </a>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
