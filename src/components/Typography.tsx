export type TextTokenTypes =
  | "headline-one"
  | "headline-two"
  | "headline-three"
  | "headline-four"
  | "body-small"
  | "body-xsmall"
  | "body-secondary"
  | "body";

export interface TypographyProps {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "ul" | "li" | "span";
  children: React.ReactNode;
  styleOf?: TextTokenTypes;
}

export function Typography(props: TypographyProps) {
  const { as, children, styleOf = "body" } = props;
  const Element = as || "p";

  return <Element className={`base-text-style ${styleOf}`}>{children}</Element>;
}
