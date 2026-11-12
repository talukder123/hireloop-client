import Image from "next/image"
import Link from "next/link"
import { Briefcase, MapPin, Search } from "lucide-react"

const trendingPositions = [
  { label: "Product Designer", query: "Product Designer" },
  { label: "AI Engineering", query: "AI Engineering" },
  { label: "DevOps Engineer", query: "DevOps Engineer" },
]

function Banner() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-64px)] flex-col overflow-hidden bg-[#0a0a0a] text-white lg:min-h-[calc(100svh-72px)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-56 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-10 text-center sm:pt-14 lg:pt-16">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="hidden h-px w-12 bg-gradient-to-r from-transparent to-white/25 sm:block sm:w-16"
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pr-3 pl-1 text-[10px] sm:text-[11px]">
            <span className="grid size-5 place-items-center rounded-md bg-gradient-to-b from-orange-400 to-orange-600 text-white shadow-[0_0_12px_rgba(249,115,22,0.45)]">
              <Briefcase className="size-3" strokeWidth={2.5} />
            </span>
            <span className="font-semibold text-orange-300">58,000+</span>
            <span className="font-medium tracking-[0.14em] text-white/40 uppercase">
              New jobs this month
            </span>
          </span>
          <span
            aria-hidden="true"
            className="hidden h-px w-12 bg-gradient-to-l from-transparent to-white/25 sm:block sm:w-16"
          />
        </div>

        <h1 className="mt-6 text-[2rem] leading-[1.08] font-bold tracking-[-0.02em] text-balance sm:text-5xl lg:text-6xl">
          Find Your Dream Job Today
        </h1>

        <p className="mt-4 max-w-[34rem] text-sm leading-relaxed text-pretty text-white/55 sm:text-base">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        <form
          role="search"
          action="/jobs"
          className="mt-8 flex w-full max-w-[620px] flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.035] p-2 transition-colors focus-within:border-white/20 sm:flex-row sm:items-center sm:gap-0 sm:rounded-xl"
        >
          <label className="flex h-11 flex-1 items-center gap-2.5 rounded-lg px-2.5 focus-within:bg-white/[0.03]">
            <Search className="size-4 shrink-0 text-white/40" />
            <span className="sr-only">Job title, skill or company</span>
            <input
              type="search"
              name="q"
              placeholder="Job title, skill or company"
              autoComplete="off"
              className="h-full w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/35"
            />
          </label>

          <span
            aria-hidden="true"
            className="h-px w-full bg-white/10 sm:h-6 sm:w-px"
          />

          <label className="flex h-11 flex-1 items-center gap-2.5 rounded-lg px-2.5 focus-within:bg-white/[0.03]">
            <MapPin className="size-4 shrink-0 text-white/40" />
            <span className="sr-only">Location or Remote</span>
            <input
              type="text"
              name="location"
              placeholder="Location or Remote"
              autoComplete="off"
              className="h-full w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/35"
            />
          </label>

          <button
            type="submit"
            aria-label="Search jobs"
            className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-violet text-sm font-medium text-white shadow-[0_8px_24px_-12px_var(--color-brand-violet)] transition-colors outline-none hover:bg-brand-violet/90 focus-visible:ring-2 focus-visible:ring-brand-violet/50 sm:ml-1 sm:w-11"
          >
            <Search className="size-4" strokeWidth={2.5} />
            <span className="sm:hidden">Search Jobs</span>
          </button>
        </form>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[11px] sm:text-xs">
          <span className="text-white/40">Trending Position</span>
          {trendingPositions.map((position) => (
            <Link
              key={position.query}
              href={`/jobs?q=${encodeURIComponent(position.query)}`}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-medium text-white/55 transition-colors outline-none hover:border-white/20 hover:text-white focus-visible:ring-2 focus-visible:ring-white/25"
            >
              {position.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative mt-6 min-h-[320px] flex-1 sm:mt-8 sm:min-h-[400px] lg:min-h-[440px]">
        <Image
          src="/images/globe.png"
          alt=""
          aria-hidden="true"
          width={1440}
          height={1882}
          loading="eager"
          className="pointer-events-none absolute top-[-500px] left-1/2 w-[900px] max-w-none -translate-x-1/2 [mask-image:linear-gradient(to_bottom,transparent,black_38%)] select-none sm:top-[-557px] sm:w-[1150px] lg:top-[-630px] lg:w-[1300px]"
        />

        <p className="absolute inset-x-0 top-20 z-10 px-6 text-center text-lg leading-snug font-medium text-balance text-white/90 sm:top-40 sm:text-xl lg:top-[190px] lg:text-2xl">
          Assisting over 15,000 job seekers
          <br />
          find their dream positions.
        </p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"
      />
    </section>
  )
}

export { Banner }
