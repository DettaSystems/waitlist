# Newsletter launch runbook - from drafts to live, safely

_The execution path that ties together [distribution-engine-plan.md](../distribution-engine-plan.md),
[welcome-sequence.md](welcome-sequence.md), and [launch-runway.md](launch-runway.md).
Written for a non-technical owner. Principle: **the live waitlist form must keep working
the entire time** - we add the newsletter alongside it, we never rip it out blind._

## Where we are (content is ahead of schedule)
- Welcome sequence: 4 emails, written, compliance-checked. ✅
- Weekly runway: first 4 issues + a 10-segment "One right you have" bank. ✅
- Plan, channels, metrics: defined. ✅
- **Not done, and only you can do it:** the 3 decisions below.

## The 3 decisions that unlock launch
1. **Attorney author(s)** - the named byline + bar/state for every email and issue. This
   is the YMYL/E-E-A-T unlock and it gates *publishing*, not setup. Highest priority.
2. **Newsletter platform.** Recommend **beehiiv** (owns your list, custom domain
   `newsletter.detta.us`, native automations + referral + free recommendations, founder
   bylines). Substack is the alternative if you want its recommendation network as the
   main growth lever, but it's less "your brand, your list."
3. **Mailing address** for `Detta Systems, Inc.` (CAN-SPAM legally requires a physical
   address in every email).

Everything else below is paste-and-go or my job.

## The seamless integration - done securely (important)
Goal: a waitlist signup IS a newsletter subscribe, which fires the welcome sequence.
The catch: **detta.us is a static site with no server, so it cannot safely hold a
beehiiv API key** (a key in client-side code is exposed to everyone). So the secure
options, easiest first:

- **A. beehiiv embedded/hosted form (recommended now).** Replace or pair the waitlist
  form with beehiiv's own embed. Signups land directly in beehiiv; the sequence fires
  natively. No secrets exposed. I make this site edit, keeping the current form as the
  fallback until the embed is verified, so signups never drop.
- **B. No-code bridge.** Keep Formspree, connect it to beehiiv via Zapier/Make so every
  submission also subscribes. Zero code, owner-set, slightly less instant.
- **C. Proper API integration (later).** A serverless function calls beehiiv's API with
  the key hidden server-side. This needs the **Vercel migration** (already scoped in
  [../vercel-migration-plan.md](../vercel-migration-plan.md)) - the cleanest long-term
  answer, not required to launch.

Recommendation: **launch on A now, move to C when you migrate to Vercel.**

## Launch sequence (in order)
1. **You:** make the 3 decisions above; create the beehiiv account; add the mailing
   address and attorney byline.
2. **You + founders:** review/approve the welcome sequence + the rights bank + 4 issues
   (the legal-education content needs the attorney sign-off before it sends).
3. **Me:** wire the waitlist form to beehiiv (option A), preserving the working signup
   path and passing through `utm_*` / referral so source is tracked. Ship + verify a
   real test signup end to end.
4. **You (in beehiiv):** paste the 4 welcome emails into an automation triggered on
   "subscriber added" at delays 0h / 2d / 4d / 7d; set the weekly broadcast to follow.
5. **You:** send yourself a full test run (all 4 emails, real unsubscribe, correct
   address + byline). Fix, then turn it on.
6. **Go live:** the next homepage signup now gets the sequence; schedule Issue 1 for the
   following week.

## First-week operating rhythm (once live)
- One batch day: finalize that week's issue (it's already drafted), then cut it into the
  derivatives (LinkedIn post + a "One right you have" graphic + a short-video script).
- Light, genuine daily community presence (Reddit/LinkedIn) - value first, no pitching.
- Stay 4 issues ahead of the send date; top up the rights bank as you go.

## The only metrics that matter now
1. **Net new waitlist signups / week, by source.**
2. **Welcome-sequence + weekly click rate** (welcome should out-click the weekly).
3. **First AI citation / branded-search impressions** (the slow GEO signal; check monthly).

Honest expectation: the first 90 days build the machine and the first compounding
signals, not a flood. The content is ready; the launch now waits on 3 decisions.
