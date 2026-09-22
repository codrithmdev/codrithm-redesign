import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (props: IconProps) => <Icon {...props}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;
export const ArrowLeft = (props: IconProps) => <Icon {...props}><path d="M19 12H5m6 6-6-6 6-6" /></Icon>;
export const ArrowUpRight = (props: IconProps) => <Icon {...props}><path d="M7 17 17 7M8 7h9v9" /></Icon>;
export const ChevronDown = (props: IconProps) => <Icon {...props}><path d="m6 9 6 6 6-6" /></Icon>;
export const ChevronUp = (props: IconProps) => <Icon {...props}><path d="m6 15 6-6 6 6" /></Icon>;
export const ChevronLeft = (props: IconProps) => <Icon {...props}><path d="m15 18-6-6 6-6" /></Icon>;
export const ChevronRight = (props: IconProps) => <Icon {...props}><path d="m9 18 6-6-6-6" /></Icon>;
export const Check = (props: IconProps) => <Icon {...props}><path d="m5 12 4 4L19 6" /></Icon>;
export const Plus = (props: IconProps) => <Icon {...props}><path d="M12 5v14M5 12h14" /></Icon>;
export const Minus = (props: IconProps) => <Icon {...props}><path d="M5 12h14" /></Icon>;
export const X = (props: IconProps) => <Icon {...props}><path d="m6 6 12 12M18 6 6 18" /></Icon>;
export const Circle = (props: IconProps) => <Icon {...props}><circle cx="12" cy="12" r="8" /></Icon>;
export const MoreHorizontal = (props: IconProps) => <Icon {...props}><path d="M6 12h.01M12 12h.01M18 12h.01" /></Icon>;
export const Search = (props: IconProps) => <Icon {...props}><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></Icon>;
export const Bell = (props: IconProps) => <Icon {...props}><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></Icon>;
export const BarChart3 = (props: IconProps) => <Icon {...props}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></Icon>;
export const Megaphone = (props: IconProps) => <Icon {...props}><path d="m4 14 13-5v10L4 14Zm13 1 3 3M7 15l1 4" /></Icon>;
export const Package = (props: IconProps) => <Icon {...props}><path d="m4 7 8-4 8 4v10l-8 4-8-4V7Zm0 0 8 4 8-4M12 11v10" /></Icon>;
export const Settings = (props: IconProps) => <Icon {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.1 2.1-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-3v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L6.6 17l.1-.1A1.7 1.7 0 0 0 7 15a1.7 1.7 0 0 0-1.5-1H5.3v-3h.2A1.7 1.7 0 0 0 7 10a1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.1-2.1.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h3v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2v3h-.2a1.7 1.7 0 0 0-1.5 1Z" /></Icon>;
export const Users = (props: IconProps) => <Icon {...props}><circle cx="9" cy="8" r="3" /><path d="M3 20v-1a6 6 0 0 1 12 0v1M17 11a3 3 0 1 0-1.5-5.6M18 20v-1a6 6 0 0 0-3-5.2" /></Icon>;
export const Activity = (props: IconProps) => <Icon {...props}><path d="M3 12h4l2-7 4 14 2-7h6" /></Icon>;
export const Sparkles = (props: IconProps) => <Icon {...props}><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3ZM19 17l.6 2.4L22 20l-2.4.6L19 23l-.6-2.4L16 20l2.4-.6L19 17Z" /></Icon>;
export const TrendingUp = (props: IconProps) => <Icon {...props}><path d="m4 16 6-6 4 4 6-7M15 7h5v5" /></Icon>;
export const GripVertical = (props: IconProps) => <Icon {...props}><path d="M9 5h.01M9 12h.01M9 19h.01M15 5h.01M15 12h.01M15 19h.01" /></Icon>;
export const PanelLeft = (props: IconProps) => <Icon {...props}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16" /></Icon>;
