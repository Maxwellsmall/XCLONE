import StaticLayout from "../Static/StaticLayout";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StaticLayout>{children}</StaticLayout>;
}