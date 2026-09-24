// import React from 'react'

// function Contact() {
//   return (
//     <div className=' bg-[#f7f5f0]/90 '>

//     </div>
//   )
// }

// export default Contact

'use client';

import React, { useState } from "react";
import { Mail,  ArrowUpRight, Copy, Check } from "lucide-react";

export default function ContactCard() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = "your.email@example.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(subject || "Project Inquiry");
    const encodedBody = encodeURIComponent(body || "Hi, let's talk about...");
    window.location.href = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* Outer Card Container */}
      <div className="bg-slate-100 border border-slate-200/80 rounded-3xl p-3 sm:p-4 shadow-md transition-shadow hover:shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          
          {/* Left Panel: Digital Business Card Face */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for opportunities
              </div>

              {/* Identity & Headline */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Your Name
              </h2>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Software Developer & IT Specialist
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Nairobi, Kenya • UTC+3
              </p>

              {/* Quick Copy Email Snippet */}
              <div className="mt-6 flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                <span className="font-mono text-slate-600 truncate mr-2">
                  {emailAddress}
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1 font-medium text-slate-700 hover:text-slate-900 transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Direct Channels
              </span>
              <div className="flex flex-wrap gap-2 mt-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 transition-all active:scale-95"
                >
                  <Mail className="w-3.5 h-3.5" />
                  GitHub
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 transition-all active:scale-95"
                >
                  <Mail className="w-3.5 h-3.5" />
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 transition-all active:scale-95"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Twitter / X
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: The Quick Mailto Trigger */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-slate-700" />
                <h3 className="font-semibold text-slate-900 text-sm">
                  Quick Message
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-5">
                Draft a prompt here. Submitting opens your default email client with everything pre-filled.
              </p>

              <form onSubmit={handleMailto} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Contract Frontend Inquiry"
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">
                    Note
                  </label>
                  <textarea
                    rows={4}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Briefly outline what you'd like to work on..."
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white text-sm font-medium py-3 hover:bg-slate-800 active:scale-[0.99] transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  Compose in Email Client
                </button>
              </form>
            </div>

            <p className="text-[11px] text-slate-400 text-center mt-4">
              Direct dispatch • No data stored on server
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}