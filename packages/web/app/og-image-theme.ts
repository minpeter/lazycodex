export const OG_SIZE = { width: 1200, height: 630 } as const

export const OG_PALETTE = {
  surfaceBase: "#0a0a0a",
  cardBase: "#0E1115",
  brandCore: "#008385",
  brandMid: "#006668",
  brandOuter: "#004d4e",
  textPrimary: "#ffffff",
  textSecondary: "#99A1AF",
  textSoft: "#E4FFFF",
  textMuted: "rgba(255, 255, 255, 0.72)",
  accentCyan: "#87F0F2",
  accentGlow: "#ABF5F7",
  border: "rgba(255, 255, 255, 0.08)",
} as const

export const OG_GRADIENTS = {
  base: `radial-gradient(120% 100% at 60% 65%, ${OG_PALETTE.brandCore} 0%, ${OG_PALETTE.brandMid} 35%, ${OG_PALETTE.brandOuter} 70%, ${OG_PALETTE.surfaceBase} 100%)`,
  beam:
    "radial-gradient(55% 55% at 38% -8%, rgba(179,254,255,0.62) 0%, rgba(135,240,242,0.22) 35%, rgba(255,255,255,0) 65%), " +
    "radial-gradient(32% 28% at 55% -5%, rgba(171,245,247,0.42) 0%, rgba(255,255,255,0) 70%)",
  sheen:
    "linear-gradient(118deg, transparent 18%, rgba(179,254,255,0.16) 26%, rgba(179,254,255,0.30) 30%, rgba(179,254,255,0.12) 35%, transparent 45%), " +
    "linear-gradient(112deg, transparent 8%, rgba(135,240,242,0.12) 15%, transparent 28%)",
  pools:
    "radial-gradient(55% 50% at 8% 95%, rgba(0,131,133,0.26), transparent 70%), " +
    "radial-gradient(45% 45% at 95% 40%, rgba(135,240,242,0.20), transparent 70%)",
} as const
