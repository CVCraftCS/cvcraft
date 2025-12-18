import React from "react";

export default function PaywallModal({
  open,
  reason = "template",
  onClose,
  onUnlockClick,
  onPreviewAnyway,
}) {
  if (!open) return null;

  const title = reason === "template" ? "Recruiter-ready layouts" : "Unlock your CV";
  const subtitle =
    reason === "template"
      ? "Modern and Compact templates improve readability and layout balance."
      : "Unlock Pro to export a recruiter-ready PDF with premium layout and typography.";

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
        aria-label="Close modal"
      />

      {/* Card */}
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-950 text-white ring-1 ring-white/10 shadow-2xl">
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-slate-300 mt-1">{subtitle}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-300 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <ul className="text-sm text-slate-200 space-y-2">
            <li>• Modern & Compact templates</li>
            <li>• Two-column layout</li>
            <li>• Stronger headings</li>
            <li>• ATS-safe formatting</li>
            <li>• Unlimited edits</li>
            <li>• No watermark</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {reason === "template" ? (
              <button
                type="button"
                onClick={onPreviewAnyway}
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
                Continue editing
              </button>
            )}

            <button
              type="button"
              onClick={onUnlockClick}
              className="rounded-xl bg-white text-slate-900 px-4 py-3 text-sm font-semibold hover:bg-slate-100"
            >
              Unlock Pro CV — £4.99
            </button>
          </div>

          <p className="text-xs text-slate-400">
            One-time unlock on this device. No account required.
          </p>
        </div>
      </div>
    </div>
  );
}
