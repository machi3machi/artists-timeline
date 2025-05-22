declare module 'react-vertical-timeline-component' {
  import { ReactNode } from 'react';

  export interface VerticalTimelineElementProps {
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string | ReactNode;
    icon?: ReactNode;
    iconStyle?: React.CSSProperties;
    iconOnClick?: () => void;
    onTimelineElementClick?: () => void;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    dateClassName?: string;
    visible?: boolean;
  }

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: '1-column' | '1-column-left' | '1-column-right' | '2-columns';
    lineColor?: string;
    style?: React.CSSProperties;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
} 