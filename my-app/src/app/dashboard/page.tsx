// "use client";

import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/lib";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Toast,
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastClose,
} from "@/components/ui/toast";

export default function Dashboard() {
  // const router = useRouter();
  // const [toast, setToast] = useState<{
  //   title: string;
  //   description: string;
  // } | null>(null);
  // const [sessionLoaded, setSessionLoaded] = useState(false);
  // const [user, setUser] = useState<{ name: string } | null>(null);

  // useEffect(() => {
  //   async function loadSession() {
  //     const session = await getSession();
  //     if (!session) {
  //       redirect("/auth/login");
  //     } else {
  //       setUser(session.user); // Set user data if session exists
  //       setSessionLoaded(true);
  //     }
  //   }

  //   loadSession();
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     const session = await getSession();
  //     if (!session) {
  //       setToast({ title: "Session Expired", description: "Your session has expired. Please log in again." });
  //       setTimeout(() => {
  //         router.push("/auth/login");
  //       }, 2000);
  //     }
  //   }, 1000); // Check every 1 second

  //   return () => clearInterval(interval);
  // }, []);

  async function logout() {
    const session = await getSession();

    const formData = new FormData();
    formData.append("username", session.user.name); // Adjust as per your API requirement

    const response = await fetch("/api/auth/logout", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      Cookies.remove("session");
    }
  }

  return (
    // <ToastProvider>
    //   <ToastViewport />
    //   {toast && (
    //     <Toast>
    //       <ToastTitle>{toast.title}</ToastTitle>
    //       <ToastDescription>{toast.description}</ToastDescription>
    //       <ToastClose />
    //     </Toast>
    //   )}
    // </ToastProvider>
      <div>
        <h1>Dashboard</h1>
        <p>Welcome, rifqi</p>
        {/* <Button onClick={logout}>Logout</Button> */}
      </div>
  );
}
