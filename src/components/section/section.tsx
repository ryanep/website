import type { SectionProps } from "./types";

export const Section = ({ children }: SectionProps) => {
  return (
    <section className="bg-white py-16 text-center transition-colors even:bg-neutral-100 dark:bg-black dark:text-neutral-300 dark:even:bg-neutral-900">
      {children}
    </section>
  );
};
