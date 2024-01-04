"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  searchParams.get("searchTerm");
  
  return <div>page</div>;
};

export default page;
