interface BrandmarkProps {
  width: number
  height: number
  variant: 'color' | 'white'
  opacity?: number
  direction?: 'ltr' | 'rtl'
}

const COLOR_FILLS = [
  ['#6BA8C4', '#4C90B7', '#326B8A', '#1A2E4A'],
  ['#8BBFD4', '#6BA8C4', '#4C90B7', '#326B8A'],
  ['#AAD1E3', '#8BBFD4', '#6BA8C4', '#4C90B7'],
  ['#C8E0EE', '#AAD1E3', '#8BBFD4', '#6BA8C4'],
]

const WHITE_LTR = [
  [0.50, 0.45, 0.40, 0.35],
  [0.45, 0.40, 0.35, 0.30],
  [0.40, 0.35, 0.30, 0.25],
  [0.35, 0.30, 0.25, 0.20],
]

const WHITE_RTL = [
  [0.35, 0.45, 0.55, 0.65],
  [0.30, 0.35, 0.45, 0.55],
  [0.25, 0.30, 0.35, 0.45],
  [0.20, 0.25, 0.30, 0.35],
]

export default function Brandmark({ width, height, variant, opacity = 1, direction = 'ltr' }: BrandmarkProps) {
  const positions = [5, 55, 105, 155]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={opacity}
      aria-hidden="true"
    >
      {positions.map((y, row) =>
        positions.map((x, col) => {
          const fill =
            variant === 'color'
              ? COLOR_FILLS[row][col]
              : `rgba(255,255,255,${(direction === 'rtl' ? WHITE_RTL : WHITE_LTR)[row][col]})`
          return <rect key={`${row}-${col}`} x={x} y={y} width={40} height={40} rx={6} fill={fill} />
        })
      )}
    </svg>
  )
}
