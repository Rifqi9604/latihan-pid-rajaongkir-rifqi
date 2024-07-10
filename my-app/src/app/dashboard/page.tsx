"use client";

import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/lib";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Toast,
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastClose,
} from "@/components/ui/toast";
import { logout } from "@/lib/lib";
import { Label } from "@/components/ui/label";

export default function Dashboard() {
  const router = useRouter();
  const [toast, setToast] = useState<{
    title: string;
    description: string;
  } | null>(null);

  async function handleLogout() {
    const response = await logout();

    if (response.success) {
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
      setToast({ title: "Logout Successful", description: response.message });
    } else {
      console.error("Logout failed:", response.message);
    }
  }

  return (
    <ToastProvider>
      <ToastViewport />
      {toast && (
        <Toast>
          <ToastTitle>{toast.title}</ToastTitle>
          <ToastDescription>{toast.description}</ToastDescription>
          <ToastClose />
        </Toast>
      )}
      <div className="min-h-screen w-full flex flex-col gap-6 justify-center items-center">
        <h1>Dashboard</h1>
        <p>Welcome, rifqi</p>
        <div className="border border-slate-500 rounded-2xl min-h-[400px] p-6">
          <div className="flex flex-col gap-6">
            <div className="grid w-full max-w-sm items-center gap-3">
              <label>Origin</label>
              <input name="origin" type="email" id="origin" placeholder="Origin.." className="p-4 rounded-xl border border-black"/>
            </div>

            <div className="grid w-full max-w-sm items-center gap-3">
              <label>Destination</label>
              <input name="Destination" type="email" id="origin" placeholder="Destination.." className="p-4 rounded-xl border border-black"/>
            </div>

            <div className="grid w-full max-w-sm items-center gap-3">
              <label>Weight</label>
              <input name="Weight" type="email" id="Weight" placeholder="Weight.." className="p-4 rounded-xl border border-black"/>
            </div>

            <div className="grid w-full max-w-sm items-center gap-3">
              <label>Courier</label>
              <input name="Courier" type="email" id="Courier" placeholder="Courier.." className="p-4 rounded-xl border border-black"/>
            </div>

            <div className="grid w-full max-w-sm items-center gap-3">
             <Button>Submit</Button>
            </div>
          </div>
        </div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </ToastProvider>
  );
}
