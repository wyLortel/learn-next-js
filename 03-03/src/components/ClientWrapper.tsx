'use client';
export default function ClientWrapper({
  children,
}: {
  children: ReadonlyArray<React.ReactNode>;
}) {
  return <>{children}</>;
}
