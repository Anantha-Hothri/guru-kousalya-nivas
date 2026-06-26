import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { SITE, NAV_LINKS } from "../data/mock";
import { Mandala, KolamDivider } from "./decorative/Ornaments";

const Footer = () => {
  const quick = NAV_LINKS.slice(0, 5);
  const explore = NAV_LINKS.slice(5);

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--maroon-deep)", color: "var(--ivory)" }}>
      {/* decorative mandalas in corners */}
      <Mandala className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 opacity-[0.07]" color="var(--gold-light)" />
      <Mandala className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 opacity-[0.07]" color="var(--gold-light)" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="block -ml-4">
              <img
                src="/logo_gold.png"
                alt="Kousalya Nivas"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(251,246,236,0.72)" }}>
              {SITE.role}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: SITE.socials.instagram },
                { Icon: Facebook, href: SITE.socials.facebook },
                { Icon: Youtube, href: SITE.socials.youtube },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                  style={{ border: "1px solid var(--gold)", color: "var(--gold-light)" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Quick Links</h4>
            <ul className="space-y-3">
              {quick.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm transition-colors hover:text-[var(--gold-light)]" style={{ color: "rgba(251,246,236,0.78)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Explore</h4>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm transition-colors hover:text-[var(--gold-light)]" style={{ color: "rgba(251,246,236,0.78)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--gold-light)" }}>Connect</h4>
            <ul className="space-y-4 text-sm" style={{ color: "rgba(251,246,236,0.78)" }}>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5" style={{ color: "var(--gold-light)" }} />
                <a href={`mailto:${SITE.email}`} className="hover:text-[var(--gold-light)]">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5" style={{ color: "var(--gold-light)" }} />
                <span>{SITE.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <KolamDivider className="mt-14" color="var(--gold)" />

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-xs sm:flex-row" style={{ color: "rgba(251,246,236,0.6)" }}>
          <p>© 2026 {SITE.name}. All rights reserved.</p>
          <p className="italic font-serif-display text-sm" style={{ color: "var(--gold-light)" }}>
            Let the art we cherish be the legacy we leave behind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
