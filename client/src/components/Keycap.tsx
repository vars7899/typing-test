"use client";

import React from "react";
import z from "zod";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";

const KeycapOptionsSchema = z.object({
  center: z.any(),
  centerLabel: z.string().optional(),
  topLeftLabel: z.string().max(1).optional(),
  topRightLabel: z.string().max(1).optional(),
  bottomLeftLabel: z.string().max(1).optional(),
  bottomRightLabel: z.string().max(1).optional(),
  keyCode: z.string().array(),
  width: z.string().startsWith("col-span-"),
});

const Keycap: React.FC<z.infer<typeof KeycapOptionsSchema>> = ({
  centerLabel,
  topLeftLabel,
  topRightLabel,
  bottomLeftLabel,
  bottomRightLabel,
  keyCode,
  width,
  center,
}) => {
  const [isPressed, setIsPressed] = React.useState<boolean>(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    // Remove Tab default behavior
    if (e.code === "Tab" || e.code === "ControlRight") e.preventDefault();
    if (keyCode.includes(e.code)) {
      setIsPressed(() => true);
    }
  };
  const handleKeyUp = (e: KeyboardEvent) => {
    if (keyCode.includes(e.code)) setIsPressed(() => false);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    //
    <div
      className={cn(
        `relative rounded-md h-[60px] min-w-[60px] w-[100%] bg-zinc-950 overflow-hidden select-none shadow-keybase before:content-[''] before:rounded-md before:absolute before:top-[6px] before:left-[6px] before:bottom-[8px] before:right-[8px] before:bg-gradient-to-r before:from-zinc-950 before:to-zinc-700 before:border-[1px] before:border-t-zinc-900 before:border-l-zinc-800 before:border-r-zinc-900 before:border-b-zinc-700 before:shadow-keycap ${width}`,
        isPressed
          ? "scale-95 bg-gradient-to-br from-orange-700 to-orange-950"
          : " scale-100"
      )}
    >
      <p className="text-white uppercase absolute left-[12px] top-[8px] not-italic text-xs">
        {topLeftLabel}
      </p>
      <p className="text-white uppercase absolute not-italic left-[24px] top-[16px]">
        {centerLabel}
      </p>
      {center && (
        <p className="text-white uppercase absolute not-italic left-[24px] top-[13px]">
          {center}
        </p>
      )}
    </div>
  );
};

export default Keycap;
