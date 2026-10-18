export default function Icon({ name = "arrow", size = 20, ...props }) {
  const paths = {
    arrow: <path d="M5 12h14M12 5l7 7-7 7" />,
    external: <path d="M7 17 17 7M7 7h10v10" />,
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="m8 12-2 9 6-3 6 3-2-9" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7.3a5.6 5.6 0 0 0-1.5-3.9 5.2 5.2 0 0 0-.1-3.8S18 .8 15 2.8a13.4 13.4 0 0 0-7 0C5 .8 3.8 1.3 3.8 1.3a5.2 5.2 0 0 0-.1 3.8A5.6 5.6 0 0 0 2.2 9c0 5.7 3.5 6.9 6.8 7.3A3.5 3.5 0 0 0 8 19v3" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
