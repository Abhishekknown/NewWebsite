import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionIndicator from '../components/SectionIndicator';

const sections = [
  { id: 'hero',        label: 'Overview'         },
  { id: 'setup',       label: 'The Setup'         },
  { id: 'role',        label: 'My Role'           },
  { id: 'insight',     label: 'User Insight'      },
  { id: 'decision-1',  label: 'Onboarding'        },
  { id: 'decision-2',  label: 'Multi-Child'       },
  { id: 'decision-3',  label: 'Sizing Anxiety'    },
  { id: 'post',        label: 'Post-Purchase'     },
  { id: 'constraints', label: 'Constraints'       },
  { id: 'closing',     label: 'The Bigger Thing'  },
];

function ImgSlot({
  imageRef,
  caption,
  aspect = 'aspect-video',
}: {
  imageRef: string;
  caption: string;
  aspect?: string;
}) {
  return (
    <figure className="my-12">
      <div className={`${aspect} w-full bg-surface border border-border flex flex-col items-center justify-center gap-3 px-8 text-center`}>
        <span className="text-accent text-[0.65rem] uppercase tracking-[0.2em] font-bold">{imageRef}</span>
        <span className="text-text-faint text-xs max-w-[500px] leading-relaxed">{caption}</span>
      </div>
      <figcaption className="text-text-faint text-[0.72rem] italic text-center mt-3 leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}

function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-accent/8 border border-accent/25 p-6 my-8">
      <span className="text-accent text-[0.65rem] uppercase tracking-[0.18em] font-bold block mb-2">Insight</span>
      <p className="text-text-primary text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function Decision({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-surface border-l-2 border-accent p-6 my-6">
      <span className="text-accent text-[0.65rem] uppercase tracking-[0.18em] font-bold block mb-2">The Decision</span>
      <p className="text-text-muted text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function Why({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-border bg-surface/50 p-6 my-6">
      <span className="text-text-faint text-[0.65rem] uppercase tracking-[0.18em] font-bold block mb-2">Why It Matters</span>
      <p className="text-text-muted text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <span className="text-text-faint text-[0.65rem] uppercase tracking-[0.2em] font-bold">{n}</span>
      <h2 className="text-[1.8rem] text-text-primary mt-1 leading-tight">{children}</h2>
    </div>
  );
}

export default function SkooltagCaseStudy() {
  return (
    <div className="relative">
      <SectionIndicator sections={sections} />

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section id="hero" className="bg-surface border-b border-border pt-28 pb-16 px-gutter">
        <div className="max-w-[1200px] mx-auto">
          <Link to="/" className="text-text-muted text-[0.875rem] hover:text-accent transition-colors">
            ← All work
          </Link>

          <div className="flex flex-wrap gap-2 mt-6">
            {['Product Design Lead', 'Android App', 'D2C E-Commerce', 'India', '0→1'].map(t => (
              <span key={t} className="bg-surface-2 text-text-muted text-[0.7rem] border border-border px-2 py-1">{t}</span>
            ))}
          </div>

          <h1 className="text-h2 text-text-primary mt-6">SkoolTag</h1>
          <p className="text-accent text-xl font-medium mt-2 max-w-[640px]">
            Digitizing a 35-year-old trust.
          </p>
          <p className="text-text-muted text-base mt-2 max-w-[640px]">
            How do you turn a neighborhood shopkeeper into a mobile app?
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { label: 'Role',     value: 'Product Design Lead'                          },
              { label: 'Team',     value: 'Graphic Designer · Motion Designer · Developer' },
              { label: 'Platform', value: 'Android App + Marketing Website'               },
              { label: 'Live',     value: 'skooltag.com'                                  },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-text-faint text-xs uppercase tracking-widest font-bold mb-1">{label}</div>
                <div className="text-text-primary text-sm">{value}</div>
              </div>
            ))}
          </div>

          <figure className="mt-12">
            <img
              src="/images/skooltag-home-screen.png"
              alt="SkoolTag home screen - bold tile variant showing pre-built school package"
              className="w-full border border-border object-cover"
            />
            <figcaption className="text-text-faint text-[0.72rem] italic text-center mt-3">
              Home screen - bold tile variant. The parent's package, pre-built, waiting.
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="max-w-[780px] mx-auto px-gutter py-16">

        {/* ── OPENING QUOTE ─────────────────────────────────── */}
        <div className="my-20 text-center">
          <p className="text-text-primary text-2xl md:text-3xl font-display italic leading-snug max-w-[600px] mx-auto">
            "The hardest part was not designing an app.<br />
            It was making software feel like a person<br />
            who already knows you."
          </p>
        </div>

        <hr className="border-t border-border my-4" />

        {/* ── 2. THE SETUP ──────────────────────────────────── */}
        <section id="setup" className="mb-24 mt-16">
          <Reveal>
            <Label n="The Setup">SkoolTag has been selling school uniforms in Delhi NCR since 1989.</Label>
            <div className="text-text-muted leading-relaxed space-y-4 text-[0.95rem]">
              <p>
                For 35 years the entire business ran offline. Parents would walk in at the start of every
                academic session, tell the shopkeeper the school, class, and house color - and walk out 20
                minutes later with exactly the right package. No browsing. No confusion. No returns.
              </p>
              <p>
                But the world moved. Parents started expecting the same convenience from their phones.
                Competitors were showing up online. A business built on physical trust needed to survive
                on a 6-inch screen without losing what made it work.
              </p>
            </div>

            {/* Offline vs Online comparison */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-surface border border-border p-6 space-y-3">
                <div className="text-accent text-[0.65rem] uppercase tracking-widest font-bold">Offline Experience</div>
                {[
                  'Parent walks in',
                  '"Class VI, Amity Global, Ujjain house"',
                  'Shopkeeper pulls exact package',
                  'Done in 20 minutes',
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-accent mt-1 text-xs">→</span>
                    <span className="text-text-muted text-sm">{s}</span>
                  </div>
                ))}
              </div>
              <div className="bg-surface border border-border p-6 space-y-3">
                <div className="text-text-faint text-[0.65rem] uppercase tracking-widest font-bold">The Problem Online</div>
                {[
                  'Parent opens a generic app',
                  'Searches for school',
                  'Scrolls 40 products',
                  'Guesses size. Wrong shirt. Returns. Abandons.',
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-text-faint mt-1 text-xs">→</span>
                    <span className="text-text-muted text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* ── 3. MY ROLE ────────────────────────────────────── */}
        <section id="role" className="mb-24">
          <Reveal>
            <Label n="My Role">I led product design end to end - from concept to shipped product.</Label>
            <p className="text-text-muted text-[0.95rem] leading-relaxed mb-8">
              That meant defining the user, mapping every flow, designing every screen and state,
              building the design system, briefing the graphic designer on brand assets, directing the
              motion designer on illustrations, and working directly with the developer through
              implementation. The graphic designer owned the logo. I owned everything else.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'User Research (contextual)',
                'Information Architecture',
                'User Flows',
                'Wireframes',
                'High-Fidelity UI',
                'Interaction Design',
                'Error + Empty States',
                'Design System',
                'Developer Handoff',
              ].map(r => (
                <div key={r} className="border border-border bg-surface px-4 py-3 text-text-muted text-xs flex items-center gap-2">
                  <span className="text-accent">→</span>
                  {r}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* ── 4. USER INSIGHT ───────────────────────────────── */}
        <section id="insight" className="mb-24">
          <Reveal>
            <Label n="Before Figma">This app is not for students. It is for parents.</Label>
            <div className="text-text-muted leading-relaxed space-y-4 text-[0.95rem]">
              <p>
                One thing had to be settled before a single frame was drawn. A parent buying school uniforms
                is not browsing for fun. They are completing a task - stressed about the school year
                starting, worried about sizing, possibly buying for more than one child. They want it done
                fast, done correctly, delivered.
              </p>
              <p>
                This single insight changed everything downstream: the navigation, the onboarding logic,
                the profile system, the sizing confirmation, the post-purchase flows. Every decision traces
                back to one person.
              </p>
            </div>

            {/* Persona card */}
            <div className="border-l-2 border-accent bg-surface border border-border p-8 mt-10">
              <div className="text-accent text-[0.65rem] uppercase tracking-widest font-bold mb-4">Primary User</div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="space-y-1">
                  <div className="text-text-primary font-semibold text-lg">Priya Sharma, 38</div>
                  <div className="text-text-muted text-sm">Parent of 2 · Delhi NCR</div>
                  <p className="text-text-primary italic text-sm mt-3 max-w-[320px] leading-relaxed">
                    "I just want the right uniform delivered before school starts. I don't want to browse."
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    ['Buying for',      'Ankur (Class VI) + Ria (Class III)'],
                    ['Schools',         'Different schools, different packages'],
                    ['Mental model',    'The neighbourhood shopkeeper'],
                    ['Key anxiety',     'Will it fit? Will school accept it?'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-3">
                      <span className="text-text-faint w-28 shrink-0">{k}</span>
                      <span className="text-text-muted">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* ── 5. DECISION 1 - ONBOARDING ────────────────────── */}
        <section id="decision-1" className="mb-24">
          <Reveal>
            <Label n="Design Decision 01">The Shopkeeper Moment</Label>

            <Insight>
              The offline experience worked because of context. The shopkeeper already knew everything.
              The parent just confirmed it. Online, that context is thrown away and rebuilt from scratch
              every time.
            </Insight>

            <div className="text-text-muted leading-relaxed space-y-4 text-[0.95rem]">
              <p>
                I designed the onboarding to do one job: collect context the way a shopkeeper collects it.
                Parent opens the app. Verifies phone number. Gets asked one thing at a time.
              </p>
              <p>
                Which school does your child go to? They pick from a visual grid of school crests -
                immediately familiar, not a dropdown of text strings. Then: child name, class, gender,
                house. Four inputs. The exact same four things a parent tells the shopkeeper.
              </p>
            </div>

            <Decision>
              All of that data flows into the system and pre-configures their package. When the parent
              reaches the home screen, the package is already there - built for their child's school,
              class, house color. School-approved items. Correct uniform type. Right gender cut.
              They do not browse. They confirm. The app becomes the shopkeeper.
            </Decision>

            <Why>
              Every additional decision in a purchase flow increases the chance of abandonment.
              By front-loading context collection in onboarding, the shopping step becomes a
              confirmation step, not a discovery step.
            </Why>

            <figure className="my-12">
              <img
                src="/images/skooltag-onboarding.png"
                alt="SkoolTag onboarding flow - school selection grid and child profile form"
                className="w-full border border-border object-cover"
              />
              <figcaption className="text-text-faint text-[0.72rem] italic text-center mt-3">
                Four inputs. The same four things a parent tells the shopkeeper.
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* ── 6. DECISION 2 - MULTI-CHILD ───────────────────── */}
        <section id="decision-2" className="mb-24">
          <Reveal>
            <Label n="Design Decision 02">Multi-Child, Zero Friction</Label>

            <Insight>
              A parent with two children in two different schools needs to switch contexts while
              shopping - without losing their place, re-doing selections, or navigating to a
              settings menu.
            </Insight>

            <div className="text-text-muted leading-relaxed space-y-4 text-[0.95rem]">
              <p>
                Most apps bury profile switching inside account settings. By the time a parent has
                found the menu, switched the profile, and navigated back, they have lost the thread
                entirely. Worse, they have been reminded that this is software - not a shopkeeper who
                just adapts.
              </p>
            </div>

            <Decision>
              Put the active child profile as a persistent chip at the very top of every screen. One tap
              to switch. The entire experience - packages, recommended items, house color selections -
              reconfigures instantly. No navigation. No back button. No starting over.
            </Decision>

            <Why>
              In Indian households, one parent typically manages multiple children's school needs
              simultaneously. Designing for this reality, not the single-child ideal user, is what
              makes the app feel made for them.
            </Why>

            <figure className="my-12">
              <img
                src="/images/skooltag-buying-for-switcher.png"
                alt="SkoolTag Buying For switcher - persistent chip that reconfigures the entire experience"
                className="w-full border border-border object-cover"
              />
              <figcaption className="text-text-faint text-[0.72rem] italic text-center mt-3">
                Always visible. One tap. The entire experience reconfigures.
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* ── 7. DECISION 3 - SIZING ────────────────────────── */}
        <section id="decision-3" className="mb-24">
          <Reveal>
            <Label n="Design Decision 03">Addressing the Real Reason Parents Don't Buy Uniforms Online</Label>

            <Insight>
              Sizing anxiety is the number one reason parents abandon uniform purchases online.
              Not price. Not trust. The fear of ordering the wrong size and dealing with a return
              on a school-specific item.
            </Insight>

            <div className="text-text-muted leading-relaxed text-[0.95rem] mb-6">
              <p>
                A school uniform is not a t-shirt. It is tied to a school, a house color, a gender cut,
                and a size system that varies across brands. Getting it wrong means a child goes to school
                on Day 1 in the wrong clothes. I addressed this at three deliberate points in the
                journey - not once, not as a disclaimer, but as a designed response to a real fear.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  n: '01',
                  title: 'The Size Chart',
                  body: 'Every item in the package comes with a size selector, a size chart link, and an international conversion guide covering UK, US, EU, IT, and INTL - because parents in Delhi NCR do not all reference the same system.',
                },
                {
                  n: '02',
                  title: 'The Important Item Flag',
                  body: 'If a parent tries to remove a school-essential item, the app flags it without blocking them. This item matters - are you sure? The decision stays with the parent. The app ensures it is informed.',
                },
                {
                  n: '03',
                  title: 'The Final Checkpoint',
                  body: 'Right before checkout - one deliberate pause. "Did you get everything right?" A short checklist. Every item accounted for. Every size confirmed. This is the app doing what a good shopkeeper does.',
                },
              ].map(({ n, title, body }) => (
                <div key={n} className="flex gap-6 border border-border bg-surface p-6">
                  <span className="text-accent font-bold text-lg shrink-0">{n}</span>
                  <div>
                    <div className="text-text-primary font-semibold text-sm mb-1">{title}</div>
                    <p className="text-text-muted text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Why>
              SkoolTag's offline business relied on the shopkeeper catching mistakes before the parent
              left. This checkpoint is that moment - digitized. It reduces wrong-size orders,
              reduces returns, and builds confidence in the first-time buyer.
            </Why>

            <ImgSlot
              imageRef="Image 4 - Package Builder + Size Selector + Confirmation Modal"
              caption="Sizing anxiety addressed at three points in the journey. Not once."
              aspect="aspect-[16/6]"
            />
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* ── 8. POST-PURCHASE ──────────────────────────────── */}
        <section id="post" className="mb-24">
          <Reveal>
            <Label n="After the Order">Where Trust Is Actually Built</Label>
            <div className="text-text-muted leading-relaxed space-y-4 text-[0.95rem]">
              <p>
                Most portfolios show the happy path. The real product is what happens when things do
                not go perfectly. The post-purchase experience was designed completely -
                order tracking, item-level replacement, item-level cancellation, and invoice download.
              </p>
              <p className="text-text-primary font-medium">
                A parent who got the wrong size shirt and still had a smooth replacement experience
                comes back next year. One who had to call and explain themselves twice does not.
              </p>
            </div>

            <ImgSlot
              imageRef="Image 8 - Orders + Tracking"
              caption="Order status has a color language. Yellow for arriving, green for delivered, red for cancelled. Not arbitrary - systematic."
              aspect="aspect-[16/7]"
            />

            <ImgSlot
              imageRef="Image 9 - Replacement Flow"
              caption="Edge cases designed before they became support tickets. Reason, correction, confirmation."
              aspect="aspect-[16/7]"
            />

            <ImgSlot
              imageRef="Image 10 - Cancellation"
              caption="Cancel what's wrong. Keep the rest. Stay in control."
              aspect="aspect-[16/7]"
            />
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* ── 9. CONSTRAINTS ────────────────────────────────── */}
        <section id="constraints" className="mb-24">
          <Reveal>
            <Label n="What Made This Hard">The conditions these decisions were made under.</Label>
            <p className="text-text-muted text-[0.95rem] mb-8">
              Good case studies show the decisions. Great ones show the conditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                {
                  title: 'No User Research Budget',
                  body: 'No formal usability sessions, no paid participants. Design decisions were based on contextual understanding of the Indian parent user - informed by the client\'s 35 years of direct customer relationships.',
                },
                {
                  title: 'No Design System to Inherit',
                  body: 'Brand, color language, illustration style, component library, and interaction patterns all created from zero - while a developer was shipping in real time.',
                },
                {
                  title: 'No Product Manager',
                  body: 'I was coordinating a graphic designer, a motion designer, and a developer - while also designing. Every deliverable required understanding what each discipline needed from it.',
                },
              ].map(({ title, body }, i) => (
                <div key={i} className="border border-border bg-surface p-6">
                  <div className="text-accent font-bold text-xs mb-3">0{i + 1}</div>
                  <h4 className="text-text-primary font-semibold text-sm mb-2">{title}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="text-text-faint text-[0.65rem] uppercase tracking-widest font-bold">What I Would Change</div>
              {[
                {
                  label: 'Home screen density',
                  body: 'The home screen tries to do too much at once. A second version would give the pre-configured school package its own screen entirely. One job. One screen. Then everything else.',
                },
                {
                  label: 'The billing label',
                  body: '"FREE Delivery" is labeled but the value next to it reads "None." Does that mean no free delivery, or that the charge is zero? A parent in checkout should never have to interpret a number. Copy is design. This one slipped.',
                },
              ].map(({ label, body }, i) => (
                <div key={i} className="border border-border bg-surface/50 p-6">
                  <h4 className="text-text-primary font-semibold text-sm mb-2">{label}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="border-t border-border my-16" />

        {/* ── 10. CLOSING ───────────────────────────────────── */}
        <section id="closing" className="mb-24">
          <Reveal>
            <Label n="The Bigger Thing">Designing for India is not designing a Western product with a rupee sign swapped in.</Label>
            <div className="text-text-muted leading-relaxed space-y-4 text-[0.95rem]">
              <p>
                A parent in Vasundhara, Ghaziabad has a mental model shaped by decades of walking into
                a physical store where the shopkeeper knows her, knows her children, and knows exactly
                what to pull off the shelf. The app is not competing with Amazon or Flipkart.
              </p>
              <p className="font-medium text-text-primary">
                It is competing with a shopkeeper who has known the family for years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
              {[
                { step: 'Onboarding',               metaphor: 'The greeting',           body: 'The shopkeeper recognises you and asks about your kids.' },
                { step: 'Pre-built Package',         metaphor: 'Knowing what you need',  body: 'The items are already pulled before you finish the sentence.' },
                { step: '"Did you get everything?"', metaphor: 'One last check',         body: 'He asks once more before you walk out the door.' },
              ].map(({ step, metaphor, body }) => (
                <div key={step} className="border border-border bg-surface p-6">
                  <div className="text-accent text-[0.65rem] uppercase tracking-widest font-bold mb-1">{step}</div>
                  <div className="text-text-primary font-semibold text-sm mb-2">{metaphor}</div>
                  <p className="text-text-muted text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <div className="text-center py-12 px-6">
              <p className="text-text-primary text-2xl md:text-3xl font-display italic leading-snug max-w-[580px] mx-auto">
                "Understand what a person already trusts.<br />
                Build toward that."
              </p>
            </div>
          </Reveal>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="bg-surface border border-border p-10 md:p-16 text-center mt-8">
          <Reveal>
            <h3 className="text-h3 text-text-primary mb-4">
              Building a 0→1 product and need someone who can handle the full surface?
            </h3>
            <p className="text-text-muted text-sm mb-8">
              Role: Product Design Lead · Platform: Android App + Marketing Website · Year: 2024
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:kumarabhishekbuild@gmail.com?subject=Discovery Call Request"
                className="inline-block bg-accent text-black px-10 py-4 font-semibold text-base hover:bg-accent-dim transition-all"
              >
                Book a discovery call →
              </a>
              <a
                href="https://skooltag.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-border text-text-muted px-10 py-4 font-semibold text-base hover:text-accent hover:border-accent transition-all"
              >
                View Live Product ↗
              </a>
            </div>
            <div className="mt-10 text-text-muted text-sm">
              Next project →
              <div className="flex justify-center gap-4 mt-3">
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
