import type { SectionProps } from "./types";

export const Section = ({ children }: SectionProps) => {
  return (
    <section className="text-center py-16 bg-white even:bg-neutral-100 dark:bg-black dark:even:bg-neutral-900 dark:text-neutral-300 transition-colors">
      {children}
    </section>
  );
};
