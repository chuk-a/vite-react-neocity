import { useState } from "react";

// Set this in a .env file at project root as VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/xxxxxx"
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    if (!FORM_ENDPOINT) {
      setStatus("error");
      setError("Form endpoint is not configured. Set VITE_FORMSPREE_ENDPOINT in .env.");
      return;
    }

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("message", form.message);

      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" }});
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setError("Submission failed. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold font-display text-brand-700">Contact Us</h2>
          <p className="mt-1 text-gray-600">Get a custom quote for your project.</p>

          {status === "success" ? (
            <div className="mt-4 rounded bg-green-50 border border-green-200 text-green-700 p-3">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === "error" && (
                <div className="rounded bg-red-50 border border-red-200 text-red-700 p-3">
                  {error}
                </div>
              )}

              <button type="submit" className="btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {!FORM_ENDPOINT && (
                <p className="text-xs text-gray-500">
                  Tip: Set VITE_FORMSPREE_ENDPOINT in a .env file to enable submissions.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}