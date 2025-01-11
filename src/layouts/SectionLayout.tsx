import { FC, ReactNode } from "react";

const SectionLayout: FC<{ children?: ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <section className="container space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
};

export default SectionLayout;
