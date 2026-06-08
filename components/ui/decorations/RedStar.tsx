type RedStarProps = {
  className?: string;
  size?: number;
};

export function RedStar({ className = "", size = 24 }: RedStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#C8102E"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M12 2l2.9 6.9H22l-5.8 4.2 2.2 6.9L12 15.8l-6.4 4.2 2.2-6.9L2 8.9h7.1z" />
    </svg>
  );
}
