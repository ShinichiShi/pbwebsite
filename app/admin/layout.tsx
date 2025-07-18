"use client";

import { Toaster } from "react-hot-toast";

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <Toaster position="top-right"
      toastOptions={{
          style: {
            marginTop: '3rem',
          },
        }}
     />
    </>
  );
}
