import Image from "next/image"

import { cn } from "@/lib/utils"

function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Hireloop"
      width={154}
      height={44}
      preload
      className={cn("h-6 w-auto sm:h-7", className)}
    />
  )
}

export { Logo }
