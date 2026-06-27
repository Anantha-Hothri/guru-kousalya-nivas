import React, { useState } from "react";
import { PageHero, LuxeButton } from "../components/Shared";
import { Mandala, KolamDivider, Lotus, TempleLamp, RangoliBg } from "../components/decorative/Ornaments";
import { SITE } from "../data/mock";
import { FORMSUBMIT_URL, EMAIL_SUBJECT_PREFIX, MAPS_EMBED_URL } from "../data/contactConfig";
import { useReveal } from "../hooks/useAnim";
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube, CheckCircle2, X } from "lucide-react";

const Field = ({ label, type = "text", name, value, onChange, textarea, required }) => (
  <label className="block">
    <span className="mb-2 block text-[11px] font-medium tracking-[0.14em] uppercase" style={{ color: "var(--bronze)" }}>{label}{required && " *"}</span>
    {textarea ? (
      <textarea name={name} value={value} onChange={onChange} required={required} rows={5} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--maroon)]" style={{ border: "1px solid rgba(182,138,62,0.4)", color: "var(--ink)" }} />
    ) : (
      <input type={type} name={name} value={value} onChange={onChange} required={required} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--maroon)]" style={{ border: "1px solid rgba(182,138,62,0.4)", color: "var(--ink)" }} />
    )}
  </label>
);

const Connect = () => {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          subject: form.subject,
          message: form.message,
          _subject: `${EMAIL_SUBJECT_PREFIX} ${form.name} — Kousalya Nivas Website`,
        }),
      });

      const data = await response.json();
      if (data.success === "true" || data.success === true) {
        setSent(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 4500);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero title="Connect" breadcrumb={[{ label: "Home", path: "/" }, { label: "Connect" }]} />

      <section className="relative overflow-hidden py-20" style={{ background: "var(--ivory)" }}>
        <RangoliBg className="absolute -right-24 top-10 h-[460px] w-[460px]" opacity={0.1} />
        <div ref={ref} className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-2 lg:px-10">
          {/* Left - Send a Message Form */}
          <div data-reveal className="luxe-card rounded-2xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <Lotus className="h-6 w-12" color="var(--maroon)" />
              <h3 className="font-serif-display text-2xl font-semibold" style={{ color: "var(--maroon)" }}>Send a Message</h3>
            </div>
            {sent ? (
              <div className="flex flex-col items-center gap-3 rounded-xl px-6 py-12 text-center" style={{ background: "var(--cream)" }}>
                <CheckCircle2 size={44} style={{ color: "var(--maroon)" }} />
                <p className="font-serif-display text-2xl" style={{ color: "var(--maroon)" }}>Thank you!</p>
                <p className="text-sm" style={{ color: "var(--ink-soft)" }}>Your message has been received. I'll respond soon.</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center gap-3 rounded-xl px-6 py-12 text-center" style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.3)" }}>
                <X size={44} style={{ color: "#dc2626" }} />
                <p className="font-serif-display text-2xl" style={{ color: "#dc2626" }}>Oops!</p>
                <p className="text-sm" style={{ color: "var(--ink-soft)" }}>Something went wrong. Please try again or email us directly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" value={form.name} onChange={onChange} required />
                  <Field label="Email" type="email" name="email" value={form.email} onChange={onChange} required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" name="phone" value={form.phone} onChange={onChange} />
                  <Field label="Subject" name="subject" value={form.subject} onChange={onChange} required />
                </div>
                <Field label="Message" name="message" value={form.message} onChange={onChange} textarea required />
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-2 px-7 py-3.5 text-[12px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: "var(--maroon)", color: "var(--ivory)" }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Right - Let's Connect Info + Map */}
          <div data-reveal className="flex flex-col gap-8">
            <div className="text-center">
              <p className="eyebrow mb-3" style={{ color: "var(--bronze)" }}>Get in Touch</p>
              <h2 className="font-serif-display text-4xl font-semibold" style={{ color: "var(--maroon)" }}>Let's Connect</h2>
              <KolamDivider className="my-6" center={true} />
              <p className="mx-auto max-w-md text-base leading-relaxed text-justify" style={{ color: "var(--ink-soft)" }}>
                For performance enquiries, collaborations, workshops or media interactions, please reach out. I would be delighted to connect.
              </p>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-xl" style={{ border: "2px solid var(--gold)", boxShadow: "0 10px 30px -10px rgba(110,20,35,0.3)" }}>
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MS Natyakshetra Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-10" style={{ background: "var(--cream)" }}>
        <div className="flex justify-center"><TempleLamp className="h-16 opacity-70" /></div>
      </section>
    </div>
  );
};

export default Connect;
