import MobileNav from "@/components/MobileNav";
import MobileSidebar from "@/components/MobileSidebar";
import Sidebar from "@/components/Sidebar";

export default function OptiflowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MobileNav />
      <div className="fixed top-4 left-5 z-50 md:hidden">
        <MobileSidebar />
      </div>
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="md:ml-[290px] md:mt-5 mt-14 p-4 md:p-0">{children}</main>
    </div>
  );
}
