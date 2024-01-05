"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
const page = () => {
  const callbackUrl = useSearchParams().get("callbackUrl");
  return (
    <section className="flex justify-center items-center bg-white min-h-[calc(100vh-128px)]">
      <button
        aria-label="sign-in button"
        type="button"
        className="button"
        onClick={async () => {
          await signIn("google", {
            callbackUrl: callbackUrl ? callbackUrl : "/",
          });
        }}
      >
        Sign in with Google
      </button>
    </section>
  );
};

export default page;
