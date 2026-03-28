import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({ label, title, description, align = "center", className }: SectionHeadingProps) => {
  return (
    <div className={cn(align === "center" ? "text-center mx-auto" : "text-left", "max-w-3xl mb-12 md:mb-16", className)}>
      {label && <p className="label-sm mb-4 text-accent">{label}</p>}
      <h2 className="heading-lg mb-4">{title}</h2>
      {description && <p className="body-lg prose-width mx-auto">{description}</p>}
    </div>
  );
};

export default SectionHeading;
