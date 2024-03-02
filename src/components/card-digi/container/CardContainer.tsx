import React from "react";
import "./CardContainer.css";

type Props = {
  children: React.ReactNode;
};

export default function Card( {children }: Props) {
  return (
    <section className="dauikit-card-container">
      {children}
    </section>
  );
}
