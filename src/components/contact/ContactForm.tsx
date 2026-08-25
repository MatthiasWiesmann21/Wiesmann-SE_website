"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-2 focus:outline-brand-200";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Fallback: open the visitor's mail client with a prefilled message
    // when no form endpoint is configured (static hosting).
    if (!siteConfig.contact.formEndpoint) {
      const subject = encodeURIComponent(String(data.subject || "Project inquiry"));
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
      );
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(siteConfig.contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-900">
            {t("name")}
          </label>
          <input id="name" name="name" required placeholder={t("namePlaceholder")} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-900">
            {t("email")}
          </label>
          <input id="email" name="email" type="email" required placeholder={t("emailPlaceholder")} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-brand-900">
          {t("subject")}
        </label>
        <input id="subject" name="subject" required placeholder={t("subjectPlaceholder")} className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-900">
          {t("message")}
        </label>
        <textarea id="message" name="message" required rows={6} placeholder={t("messagePlaceholder")} className={cn(inputClass, "resize-y")} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-700/25 transition-all hover:bg-brand-800 active:scale-[0.98] disabled:opacity-60"
      >
        <Send className="size-4" />
        {status === "sending" ? t("sending") : t("send")}
      </button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-800"
        >
          <CheckCircle2 className="size-4" />
          {t("success")}
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
        >
          <AlertCircle className="size-4" />
          {t("error")}
        </motion.p>
      )}
    </form>
  );
}
