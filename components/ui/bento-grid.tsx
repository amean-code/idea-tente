import type { ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] sm:auto-rows-[20rem] md:auto-rows-[22rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",
        className,
      )}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  hasCustomBackground = false,
}: {
  name: string
  className: string
  background: ReactNode
  Icon: any
  description: string
  href: string
  cta: string
  hasCustomBackground?: boolean
}) => {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        // light styles - only apply white background if no custom background
        hasCustomBackground
          ? "bg-transparent"
          : "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className,
      )}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 sm:p-6 transition-all duration-300 group-hover:-translate-y-10">
        <Icon
          className={cn(
            "h-10 w-10 sm:h-12 sm:w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75",
            hasCustomBackground ? "text-white drop-shadow-lg" : "text-neutral-700",
          )}
        />
        <h3
          className={cn(
            "text-lg sm:text-xl font-semibold",
            hasCustomBackground ? "text-white drop-shadow-lg" : "text-neutral-700 dark:text-neutral-300",
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "max-w-lg text-sm sm:text-base",
            hasCustomBackground ? "text-white/90 drop-shadow-md" : "text-neutral-400",
          )}
        >
          {description}
        </p>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-3 sm:p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button
          variant="ghost"
          asChild
          size="sm"
          className={cn(
            "pointer-events-auto text-sm",
            hasCustomBackground && "text-white hover:text-white/80 hover:bg-white/10",
          )}
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  )
}

export { BentoGrid, BentoCard }
