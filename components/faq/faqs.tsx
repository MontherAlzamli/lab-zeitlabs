export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqsProps {
  items?: FaqItem[];
  className?: string;
}

export function Faqs(_props: FaqsProps) {
  return null;
}
