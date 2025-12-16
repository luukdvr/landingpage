export function Logo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 10L80 50H65V90H35V50H20L50 10Z"
        fill="#ea580c"
        stroke="#dc2626"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}
