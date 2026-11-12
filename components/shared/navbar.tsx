"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Logo } from "@/components/shared/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/jobs", label: "Browse Jobs" },
  { href: "/company", label: "Company" },
  { href: "/pricing", label: "Pricing" },
] as const

function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  function closeMobileNav() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/95 text-white backdrop-blur-md supports-[backdrop-filter]:bg-[#0a0a0a]/80">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-10">
        <Link
          href="/"
          onClick={closeMobileNav}
          className="inline-flex shrink-0 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-white/25"
        >
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="hidden lg:block">
            <div className="flex items-center gap-1 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-1.5">
              <ul className="flex items-center">
                {navLinks.map((link) => {
                  const active = isActive(link.href)

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative inline-flex h-9 items-center rounded-xl px-3 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/25",
                          active
                            ? "text-white after:absolute after:inset-x-3 after:bottom-1.5 after:h-[1.5px] after:rounded-full after:bg-white/70 after:content-['']"
                            : "text-white/55 hover:text-white"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <span
                aria-hidden="true"
                className="mx-1.5 h-4 w-px bg-white/10"
              />

              <Link
                href="/sign-in"
                className="inline-flex h-9 items-center rounded-xl px-3 text-sm font-medium text-indigo-200 transition-colors outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-white/25"
              >
                Sign In
              </Link>

              <Button
                nativeButton={false}
                render={<Link href="/sign-up" />}
                className="h-9 rounded-xl border-transparent bg-brand-violet px-4 font-semibold text-white shadow-[0_6px_18px_-10px_var(--color-brand-violet)] transition-colors hover:bg-brand-violet/90 focus-visible:ring-brand-violet/50"
              >
                Get Started
              </Button>
            </div>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-colors outline-none hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/25 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="animate-in border-t border-white/[0.06] duration-200 fade-in slide-in-from-top-2 lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="mx-auto w-full max-w-[1440px] px-4 pt-2 pb-4 sm:px-6"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                const active = isActive(link.href)

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileNav}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex h-11 items-center rounded-xl px-3 text-base font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/25",
                        active
                          ? "bg-white/[0.06] text-white"
                          : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div aria-hidden="true" className="my-3 h-px bg-white/[0.08]" />

            <div className="flex flex-col gap-2">
              <Link
                href="/sign-in"
                onClick={closeMobileNav}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 text-sm font-medium text-indigo-200 transition-colors outline-none hover:border-white/20 hover:text-white focus-visible:ring-2 focus-visible:ring-white/25"
              >
                Sign In
              </Link>

              <Button
                nativeButton={false}
                render={<Link href="/sign-up" onClick={closeMobileNav} />}
                className="h-11 w-full rounded-xl border-transparent bg-brand-violet font-semibold text-white shadow-[0_6px_18px_-10px_var(--color-brand-violet)] transition-colors hover:bg-brand-violet/90 focus-visible:ring-brand-violet/50"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export { Navbar }
