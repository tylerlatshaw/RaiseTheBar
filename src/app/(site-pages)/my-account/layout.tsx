export default function MyAccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="">
        {children}
      </div>
    </>
  );
}