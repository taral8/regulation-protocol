"use client";

import { useState } from "react";

interface LeadMagnetFormProps {
  buttonText?: string;
  source?: string;
}

export function LeadMagnetForm({
  buttonText = "Get Free Access",
  source = "lead-magnet",
}: LeadMagnetFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
    } catch {
      // silent fail in production
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-lg font-serif text-primary-900 font-semibold">
          Check your inbox.
        </p>
        <p className="mt-2 text-muted text-sm">
          Your resource is on its way. Check your email (and spam folder, just
          in case).
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <label htmlFor={`email-${source}`} className="sr-only">
        Email address
      </label>
      <input
        id={`email-${source}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg border border-stone-200 bg-white text-primary-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-lg bg-gold-500 text-primary-900 font-medium hover:bg-gold-600 hover:shadow-lg transition-all duration-300 text-sm whitespace-nowrap"
      >
        {buttonText}
      </button>
    </form>
  );
}
