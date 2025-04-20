'use client';

import { ReactNode } from "react";

type Props = {
  className?: string
  children: ReactNode
};

// Circle border around icon
export default function CircleIconWrapper({ children }: Props) {
  return (
    <div className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/20 transition border border-gray-300">
      {children}
    </div>
  )
}