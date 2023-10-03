export default function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <path
        width={22}
        height={22}
        d="M1 10.449a10.544 10.544 0 0019.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 001 10.449z"
        fill="none"
        strokeLinecap="round"
        strokeWidth="1.5"
        className={className}
      />
    </svg>
  );
}
