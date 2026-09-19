import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
  id?: string;
};

export function Container({
  children,
  className,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[84rem]", className)}>
      {children}
    </Tag>
  );
}
