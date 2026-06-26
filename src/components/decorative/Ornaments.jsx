import { Gift } from "lucide-react";
import React from "react";

export const RANGOLI_IMG = "/rangoli.png";

/* ====== Rotating Rangoli background ====== */
export const RangoliBg = ({ className = "", opacity = 0.16, spin = true }) => (
  <img
    src={RANGOLI_IMG}
    alt=""
    aria-hidden="true"
    loading="lazy"
    className={`rangoli-bg pointer-events-none select-none ${spin ? "spin-slow" : ""} ${className}`}
    style={{ opacity }}
  />
);

/* ====== Mandala ====== */
export const Mandala = ({ className = "", color = "var(--gold)" }) => (
  <img
    src="/rangoli.png"
    alt=""
    aria-hidden="true"
    loading="lazy"
    className={`mandala pointer-events-none select-none ${className}`}
    style={{ color }}
  />
);

/* ====== Kolam / Rhythm Divider ====== */
export const KolamDivider = ({ className = "", color = "var(--gold)" }) => (
  <div
    className={`flex items-center justify-center gap-2 sm:gap-4 ${className}`}
    aria-hidden="true"
  >
    <span
      className="h-px w-8 sm:w-16 md:w-28 flex-shrink"
      style={{ background: `linear-gradient(90deg, transparent, ${color})` }}
    />

    <svg
      width="86"
      height="22"
      viewBox="0 0 86 22"
      fill="none"
      className="flex-shrink-0"
    >
      <g stroke={color} strokeWidth="1.2">
        <path d="M2 11 Q 14 -2 26 11 Q 38 24 50 11 Q 62 -2 74 11" />
       <circle cx="39" cy="13" r="4" fill={color} stroke="none" />

        <circle cx="3" cy="11" r="2.2" fill={color} stroke="none" />
        <circle cx="75" cy="11" r="2.2" fill={color} stroke="none" />
      </g>
    </svg>

    <span
      className="h-px w-8 sm:w-16 md:w-28 flex-shrink"
      style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
    />
  </div>
);


/* ====== Flame ====== */
const Flame = ({ cx, cy, scale = 1, cls = "" }) => (
  <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
    <ellipse
      className="flame-glow"
      cx="0"
      cy="-7"
      rx="7"
      ry="11"
      fill="var(--saffron)"
      opacity="0.4"
    />
    <path
      className={`flame ${cls}`}
      d="M0 4 C -6 -6 6 -10 0 -24 C -1 -14 -7 -6 0 4 Z"
      fill="var(--saffron)"
    />
    <path
      className={`flame ${cls}`}
      d="M0 2 C -3 -4 4 -7 0 -17 C -1 -10 -4 -5 0 2 Z"
      fill="#FBE3A1"
    />
  </g>
);

/* ====== Standing Temple Oil Lamp ====== */
export const TempleLamp = ({ className = "", color = "var(--gold)" }) => (
  <img src="/dia.png" alt="" aria-hidden="true" loading="lazy" className={className} style={{ color }} />
  // <svg viewBox="0 0 90 180" className={className} fill="none" aria-hidden="true">
  //   <defs>
  //     <linearGradient id="brass" x1="0" y1="0" x2="1" y2="0">
  //       <stop offset="0" stopColor="var(--bronze)" />
  //       <stop offset="0.5" stopColor="var(--gold-light)" />
  //       <stop offset="1" stopColor="var(--bronze)" />
  //     </linearGradient>
  //   </defs>
  //   <Flame cx={45} cy={30} scale={1.1} />
  //   <g fill="url(#brass)" stroke="var(--bronze)" strokeWidth="0.6">
  //     <path d="M45 8 C 41 14 49 14 45 22 C 44 17 41 14 45 8 Z" />
  //     <path d="M24 40 Q 45 30 66 40 Q 60 50 45 52 Q 30 50 24 40 Z" />
  //     <path d="M24 40 L 16 36 L 22 44 Z" />
  //     <ellipse cx="45" cy="40" rx="21" ry="5" fill="var(--gold)" />
  //     <rect x="42.5" y="52" width="5" height="62" rx="2" />
  //     <ellipse cx="45" cy="66" rx="9" ry="4" />
  //     <ellipse cx="45" cy="86" rx="11" ry="4.5" />
  //     <ellipse cx="45" cy="106" rx="9" ry="4" />
  //     <ellipse cx="45" cy="120" rx="18" ry="6" />
  //     <ellipse cx="45" cy="134" rx="27" ry="8" />
  //     <ellipse cx="45" cy="150" rx="36" ry="10" />
  //     <ellipse
  //       cx="45"
  //       cy="150"
  //       rx="36"
  //       ry="10"
  //       fill="none"
  //       stroke={color}
  //       strokeWidth="0.8"
  //     />
  //   </g>
  // </svg>
);

export const StandingLamp = TempleLamp;

/* ====== Hanging Oil Lamp ====== */
export const HangingLamp = ({ className = "", color = "var(--gold)" }) => (
  <img src="/picmix.com_1995560.gif" alt="" aria-hidden="true" loading="lazy" className={className} style={{ color }} />  
  // <svg viewBox="0 0 70 150" className={className} fill="none" aria-hidden="true">
  //   <g className="sway">
  //     <g stroke="var(--bronze)" strokeWidth="1.4" fill="none">
  //       {Array.from({ length: 7 }).map((_, i) => (
  //         <circle key={i} cx="35" cy={6 + i * 7} r="3" />
  //       ))}
  //     </g>
  //     <g fill="url(#brass2)" stroke="var(--bronze)" strokeWidth="0.6">
  //       <defs>
  //         <linearGradient id="brass2" x1="0" y1="0" x2="1" y2="0">
  //           <stop offset="0" stopColor="var(--bronze)" />
  //           <stop offset="0.5" stopColor="var(--gold-light)" />
  //           <stop offset="1" stopColor="var(--bronze)" />
  //         </linearGradient>
  //       </defs>
  //       <path d="M35 56 L 18 72 M35 56 L 52 72" stroke="var(--bronze)" strokeWidth="1.4" />
  //       <path d="M14 72 Q 35 64 56 72 Q 50 88 35 92 Q 20 88 14 72 Z" />
  //       <ellipse cx="35" cy="72" rx="21" ry="5" fill="var(--gold)" />
  //       <path d="M14 72 L 6 68 L 12 76 Z" />
  //       <path
  //         d="M22 92 L 24 104 M35 94 L 35 108 M48 92 L 46 104"
  //         stroke="var(--bronze)"
  //         strokeWidth="1.2"
  //       />
  //       <circle cx="24" cy="106" r="3" />
  //       <circle cx="35" cy="110" r="3.5" />
  //       <circle cx="46" cy="106" r="3" />
  //     </g>
  //     <Flame cx={29} cy={70} scale={0.7} cls="flame-b" />
  //     <Flame cx={35} cy={68} scale={0.9} />
  //     <Flame cx={41} cy={70} scale={0.7} cls="flame-c" />
  //   </g>
  // </svg>
);

// /* ====== Diya row ====== */
// export const DiyaRow = ({ className = "", count = 5, color = "var(--gold)" }) => {
//   const xs = Array.from({ length: count }, (_, i) => 24 + i * 38);
//   const w = 24 + (count - 1) * 38 + 24;

//   return (
//     <svg viewBox={`0 0 ${w} 44`} className={className} fill="none" aria-hidden="true">
//       {xs.map((x, i) => (
//         <g key={i}>
//           <Flame
//             cx={x}
//             cy={20}
//             scale={0.55}
//             cls={["", "flame-b", "flame-c", "flame-d", "flame-e"][i % 5]}
//           />
//           <path
//             d={`M${x - 15} 26 Q ${x} 42 ${x + 15} 26 Q ${x} 31 ${x - 15} 26 Z`}
//             fill="url(#brass-diya)"
//             stroke="var(--bronze)"
//             strokeWidth="0.6"
//           />
//           <ellipse cx={x} cy={26} rx="15" ry="3" fill={color} opacity="0.85" />
//         </g>
//       ))}
//       <defs>
//         <linearGradient id="brass-diya" x1="0" y1="0" x2="1" y2="0">
//           <stop offset="0" stopColor="var(--bronze)" />
//           <stop offset="0.5" stopColor="var(--gold-light)" />
//           <stop offset="1" stopColor="var(--bronze)" />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// };

export const DiyaRow = ({
  className = "",
  count = 5,
  color = "var(--gold)",
}) => {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      aria-hidden="true"
      style={{
        gap: "8px",
        color,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          src="/final.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          style={{
            objectFit: "contain",
          }}
        />
      ))}
    </div>
  );
};

/* ====== Lotus ornament ====== */
export const Lotus = ({ className = "", color = "var(--maroon)" }) => (
  <svg viewBox="0 0 80 50" className={className} fill="none" aria-hidden="true">
    <g stroke={color} strokeWidth="1.2" fill="none">
      <path
        d="M40 46 C 40 30 40 14 40 6 C 46 16 48 32 40 46 Z"
        fill={color}
        opacity="0.12"
      />
      <path d="M40 46 C 40 30 40 14 40 6 C 34 16 32 32 40 46 Z" />
      <path d="M40 46 C 30 34 22 24 16 18 C 28 20 38 30 40 46 Z" />
      <path d="M40 46 C 50 34 58 24 64 18 C 52 20 42 30 40 46 Z" />
      <path d="M40 46 C 26 40 14 38 4 38 C 18 30 34 36 40 46 Z" />
      <path d="M40 46 C 54 40 66 38 76 38 C 62 30 46 36 40 46 Z" />
    </g>
  </svg>
);

/* ====== Temple Arch Frame ====== */
export const TempleArchFrame = ({ children, className = "", borderColor = "var(--gold)" }) => (
  <div className={`relative ${className}`}>
    <div className="relative overflow-hidden temple-arch" style={{ border: `3px solid ${borderColor}`, boxShadow: "0 30px 60px -30px rgba(110,20,35,0.45)" }}>
      {children}
    </div>
    <div className="pointer-events-none absolute inset-[3px] temple-arch" style={{ border: `1.5px solid ${borderColor}`, opacity: 0.6 }} aria-hidden="true" />
    <svg viewBox="0 0 24 24" className="absolute left-1/2 -top-4 h-8 w-8 -translate-x-1/2" aria-hidden="true">
      <circle cx="12" cy="14" r="5" fill={borderColor} />
      <path d="M12 0 L14 8 L10 8 Z" fill={borderColor} />
    </svg>
  </div>
);

// /* ====== Temple Arch Frame fixed to match first reference ====== */
// export const TempleArchFrame = ({
//   children,
//   className = "",
//   borderColor = "#D9AE63",
// }) => {
//   const framePath = `
//     M 260 1280
//     C 205 1280 170 1244 170 1188
//     L 170 466
//     C 170 428 192 402 226 396
//     C 216 330 258 286 318 286
//     C 320 214 377 170 446 156
//     C 486 148 507 120 512 94
//     C 517 120 538 148 578 156
//     C 647 170 704 214 706 286
//     C 766 286 808 330 798 396
//     C 832 402 854 428 854 466
//     L 854 1188
//     C 854 1244 819 1280 764 1280
//     Z
//   `;

//   return (
//     <div className={`relative w-full max-w-[760px] mx-auto ${className}`}>
//       <div
//         className="pointer-events-none absolute inset-0 flex items-center justify-center"
//         aria-hidden="true"
//       >
//         <img
//           src={RANGOLI_IMG}
//           alt=""
//           className="w-[140%] max-w-none opacity-[0.09] select-none"
//           style={{
//             filter: "sepia(1) saturate(0.45) brightness(1.08)",
//           }}
//         />
//       </div>

//       <svg
//         viewBox="0 0 1024 1320"
//         className="relative z-10 block w-full h-auto overflow-visible"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <defs>
//           <clipPath id="templeArchExactClip" clipPathUnits="userSpaceOnUse">
//             <path d={framePath} />
//           </clipPath>

//           <filter id="templeSoftShadow" x="-10%" y="-10%" width="120%" height="130%">
//             <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#c89a4d" floodOpacity="0.14" />
//           </filter>
//         </defs>

//         <foreignObject
//           x="0"
//           y="0"
//           width="1024"
//           height="1320"
//           clipPath="url(#templeArchExactClip)"
//         >
//           <div
//             xmlns="http://www.w3.org/1999/xhtml"
//             style={{
//               width: "100%",
//               height: "100%",
//               overflow: "hidden",
//               display: "flex",
//               alignItems: "flex-end",
//             }}
//           >
//             <div style={{ width: "100%", height: "95%", position: "relative", top: "5%" }}>
//               {children}
//             </div>
//           </div>
//         </foreignObject>

//         <path
//           d={framePath}
//           fill="none"
//           stroke={borderColor}
//           strokeWidth="7"
//           filter="url(#templeSoftShadow)"
//         />
//       </svg>
//     </div>
//   );
// };

/* ====== Corner flourish ====== */
export const CornerFlourish = ({ className = "", color = "var(--gold)", flip = false }) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    style={{ transform: flip ? "scaleX(-1)" : "none" }}
    fill="none"
    aria-hidden="true"
  >
    <g stroke={color} strokeWidth="1" opacity="0.7">
      <path d="M4 4 C 40 8 60 28 64 64" />
      <path d="M4 18 C 30 22 46 38 50 64" />
      <circle cx="64" cy="64" r="3" fill={color} stroke="none" />
      <path d="M4 4 C 8 40 28 60 64 64" />
    </g>
  </svg>
);

/* ====== Section title ====== */
export const SectionTitle = ({ eyebrow, title, light = false, center = true }) => (
  <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
    {eyebrow && (
      <p
        className="eyebrow mb-3"
        style={{ color: light ? "var(--gold-light)" : "var(--bronze)" }}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className="font-serif-display font-semibold leading-tight text-4xl md:text-5xl"
      style={{ color: light ? "var(--ivory)" : "var(--maroon)" }}
    >
      {title}
    </h2>
    {center && <DiyaRow className="mx-auto mt-5 h-7 w-44" />}
  </div>
);
