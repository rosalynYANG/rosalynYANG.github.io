"use client";

import { useEffect, useState } from "react";
import "./project-toc.css";

export type TocItem = { id: string; label: string; number?: string };

export default function ProjectToc({ title, items }: { title: string; items: TocItem[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const unnamed = document.querySelectorAll<HTMLElement>(".story-hero, .story-section:has(.story-heading), .story-section:has(.launch-panel)");
    unnamed.forEach((section, index) => {
      if (!section.id && items[index]) section.id = items[index].id;
    });
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  const activeIndex = Math.max(0, items.findIndex((item) => item.id === active));
  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    setOpen(false);
  };

  return (
    <>
      <button
        className="project-toc-trigger"
        type="button"
        aria-label="打开章节目录"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span>{items[activeIndex]?.number ?? String(activeIndex + 1).padStart(2, "0")}</span>
        <i aria-hidden="true" />
        <small>{String(items.length).padStart(2, "0")}</small>
      </button>
      <button className={`project-toc-backdrop ${open ? "is-open" : ""}`} type="button" aria-label="关闭章节目录" onClick={() => setOpen(false)} />
      <aside className={`project-toc-sheet ${open ? "is-open" : ""}`} aria-hidden={!open} aria-label="项目章节目录">
        <header><div><small>PROJECT INDEX</small><h2>{title}</h2></div><button type="button" onClick={() => setOpen(false)} aria-label="关闭目录">×</button></header>
        <nav>
          {items.map((item, index) => (
            <button className={active === item.id ? "is-active" : ""} type="button" key={item.id} onClick={() => jump(item.id)}>
              <span>{item.number ?? String(index + 1).padStart(2, "0")}</span><b>{item.label}</b>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
