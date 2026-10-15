import { now } from "../../shared/data/cv";
import { Card } from "../../shared/components/ui/Card";
import { Icon } from "../../shared/components/icons";

export const NowSection = () => (
  <section data-scene className="border-t border-border py-section">
    <div className="mx-auto max-w-5xl">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span aria-hidden className="mb-5 block h-px w-6 bg-accent" />
          <h2 className="mb-1.5 text-h2 text-fg">Now</h2>
          <p className="text-small text-fg-muted">What I'm building and exploring</p>
        </div>
        <span className="inline-flex items-center gap-2 font-mono text-label text-fg-dim uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-live" />
          Updated {now.updated}
        </span>
      </div>

      <div className="stagger grid gap-5 md:grid-cols-2">
        {now.items.map(item => (
          <Card key={item.title} interactive className="flex flex-col gap-4 p-6">
            <span className="grid h-9 w-9 place-items-center rounded-control border border-accent/25 bg-accent-soft text-accent-fg">
              <Icon name={item.icon} className="h-4 w-4" />
            </span>
            <div>
              <h3 className="mb-1.5 text-h3 text-fg">{item.title}</h3>
              <p className="text-small text-fg-muted">{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
