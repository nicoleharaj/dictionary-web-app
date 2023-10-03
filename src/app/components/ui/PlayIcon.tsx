export default function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
    >
      <g fillRule="evenodd" className="group">
        <circle
          cx="37.5"
          cy="37.5"
          r="37.5"
          className="fill-purple/25 transition-colors group-hover:fill-purple"
        />
        <path
          d="M29 27v21l21-10.5z"
          className="fill-purple transition-colors group-hover:fill-white"
        />
      </g>
    </svg>
  );
}
