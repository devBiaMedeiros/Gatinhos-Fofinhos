import React from "react";
import type { ReactNode } from "react"

interface CardProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  foto: string;
}
export default function Card({title, children, footer, foto}: CardProps) {
  return (
    <>
      <div className="card">
        <img src={foto} alt={title} className="card-img" />
        <div className="card-body">
        <h2>{title}</h2>
        <p>{children}</p>
        {footer && <div className="card-footer">
        {footer}</div>}</div>
      </div>
    </>
  );
}