import React from "react";
import "./Card.css";

type Props = {
  title?: string;
  header?: React.ReactNode | null;
  children: React.ReactNode;
};

export default function Card( { title, header = null, children }: Props) {
  let body: React.ReactNode | null = null;
  let actualHeader = header;

  if (title && !header) {
    actualHeader = (
      <header>
        <h2>{title}</h2>
      </header>
    );
  }

  if (children)
    body = <section className="card-body">{children}</section>;

  return (
    <div className="dauikit-card">
      {actualHeader}
      {body}
    </div>
  );
}
