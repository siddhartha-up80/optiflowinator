import Sidebar from "@/components/Sidebar";

export default function OptiflowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />
      <main className="ml-[290px] mt-5">{children}</main>
    </div>
  );
}
