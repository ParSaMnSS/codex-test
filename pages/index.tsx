import Head from 'next/head'
import { useEffect, useState } from 'react'
import type { SVGProps } from 'react'

type Slide = {
  id: string
  kicker: string
  title: string
  subtitle: string
  description: string
  bulletPoints: string[]
  stats: { label: string; value: string }[]
  background: string
}

type SolutionCard = {
  title: string
  highlight: string
  description: string
  bullets: string[]
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

type FeatureCard = {
  title: string
  description: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

type V2XCard = {
  title: string
  description: string
  points: string[]
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

type SupportCard = {
  title: string
  description: string
  details: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

type Metric = {
  value: string
  label: string
  description: string
}

const LightningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M13 2l-8 12h6l-2 8 8-12h-6l2-8z"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const NetworkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx={12} cy={12} r={9} strokeWidth={1.4} />
    <path
      d="M3 12h18M12 3c3.5 3 3.5 15 0 18M7 5c2.2 2.4 2.2 11.6 0 14M17 5c-2.2 2.4-2.2 11.6 0 14"
      strokeWidth={1.2}
      strokeLinecap="round"
    />
  </svg>
)

const FlowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M4 7c2.5-2.5 7.5-2.5 10 0s7.5 2.5 10 0"
      strokeWidth={1.4}
      strokeLinecap="round"
    />
    <path
      d="M4 17c2.5-2.5 7.5-2.5 10 0s7.5 2.5 10 0"
      strokeWidth={1.4}
      strokeLinecap="round"
    />
    <path d="M4 12h4M16 12h4" strokeWidth={1.4} strokeLinecap="round" />
  </svg>
)

const BatteryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 28 20" fill="none" stroke="currentColor" {...props}>
    <rect x={1.5} y={4.5} width={22} height={11} rx={3} strokeWidth={1.4} />
    <path d="M23.5 8h2a1 1 0 011 1v3a1 1 0 01-1 1h-2" strokeWidth={1.4} />
    <path d="M6 10h6l-2.2 4" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      d="M12 3l8 3v6c0 5-3.6 8.5-8 9-4.4-.5-8-4-8-9V6l8-3z"
      strokeWidth={1.4}
      strokeLinejoin="round"
    />
    <path d="M9 12l2 2 4-4" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SupportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx={12} cy={12} r={9} strokeWidth={1.4} />
    <path d="M12 7v5l3 2" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 5.5l3 3M18.5 5.5l-3 3" strokeWidth={1.4} strokeLinecap="round" />
  </svg>
)

const BuildingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x={3} y={6} width={18} height={14} rx={2} strokeWidth={1.4} />
    <path d="M3 10h18" strokeWidth={1.4} />
    <path d="M7 3v4M17 3v4" strokeWidth={1.4} strokeLinecap="round" />
    <path d="M8 14h2v4H8zM14 14h2v4h-2z" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const slides: Slide[] = [
  {
    id: 'gridless-power',
    kicker: 'Utility Scale ESS Charging',
    title: '70kW in, 400kW out',
    subtitle: 'High charging power without grid limits',
    description:
      'Containerized energy storage with integrated power conversion enables rapid deployment and high power delivery wherever vehicles need to charge.',
    bulletPoints: [
      'All-in-one liquid-cooled power cabinet and dispenser system',
      'Supports continuous HPC output while buffering the grid',
      'Scalable architecture for depots, fleets, and highway hubs',
    ],
    stats: [
      { label: 'SOC', value: '96%' },
      { label: 'HPC Output', value: '400kW' },
      { label: 'Power Modules', value: '4 × 70kW' },
    ],
    background:
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=1900&q=80',
  },
  {
    id: 'quiet-speed',
    kicker: 'Liquid-cooled HPC',
    title: 'Charge Fast, Stay Quiet',
    subtitle: 'Liquid-cooled architecture for silent performance',
    description:
      'Advanced thermal management keeps components within optimal temperature ranges, ensuring dependable operations in any climate with minimal noise.',
    bulletPoints: [
      'HPC dispensers support up to 500A liquid-cooled charging',
      'Low acoustic footprint for indoor or urban deployments',
      'Modular ESS cabinet adapts to diverse energy inputs',
    ],
    stats: [
      { label: 'SOC', value: '82%' },
      { label: 'HPC Current', value: '250A' },
      { label: 'Acoustic', value: '<55 dB' },
    ],
    background:
      'https://images.unsplash.com/photo-1615900175660-2f0b76e5c1de?auto=format&fit=crop&w=1900&q=80',
  },
]

const solutionCards: SolutionCard[] = [
  {
    title: 'Overhead Dispenser',
    highlight: 'EXP270-55W / EXP300-F80W',
    description:
      'Suspended dispensers free up drive-through lanes and enable tidy cable management for depot operations.',
    bullets: ['Dual-connector liquid-cooled HPC 250A / 300A', 'Supports dynamic load sharing across cabinets'],
    icon: LightningIcon,
  },
  {
    title: 'Liquid-Cooled Dispenser',
    highlight: 'EXP260-LC / LDC Series',
    description:
      'Liquid-cooled gun options keep connectors compact while maintaining maximum amperage for high dwell charging.',
    bullets: ['Optional 200A/300A/500A connectors', 'Optimized for continuous ultra-fast output'],
    icon: BatteryIcon,
  },
  {
    title: 'Fan-Cooled Dispenser',
    highlight: 'EXP200-F50W',
    description:
      'Outdoor-rated fan-cooled modules provide reliable charging with simplified maintenance and installation.',
    bullets: ['Dual connectors with 200A delivery', 'Flexible layout for small-footprint sites'],
    icon: FlowIcon,
  },
  {
    title: 'Customizable Dispenser',
    highlight: 'Tailored Engineering',
    description:
      'Configure dispenser types and connector mixes for your site to match traffic patterns and charging profiles.',
    bullets: ['Mix HPC, overhead, and battery-buffered units', 'Adapt cabinet output to multi-port scenarios'],
    icon: ShieldIcon,
  },
]

const features: FeatureCard[] = [
  {
    title: 'Total Electric Interface',
    description:
      'Unified interface between the grid, battery system, vehicles, and distributed energy resources.',
    icon: NetworkIcon,
  },
  {
    title: 'Hybrid Energy Compatibility',
    description:
      'Connect seamlessly with photovoltaics, diesel gensets, or microgrids for resilient on-site power.',
    icon: BuildingIcon,
  },
  {
    title: 'Flexible Power Flow',
    description:
      'Bidirectional routing adjusts to the direction of energy flow to maximize efficiency.',
    icon: FlowIcon,
  },
  {
    title: 'Diversified Battery Access',
    description:
      'Support multiple battery group configurations with intelligent cell protection.',
    icon: BatteryIcon,
  },
  {
    title: 'Unified BMS Topology',
    description:
      'Centralized management keeps every module in sync for predictable operations.',
    icon: ShieldIcon,
  },
  {
    title: 'HPC 500A Ready',
    description:
      'Liquid-cooled architecture enables sustained 500A charging for next-generation vehicles.',
    icon: LightningIcon,
  },
]

const v2xCards: V2XCard[] = [
  {
    title: 'Vehicle-to-Home',
    description:
      'Use ESS buffered charging to safely backfeed residential loads while keeping mobility ready.',
    points: ['Peak shaving and energy arbitrage', 'Seamless switchover during outages'],
    icon: NetworkIcon,
  },
  {
    title: 'Vehicle-to-Business',
    description:
      'Empower commercial campuses to stabilize supply while monetizing vehicle energy assets.',
    points: ['Smart scheduling with fleet dispatch', 'Granular energy analytics for tenants'],
    icon: BuildingIcon,
  },
  {
    title: 'Grid Interactive',
    description:
      'Participate in ancillary services, frequency response, and demand charge mitigation.',
    points: ['Fast response ESS inverter core', 'Utility-grade monitoring and control'],
    icon: SupportIcon,
  },
]

const supportCards: SupportCard[] = [
  {
    title: 'Deployment Blueprint',
    description:
      'Site evaluation, grid assessment, and turnkey system design from concept to commissioning.',
    details: 'Our engineering team models load profiles and selects dispensers to match your application.',
    icon: BuildingIcon,
  },
  {
    title: 'Remote Operations Center',
    description:
      '24/7 monitoring with predictive maintenance, firmware management, and remote diagnostics.',
    details: 'Receive actionable insights and automated alerts through our secure digital platform.',
    icon: SupportIcon,
  },
  {
    title: 'Lifecycle Services',
    description:
      'Field technicians, training, and performance guarantees keep the installation optimized.',
    details: 'Flexible service agreements match your operational cadence and ROI targets.',
    icon: ShieldIcon,
  },
]

const metrics: Metric[] = [
  {
    value: '400kW',
    label: 'Max DC Output',
    description: 'Deliver ultra-fast charging through liquid-cooled dispensers with minimal grid draw.',
  },
  {
    value: '95%',
    label: 'Round-Trip Efficiency',
    description: 'High-efficiency PCS and BMS integration optimize every kilowatt-hour.',
  },
  {
    value: '<55dB',
    label: 'Acoustic Rating',
    description: 'Quiet operation supports urban, indoor, and overnight fleet environments.',
  },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [showAnnouncement, setShowAnnouncement] = useState(false)
  const [showCookieBanner, setShowCookieBanner] = useState(true)

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => setShowAnnouncement(!!data.showRedBox))
      .catch(() => setShowAnnouncement(false))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [activeSlide])

  const currentSlide = slides[activeSlide]

  return (
    <>
      <Head>
        <title>ESS Charging | Infy Power Inspired Experience</title>
        <meta
          name="description"
          content="High power liquid-cooled ESS charging solutions inspired by Infy Power. Explore dispensers, features, support services, and V2X integration."
        />
      </Head>
      <div className="relative overflow-hidden">
        <section id="ess-charging" className="relative min-h-[75vh] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                activeSlide === index ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.background})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/35" />
            </div>
          ))}

          <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:py-40">
            <div className="w-full max-w-xl">
              {showAnnouncement && (
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
                  Admin Update
                  <span className="text-amber-100">On-site ESS demonstrations available by appointment.</span>
                </div>
              )}

              <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-10 shadow-2xl shadow-slate-900/70 backdrop-blur">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
                  {currentSlide.kicker}
                </span>
                <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
                  {currentSlide.title}
                </h1>
                <p className="mt-4 text-base text-slate-300 sm:text-lg">
                  {currentSlide.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {currentSlide.bulletPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-sky-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 inline-flex rounded-full border border-sky-500/50 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">
                  {currentSlide.subtitle}
                </div>
              </div>
            </div>

            <div className="relative w-full flex-1">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                      System Snapshot
                    </span>
                    <span className="text-xs text-slate-500">ESS Controller</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {currentSlide.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-center"
                      >
                        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
                          {stat.label}
                        </span>
                        <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-4 text-sm text-sky-100">
                    <p>
                      {currentSlide.subtitle}. Intelligent energy orchestration keeps every dispenser performing at
                      peak output.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-sky-500/30 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 right-0 h-52 w-52 rounded-full bg-teal-400/20 blur-3xl" />
              </div>
            </div>
          </div>

          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.12),transparent_45%)]" />

          <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeSlide === index ? 'w-12 bg-sky-400' : 'w-6 bg-slate-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section id="products" className="relative bg-[#051538] py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
                Liquid-Cooled Energy Storage Charging Solution
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Tailored dispenser families for every charging scenario
              </h2>
              <p className="mt-4 text-slate-300">
                Combine modular power cabinets with flexible dispensers to support depot fleets, highway hubs, and
                destination charging with uncompromised performance.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {solutionCards.map((card) => (
                <article
                  key={card.title}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 transition hover:border-sky-400/40 hover:bg-sky-500/5"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-sky-200">
                    {card.highlight}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{card.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pointer-events-none absolute -right-14 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-sky-500/10 blur-2xl transition group-hover:bg-sky-400/20" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-[#041232] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
                  Solution Features
                </span>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  Intelligent architecture to unlock ultra-fast charging
                </h2>
              </div>
              <p className="max-w-xl text-slate-300">
                Every subsystem is engineered to work together—from battery packs to dispensers—delivering high power
                output, longevity, and a refined charging experience.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="v2x" className="relative bg-[#071843] py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.15),transparent_45%)]" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
                  V2H &amp; V2B Integration
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Unlock bidirectional energy flow with confidence
                </h2>
              </div>
              <p className="max-w-xl text-slate-300">
                Our ESS platform is ready for vehicle-to-everything applications, balancing building loads while
                ensuring mobility readiness and monetizing stored energy.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {v2xCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-8"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{card.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="support" className="bg-[#03102d] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
                Support &amp; Services
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                End-to-end partnership for every deployment
              </h2>
              <p className="mt-4 text-slate-300">
                From feasibility studies to lifecycle maintenance, we back your ESS charging project with proven
                processes and dedicated experts.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {supportCards.map((card) => (
                <article key={card.title} className="rounded-[28px] border border-white/10 bg-white/5 p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{card.description}</p>
                  <p className="mt-4 text-sm text-slate-400">{card.details}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="relative bg-[#020a1f] py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_50%)]" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[3fr,2fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
                  About Infy Power Inspired
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Pioneering energy storage charging ecosystems
                </h2>
                <p className="mt-4 text-slate-300">
                  We craft ESS-based charging solutions that make electrification dependable. By uniting advanced power
                  conversion, battery expertise, and human-centered design, we deliver systems that scale from pilot to
                  nationwide networks.
                </p>
                <p className="mt-4 text-slate-400">
                  Our teams collaborate with utilities, fleet operators, and developers worldwide to accelerate the
                  rollout of high-power charging infrastructure without waiting for massive grid upgrades.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold text-white">Performance at a Glance</h3>
                <div className="mt-6 grid gap-6">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                      <p className="text-3xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-sm text-slate-300">{metric.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-transparent py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
              Contact
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s design your ESS charging project
            </h2>
            <p className="mt-4 text-slate-200">
              Share your site parameters and charging goals. Our team will craft a roadmap with the right mix of ESS
              capacity, dispenser configurations, and lifecycle services.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@infypower-ess.com"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/60 hover:bg-sky-500/20"
              >
                hello@infypower-ess.com
              </a>
              <a
                href="tel:+18001234567"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/60 hover:bg-sky-500/20"
              >
                +1 (800) 123-4567
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-[#010817] py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Infy Power Inspired. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#support" className="hover:text-slate-200">
                Support
              </a>
              <a href="#contact" className="hover:text-slate-200">
                Contact
              </a>
              <a href="#about" className="hover:text-slate-200">
                Privacy
              </a>
            </div>
          </div>
        </footer>

        {showCookieBanner && (
          <div className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-3xl -translate-x-1/2 rounded-[28px] border border-white/10 bg-slate-900/90 p-6 backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">We respect your privacy</h3>
                <p className="mt-1 text-sm text-slate-300">
                  When you visit, we use cookies to enhance performance and understand interactions. Read more in our
                  privacy policy.
                </p>
              </div>
              <div className="flex items-center gap-3 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => setShowCookieBanner(false)}
                  className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-sky-400/60 hover:text-sky-100"
                >
                  Customize
                </button>
                <button
                  type="button"
                  onClick={() => setShowCookieBanner(false)}
                  className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
