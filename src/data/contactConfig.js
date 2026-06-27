// Contact form configuration.
// ─────────────────────────────────────────────────────────────────
// CONTACT_EMAIL  — where form submissions are delivered.
//   Changing this triggers a one-time verification email to the new
//   address on the first submission (click "Activate Form" in it).
//
// NOTE: The publicly displayed email in the footer/site is set
//   separately via SITE.email in src/data/mock.js. Update both if
//   you want them to stay in sync.
// ─────────────────────────────────────────────────────────────────

export const CONTACT_EMAIL = "msnatyalaya@gmail.com";

export const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export const EMAIL_SUBJECT_PREFIX = "New message from";

export const EMAIL_RECIPIENT_NAME = "Guru Kousalya Nivas";

// Google Maps embed URL for the Connect page.
// To update: go to Google Maps → search the location → Share → Embed a map → copy the src URL.
export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6506876234584!2d77.7092988!3d13.001844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae133386325047%3A0xa8b3b426b70ff9af!2sms%20natyakshetra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";
