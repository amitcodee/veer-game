"use client";

import { useEffect } from "react";

const filters = [
  () => true,
  (title: string) => title.includes("Win Go"),
  (title: string) => title.includes("Aviator"),
  (title: string) => title.includes("Lottery"),
  (title: string) => title.includes("Slots"),
  (title: string) => /Plinko|Limbo|Poker/.test(title),
];

export default function GamesCategoryTabs() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("#games");
    if (!section) return;
    const tabs = Array.from(section.querySelectorAll<HTMLElement>(".cat-pill"));
    const cards = Array.from(section.querySelectorAll<HTMLElement>(".game-card"));
    const choose = (index: number) => {
      tabs.forEach((tab, tabIndex) => { const selected = tabIndex === index; tab.classList.toggle("active", selected); tab.setAttribute("aria-selected", String(selected)); tab.setAttribute("tabindex", selected ? "0" : "-1"); });
      cards.forEach((card) => { const title = card.querySelector(".game-card-title")?.textContent ?? ""; card.hidden = !filters[index](title); });
    };
    const listeners = tabs.map((tab, index) => {
      tab.setAttribute("role", "tab"); tab.setAttribute("tabindex", index === 0 ? "0" : "-1"); tab.setAttribute("aria-selected", String(index === 0));
      const onClick = () => choose(index);
      const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); choose(index); tab.focus(); } };
      tab.addEventListener("click", onClick); tab.addEventListener("keydown", onKeyDown);
      return () => { tab.removeEventListener("click", onClick); tab.removeEventListener("keydown", onKeyDown); };
    });
    return () => listeners.forEach((remove) => remove());
  }, []);
  return null;
}
