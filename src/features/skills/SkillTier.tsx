import clsx from "clsx";
import { keySkills, type SkillTier as Tier } from "../../shared/data/cv";
import { Icon } from "../../shared/components/icons";
import { Card } from "../../shared/components/ui/Card";
import { Eyebrow } from "../../shared/components/ui/Eyebrow";

const isKey = new Set(keySkills);

interface SkillTierProps {
  tier: Tier;
  index: number;
}

/**
 * One tier as a single card of rows: group name on the left, chips on the
 * right. Rows keep every group the same width, so a 3-skill group no longer
 * leaves a half-empty card next to a 10-skill one.
 */
export const SkillTier = ({ tier, index }: SkillTierProps) => (
  <section>
    <Eyebrow rule as="h2" className="mb-3">
      <span className="text-fg-muted">{String(index + 1).padStart(2, "0")}</span>
      {tier.label}
      {tier.note && <span className="normal-case tracking-normal">· {tier.note}</span>}
    </Eyebrow>

    <Card>
      <ul className="divide-y divide-border-soft">
        {tier.groups.map(group => (
          <li
            key={group.category}
            className="grid gap-3 px-5 py-4 sm:px-6 md:grid-cols-[17rem_minmax(0,1fr)] md:gap-6"
          >
            <h3 className="flex items-center gap-2.5 self-start text-body font-medium text-fg md:pt-1">
              <Icon name={group.icon} className="h-4 w-4 shrink-0 text-accent-fg" />
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.skills.map(skill => (
                <li
                  key={skill}
                  className={clsx(
                    "rounded-chip border px-2.5 py-1 font-mono text-code",
                    isKey.has(skill)
                      ? "border-accent/40 bg-accent-soft text-accent-fg"
                      : "border-border bg-surface-2 text-fg-muted",
                  )}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Card>
  </section>
);
