import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionIndicator from '../components/SectionIndicator';

const sections = [
  { id: 'overview',      label: 'Overview'         },
  { id: 'the-setup',     label: 'The Setup'         },
  { id: 'who',           label: 'Who Uses This'     },
  { id: 'problem-1',     label: 'Problem 1'         },
  { id: 'problem-2',     label: 'Problem 2'         },
  { id: 'problem-3',     label: 'Problem 3'         },
  { id: 'login',         label: 'Login'             },
  { id: 'home-screen',   label: 'Home Screen'       },
  { id: 'post-purchase', label: 'Post-Purchase'     },
  { id: 'reflection',    label: 'Reflection'        },
  { id: 'bigger-thing',  label: 'The Bigger Thing'  },
];

function ImagePlaceholder({
  label,
  caption,
  aspect = 'aspect-video',
}: {
  label: string;
  caption: string;
  aspect?: string;
}) {
  return (
    <div className="my-10">
      <div
        className={`${aspect} w-full bg-surface border border-border flex flex-col items-center justify-center gap-3 text-center px-6`}
      >
        <span className="text-accent text-[0.65rem] uppercase tracking-[0.18em] font-bold">{label}</span>
        <span className="text-text-faint text-xs max-w-[480px] leading-relaxed">{caption}</span>
      </div>
      <p className="text-text-faint text-[0.72rem] italic text-center mt-2 leading-relaxed">{caption}</p>
    </div>
  );
}

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-accent pl-6 my-10">
      <p className="text-text-primary text-xl font-display italic leading-relaxed">{children}</p>
    </blockquote>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-accent text-[0.7rem] font-bold uppercase tracking-[0.15em] block mb-2">
      {children}
    </span>
  );
}

export default function SkooltagCaseStudy() {
  return (
    <div className="relative">
      <SectionIndicator sections={sections} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section id="overview" className="bg-surface border-b border-border pt-28 pb-16 px-gutter">
        <div className="max-w-[1200px] mx-auto">
          <Link to="/" className="text-text-muted text-[0.875rem] hover:text-accent transition-colors">
            ← All work
          </Link>

          <div className="flex flex-wrap gap-2 mt-6">
            {['E-Commerce', 'Consumer Mobile', 'D2C', '0→1', 'Brand Identity', 'Android App'].map(tag => (
              <span key={tag} className="bg-surface-2 text-text-muted text-[0.7rem] border border-border px-2 py-1">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-h2 text-text-primary mt-6">Skooltag — School Uniform</h1>
          <p className="text-accent text-lg font-medium mt-3 max-w-[700px]">
            Digitizing a 35-year-old trust.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="text-text-faint text-xs uppercase tracking-widest font-bold mb-1">Role</div>
              <div className="text-text-primary text-sm">Product Design Lead</div>
            </div>
            <div>
              <div className="text-text-faint text-xs uppercase tracking-widest font-bold mb-1">Team</div>
              <div className="text-text-primary text-sm">Graphic Designer, Motion Designer, Developer</div>
            </div>
            <div>
              <div className="text-text-faint text-xs uppercase tracking-widest font-bold mb-1">Platform</div>
              <div className="text-text-primary text-sm">Android App + Marketing Website</div>
            </div>
            <div>
              <div className="text-text-faint text-xs uppercase tracking-widest font-bold mb-1">Context</div>
              <div className="text-text-primary text-sm">D2C E-Commerce, India</div>
            </div>
          </div>

          {/* IMAGE 1 — Hero / Cover */}
          <div className="mt-12 aspect-video bg-surface-2 border border-border flex flex-col items-center justify-center gap-3 text-center px-6">
            <span className="text-accent text-[0.65rem] uppercase tracking-[0.18em] font-bold">Image 1 — Hero / Cover</span>
            <span className="text-text-faint text-xs max-w-[480px] leading-relaxed">
              Full-width mockup of the Skooltag home screen — bold tile variant. First impression. Fill the screen.
            </span>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────── */}
      <div className="max-w-[780px] mx-auto px-gutter py-16">

        {/* THE SETUP */}
        <section id="the-setup" className="mb-24">
          <Reveal>
            <SectionLabel>The Setup</SectionLabel>
            <h2 className="text-[1.8rem] text-text-primary mb-6">SkoolTag had been the trusted shop since 1989.</h2>
            <div className="text-text-muted leading-relaxed space-y-5">
              <p>
                Every year in Delhi NCR, millions of parents do the same thing. They walk into a uniform shop,
                tell the shopkeeper which school their child goes to, which class, which house color, and walk out
                20 minutes later with a bag full of exactly the right uniforms. No browsing. No confusion.
                No returns.
              </p>
              <p>
                SkoolTag had been that shop since 1989. Trusted by families across Delhi NCR for over three
                decades. The product was never the problem. The channel was.
              </p>
              <p>
                Parents were moving online. Competitors were showing up. And a business built entirely on
                personal relationships and physical trust needed to survive on a 6-inch screen.
              </p>
            </div>

            <Pull>
              "The hardest part was not designing an app. It was making software feel like a person who already
              knows you."
            </Pull>
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* WHO IS ACTUALLY USING THIS */}
        <section id="who" className="mb-24">
          <Reveal>
            <SectionLabel>Who Is Actually Using This</SectionLabel>
            <h2 className="text-[1.8rem] text-text-primary mb-6">This app is not for students. It is for parents.</h2>
            <div className="text-text-muted leading-relaxed space-y-5">
              <p>
                Before a single frame was drawn, one thing had to be settled.
              </p>
              <p>
                A parent buying school uniforms is not browsing. They are completing a task under real stress.
                The school year is starting. They are worried about sizing. They might have two kids in two
                different schools. They want it done quickly and done right.
              </p>
              <p>
                This one insight changed everything. The navigation, the onboarding, the package logic, the
                "Buying For" switcher, the size confirmation checkpoint — all of it traces back to designing for a
                stressed, time-poor parent completing a task, not a teenager scrolling a catalogue.
              </p>
            </div>

            <div className="bg-accent/5 border border-accent/20 p-8 mt-8">
              <span className="text-accent text-[0.7rem] uppercase font-bold block mb-3">Key Insight</span>
              <p className="text-text-primary text-lg font-display italic leading-relaxed">
                "Design for a stressed, time-poor parent completing a task — not a teenager scrolling a catalogue."
              </p>
            </div>
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* PROBLEM 1 */}
        <section id="problem-1" className="mb-24">
          <Reveal>
            <SectionLabel>Problem 1</SectionLabel>
            <h2 className="text-[1.8rem] text-text-primary mb-6">Context Is Everything, and Apps Throw It Away</h2>
            <div className="text-text-muted leading-relaxed space-y-5">
              <p>
                In the physical store, the shopkeeper holds context. You say "Class VI, Amity Global, Ujjain
                house" and everything else follows. Online, you start from zero. You search. You filter. You
                guess. You abandon.
              </p>
              <div className="bg-surface border-l-2 border-accent p-6 my-6">
                <strong className="text-text-primary block mb-2">The Decision</strong>
                <p className="text-sm leading-relaxed">
                  Make onboarding the context-gathering moment, and carry that context through the entire app.
                </p>
              </div>
              <p>
                Parents select their school from a visual grid of familiar crests. They enter child name, class,
                gender, house. Four inputs, all of which SkoolTag's backend already understands deeply. The moment
                the parent is done, the app knows what to show them. Their package is pre-built, waiting on the
                home screen. They do not browse. They confirm.
              </p>
              <p className="font-semibold text-text-primary">The app becomes the shopkeeper.</p>
            </div>

            <ImagePlaceholder
              label="Image 2 — Onboarding Flow"
              caption="Four inputs. The same four things a parent tells the shopkeeper."
              aspect="aspect-[16/7]"
            />
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* PROBLEM 2 */}
        <section id="problem-2" className="mb-24">
          <Reveal>
            <SectionLabel>Problem 2</SectionLabel>
            <h2 className="text-[1.8rem] text-text-primary mb-6">Multiple Children Breaks Every Multi-Step Flow</h2>
            <div className="text-text-muted leading-relaxed space-y-5">
              <p>
                A parent with two kids in different schools should be able to switch between them without losing
                their place, going back to a menu, or starting over.
              </p>
              <p>
                Most apps bury profile switching inside account settings. That is the wrong answer. By the time a
                parent has found the setting, switched the profile, and come back to shopping, they have lost the
                thread entirely.
              </p>
              <div className="bg-surface border-l-2 border-accent p-6 my-6">
                <strong className="text-text-primary block mb-2">The Decision</strong>
                <p className="text-sm leading-relaxed">
                  Put the active child profile at the very top of every screen as a persistent one-tap chip.
                </p>
              </div>
              <p>
                The entire experience — packages, recommendations, pricing, house-specific items — reconfigures
                instantly when the parent switches. No navigation. No back button. One tap.
              </p>
            </div>

            <ImagePlaceholder
              label="Image 3 — The Buying For Switcher"
              caption="Always visible. One tap to switch. The entire experience reconfigures."
              aspect="aspect-[16/7]"
            />
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* PROBLEM 3 */}
        <section id="problem-3" className="mb-24">
          <Reveal>
            <SectionLabel>Problem 3</SectionLabel>
            <h2 className="text-[1.8rem] text-text-primary mb-6">Sizing Anxiety Is the Reason Parents Do Not Buy Uniforms Online</h2>
            <div className="text-text-muted leading-relaxed space-y-5">
              <p>
                Parents are not afraid of the price. They are afraid of buying the wrong size and dealing with a
                return. A school uniform is not a t-shirt you can exchange easily. It is a specific item tied to
                a school, a house color, a gender cut, a size system that varies across brands.
              </p>
              <div className="bg-surface border-l-2 border-accent p-6 my-6">
                <strong className="text-text-primary block mb-2">The Decision</strong>
                <p className="text-sm leading-relaxed">Design against this anxiety at three points in the journey — not once.</p>
              </div>

              <div className="space-y-4 pl-4">
                <div className="flex gap-4">
                  <span className="text-accent font-bold shrink-0">01</span>
                  <p className="text-sm leading-relaxed">
                    Every item shows a size selector with a full size chart and a conversion guide across five
                    international measurement systems — UK, US, EU, IT, and INTL — because parents in Delhi NCR
                    do not all reference the same system.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-accent font-bold shrink-0">02</span>
                  <p className="text-sm leading-relaxed">
                    If a parent tries to remove an essential item, the app flags it without blocking them. It says
                    this item matters. The parent decides.
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-accent font-bold shrink-0">03</span>
                  <p className="text-sm leading-relaxed">
                    Right before checkout, one deliberate pause — "Did you get everything right?" A short
                    checklist. Every item accounted for. Every size confirmed.
                  </p>
                </div>
              </div>

              <p className="italic text-text-primary">
                This is not friction. This is the app doing what a good shopkeeper does. Asking "Are you sure you
                have got everything? School starts Monday."
              </p>
            </div>

            <ImagePlaceholder
              label="Image 4 — Package Builder + Confirmation Screen"
              caption='Sizing anxiety addressed at three points. Not once.'
              aspect="aspect-[16/6]"
            />

            <ImagePlaceholder
              label="Image 5 — Product Detail Page"
              caption="The 'School Approved' stamp was not decoration. It was the answer to the question every parent has: will the school actually accept this?"
              aspect="aspect-[3/4]"
            />
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* LOGIN */}
        <section id="login" className="mb-24">
          <Reveal>
            <SectionLabel>The Login</SectionLabel>
            <h2 className="text-[1.8rem] text-text-primary mb-6">Fast, Familiar, Indian.</h2>
            <div className="text-text-muted leading-relaxed space-y-5">
              <p>
                OTP-based phone login with a countdown timer and automatic keyboard focus. No email required.
                No passwords.
              </p>
              <p>
                This is not a design choice made for aesthetics. In India, phone number is identity. Everyone has
                one. Not everyone has an email they remember. The login flow needed to reflect that.
              </p>
              <p>
                Error states, disabled button states, and wrong OTP recovery were all designed explicitly. The
                illustrated character in the header responds to the flow state — holding a phone on the number
                screen, showing feedback on the OTP screen. Small moment of delight in a functional flow.
              </p>

              <div className="bg-surface border border-border p-6">
                <span className="text-accent text-[0.7rem] uppercase font-bold block mb-2">Design Principle</span>
                <p className="text-text-primary italic text-sm leading-relaxed">
                  Error states were designed before happy paths. In a login flow, the failure case is the one that
                  actually tests trust.
                </p>
              </div>
            </div>

            <ImagePlaceholder
              label="Image 6 — Login Flow"
              caption="Phone-first authentication. Error states designed before happy paths."
              aspect="aspect-[16/6]"
            />
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* HOME SCREEN */}
        <section id="home-screen" className="mb-24">
          <Reveal>
            <SectionLabel>The Home Screen</SectionLabel>
            <h2 className="text-[1.8rem] text-text-primary mb-6">A Recommendation Engine Wearing a Shop Front</h2>
            <div className="text-text-muted leading-relaxed space-y-5">
              <p>
                The home screen is doing more work than it looks like. It is personalized to the active child
                profile, surfaces the school-specific package first, runs promotional bundles in the banner, has
                a separate editorial section for new items, and breaks categories into quick access tiles.
              </p>
              <p>
                Two variants of the package display were designed simultaneously — one transparent showing the
                physical uniform through the packaging, and one bold tile with more information. Both were handed
                to the team to test with real users rather than making a subjective call in Figma.
              </p>

              <div className="bg-surface border-l-2 border-accent p-6 my-6">
                <strong className="text-text-primary block mb-2">Design Mindset</strong>
                <p className="text-sm leading-relaxed">
                  Designing for experimentation from the start is a different mindset than designing for delivery.
                  The product does not end at handoff.
                </p>
              </div>
            </div>

            <ImagePlaceholder
              label="Image 7 — Home Screen A/B"
              caption="Two variants built into the design file. Ship both. Let users decide."
              aspect="aspect-[16/7]"
            />
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* POST-PURCHASE */}
        <section id="post-purchase" className="mb-24">
          <Reveal>
            <SectionLabel>After the Order</SectionLabel>
            <h2 className="text-[1.8rem] text-text-primary mb-6">Where Trust Is Actually Built</h2>
            <div className="text-text-muted leading-relaxed space-y-5">
              <p>
                Most portfolios show the happy path. The real product is what happens when things go wrong.
              </p>
              <p>
                The post-purchase experience was designed end to end. Order tracking with a step-by-step timeline.
                Item replacement with reason selection — wrong size, wrong house, item damaged, other.
                Cancellation at individual item level, not just full order cancellation. Feedback confirmation
                that reads like a person responded. Invoice download from the order detail screen.
              </p>
              <p className="font-semibold text-text-primary">
                A parent who got the wrong size shirt and still had a smooth replacement experience comes back
                next year. One who had to call and explain themselves twice does not.
              </p>
            </div>

            <ImagePlaceholder
              label="Image 8 — Orders + Tracking"
              caption="Order status has a color language. Yellow for arriving, green for delivered, red for cancelled. Not arbitrary — systematic."
              aspect="aspect-[16/7]"
            />

            <ImagePlaceholder
              label="Image 9 — Replacement Flow"
              caption="Replacement designed as a flow, not a form. Reason, correction, confirmation."
              aspect="aspect-[16/7]"
            />

            <ImagePlaceholder
              label="Image 10 — Cancellation"
              caption="Cancel at item level, not just order level. Parents should not lose an entire order because one shirt was wrong."
              aspect="aspect-[16/7]"
            />
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* REFLECTION */}
        <section id="reflection" className="mb-24">
          <Reveal>
            <SectionLabel>Reflection</SectionLabel>
            <h2 className="text-[1.8rem] text-text-primary mb-6">What Made This Hard. What I'd Do Differently.</h2>
            <div className="text-text-muted leading-relaxed space-y-5">
              <p>
                No user research budget. No testing sessions with real parents before launch. No design system
                to inherit. The brand, the color language, the illustration style, the interaction patterns —
                everything was created from scratch while simultaneously coordinating a graphic designer, a motion
                designer, and a developer.
              </p>
              <p>
                The design had to be right enough on first launch because there was no runway to get it wrong
                twice.
              </p>

              <div className="bg-surface border border-border p-6 my-6">
                <span className="text-accent text-[0.7rem] uppercase font-bold block mb-2">What This Taught Me</span>
                <p className="text-text-primary italic leading-relaxed">
                  Constraints are not the opposite of good design. They are what forces you to get clear about
                  what actually matters.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-surface border border-border p-6">
                <h4 className="text-text-primary font-bold text-sm mb-3 uppercase tracking-wide">What I Would Do Differently — 01</h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  The home screen is too dense. Packages, banners, editorial content, categories, and
                  recommendations are all competing on the same scroll. A second version would surface the school
                  package first, alone, and let everything else live below it. One job. One screen. Then the rest.
                </p>
              </div>
              <div className="bg-surface border border-border p-6">
                <h4 className="text-text-primary font-bold text-sm mb-3 uppercase tracking-wide">What I Would Do Differently — 02</h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  The billing screen at checkout has one moment of confusion. Free Delivery is labeled but the
                  value next to it says <em>None</em>. Does that mean no free delivery or no cost? A small copy
                  fix, but in checkout, ambiguity costs conversions. Copy is design. This one slipped.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* THE BIGGER THING */}
        <section id="bigger-thing" className="mb-24">
          <Reveal>
            <SectionLabel>The Bigger Thing</SectionLabel>
            <h2 className="text-[1.8rem] text-text-primary mb-6">Designing for India is not designing a Western product with a rupee sign swapped in.</h2>
            <div className="text-text-muted leading-relaxed space-y-5">
              <p>
                A parent in Vasundhara, Ghaziabad has a mental model shaped by 35 years of walking into a
                physical store where the shopkeeper knows her, knows her children, and knows exactly what to pull
                off the shelf. That is the experience she is comparing this app to. Not Amazon. Not Flipkart.
                Her shopkeeper.
              </p>
              <p>
                The job was to make software carry that feeling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
              {[
                { step: 'Onboarding', metaphor: 'The greeting', body: 'The shopkeeper recognises you and asks about your kids.' },
                { step: 'Pre-built Package', metaphor: 'Knowing what you need', body: 'The items are already pulled before you finish the sentence.' },
                { step: '"Did you get everything?"', metaphor: 'One last check', body: 'He asks once more before you walk out the door.' },
              ].map(({ step, metaphor, body }) => (
                <div key={step} className="border border-border bg-surface p-6">
                  <div className="text-accent text-[0.65rem] uppercase tracking-widest font-bold mb-1">{step}</div>
                  <div className="text-text-primary font-semibold text-sm mb-2">{metaphor}</div>
                  <p className="text-text-muted text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <Pull>
              "That is what product design actually is. Not screens. Not components. Not flows. It is understanding
              what a person already trusts and building toward that."
            </Pull>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="bg-surface border border-border p-10 md:p-16 text-center mt-24">
          <Reveal>
            <h3 className="text-h3 text-text-primary mb-8">
              Building a 0→1 product and need someone who can handle the full surface?
            </h3>
            <a
              href="mailto:kumarabhishekbuild@gmail.com?subject=Discovery Call Request"
              className="inline-block bg-accent text-black px-10 py-4 font-semibold text-lg hover:bg-accent-dim transition-all"
            >
              Book a discovery call →
            </a>
            <div className="mt-8 text-text-muted text-sm">
              Or view the next project →
              <div className="flex justify-center gap-4 mt-4">
                <Link to="/work/stratalite" className="text-accent hover:underline">[Stratalite]</Link>
                <Link to="/work/manbal" className="text-accent hover:underline">[Manbal.ai]</Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
