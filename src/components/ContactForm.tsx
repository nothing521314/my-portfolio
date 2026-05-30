"use client";

import { Translation } from "@/locales/types";
import { AlertCircle, CheckCircle, Loader, Send } from "lucide-react";
import React, { useState } from "react";

interface ContactFormProps {
  dict: Translation["contact"]["form"];
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="p-10 bg-slate-900/45 border border-white/5 rounded-3xl w-full glass-card">
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center text-center py-10 px-2.5 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
            <CheckCircle className="text-emerald-400" size={48} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2.5">
            {dict.successTitle}
          </h3>
          <p className="text-sm text-gray-400 max-w-[320px] leading-relaxed">
            {dict.successDesc}
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="btn btn-secondary mt-4"
          >
            {dict.btnSuccessBack}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[13px] font-semibold text-gray-400 tracking-wider"
            >
              {dict.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder={dict.namePlaceholder}
              className="bg-white/2 border border-white/6 rounded-xl p-3 px-4 text-sm text-white transition-all outline-none focus:border-indigo-400 focus:bg-white/4 focus:shadow-[0_0_15px_-3px_rgba(129,140,248,0.15)] placeholder:text-gray-600"
              required
              disabled={status === "loading"}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[13px] font-semibold text-gray-400 tracking-wider"
            >
              {dict.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder={dict.emailPlaceholder}
              className="bg-white/2 border border-white/6 rounded-xl p-3 px-4 text-sm text-white transition-all outline-none focus:border-indigo-400 focus:bg-white/4 focus:shadow-[0_0_15px_-3px_rgba(129,140,248,0.15)] placeholder:text-gray-600"
              required
              disabled={status === "loading"}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-[13px] font-semibold text-gray-400 tracking-wider"
            >
              {dict.subjectLabel}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              placeholder={dict.subjectPlaceholder}
              className="bg-white/2 border border-white/6 rounded-xl p-3 px-4 text-sm text-white transition-all outline-none focus:border-indigo-400 focus:bg-white/4 focus:shadow-[0_0_15px_-3px_rgba(129,140,248,0.15)] placeholder:text-gray-600"
              disabled={status === "loading"}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[13px] font-semibold text-gray-400 tracking-wider"
            >
              {dict.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder={dict.messagePlaceholder}
              className="bg-white/2 border border-white/6 rounded-xl p-3 px-4 text-sm text-white transition-all outline-none focus:border-indigo-400 focus:bg-white/4 focus:shadow-[0_0_15px_-3px_rgba(129,140,248,0.15)] resize-y min-h-[100px] placeholder:text-gray-600"
              rows={5}
              required
              disabled={status === "loading"}
            />
          </div>

          {status === "error" && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-[13px] flex items-center gap-2">
              <AlertCircle size={16} />
              <span>{dict.errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full h-12"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader className="animate-spin" size={18} /> {dict.btnSending}
              </>
            ) : (
              <>
                <Send size={18} /> {dict.btnSend}
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
