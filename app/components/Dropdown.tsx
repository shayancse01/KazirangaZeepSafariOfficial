"use client";

import { useEffect, useId, useRef, useState } from "react";

type DropdownProps = {
  name: string;
  options: string[];
  defaultValue?: string;
  ariaLabel: string;
};

export function Dropdown({ name, options, defaultValue, ariaLabel }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? options[0] ?? "");
  const [highlight, setHighlight] = useState(() =>
    Math.max(
      0,
      options.indexOf(defaultValue ?? options[0] ?? ""),
    ),
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function choose(next: string) {
    setValue(next);
    setHighlight(options.indexOf(next));
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setHighlight(Math.max(0, options.indexOf(value)));
      setOpen(true);
      return;
    }
    if (!open) return;
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) =>
        e.key === "ArrowDown"
          ? (h + 1) % options.length
          : (h - 1 + options.length) % options.length,
      );
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(options[highlight] ?? value);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} onKeyDown={onKeyDown} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        ref={buttonRef}
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between gap-2 rounded-xl border bg-transparent px-3.5 py-2.5 text-left font-medium outline-none transition-transform duration-150 ease-out active:scale-[0.96] ${
          open
            ? "border-[#FFF200] bg-[#FFF200]/10"
            : "border-[#FFF200]/30 hover:bg-[#FFF200]/10 focus:border-[#FFF200]"
        }`}
      >
        <span className="truncate">{value}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden
          className={`size-4 shrink-0 transition-transform duration-150 ease-out ${
            open ? "rotate-180" : ""
          }`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={ariaLabel}
          style={{ animationDuration: "150ms" }}
          className="absolute inset-x-0 top-[calc(100%+6px)] z-30 animate-fade-up rounded-2xl bg-[#0B2E12] p-1.5 text-[#FFF200] shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12),0px_8px_20px_0px_oklch(0_0_0/0.16)]"
        >
          {options.map((opt, i) => {
            const selected = opt === value;
            const hot = i === highlight;
            return (
              <li
                key={opt}
                role="option"
                aria-selected={selected}
                onClick={() => choose(opt)}
                onMouseEnter={() => setHighlight(i)}
                className={`flex cursor-pointer items-center justify-between gap-2 rounded-[10px] px-3 py-2 text-[14px] font-semibold transition-transform duration-150 ease-out active:scale-[0.98] ${
                  selected
                    ? "bg-[#FFF200]/15"
                    : hot
                      ? "translate-x-0.5 bg-[#FFF200]/10"
                      : "hover:translate-x-0.5 hover:bg-[#FFF200]/10"
                }`}
              >
                <span className="truncate">{opt}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                  className={`size-4 shrink-0 transition-all duration-150 ease-out ${
                    selected
                      ? "scale-100 opacity-100 blur-0"
                      : "scale-[0.25] opacity-0 blur-[4px]"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5 13 4 4L19 7"
                  />
                </svg>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
