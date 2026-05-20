import { AppSidebar } from "@/components/App-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full">
        <AppSidebar />
        <main className="p-2">
          <SidebarTrigger className=" absolute top-2" size={"lg"} />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
