import type { JSX } from "react"

interface OgBrandMarkProps {
  readonly fill: string
  readonly stroke: string
}

export function OgBrandMark({ fill, stroke }: OgBrandMarkProps): JSX.Element {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5.2 14.6C4.1 10.3 8 4.8 12.6 5 17 5.2 20 8.8 19.4 13.2 18.8 17.6 14.8 20 10.8 19.4 7.6 18.9 6.1 17.4 5.2 14.6Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.3"
      />
      <path
        d="M9.2 11.4 11.6 13.2 9.4 15M13 15.4H15.4"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
