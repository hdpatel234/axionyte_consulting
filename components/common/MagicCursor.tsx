"use client";

import { useEffect, useRef } from "react";

export default function MagicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if (
      typeof window === "undefined" ||
      "ontouchstart" in window ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const cursor = cursorRef.current;
    const cursorText = textRef.current;
    if (!cursor || !cursorText) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isVisible = false;
    let animId: number;

    const ease = 0.2; // Smooth follow lerp factor

    const render = () => {
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursor.classList.add("-visible");
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Handle [data-cursor] (e.g., data-cursor="-opaque")
      const cursorTarget = target.closest<HTMLElement>("[data-cursor]");
      if (cursorTarget) {
        const cursorAttr = cursorTarget.getAttribute("data-cursor");
        if (cursorAttr) {
          const stateClass = cursorAttr.startsWith("-") ? cursorAttr : `-${cursorAttr}`;
          cursor.classList.add(stateClass);
        }
      } else {
        cursor.classList.remove("-opaque", "-exclusion", "-inverse");
      }

      // Handle [data-cursor-text] (e.g., data-cursor-text="Play")
      const textTarget = target.closest<HTMLElement>("[data-cursor-text]");
      if (textTarget) {
        const textValue = textTarget.getAttribute("data-cursor-text");
        if (textValue) {
          cursorText.textContent = textValue;
          cursor.classList.add("-text");
        }
      } else {
        cursor.classList.remove("-text");
        cursorText.textContent = "";
      }

      // Handle standard clickable elements (a, button, inputs)
      const isPointer = target.closest(
        "a, button, input, textarea, select, [role='button'], .clickable, .slicknav_btn"
      );
      if (isPointer && !cursorTarget) {
        cursor.classList.add("-pointer");
      } else {
        cursor.classList.remove("-pointer");
      }
    };

    const onMouseDown = () => {
      cursor.classList.add("-active");
    };

    const onMouseUp = () => {
      cursor.classList.remove("-active");
    };

    const onMouseLeave = () => {
      isVisible = false;
      cursor.classList.remove("-visible");
    };

    const onMouseEnter = () => {
      isVisible = true;
      cursor.classList.add("-visible");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cb-cursor"
      style={{
        zIndex: 999999,
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      aria-hidden="true"
    >
      <div ref={textRef} className="cb-cursor-text" />
    </div>
  );
}
