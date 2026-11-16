import { Typography, type TextTokenTypes } from "./Typography";

export interface CardProps {
  icon: string;
  title?: string;
  description?: string;
  styleOf?: TextTokenTypes;
  href?: string;
  accessibleName?: string;
}

export function Card({
  icon,
  title,
  description,
  styleOf,
  href = "#",
  accessibleName,
}: CardProps) {
  return (
    <article className={`card base-4 ${accessibleName ? "center" : ""}`}>
      {title && (
        <div className="flex">
          <img src={icon} alt={title} width="24" height="24" />

          <a href={href} className={`${styleOf} card-link base-text-style`}>
            <span>{title}</span>
          </a>
        </div>
      )}

      {accessibleName && (
        <>
          <img src={icon} alt={accessibleName} width="24" height="24" />
          <a href={href} className="visually-hidden">
            <span>{accessibleName}</span>
          </a>
        </>
      )}

      {description && (
        <Typography styleOf="body-xsmall">{description}</Typography>
      )}
    </article>
  );
}
