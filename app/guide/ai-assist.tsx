"use client";

import { useEffect, useRef, useState } from "react";

import { AI_CONTEXT } from "@/lib/ai-context";
import { Icon } from "@/lib/brand";

/* ============================================================
   FYP Desk — Ask an AI bar (guide page, client component)
   Chips render from lib/ai-context.ts. Clicking a chip opens
   the assistant in a new tab and copies the FULL page context
   (plans, offer, kit, viva prep) to the clipboard — the visitor
   just pastes and asks. This is the Q4 fix: the copied context
   now describes the whole offer, not a two-line blurb.
   ============================================================ */

export default function AiAssist() {
  const toastRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function showToast(message: string) {
    setToast(message);
    toastRef.current?.classList.add("is-visible");
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      toastRef.current?.classList.remove("is-visible");
    }, 3800);
  }

  function copyText(text: string): Promise<void> {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(() => legacyCopy(text));
    }
    return legacyCopy(text);
  }

  function legacyCopy(text: string): Promise<void> {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(field);
    return ok ? Promise.resolve() : Promise.reject(new Error("copy failed"));
  }

  return (
    <section className="ai-assist" aria-labelledby="ai-assist-title">
      <div className="container">
        <h2 className="ai-assist-title" id="ai-assist-title">
          Still unsure about the flow?
        </h2>
        <p className="ai-assist-intro">
          Pick an assistant. The full context of this service — both plans,
          what is included, the guidance kit, and the viva prep — is copied to
          your clipboard, so all you do is paste and ask.
        </p>
        <div className="ai-assist-chips">
          {AI_CONTEXT.assistants.map((assistant) => (
            <button
              key={assistant.name}
              type="button"
              className="ai-chip"
              style={{ ["--chip-accent" as string]: assistant.accent }}
              aria-label={`Copy this page's context and ask ${assistant.name}`}
              onClick={() => {
                window.open(assistant.url, "_blank", "noopener,noreferrer");
                copyText(AI_CONTEXT.intro).then(() => showToast(AI_CONTEXT.toastCopied));
              }}
            >
              <Icon name="message" size={18} />
              {assistant.name}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="ai-copy-ctx"
          onClick={() => copyText(AI_CONTEXT.intro).then(() => showToast(AI_CONTEXT.toastCopiedOnly))}
        >
          Copy context
        </button>
      </div>
      <div className="ai-toast" ref={toastRef} role="status" aria-live="polite">
        {toast}
      </div>
    </section>
  );
}
