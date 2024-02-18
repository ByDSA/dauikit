import React from "react";
import "./Card.css";

type Props = {
  header?: React.ReactNode | string | null;
  children: React.ReactNode;
};

export default function Card( { header = null, children }: Props) {
  let body: React.ReactNode | null = null;
  const headerContent = (() => {
    if (typeof header === "string")
      return <h2>{header}</h2>;

    return header;
  } )();
  const actualHeader = headerContent
    ? <header>
      {headerContent}
    </header>
    : null;

  if (children)
    body = <article>{children}</article>;

  return (
    <section className="dauikit-card">
      {actualHeader}
      {body}
    </section>
  );
}
