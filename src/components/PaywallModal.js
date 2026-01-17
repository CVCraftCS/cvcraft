import React, { useEffect, useRef } from "react";

export default function PaywallModal({
  open,
  reason = "template", // "template" | "export"
  onClose,
  onUnlockClick,
  onPreviewAnyway,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      // basic focus trap (keep focus inside modal)
      if (e.key === "Tab" && cardRef.current) {
        const focusables = cardRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    // focus the close button (or first focusable) on open
    setTimeout(() => {
      const el = cardRef.current?.querySelector("button[data-autofocus='1']");
      if (el) el.focus();
      else {
        const first = cardRef.current?.querySelector(
          'button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        first?.focus?.();
      }
    }, 0);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const isTemplate = reason === "template";
  const isExport = reason === "export";

  // ✅ All templates are paid now — so the template modal should not imply "only modern/compact"
  const title = isTemplate ? "Premium templates" : "Unlock export & premium";
  const subtitle = isTemplate
    ? "Unlock all recruiter-ready layouts, including Modern, Compact, Two-Column and more."
    : "Get full access for 30 days to export recruiter-ready PDFs and use premium templates.";

  const ctaLabel = "Get 30-Day Access — £9.99";

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        ref={cardRef}
        className="relative w-full max-w-lg rounded-2xl bg-slate-950 text-white ring-1 ring-white/10 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="paywall-title"
        aria-describedby="paywall-subtitle"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id="paywall-title" className="text-xl font-semibold">
                {title}
              </h3>
              <p id="paywall-subtitle" className="text-sm text-slate-300 mt-1">
                {subtitle}
              </p>
            </div>

            <button
              type="button"
              data-autofocus="1"
              onClick={onClose}
              className="text-slate-300 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <ul className="text-sm text-slate-200 space-y-2">
            <li>• All 10 premium templates</li>
            <li>• Two-column layout</li>
            <li>• Stronger headings & spacing</li>
            <li>• ATS-safe formatting</li>
            <li>• Unlimited edits for 30 days</li>
            <li>• Unlimited PDF downloads</li>
            <li>• No watermark</li>
            <li>• Free cover letter included</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {isTemplate ? (
              <button
                type="button"
                onClick={onPreviewAnyway || onClose}
                className="rounded-xl bg-white/5 text-white px-4 py-3 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
              >
                Preview anyway
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-white/5 text-white px-4 py-3 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
              >
                {isExport ? "Continue editing" : "Not now"}
              </button>
            )}

            <button
              type="button"
              onClick={onUnlockClick}
              className="rounded-xl bg-white text-slate-900 px-4 py-3 text-sm font-semibold hover:bg-slate-100"
            >
              {ctaLabel}
            </button>
          </div>

          <p className="text-xs text-slate-400">
            One payment. Full access for 30 days. No subscriptions.
          </p>
        </div>
      </div>
    </div>
  );
}
