"use client";
import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(location.href);
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 1500);
  };

  return (
    <button
      className="flex gap-1 items-center border-2 rounded-lg px-2 hover:bg-white hover:border-black"
      onClick={handleClick}
    >
      <LinkIcon className="h-5 w-5" />
      {click ? "Link Copied" : "Share Link"}
    </button>
  );
}
