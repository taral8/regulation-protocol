"use client";

import { useState } from "react";

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
    obstacle: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // silent fail
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto bg-gold-200/30 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-gold-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <p className="text-xl font-serif text-primary-900 font-semibold">
          Application received.
        </p>
        <p className="mt-2 text-muted">
          I&apos;ll personally review your application and respond within 48
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="app-name"
          className="block text-sm font-medium text-primary-900 mb-1"
        >
          Name
        </label>
        <input
          id="app-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-primary-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label
          htmlFor="app-email"
          className="block text-sm font-medium text-primary-900 mb-1"
        >
          Email
        </label>
        <input
          id="app-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-primary-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="app-goal"
          className="block text-sm font-medium text-primary-900 mb-1"
        >
          What&apos;s your primary goal?
        </label>
        <textarea
          id="app-goal"
          required
          rows={3}
          value={formData.goal}
          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-primary-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm resize-none"
          placeholder="What change are you seeking?"
        />
      </div>
      <div>
        <label
          htmlFor="app-obstacle"
          className="block text-sm font-medium text-primary-900 mb-1"
        >
          What&apos;s your biggest obstacle right now?
        </label>
        <textarea
          id="app-obstacle"
          required
          rows={3}
          value={formData.obstacle}
          onChange={(e) =>
            setFormData({ ...formData, obstacle: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white text-primary-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm resize-none"
          placeholder="What's keeping you stuck?"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg bg-gold-500 text-primary-900 font-medium hover:bg-gold-600 hover:shadow-lg transition-all duration-300 text-sm"
      >
        Submit Application
      </button>
    </form>
  );
}
