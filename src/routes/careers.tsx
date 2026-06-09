import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal, Stagger, StaggerItem, FloatY, motion } from "@/components/site/motion";
import mobileMockup from "@/assets/mobile-mockup.png";
import heroProtagonist from "@/assets/hero-protagonist.png";
import heroCouchLady from "@/assets/hero-couch-lady.png";
import {
  Users,
  TrendingUp,
  Heart,
  Sparkles,
  Target,
  Code,
  Briefcase,
  ArrowRight,
  ShieldPlus,
  DollarSign,
  Home,
  Gift,
  PiggyBank,
  GraduationCap,
  Laptop,
  Calendar,
  Zap,
  Quote,
  Star,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join easypaisa" },
      { name: "description", content: "Shape the future of digital finance in Pakistan. Join our team of innovators." },
      { property: "og:title", content: "Careers — Join easypaisa" },
      { property: "og:description", content: "Build the digital wallet Pakistan deserves." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-mint py-20 md:py-32">
        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-white/40 blur-3xl" />
          <div className="absolute right-[15%] top-[40%] h-80 w-80 rounded-full bg-mint-deep/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-4 inline-block rounded-full bg-ink/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-ink"
                >
                  We're Hiring
                </motion.div>
                <h1 className="mb-6 font-display text-[42px] font-bold leading-[1.1] tracking-tight text-ink md:text-[64px]">
                  Shape the future of <span className="text-mint-deep">digital finance</span>
                </h1>
                <p className="mb-8 max-w-xl text-lg text-ink/70 md:text-xl">
                  Join a team of innovators, thinkers, and builders dedicated to making financial management seamless for millions of Pakistanis.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#open-roles"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-xl"
                  >
                    View Open Positions
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#culture"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-8 py-4 font-semibold text-ink transition-all hover:bg-ink hover:text-primary-foreground"
                  >
                    Our Culture
                  </a>
                </div>
              </div>
            </Reveal>

            <FloatY>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-mint-deep/20 to-ink/10 blur-2xl" />
                <img
                  src={heroProtagonist}
                  alt="Team member"
                  className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </FloatY>
          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section id="culture" className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                Why join <span className="text-mint-deep">easypaisa</span>?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We're building more than a digital wallet — we're creating Pakistan's financial future.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <StaggerItem key={benefit.title}>
                <div className="group h-full rounded-3xl bg-card p-8 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-mint to-mint-deep/30">
                    <benefit.icon className="h-8 w-8 text-ink" />
                  </div>
                  <h3 className="mb-3 font-display text-[26px] font-bold text-ink">{benefit.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FEATURE CARD: OUR TEAM */}
      <section className="bg-cream py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[2.5rem] bg-card shadow-xl">
            <div className="grid items-center gap-12 p-8 md:grid-cols-2 md:gap-16 md:p-12 lg:p-16">
              <Reveal>
                <div>
                  <h2 className="mb-6 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                    Our <span className="text-mint-deep">culture</span>
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                    We thrive on collaboration and transparency. At easypaisa, your voice matters, and your work directly impacts how millions of people manage their money. We're building a financial platform that works for everyone.
                  </p>
                  <ul className="mb-8 space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint">
                        <Sparkles className="h-4 w-4 text-ink" />
                      </div>
                      <div>
                        <strong className="text-ink">Innovation First:</strong>
                        <span className="text-muted-foreground"> We encourage bold ideas and rapid experimentation</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint">
                        <Target className="h-4 w-4 text-ink" />
                      </div>
                      <div>
                        <strong className="text-ink">Impact Driven:</strong>
                        <span className="text-muted-foreground"> Your work reaches millions of users every day</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint">
                        <Users className="h-4 w-4 text-ink" />
                      </div>
                      <div>
                        <strong className="text-ink">Team Unity:</strong>
                        <span className="text-muted-foreground"> Collaborative environment where everyone's contribution counts</span>
                      </div>
                    </li>
                  </ul>
                  <a
                    href="#open-roles"
                    className="inline-flex items-center gap-2 rounded-full bg-mint-deep px-8 py-4 font-semibold text-primary-foreground transition-all hover:scale-105"
                  >
                    Explore Roles
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </Reveal>

              <FloatY delay={0.2}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-mint-deep/20 to-mint/40 blur-2xl" />
                  <img
                    src={heroCouchLady}
                    alt="Team collaboration"
                    className="relative z-10 w-full rounded-3xl object-cover shadow-xl"
                  />
                </div>
              </FloatY>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                Benefits of working at <span className="text-mint-deep">easypaisa</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We invest in our people. Join a company that values your wellbeing, growth, and work-life balance.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {employeeBenefits.map((benefit, i) => (
              <StaggerItem key={benefit.title}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:scale-105 hover:border-mint hover:shadow-lg">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-mint/20">
                    <benefit.icon className="h-7 w-7 text-mint-deep" />
                  </div>
                  <h3 className="mb-2 font-display text-[22px] font-bold text-ink">{benefit.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* EMPLOYEE TESTIMONIALS */}
      <section className="bg-cream py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                What our <span className="text-mint-deep">team says</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Hear from the people who make easypaisa great — real stories from our team members.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {employeeTestimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl">
                      {/* Quote Icon */}
                      <div className="mb-6 flex items-start justify-between">
                        <Quote className="h-10 w-10 text-mint-deep" />
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={`${testimonial.name}-star-${i}`}
                              className={`h-4 w-4 ${
                                i < testimonial.rating
                                  ? "fill-mint-deep text-mint-deep"
                                  : "text-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                        "{testimonial.review}"
                      </p>

                      {/* Employee Info */}
                      <div className="flex items-center gap-4 border-t border-border pt-6">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mint to-mint-deep/30 text-xl font-bold text-ink">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-ink">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.department}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex justify-center gap-2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-roles" className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                Open <span className="text-mint-deep">positions</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Ready to take the next step in your career? Browse our open positions and let's build the future together.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid gap-6 md:grid-cols-2">
            {openRoles.map((role, i) => (
              <StaggerItem key={role.title}>
                <div className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:scale-[1.02] hover:border-mint-deep hover:shadow-xl">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="mb-2 font-display text-[24px] font-bold text-ink">{role.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span className="rounded-full bg-mint/20 px-3 py-1 font-medium text-ink">{role.department}</span>
                        <span className="rounded-full bg-muted px-3 py-1">{role.location}</span>
                        <span className="rounded-full bg-muted px-3 py-1">{role.type}</span>
                      </div>
                    </div>
                    <div className="shrink-0 rounded-2xl bg-mint/20 p-3">
                      <role.icon className="h-6 w-6 text-mint-deep" />
                    </div>
                  </div>
                  <p className="mb-6 text-muted-foreground">{role.description}</p>
                  <button className="group/btn inline-flex items-center gap-2 font-semibold text-mint-deep transition-all hover:gap-3">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <div className="mt-12 text-center">
              <p className="mb-4 text-muted-foreground">Don't see the right role?</p>
              <button className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-8 py-4 font-semibold text-ink transition-all hover:bg-ink hover:text-primary-foreground">
                Send Us Your Resume
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURE CARD: JOIN THE TEAM */}
      <section className="bg-cream py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[2.5rem] bg-card shadow-xl">
            <div className="grid items-center gap-12 p-8 md:grid-cols-2 md:gap-16 md:p-12 lg:p-16">
              <FloatY>
                <div className="relative order-2 md:order-1">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-mint/40 to-mint-deep/20 blur-2xl" />
                  <div className="relative z-10 rounded-3xl bg-gradient-to-br from-mint/10 to-mint-deep/5 p-8">
                    <img
                      src={mobileMockup}
                      alt="easypaisa app"
                      className="mx-auto w-full max-w-[280px] drop-shadow-2xl"
                    />
                  </div>
                </div>
              </FloatY>

              <Reveal>
                <div className="order-1 md:order-2">
                  <h2 className="mb-6 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                    Join our <span className="text-mint-deep">team</span>
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                    Ready to make an impact? We're looking for talented individuals across engineering, product, design, and operations. Let's build the digital wallet Pakistan deserves, together.
                  </p>
                  <div className="mb-8 space-y-4">
                    <div className="flex items-center gap-4 rounded-2xl bg-mint/10 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mint">
                        <Code className="h-6 w-6 text-ink" />
                      </div>
                      <div>
                        <div className="font-semibold text-ink">Engineering</div>
                        <div className="text-sm text-muted-foreground">Mobile, Web, Backend, DevOps</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-2xl bg-mint/10 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mint">
                        <Sparkles className="h-6 w-6 text-ink" />
                      </div>
                      <div>
                        <div className="font-semibold text-ink">Product & Design</div>
                        <div className="text-sm text-muted-foreground">UX/UI, Product Management</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-2xl bg-mint/10 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mint">
                        <Briefcase className="h-6 w-6 text-ink" />
                      </div>
                      <div>
                        <div className="font-semibold text-ink">Business & Operations</div>
                        <div className="text-sm text-muted-foreground">Growth, Marketing, Support</div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#open-roles"
                    className="inline-flex items-center gap-2 rounded-full bg-mint-deep px-8 py-4 font-semibold text-primary-foreground transition-all hover:scale-105"
                  >
                    Apply Now
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Download App */}
      <section className="bg-cream py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[2.5rem] bg-ink shadow-xl">
            <div className="relative overflow-hidden">
              {/* Background blobs */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[10%] top-[30%] h-96 w-96 rounded-full bg-mint/10 blur-3xl" />
                <div className="absolute right-[20%] bottom-[20%] h-80 w-80 rounded-full bg-mint-deep/10 blur-3xl" />
              </div>

              <div className="relative px-8 py-16 text-center md:px-12 md:py-20 lg:px-16">
                <Reveal>
                  <h2 className="mb-6 font-display text-[38px] font-bold leading-tight text-mint md:text-[50px]">
                    Experience the future of banking
                  </h2>
                  <p className="mx-auto mb-12 max-w-2xl text-lg text-primary-foreground/70 md:text-xl">
                    Download easypaisa today and join millions who trust us with their everyday finances.
                  </p>
                  <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                    <button className="group flex items-center gap-4 rounded-2xl bg-card px-8 py-5 transition-all hover:scale-105 hover:shadow-2xl">
                      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground">Download on the</div>
                        <div className="text-lg font-bold text-ink">App Store</div>
                      </div>
                    </button>
                    <button className="group flex items-center gap-4 rounded-2xl bg-card px-8 py-5 transition-all hover:scale-105 hover:shadow-2xl">
                      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground">Get it on</div>
                        <div className="text-lg font-bold text-ink">Google Play</div>
                      </div>
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const benefits = [
  {
    icon: Users,
    title: "Inclusive Workspace",
    description: "Diversity is our strength. We foster an environment where everyone feels they belong and can bring their authentic selves to work.",
  },
  {
    icon: TrendingUp,
    title: "Growth Path",
    description: "Continuous learning opportunities and clear career trajectories for every employee. We invest in your future.",
  },
  {
    icon: Heart,
    title: "Wellness First",
    description: "Comprehensive health benefits and flexible work arrangements to support your life. Your wellbeing matters to us.",
  },
  {
    icon: Sparkles,
    title: "Innovation Culture",
    description: "Work on cutting-edge technology and products that impact millions. Your ideas can become reality here.",
  },
  {
    icon: Target,
    title: "Meaningful Impact",
    description: "Every line of code, every design decision shapes how Pakistan manages money. Make work that matters.",
  },
  {
    icon: Briefcase,
    title: "Competitive Package",
    description: "Industry-leading salary, equity options, and benefits. We reward excellence and dedication.",
  },
];

const employeeBenefits = [
  {
    icon: ShieldPlus,
    title: "Health Insurance",
    description: "Comprehensive medical, dental, and vision coverage for you and your family. Your health is our priority.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Industry-leading salary packages that recognize your skills and experience. Fair compensation is non-negotiable.",
  },
  {
    icon: Home,
    title: "Hybrid Roles",
    description: "Flexible work arrangements with options for remote and in-office work. Balance your life your way.",
  },
  {
    icon: Gift,
    title: "Annual Bonus",
    description: "Performance-based annual bonuses that reward your hard work and contributions to our success.",
  },
  {
    icon: PiggyBank,
    title: "Provident Fund 10%",
    description: "Company contributes 10% to your provident fund, helping you build a secure financial future.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Annual training budget, conference attendance, and online courses. Never stop growing professionally.",
  },
  {
    icon: Laptop,
    title: "Tech Equipment",
    description: "Latest MacBook, high-quality monitors, and all the tools you need to do your best work.",
  },
  {
    icon: Calendar,
    title: "Generous Leave Policy",
    description: "25 days paid time off, plus public holidays and sick leave. Take the time you need to recharge.",
  },
  {
    icon: Zap,
    title: "Performance Incentives",
    description: "Quarterly performance bonuses and recognition programs. Outstanding work gets outstanding rewards.",
  },
];

const employeeTestimonials = [
  {
    name: "Fatima Ahmed",
    role: "Senior Frontend Engineer",
    department: "Engineering • 3 years",
    rating: 5,
    review:
      "Working at easypaisa has been transformative for my career. The engineering culture here encourages innovation and experimentation. I've grown from a mid-level developer to leading major features that millions of users interact with daily. The collaborative environment and cutting-edge tech stack make every day exciting.",
  },
  {
    name: "Hassan Khan",
    role: "Product Manager",
    department: "Product • 2 years",
    rating: 5,
    review:
      "What I love most about easypaisa is the impact. Every feature we build directly improves financial access for people across Pakistan. The leadership trusts us to make decisions, and the cross-functional collaboration between product, design, and engineering is seamless. It's rare to find a company where your work truly matters.",
  },
  {
    name: "Ayesha Malik",
    role: "UX/UI Designer",
    department: "Design • 2.5 years",
    rating: 5,
    review:
      "The design team at easypaisa is incredible. We have the freedom to explore creative solutions and the resources to test our ideas with real users. The company values design thinking and gives us a seat at the table for strategic decisions. Plus, the hybrid work model has been perfect for my work-life balance.",
  },
  {
    name: "Ali Raza",
    role: "Backend Engineer",
    department: "Engineering • 4 years",
    rating: 5,
    review:
      "easypaisa invests heavily in engineering excellence. From code reviews to architecture discussions, everything is done with quality in mind. The scale we operate at is challenging but rewarding. I've learned more here in 4 years than I did in my previous 6 years combined. The benefits and compensation are also top-notch.",
  },
  {
    name: "Sarah Ibrahim",
    role: "Growth Marketing Lead",
    department: "Marketing • 1.5 years",
    rating: 5,
    review:
      "The marketing team operates with a startup mentality backed by enterprise resources. We can experiment with campaigns, analyze data in real-time, and pivot quickly. The company culture celebrates wins and learns from failures. The annual bonus and provident fund contributions show they care about our financial wellbeing too.",
  },
  {
    name: "Omar Siddiqui",
    role: "Customer Support Manager",
    department: "Operations • 3 years",
    rating: 5,
    review:
      "I joined easypaisa thinking it would be another job, but it's become a career. The company genuinely cares about employee development — I've attended multiple training programs and conferences. The health insurance coverage for my family gives me peace of mind, and the team culture is supportive and inclusive.",
  },
  {
    name: "Zainab Tariq",
    role: "Data Analyst",
    department: "Analytics • 1 year",
    rating: 5,
    review:
      "As a fresh graduate, easypaisa took a chance on me and provided incredible mentorship. The learning opportunities are endless, and the team is always willing to help. The hybrid work policy means I can work from home when needed, and the office has a great collaborative atmosphere. I'm excited to grow my career here.",
  },
  {
    name: "Bilal Hussain",
    role: "DevOps Engineer",
    department: "Engineering • 2 years",
    rating: 5,
    review:
      "The infrastructure challenges at easypaisa scale are fascinating. We handle millions of transactions daily, and the reliability standards are high. The company provides the latest tools and tech equipment — I got a top-spec MacBook on day one. The quarterly performance bonuses recognize hard work, and the 25 days of leave policy is generous.",
  },
];

const openRoles = [
  {
    icon: Code,
    title: "Senior Mobile Engineer",
    department: "Engineering",
    location: "Islamabad",
    type: "Full-time",
    description: "Build seamless mobile experiences for millions of users. Work with React Native and native iOS/Android.",
  },
  {
    icon: Sparkles,
    title: "Product Designer",
    department: "Design",
    location: "Karachi",
    type: "Full-time",
    description: "Create beautiful, intuitive interfaces that make financial management delightful for all Pakistanis.",
  },
  {
    icon: Target,
    title: "Product Manager",
    department: "Product",
    location: "Lahore",
    type: "Full-time",
    description: "Define and execute product strategy. Work directly with engineering and design to ship features users love.",
  },
  {
    icon: Briefcase,
    title: "Growth Marketing Lead",
    department: "Marketing",
    location: "Islamabad",
    type: "Full-time",
    description: "Drive user acquisition and engagement. Craft campaigns that resonate with Pakistani audiences.",
  },
  {
    icon: Users,
    title: "Customer Support Lead",
    department: "Operations",
    location: "Karachi",
    type: "Full-time",
    description: "Build and lead our support team. Ensure every customer interaction reflects our commitment to excellence.",
  },
  {
    icon: Code,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Design and build scalable systems that power Pakistan's digital wallet. Work with Node.js, PostgreSQL, Redis.",
  },
];
