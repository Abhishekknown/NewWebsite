# SKOOLTAG — PRODUCT DESIGN CASE STUDY
## Full Content + Layout Brief for Agent

---

## META / AGENT INSTRUCTIONS

This document is a complete case study brief for building an HTML/web portfolio page.
Every section includes:
- The written content (exact copy)
- Layout instruction (how to present it visually)
- Image instruction (which image file, how to crop/display it)
- Annotation instruction (captions, callout text)
- Tone notes (so AI does not over-design or under-design)

**Design direction:**
- Clean, editorial, minimal
- Inspired by: Linear.app docs, Stripe case studies, UX Collective articles
- Font suggestion: Inter or Geist for body, a heavier weight for headings
- Color: Pull yellow (#FFC107 or similar) as an accent from the SkoolTag brand
- Background: White or off-white (#FAFAFA)
- No carousels, no flashy animations, let the content breathe
- Mobile responsive
- Each section should feel like a magazine spread, not a slide deck

---

---

## SECTION 1 — HERO

### Layout
Full-width hero section. Left side has text. Right side or background has a large app mockup.

### Copy

```
SkoolTag
```

**Subheading:**
```
Digitizing a 35-year-old trust.
How do you turn a neighborhood shopkeeper into a mobile app?
```

**Project Tags (display as chips/pills):**
```
Product Design Lead   |   Android App   |   D2C E-commerce   |   India
```

**Team line (small, muted text):**
```
Team: 1 Graphic Designer · 1 Motion Designer · 1 Developer · Me (Product Design Lead)
```

**Live product link:**
```
skooltag.com ↗
```

### Image Instruction
- Use: IMAGE 2 (Home/Dashboard screen)
- Pick the bold tile variant (first column of Image 2)
- Display as a floating phone mockup on right side of hero
- Slight drop shadow, no border
- Tilt 3-5 degrees clockwise for energy, or keep flat for minimal feel

---

---

## SECTION 2 — OPENING QUOTE / HOOK

### Layout
Full-width centered pull quote. Large text, muted background or just whitespace above and below. 
Think: Magazine chapter opener.

### Copy

```
"The hardest part was not designing an app.
It was making software feel like a person who already knows you."
```

**Agent note:** Display this as a blockquote visually. Large font. Centered. Add a thin left border or 
just use scale/weight to make it stand out. No quotation mark graphic needed, keep it typographic.

---

---

## SECTION 3 — THE CONTEXT

### Layout
Two column: Left is text, right is a simple visual or just whitespace. 
This is a reading section, not a visual section. Let it breathe.

### Heading
```
The Setup
```

### Copy

```
SkoolTag has been selling school uniforms in Delhi NCR since 1989.

For 35 years, the entire business ran offline. Parents would walk into the store 
at the start of every academic session, tell the shopkeeper which school their child 
attended, which class, which house color — and the shopkeeper would pull out the exact 
package. No browsing. No decision fatigue. No returns.

It worked. Generations of families. Hundreds of schools across Delhi NCR.

But the world moved. Parents started expecting the same convenience from their phones 
that they got from their neighborhood store. Competitors were showing up online. 
A business built on physical trust and personal relationships needed to survive 
on a 6-inch screen — without losing what made it work in the first place.
```

### Visual — Offline vs Online Mental Model
**Agent instruction:** Create a simple two-column comparison diagram inline:

```
LEFT COLUMN:                          RIGHT COLUMN:
[ Offline Experience ]                [ The Problem Online ]

Parent walks in                       Parent opens a generic app
↓                                     ↓
Says: "Class VI,                      Searches for school
Amity Global, Ujjain house"           ↓
↓                                     Scrolls 40 products
Shopkeeper pulls                      ↓
exact package                         Guesses size
↓                                     ↓
Done in 20 minutes                    Hopes for the best
                                      ↓
                                      Wrong size. Returns. Abandons.
```

Style this as a clean two-column card with subtle background. Not a flowchart, just a readable comparison.

---

---

## SECTION 4 — MY ROLE

### Layout
Tight, scannable. Use a simple card or a highlighted box. Short section, do not over-design.

### Heading
```
What I Did
```

### Copy

```
I led the product design end to end — from concept to shipped product.

That meant: defining the user, mapping every flow, designing every screen and state, 
building the design system, briefing the graphic designer on brand assets, 
directing the motion designer on illustrations and animations, 
and working directly with the developer through implementation.

The graphic designer owned the logo. I owned everything else.
```

**Responsibility breakdown (display as a simple 2-column list or tags):**

```
User Research (contextual)    |   Information Architecture
User Flows                    |   Wireframes
High-Fidelity UI              |   Interaction Design
Error + Empty States          |   Design System
Developer Handoff             |   Cross-team Direction
```

---

---

## SECTION 5 — THE USER INSIGHT

### Layout
This is a key insight section. Give it visual weight. Dark background panel or 
a large highlighted callout. This is the most important strategic section.

### Heading
```
Before Figma: Who Is Actually Using This?
```

### Copy

```
One thing had to be settled before a single frame was drawn.

This app is not for students. It is for parents.

A parent buying school uniforms is not browsing for fun. 
They are completing a task. They are stressed about the school year starting. 
They are unsure about sizing. They might be buying for more than one child. 
They want it done fast, done correctly, and delivered to their door.

This single insight changed everything downstream:
the navigation, the onboarding logic, the profile system, 
the sizing confirmation, the post-purchase flows.

Every decision traces back to one person:
a time-poor parent completing a task, not a teenager scrolling a catalogue.
```

### Visual Instruction
**Agent:** Create a simple "User Persona Card" — not a formal UX persona, 
just a clean card with the following:

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   PRIMARY USER                                      │
│                                                     │
│   Priya Sharma, 38                                  │
│   Parent of 2 | Delhi NCR                          │
│                                                     │
│   "I just want the right uniform delivered          │
│    before school starts. I don't want to browse."   │
│                                                     │
│   Buying for: Ankur (Class VI) + Ria (Class III)   │
│   Schools: Different schools, different packages    │
│   Mental model: The neighborhood shopkeeper         │
│   Key anxiety: Will it fit? Will school accept it?  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Style: Clean card, subtle border, yellow accent on left edge.

---

---

## SECTION 6 — DESIGN DECISION 1 — ONBOARDING

### Layout
Full section. Left: text with "Insight → Decision → Why It Matters" structure. 
Right: Image with annotation callouts.

### Label (small caps, muted)
```
DESIGN DECISION 01
```

### Heading
```
The Shopkeeper Moment
```

### Subheading
```
Insight → Decision → Why It Matters
```

### Insight (display in a highlighted callout box)
```
INSIGHT
The offline experience worked because of context. 
The shopkeeper already knew everything. 
The parent just confirmed it.
Online, that context is thrown away and rebuilt from scratch every time.
```

### Decision Copy

```
I designed the onboarding to do one job: collect context the way a shopkeeper collects it.

Parent opens the app. Verifies phone number. Gets asked one thing at a time.

Which school does your child go to?
They pick from a visual grid of school crests — immediately familiar, 
not a dropdown of text strings.

Then: child name, class, gender, house.

Four inputs. The exact same four things a parent tells the shopkeeper.

What happens next is where the product thinking is.

All of that data flows into the system and pre-configures their package. 
When the parent reaches the home screen, the package is already there — 
built for their child's school, class, house color. 
School-approved items. Correct uniform type. Right gender cut.

They do not browse. They confirm.

The app becomes the shopkeeper.
```

### Why It Matters (callout)

```
WHY IT MATTERS
Every additional decision in a purchase flow increases the chance of abandonment. 
By front-loading context collection in onboarding, 
the shopping step becomes a confirmation step, not a discovery step.
Less browsing. Less confusion. Less abandonment.
```

### Image Instruction
- Use: IMAGE 3 (User Onboarding From)
- Display both screens: school selection grid + child profile form
- Show side by side as phone mockups
- Annotate with numbered callouts:
  ```
  1 → School crests shown as visual grid, not dropdown
  2 → Search bar for schools not in the grid
  3 → Disabled CTA until school is selected (good gate)
  4 → House names pulled from backend (Ujjain, Kashi, Takshshila)
  5 → Gender toggle, not dropdown
  ```
- Caption below: "Four inputs. The same four things a parent tells the shopkeeper."

---

---

## SECTION 7 — DESIGN DECISION 2 — THE BUYING FOR SWITCHER

### Layout
Left: Image with annotation. Right: Text. (Flip from previous section for visual rhythm.)

### Label
```
DESIGN DECISION 02
```

### Heading
```
Multi-Child, Zero Friction
```

### Insight callout
```
INSIGHT
A parent with two children in two different schools needs to switch contexts 
while shopping — without losing their place, re-doing their selections, 
or navigating back to a settings menu.
```

### Copy

```
Most apps bury profile switching inside account settings.

That is the wrong answer. By the time a parent has found the menu, 
switched the profile, and navigated back, they have lost the thread entirely. 
Worse, they have been reminded that this is software, not a shopkeeper who just adapts.

The decision: put the active child profile as a persistent chip 
at the very top of every screen.

One tap to switch. 

The entire experience — packages, recommended items, school-specific bundles, 
house color selections — reconfigures instantly for that child. 
No navigation. No back button. No starting over.

This does not look like much on a static screen. 
But it completely changes how the app feels when you are actually using it.
```

### Why It Matters callout

```
WHY IT MATTERS
In Indian households, one parent typically manages multiple children's 
school needs simultaneously. Designing for this reality, 
not the single-child ideal user, is what makes the app feel made for them.
```

### Image Instruction
- Use: IMAGE 6 (Add New User) — specifically the top header from any screen showing the "Buying For" chip
- Also pull the "Select profile" bottom sheet from Image 6
- Display as: header strip cropped and enlarged (show the chip in detail) + bottom sheet alongside
- Annotate:
  ```
  1 → "Buying For" chip — always visible, top of every screen
  2 → Child name, school, class, gender, house all visible at a glance
  3 → Profile switcher bottom sheet — appears on tap
  4 → "Add Profile" option in the same sheet — no navigation needed
  ```
- Caption: "Always visible. One tap. The entire experience reconfigures."

---

---

## SECTION 8 — DESIGN DECISION 3 — SIZING ANXIETY

### Layout
Full width section. Text left. Three screen strip of images on right or below.

### Label
```
DESIGN DECISION 03
```

### Heading
```
Addressing the Real Reason Parents Don't Buy Uniforms Online
```

### Insight callout
```
INSIGHT
Sizing anxiety is the number one reason parents abandon uniform purchases online. 
Not price. Not trust. The fear of ordering the wrong size 
and having to deal with a return on a school-specific item.
```

### Copy

```
A school uniform is not a t-shirt. It is a specific item tied to a school, 
a house color, a gender cut, and a sizing system that varies across brands. 
Getting it wrong means a child goes to school on Day 1 in the wrong clothes.

I addressed this anxiety at three deliberate points in the journey — 
not once, not as a disclaimer, but as a designed response to a real fear.

POINT 1 — THE SIZE CHART
Every item in the package comes with a size selector, 
a size chart link, and an international conversion guide 
covering UK, US, EU, IT, and INTL measurements.
Parents in Delhi NCR come from every background. 
They do not all reference the same size system.

POINT 2 — THE IMPORTANT ITEM FLAG
If a parent tries to remove an item the school considers essential, 
the app flags it. Not blocking them. Just saying: 
this item matters, are you sure?
The decision stays with the parent. The app just ensures it is informed.

POINT 3 — THE FINAL CHECKPOINT
Right before checkout — one deliberate pause.
"Did you get everything right?"
A short checklist. Every item accounted for. Every size confirmed.

This is not friction. This is the app doing what a good shopkeeper does.
Asking: "Are you sure you have got everything? School starts Monday."
```

### Why It Matters callout

```
WHY IT MATTERS
SkoolTag's offline business relied on the shopkeeper catching mistakes before the parent left.
This checkpoint is that moment — digitized. 
It reduces wrong-size orders. It reduces returns. 
It builds confidence in the first-time buyer.
```

### Image Instruction
- Use: IMAGE 4 (Package/Cart flow)
- Show 3 screens as a horizontal strip:
  1. Size selector row with size chart link visible
  2. "Important for academics" warning toast
  3. "Did you got everything right?" modal
- Annotate:
  ```
  1 → Numeric size row (Indian sizing: 24-38)
  2 → "Size chart >" link on every item — not hidden
  3 → International size guide covers 5 systems
  4 → Warning: non-blocking, informative, not alarming
  5 → Checklist checkpoint before final checkout
  ```
- Caption: "Sizing anxiety addressed at three points in the journey. Not once."

---

---

## SECTION 9 — THE LOGIN FLOW

### Layout
Smaller section. Horizontal strip of screens with annotations. 
Not a major section — but shows craft and edge case thinking.

### Heading
```
The Entry Point — Fast, Familiar, Indian
```

### Copy

```
OTP-based phone login. No email required. No password.

In India, a phone number is identity. 
Everyone has one. Not everyone remembers an email.

The login flow reflects that reality. 
A parent can be inside the app in under 60 seconds.

What was designed explicitly:
— Empty state of phone field
— Filled state with country code pre-selected (+91)
— OTP sent confirmation with editable number
— OTP empty vs OTP filled states
— OTP error state with clear message
— Resend countdown (20 seconds)
— Name entry for new users with validation error state
— Button disabled state until OTP is complete

The illustrated character in the header is not decoration. 
It changes state with the flow — holding a phone on the number screen, 
showing feedback on the OTP screen. 
Small moment of delight in a functional flow.
```

### Image Instruction
- Use: IMAGE 1 (Login Flow)
- Show 4 screens in a horizontal strip:
  1. Empty phone field
  2. Filled phone field
  3. OTP empty state (submit button disabled)
  4. OTP error state (wrong OTP message)
- Annotate:
  ```
  1 → +91 pre-filled — India-specific, not generic
  2 → Custom numeric keyboard shown — designed for the actual device behavior
  3 → Submit disabled until OTP fields complete
  4 → Error: "Incorrect OTP, please enter correct OTP again" — specific, not generic
  5 → Resend countdown — prevents spam, manages expectation
  ```
- Caption: "Every state designed. Error handling was not an afterthought."

---

---

## SECTION 10 — THE HOME SCREEN

### Layout
Big visual section. Lead with images, support with text. Show the A/B thinking prominently.

### Heading
```
The Home Screen — Personalization Wearing a Shop Front
```

### Copy

```
The home screen is doing more work than it looks like.

It is personalized to the active child profile. 
It surfaces the school-specific package first — the primary action. 
It runs promotional bundles in the banner strip for conversions. 
It has an editorial section for new seasonal items. 
It breaks categories into quick-access tiles for browsing.

All of this, in the right hierarchy, for a parent who just wants to 
find their child's package and check out.

THE A/B MOMENT
Two variants of the package display were designed from the start.

Variant A: Transparent cards — showing the physical uniform through the packaging. 
Closer to what the parent sees in the physical store.

Variant B: Bold information tiles — more detail on the package upfront, 
pricing prominent, offer badge visible.

Rather than picking one and shipping it as a design opinion, 
both were built and handed to the team to test with real users.

Designing for experimentation rather than designing for delivery 
is a different way of thinking about the work. 
It means the product does not end at handoff.
```

### Image Instruction
- Use: IMAGE 2 (Home/Dashboard)
- Show the first two variants side by side as phone mockups
- Make them large — this is a visual-heavy section
- Annotate:
  ```
  1 → "Buying For" switcher — top of screen, always present
  2 → Package cards — school-specific, pre-configured
  3 → Promotional banner — business conversion layer
  4 → Category tiles — discovery layer below the fold
  5 → VARIANT A vs VARIANT B label on each mockup
  ```
- Caption: "Two variants. Built in Figma. Shipped both. Let users decide."

---

---

## SECTION 11 — PRODUCT DETAIL + TRUST

### Layout
Two screens side by side. Annotations on the trust signals specifically.

### Heading
```
The Product Page — Trust is the Feature
```

### Copy

```
A parent landing on a product page has one question before anything else:
Is this actually approved by my child's school?

The "School Approved" badge is not decoration. 
It is the answer to that question, placed at the top of every product, 
before price, before description, before anything else.

Everything else on the page — the material composition table, 
the country of origin, the product bullets, the manufacturer details — 
exists to support one feeling: confidence.

The size guide is a full modal covering UK, US, EU, IT, and INTL measurements.
Not a static image. An interactive reference a parent can use 
while holding the last uniform their child grew out of.
```

### Image Instruction
- Use: IMAGE 5 (Product Page)
- Show the middle screen (clean product detail) and the right screen (size guide modal open)
- Side by side as phone mockups
- Annotate:
  ```
  1 → "School Approved" stamp — placed above the fold, before price
  2 → Price with MRP strikethrough + % off badge — transparent pricing
  3 → "Inclusive of all taxes" — no hidden charges, builds trust
  4 → Material + Country of Origin table — parents can verify quality
  5 → Size guide modal — 5 international systems in one reference
  6 → "Select & Confirm" CTA — not "Add to Cart" — language matters
  ```
- Caption: "Every element on this page answers one question: can I trust this?"

---

---

## SECTION 12 — CHECKOUT

### Layout
Left: text. Right: 2-3 screen strip.

### Heading
```
Checkout — Getting Out of the Way
```

### Copy

```
The checkout flow had one job: do not introduce new anxiety 
into a parent who has already made their decision.

Location detection with map confirmation. 
Manual address entry as a fallback with pin code, locality, and house label. 
Bill breakdown showing every line item transparently — item total, 
delivery charge, GST, and the total.

Privacy notice is present but not alarming. 
Parents need to know their data is being used. 
They do not need a modal demanding attention.

Order confirmation comes in two visual states — 
an illustrated confirmation for warmth, 
and a clean checkmark state for clarity. 
Both designed, both valid depending on context.
```

### Image Instruction
- Use: IMAGE 7 (Checkout)
- Show 3 screens: map location screen, manual address form, order confirmed
- Annotate:
  ```
  1 → Map shows delivery pin — parent can verify before confirming
  2 → "Turn on your locations" — graceful permission request, not a blocker
  3 → Manual address fallback — covers users who deny location
  4 → Bill breakdown — every line visible, no surprises
  5 → Order confirmation — warm illustration, then clean checkmark variant
  ```
- Caption: "Get out of the way. Let the parent complete their task."

---

---

## SECTION 13 — POST PURCHASE (ORDERS + TRACKING)

### Layout
Full section. Lead with insight statement. Then image strip with annotations.

### Heading
```
After the Order — Where Trust Is Actually Built
```

### Copy

```
Most apps design the happy path and ship. 
The real product is what happens when things do not go perfectly.

The post-purchase experience was designed completely:

ORDER TRACKING
Step-by-step timeline: Order Placed, Order Confirmed, 
Product Packaging, Product Shipped. 
Each state has a timestamp. Each state is distinct. 
The parent always knows exactly where their order is.

ORDER LIST
Color-coded status chips — yellow for arriving, 
green for delivered, red for cancelled. 
A visual language for order status. Not arbitrary. Systematic.
Filter by order type and date range.

EMPTY STATE
The no-orders screen has an illustration and a forward-looking CTA: 
"Explore Our Products." 
It does not just say "No orders found." 
It guides the parent to the next action.

INVOICE DOWNLOAD
Available directly from the order detail screen. 
Parents need this for school records and reimbursements.
```

### Image Instruction
- Use: IMAGE 8 (Your Order / Current State)
- Show 3 screens: empty orders state, order list with status chips, order tracking timeline
- Annotate:
  ```
  1 → Empty state: illustration + forward CTA, not just a message
  2 → Status chips: color-coded (yellow/green/red)
  3 → Order tracking: sequential steps with timestamps
  4 → "Download Invoice" — accessible from order detail
  5 → Filter option: by type and by year
  ```
- Caption: "The order experience does not end at confirmation. It ends at trust."

---

---

## SECTION 14 — RETURNS + REPLACEMENT

### Layout
Smaller section. 3 screen strip. Short copy.

### Heading
```
When Things Go Wrong
```

### Copy

```
The replacement flow handles a real-world scenario specifically: 
a parent ordered Size 32, child tried it, it does not fit, 
they need Size 34.

Reason selection with clear options: Wrong size, Wrong house, 
Item damaged/defective, Item not as described, Other.

A correction interface where the parent picks the new size on the same item view.

A toast catches the edge case where someone tries to replace 
with the exact same size they already have: 
"This size was selected in a previous order. Please choose a different one."

Designing for this edge case before it becomes a support ticket 
is the difference between a product that scales and one that does not.
```

### Image Instruction
- Use: IMAGE 9 (Replacement)
- Show 3 screens: reason selection bottom sheet, size correction screen, confirmation
- Annotate:
  ```
  1 → Reason selection — specific options, not "Other" only
  2 → Size correction on same product view — no re-navigation
  3 → Toast: duplicate size detection — edge case handled in design
  4 → Confirmation: warm copy, contact option visible
  ```
- Caption: "Edge cases designed before they became support tickets."

---

---

## SECTION 15 — CANCELLATION

### Layout
Small section. 2 screens.

### Heading
```
Cancellation — Item Level, Not Order Level
```

### Copy

```
Parents should not lose an entire order because one shirt was wrong.

Cancellation works at the individual item level. 
Parent selects which items to cancel with checkboxes. 
Deselect all option available. 
Reason is optional — no forced explanation before they can proceed.

After cancellation: a calm confirmation that reads like 
a person received the feedback, not like a system logged a record.
```

### Image Instruction
- Use: IMAGE 10 (Cancel Order / Item Cancellations)
- Show 2 screens: item selection with checkboxes, confirmation
- Annotate:
  ```
  1 → Item-level selection — cancel what is wrong, keep the rest
  2 → "Deselect All" — control stays with the parent
  3 → Reason: optional accordion — no forced explanation
  4 → Confirmation: empathetic copy, not system language
  ```
- Caption: "Cancel what's wrong. Keep the rest. Stay in control."

---

---

## SECTION 16 — NAVIGATION + ACCOUNT

### Layout
Small section. 2 screens side by side.

### Heading
```
Navigation — The Menu as a Trust Layer
```

### Copy

```
The hamburger menu doubles as an account overview. 
Parent name and phone number shown prominently at the top — 
confirms they are in the right account before they do anything else.

Menu items: Your Order, Policies and Terms, Children Profiles, 
Help and Support, Notifications toggle, Logout.

Each item has a subtitle describing what lives inside — 
"Current Order, Order History, Return Order" under Your Order.
Not making the parent guess.

Help and Support routes to a clean page with support email and phone number. 
No chatbot. No ticket form. Just two ways to reach a real person.
```

### Image Instruction
- Use: IMAGE 11 (Help & Support)
- Show both screens: menu drawer and help page
- Annotate:
  ```
  1 → Parent name + phone at top of menu — account confirmation
  2 → Yellow profile card — brand color, ownership feeling
  3 → Subtitles on every menu item — no guessing required
  4 → Help page: email + phone number, direct access to a real person
  ```
- Caption: "The menu is not just navigation. It is account ownership."

---

---

## SECTION 17 — CONSTRAINTS

### Layout
Dark background section or heavily highlighted panel. 
This section replaces the traditional "metrics" section. 
Display as 3 challenge cards with icon + text.

### Heading
```
What Made This Hard
```

### Sub-copy (intro)

```
Good case studies show the decisions. Great ones show the conditions those decisions were made under.
```

### Three Constraints (display as cards)

**Card 1**
```
ICON: Clock or constraints symbol

No User Research Budget

There were no formal usability sessions, 
no paid research participants, no testing lab. 
Design decisions were based on contextual understanding 
of the Indian parent user — informed by the client's 
35 years of direct customer relationships, 
not by a research sprint.

This means leaning harder on the product thinking 
and the mental model — making decisions 
you can defend with reasoning, not just data.
```

**Card 2**
```
ICON: Stack or layers symbol

No Design System to Inherit

The brand, color language, illustration style, 
component library, and interaction patterns 
were all created from zero.

Design system decisions made during this project 
had to work for a developer shipping in real time — 
not for a team of 10 designers who could iterate later.
```

**Card 3**
```
ICON: People or team symbol

Cross-Discipline Coordination Without a PM

There was no product manager. 
I was coordinating a graphic designer on brand assets, 
a motion designer on illustrations and animations, 
and a developer on implementation — 
while also designing.

Every deliverable required understanding 
what the other discipline needed from it, 
not just what it needed to look like.
```

---

---

## SECTION 18 — WHAT I WOULD DO DIFFERENTLY

### Layout
Clean section, slight background differentiation. 
Shows maturity and self-awareness. Keep it honest.

### Heading
```
What I Would Change
```

### Copy

```
THE HOME SCREEN DENSITY
The home screen tries to do too much at once. 
Packages, promotional banners, editorial content, category tiles, 
and product recommendations all compete on the same scroll.

A second version would give the pre-configured school package 
its own screen entirely. One job. One screen. 
Then everything else below, once the primary task is done.

THE BILLING LABEL CONFUSION
On the checkout bill, "FREE Delivery" is labeled 
but the value next to it reads "None." 
Does that mean no free delivery, or that the charge is zero?

A parent in the middle of a purchase should never have to interpret 
what a number means. This is a copy fix — 
but copy is design, and this one slipped.

THE DOUBLE "HELP & SUPPORT" IN THE MENU
The menu drawer shows "Help & Support" listed twice 
with identical labels and descriptions. 
A QA miss that made it past handoff.
This is the honest version of the project.
```

---

---

## SECTION 19 — THE CLOSING

### Layout
Full width. No image. Just text. This is the emotional closer. 
Give it space. Large font for the key line.

### Heading
```
The Bigger Thing
```

### Copy

```
Designing for India is not designing a Western product 
and swapping in a rupee sign.

A parent in Vasundhara, Ghaziabad has a mental model shaped by decades 
of walking into a physical store where the shopkeeper knows her, 
knows her children, knows exactly what to pull off the shelf. 
The app is not competing with Amazon or Flipkart.

It is competing with a shopkeeper who has known the family for years.

The onboarding is the greeting.
The pre-built package is the shopkeeper knowing what you need.
The "Did you get everything right?" checkpoint is him asking one last time 
before you leave.

That is what product design actually is.

Not screens. Not components. Not flows.

It is understanding what a person already trusts — 
and building toward that.
```

### Final line (display large, bold, centered)

```
"Understand what a person already trusts.
Build toward that."
```

---

---

## SECTION 20 — FOOTER / END CARD

### Layout
Clean end section. Dark or brand-colored background. 

### Copy

```
SkoolTag — Product Design Case Study
Role: Product Design Lead
Platform: Android App + Marketing Website
Year: 2024

[ View Live Product → skooltag.com ]
[ Back to Portfolio ]
```

---

---

## AGENT IMPLEMENTATION NOTES

### Image Files Reference
```
Image 1  → Login flow (7 screens) — use for Section 9
Image 2  → Home/Dashboard with A/B variants — use for Hero + Section 10
Image 3  → Onboarding (school selection + child profile) — use for Section 6
Image 4  → Package builder + size selection + confirmation modal — use for Section 8
Image 5  → Product detail + size guide modal — use for Section 11
Image 6  → Profile switcher + Add new user — use for Section 7
Image 7  → Checkout (map, address, order confirmed) — use for Section 12
Image 8  → Orders / tracking / empty state — use for Section 13
Image 9  → Item replacement flow — use for Section 14
Image 10 → Cancellation flow — use for Section 15
Image 11 → Menu + Help & Support — use for Section 16
Image 12/13 → Policy screen — DO NOT USE (placeholder content visible)
```

### Typography Hierarchy
```
H1 (Section headings): 40-48px, bold, tight leading
H2 (Sub-headings): 24-28px, semibold
Body: 16-18px, 1.6 line height, regular weight
Callout boxes: 14-15px, medium weight, colored background
Captions: 13px, muted color, italic optional
Label tags (DESIGN DECISION 01): 11px, uppercase, tracked, muted
```

### Color Palette
```
Primary accent: #FFC107 (SkoolTag yellow)
Background: #FFFFFF or #FAFAFA
Dark panels: #111111 or #1A1A1A
Text primary: #111111
Text muted: #6B7280
Callout bg (insight): #FFFBEB (light yellow)
Callout bg (decision): #F0FDF4 (light green)
Callout bg (warning/honest): #FEF2F2 (light red)
Border: #E5E7EB
```

### Section Rhythm
```
Every major design decision section (6, 7, 8) should alternate:
— Text left, Image right
— Image left, Text right
— Full width visual
This prevents the page from feeling like a scroll of identical blocks.
```

### Annotation Style
```
Use numbered circles (①②③) overlaid on phone mockup images
Connect with thin lines to annotation text below or beside image
Keep annotation text short: max 8 words per annotation
Use the brand yellow for annotation circles
```

### What NOT to Do
```
— No fake metrics or placeholder numbers
— No carousel/slider for screen groups (show them stationary)
— No autoplaying animations
— No stock photos of people
— Do not use Images 12/13 (privacy policy — placeholder text visible)
— Do not over-animate — let content carry the weight
— Do not center-align body text — left-aligned reads better for long copy
```

---

*End of case study brief. All content is final copy. Agent should use this document as the single source of truth for both written content and layout decisions.*
