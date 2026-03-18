[waitlist-standalone.html](https://github.com/user-attachments/files/26096442/waitlist-standalone.html)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Detta — Debt Resolution, Reimagined</title>
  <meta name="description" content="Stop paying someone else to negotiate your debt. Detta gives you the tools to do it yourself — and keep every dollar you save." />
  <meta property="og:title" content="Detta — Resolve your debt. Keep the savings." />
  <meta property="og:description" content="Self-help debt resolution software. No escrow. No middleman. You stay in control." />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <style>
    :root {
      --font-display: 'Fraunces', Georgia, serif;
      --font-body: 'DM Sans', system-ui, sans-serif;
      --detta-teal: #0D4F4F;
      --detta-teal-mid: #1A7070;
      --detta-teal-light: #E8F4F4;
      --detta-white: #F7F4EF;
      --detta-card: #FFFFFF;
      --detta-muted: #E8E4DC;
      --detta-ink: #1A1A2E;
      --detta-ink-mid: #4A4A5E;
      --detta-ink-light: #8A8A9E;
      --detta-amber: #C8922A;
      --detta-amber-light: #FDF3E0;
      --detta-success: #1A7A4A;
      --detta-warning: #B85C1A;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: var(--font-body);
      color: var(--detta-ink);
      background: var(--detta-white);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1.5;
    }

    /* ── Fade-in animation ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-in {
      opacity: 0;
      animation: fadeUp 0.7s ease forwards;
    }
    .fade-in-d1 { animation-delay: 0.1s; }
    .fade-in-d2 { animation-delay: 0.25s; }
    .fade-in-d3 { animation-delay: 0.4s; }
    .fade-in-d4 { animation-delay: 0.55s; }

    /* ── Hero ── */
    .hero {
      padding: 56px 24px 72px;
      text-align: center;
    }
    @media (min-width: 768px) {
      .hero { padding: 96px 24px 112px; }
    }
    .hero-inner {
      max-width: 600px;
      margin: 0 auto;
    }
    .hero-logo {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }

    .hero h1 {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 32px;
      line-height: 1.12;
      letter-spacing: -0.015em;
      color: var(--detta-ink);
      margin-bottom: 20px;
    }
    @media (min-width: 768px) {
      .hero h1 { font-size: 48px; }
    }

    .hero-subtitle {
      font-size: 17px;
      color: var(--detta-ink-mid);
      max-width: 460px;
      margin: 0 auto 36px;
      line-height: 1.65;
    }
    .hero-subtitle .hl {
      font-weight: 600;
      color: var(--detta-teal);
    }

    /* ── Emotion line ── */
    .emotion-line {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 300;
      font-size: 18px;
      color: var(--detta-teal-mid);
      margin-bottom: 40px;
      line-height: 1.5;
    }
    @media (min-width: 768px) {
      .emotion-line { font-size: 21px; }
    }

    /* ── Form ── */
    .waitlist-form {
      max-width: 380px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .form-input, .form-select {
      height: 50px;
      width: 100%;
      font-size: 16px;
      font-family: var(--font-body);
      padding: 0 16px;
      border: 1px solid var(--detta-muted);
      border-radius: 10px;
      background: #fff;
      color: var(--detta-ink);
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .form-input::placeholder { color: var(--detta-ink-light); }
    .form-input:focus, .form-select:focus {
      border-color: var(--detta-teal);
      box-shadow: 0 0 0 3px rgba(13,79,79,0.1);
    }

    .form-select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%238A8A9E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 14px center;
      padding-right: 40px;
      cursor: pointer;
    }

    .btn-primary {
      height: 52px;
      width: 100%;
      font-size: 16px;
      font-weight: 600;
      font-family: var(--font-body);
      color: #fff;
      background: var(--detta-teal);
      border: none;
      border-radius: 10px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: background 0.2s, transform 0.1s;
      letter-spacing: 0.01em;
    }
    .btn-primary:hover { background: var(--detta-teal-mid); }
    .btn-primary:active { transform: scale(0.98); }
    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .btn-primary svg {
      width: 18px; height: 18px;
      stroke: currentColor; stroke-width: 2; fill: none;
      stroke-linecap: round; stroke-linejoin: round;
    }

    .form-note {
      font-size: 12px;
      color: var(--detta-ink-light);
      text-align: center;
      margin-top: 4px;
      line-height: 1.5;
    }

    .form-error {
      font-size: 13px;
      color: var(--detta-warning);
      text-align: center;
      display: none;
    }
    .form-error.visible { display: block; }

    /* ── Success State ── */
    .success-state {
      display: none;
      text-align: center;
      padding: 32px 0;
    }
    .success-state.active {
      display: block;
      animation: fadeUp 0.5s ease forwards;
    }
    .success-icon {
      width: 72px; height: 72px;
      border-radius: 50%;
      background: var(--detta-teal-light);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }
    .success-icon svg {
      width: 36px; height: 36px;
      stroke: var(--detta-teal); fill: none;
      stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
    }
    .success-state h3 {
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 8px;
      color: var(--detta-ink);
    }
    .success-state p {
      font-size: 15px;
      color: var(--detta-ink-mid);
      max-width: 340px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* ── Trust strip ── */
    .trust-strip {
      padding: 32px 24px;
      text-align: center;
      border-top: 1px solid var(--detta-muted);
      border-bottom: 1px solid var(--detta-muted);
    }
    .trust-items {
      max-width: 700px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 24px 40px;
    }
    .trust-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 500;
      color: var(--detta-ink-mid);
    }
    .trust-item svg {
      width: 18px; height: 18px;
      stroke: var(--detta-teal); fill: none;
      stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
      flex-shrink: 0;
    }

    /* ── How It Works ── */
    .how-it-works {
      padding: 80px 24px;
    }
    .section-eyebrow {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--detta-teal);
      text-align: center;
      margin-bottom: 12px;
    }
    .how-it-works h2 {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 26px;
      text-align: center;
      margin-bottom: 56px;
    }
    @media (min-width: 768px) {
      .how-it-works h2 { font-size: 32px; }
    }
    .steps-grid {
      max-width: 820px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
    }
    @media (min-width: 768px) {
      .steps-grid { grid-template-columns: repeat(3, 1fr); gap: 48px; }
    }
    .step { text-align: center; }
    .step-icon {
      width: 60px; height: 60px;
      border-radius: 18px;
      background: var(--detta-teal-light);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
    }
    .step-icon svg {
      width: 26px; height: 26px;
      stroke: var(--detta-teal); fill: none;
      stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round;
    }
    .step-number {
      font-size: 11px;
      font-weight: 600;
      color: var(--detta-teal);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 10px;
    }
    .step h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
      color: var(--detta-ink);
    }
    .step p {
      font-size: 14px;
      color: var(--detta-ink-mid);
      line-height: 1.65;
      max-width: 260px;
      margin: 0 auto;
    }

    /* ── Cost Comparison ── */
    .cost-section {
      padding: 80px 24px;
      background: var(--detta-teal);
      color: #fff;
    }
    .cost-inner {
      max-width: 680px;
      margin: 0 auto;
      text-align: center;
    }
    .cost-section .section-eyebrow {
      color: rgba(255,255,255,0.6);
    }
    .cost-section h2 {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 26px;
      margin-bottom: 12px;
    }
    @media (min-width: 768px) {
      .cost-section h2 { font-size: 32px; }
    }
    .cost-section .section-desc {
      font-size: 15px;
      opacity: 0.75;
      max-width: 520px;
      margin: 0 auto 40px;
      line-height: 1.6;
    }

    .compare-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-bottom: 32px;
    }
    @media (min-width: 600px) {
      .compare-grid { grid-template-columns: 1fr 1fr; }
    }
    .compare-card {
      background: rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 28px 24px;
      position: relative;
    }
    .compare-card.them {
      border: 1px solid rgba(255,255,255,0.15);
    }
    .compare-card.us {
      border: 2px solid var(--detta-amber);
      background: rgba(255,255,255,0.12);
    }
    .compare-label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      opacity: 0.65;
      margin-bottom: 12px;
      font-weight: 500;
    }
    .compare-card.us .compare-label {
      color: var(--detta-amber);
      opacity: 1;
    }
    .compare-price {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 8px;
      line-height: 1.1;
    }
    .compare-price .unit {
      font-size: 18px;
      font-weight: 400;
      opacity: 0.8;
    }
    .compare-desc {
      font-size: 14px;
      opacity: 0.7;
      line-height: 1.5;
    }
    .compare-card.us .compare-desc {
      opacity: 0.85;
    }

    .compare-features {
      text-align: left;
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .compare-feature {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 13px;
      line-height: 1.45;
      opacity: 0.8;
    }
    .compare-card.us .compare-feature { opacity: 0.9; }
    .compare-feature svg {
      width: 14px; height: 14px;
      stroke: currentColor; fill: none;
      stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .compare-card.us .compare-feature svg { stroke: var(--detta-amber); }

    .cost-disclaimer {
      font-size: 12px;
      opacity: 0.5;
      max-width: 520px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* ── FAQ ── */
    .faq-section {
      padding: 80px 24px;
    }
    .faq-section h2 {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 26px;
      text-align: center;
      margin-bottom: 40px;
    }
    @media (min-width: 768px) {
      .faq-section h2 { font-size: 32px; }
    }
    .faq-list {
      max-width: 620px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .faq-item {
      border: 1px solid var(--detta-muted);
      border-radius: 12px;
      background: #fff;
      overflow: hidden;
    }
    .faq-trigger {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 20px;
      font-size: 15px;
      font-weight: 500;
      font-family: var(--font-body);
      color: var(--detta-ink);
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      line-height: 1.4;
      transition: color 0.15s;
    }
    .faq-trigger:hover { color: var(--detta-teal); }
    .faq-chevron {
      width: 16px; height: 16px;
      stroke: var(--detta-ink-light); fill: none;
      stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
      flex-shrink: 0;
      margin-left: 16px;
      transition: transform 0.25s ease;
    }
    .faq-item.open .faq-chevron { transform: rotate(180deg); }
    .faq-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease;
    }
    .faq-item.open .faq-body { max-height: 400px; }
    .faq-answer {
      padding: 0 20px 18px;
      font-size: 14px;
      color: var(--detta-ink-mid);
      line-height: 1.7;
    }

    /* ── Bottom CTA ── */
    .bottom-cta {
      padding: 64px 24px;
      text-align: center;
      background: var(--detta-teal-light);
    }
    .bottom-cta-inner {
      max-width: 480px;
      margin: 0 auto;
    }
    .bottom-cta h2 {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 12px;
      color: var(--detta-ink);
    }
    @media (min-width: 768px) {
      .bottom-cta h2 { font-size: 28px; }
    }
    .bottom-cta p {
      font-size: 15px;
      color: var(--detta-ink-mid);
      margin-bottom: 28px;
      line-height: 1.6;
    }
    .bottom-form {
      display: flex;
      gap: 10px;
      max-width: 400px;
      margin: 0 auto;
    }
    @media (max-width: 500px) {
      .bottom-form { flex-direction: column; }
    }
    .bottom-form .form-input { flex: 1; }
    .bottom-form .btn-primary {
      width: auto;
      padding: 0 28px;
      white-space: nowrap;
    }
    @media (max-width: 500px) {
      .bottom-form .btn-primary { width: 100%; }
    }
    .bottom-error {
      font-size: 13px;
      color: var(--detta-warning);
      text-align: center;
      margin-top: 8px;
      display: none;
    }
    .bottom-error.visible { display: block; }

    /* ── Footer ── */
    .site-footer {
      padding: 40px 24px;
      border-top: 1px solid var(--detta-muted);
      text-align: center;
    }
    .footer-disclaimers {
      max-width: 640px;
      margin: 0 auto 16px;
    }
    .footer-disclaimers p {
      font-size: 11px;
      color: var(--detta-ink-light);
      line-height: 1.7;
      margin-bottom: 8px;
    }
    .footer-disclaimers p:last-child { margin-bottom: 0; }
    .footer-links {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 12px;
      margin-top: 16px;
    }
    .footer-links a {
      color: var(--detta-ink-light);
      text-decoration: underline;
      transition: color 0.15s;
    }
    .footer-links a:hover { color: var(--detta-ink-mid); }
    .footer-links .dot { color: var(--detta-muted); }
    .footer-copy {
      font-size: 11px;
      color: var(--detta-ink-light);
      margin-top: 16px;
    }
  </style>
</head>
<body>

  <!-- ═══════════════════════════════════════════════════════════
       HERO
       ═══════════════════════════════════════════════════════════ -->
  <section class="hero">
    <div class="hero-inner">

      <div class="hero-logo fade-in">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" height="56" width="179.2" aria-label="Detta — Debt Resolution, Reimagined" role="img">
          <text x="160" y="42" font-family="'Fraunces', Georgia, serif" font-weight="300" font-size="56" fill="#0D4F4F" text-anchor="middle" dominant-baseline="central" letter-spacing="1">detta</text>
          <rect x="14" y="64" width="292" height="3" rx="1.5" fill="#C8922A" />
          <text x="160" y="86" font-family="'DM Sans', system-ui, sans-serif" font-weight="500" font-size="11" fill="#1A7070" text-anchor="middle" letter-spacing="0.12em">DEBT RESOLUTION, REIMAGINED</text>
        </svg>
      </div>

      <h1 class="fade-in fade-in-d1">Your debt doesn't have to<br />define your future.</h1>

      <p class="emotion-line fade-in fade-in-d2">
        You already know what you owe. Now get the tools to resolve it&nbsp;&mdash;&nbsp;on your terms.
      </p>

      <p class="hero-subtitle fade-in fade-in-d2">
        <span class="hl">Detta</span> is self-help software that walks you through settling, disputing, and paying off debt — step by step. No middleman. No escrow. You pay creditors directly and keep every dollar you save.
      </p>

      <!-- Waitlist Form -->
      <form class="waitlist-form fade-in fade-in-d3" id="waitlistForm">
        <input type="email" name="email" class="form-input" placeholder="Your email address" required id="emailInput" autocomplete="email" />
        <input type="text" name="firstName" class="form-input" placeholder="First name (optional)" id="nameInput" autocomplete="given-name" />
        <select name="debtSituation" class="form-select" id="situationSelect">
          <option value="" disabled selected>What's your situation? (optional)</option>
          <option value="credit_card">Credit card debt</option>
          <option value="medical">Medical debt</option>
          <option value="student_loans">Student loans</option>
          <option value="multiple">Multiple debts</option>
          <option value="collections">Debts in collections</option>
          <option value="other">Other</option>
        </select>
        <button type="submit" class="btn-primary" id="submitBtn">
          Join the Waitlist
          <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
        <p class="form-note">Free to join. No credit card required. We'll email you when your spot opens.</p>
        <p class="form-error" id="formError"></p>
      </form>

      <!-- Success State -->
      <div class="success-state" id="successState">
        <div class="success-icon">
          <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3>You're on the list.</h3>
        <p>We'll be in touch soon. Check your inbox for a confirmation from Detta.</p>
      </div>

    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════
       TRUST STRIP
       ═══════════════════════════════════════════════════════════ -->
  <div class="trust-strip">
    <div class="trust-items">
      <div class="trust-item">
        <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        No escrow — you stay in control
      </div>
      <div class="trust-item">
        <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        Your data stays private
      </div>
      <div class="trust-item">
        <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        No hidden fees
      </div>
      <div class="trust-item">
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        Cancel anytime
      </div>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════════════════════
       HOW IT WORKS
       ═══════════════════════════════════════════════════════════ -->
  <section class="how-it-works">
    <p class="section-eyebrow">How it works</p>
    <h2>Three steps. Your pace. Your&nbsp;control.</h2>
    <div class="steps-grid">

      <div class="step">
        <div class="step-icon">
          <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <p class="step-number">Step 1</p>
        <h3>Tell us what you owe</h3>
        <p>Add your debts — creditor names, balances, and status. Takes about five minutes.</p>
      </div>

      <div class="step">
        <div class="step-icon">
          <svg viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
        </div>
        <p class="step-number">Step 2</p>
        <h3>Get a clear plan</h3>
        <p>Detta prioritizes your debts and gives you a step-by-step action plan tailored to your situation.</p>
      </div>

      <div class="step">
        <div class="step-icon">
          <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <p class="step-number">Step 3</p>
        <h3>Take action, your way</h3>
        <p>Generate letters, follow phone scripts, track every response, and upload proof — all in one place.</p>
      </div>

    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════
       COST COMPARISON
       ═══════════════════════════════════════════════════════════ -->
  <section class="cost-section">
    <div class="cost-inner">
      <p class="section-eyebrow">Compare costs</p>
      <h2>Know what you're paying for</h2>
      <p class="section-desc">
        Debt settlement companies typically charge fees based on a percentage of your enrolled debt.
        With Detta, you get the tools to do the work yourself.
      </p>

      <div class="compare-grid">
        <div class="compare-card them">
          <p class="compare-label">Typical settlement company</p>
          <p class="compare-price">15 – 25%</p>
          <p class="compare-desc">of your total enrolled debt, charged as a fee</p>
          <div class="compare-features">
            <div class="compare-feature">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              They hold your money in escrow
            </div>
            <div class="compare-feature">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              May ask you to stop paying creditors
            </div>
            <div class="compare-feature">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              Fees often not clear upfront
            </div>
          </div>
        </div>

        <div class="compare-card us">
          <p class="compare-label">Detta</p>
          <p class="compare-price">$279<span class="unit"> /year</span></p>
          <p class="compare-desc">Flat annual price. You do the work. You keep the savings.</p>
          <div class="compare-features">
            <div class="compare-feature">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              No escrow — pay creditors directly
            </div>
            <div class="compare-feature">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              Letter templates, scripts &amp; tracking
            </div>
            <div class="compare-feature">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              Cancel anytime, no long-term contract
            </div>
          </div>
        </div>
      </div>

      <p class="cost-disclaimer">
        This comparison is for general informational purposes only. Actual fees charged by debt settlement companies vary by provider, state, and individual circumstances. Detta is self-help software — not a debt settlement service — and does not negotiate with creditors on your behalf. Outcomes depend on your individual actions and circumstances. Nothing on this page constitutes legal, financial, or tax advice.
      </p>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════
       FAQ
       ═══════════════════════════════════════════════════════════ -->
  <section class="faq-section">
    <p class="section-eyebrow">Questions</p>
    <h2>What you should know</h2>
    <div class="faq-list">

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          Is Detta a debt settlement company?
          <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq-body">
          <p class="faq-answer">No. Detta is self-help software. We do not negotiate with creditors on your behalf, and we never hold or manage your money. You contact creditors directly using the tools, templates, and guidance Detta provides.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          How is this different from hiring a settlement company?
          <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq-body">
          <p class="faq-answer">Settlement companies negotiate on your behalf and typically charge 15–25% of your enrolled debt. They often require you to stop making payments and deposit money into an escrow account they control. With Detta, there's no escrow, no middleman fees, and you decide when and how to pay. The tradeoff is that you're doing the work yourself — and Detta gives you everything you need to do it well.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          What types of debt does Detta work for?
          <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq-body">
          <p class="faq-answer">Detta is designed for unsecured debts — credit cards, medical bills, personal loans, and debts in collections. It is not designed for secured debts like mortgages or auto loans, and it does not cover student loans held by the federal government.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          Do I need legal or financial experience?
          <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq-body">
          <p class="faq-answer">Not at all. Detta provides plain-language guidance, ready-to-send letter templates, phone call scripts, and educational resources — all designed for people with no prior experience navigating debt resolution.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          Does Detta guarantee I'll reduce my debt?
          <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq-body">
          <p class="faq-answer">No. Detta provides tools and guidance, but outcomes depend on your individual circumstances, the creditors involved, and the actions you take. We do not guarantee any specific reduction, settlement, or outcome. Every situation is different.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          Is Detta legal advice?
          <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq-body">
          <p class="faq-answer">No. Detta is self-help software, not a law firm, and nothing provided through Detta constitutes legal, financial, or tax advice. If you need legal representation, we encourage you to consult a licensed attorney in your state.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)">
          When will Detta be available?
          <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq-body">
          <p class="faq-answer">We're onboarding waitlist members in waves. Join the waitlist and we'll email you as soon as your spot opens. Early joiners get priority access.</p>
        </div>
      </div>

    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════
       BOTTOM CTA
       ═══════════════════════════════════════════════════════════ -->
  <section class="bottom-cta">
    <div class="bottom-cta-inner">
      <h2>Ready to take the first step?</h2>
      <p>Join the waitlist — it's free, and there's no obligation.</p>
      <form class="bottom-form" id="bottomForm">
        <input type="email" name="email" class="form-input" placeholder="Your email address" required id="bottomEmailInput" autocomplete="email" />
        <button type="submit" class="btn-primary" id="bottomSubmitBtn">Join</button>
      </form>
      <p class="bottom-error" id="bottomFormError"></p>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════
       FOOTER
       ═══════════════════════════════════════════════════════════ -->
  <footer class="site-footer">
    <div class="footer-disclaimers">
      <p>Detta is self-help software. It is not a law firm, debt settlement company, credit repair organization, or financial advisor. Nothing provided through Detta constitutes legal, financial, or tax advice.</p>
      <p>Results vary depending on individual circumstances, including the type and amount of debt, creditor policies, and the actions taken by the user. Detta does not guarantee any specific outcome, debt reduction, or settlement.</p>
      <p>Detta does not hold, manage, or transmit consumer funds. Users pay creditors directly at all times.</p>
    </div>
    <div class="footer-links">
      <a href="/privacy">Privacy Policy</a>
      <span class="dot">&middot;</span>
      <a href="/terms">Terms of Service</a>
      <span class="dot">&middot;</span>
      <a href="mailto:support@detta.us">support@detta.us</a>
    </div>
    <p class="footer-copy">&copy; 2026 Detta. All rights reserved.</p>
  </footer>

  <!-- ═══════════════════════════════════════════════════════════
       SCRIPTS
       ═══════════════════════════════════════════════════════════ -->
  <script>
    // ─────────────────────────────────────────────────────────
    // IMPORTANT: Replace YOUR_FORM_ID with your Formspree form ID.
    // Find it at: https://formspree.io/forms → your form → Integration → Form ID
    // It looks like: xpwzgkbn (8 characters)
    // ─────────────────────────────────────────────────────────
    var FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

    // ── FAQ Accordion ──
    function toggleFaq(trigger) {
      var item = trigger.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(el) { el.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    }

    // ── Formspree Submit ──
    function submitToFormspree(email, firstName, situation, onSuccess, onError) {
      var body = { email: email };
      if (firstName) body.firstName = firstName;
      if (situation) body.debtSituation = situation;
      body._subject = 'New Detta waitlist signup';

      fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(body)
      })
      .then(function(res) {
        if (res.ok) { onSuccess(); }
        else { res.json().then(function(d) { onError(d); }).catch(function() { onError({}); }); }
      })
      .catch(function() { onError({}); });
    }

    // ── Hero Form ──
    document.getElementById('waitlistForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = document.getElementById('submitBtn');
      var err = document.getElementById('formError');
      var email = document.getElementById('emailInput').value.trim();
      var name = document.getElementById('nameInput').value.trim();
      var situation = document.getElementById('situationSelect').value;

      if (!email) return;

      btn.disabled = true;
      btn.textContent = 'Joining...';
      err.classList.remove('visible');

      submitToFormspree(email, name, situation,
        function() {
          document.getElementById('waitlistForm').style.display = 'none';
          document.getElementById('successState').classList.add('active');
        },
        function() {
          err.textContent = 'Something went wrong. Please try again.';
          err.classList.add('visible');
          btn.disabled = false;
          btn.innerHTML = 'Join the Waitlist <svg viewBox="0 0 24 24" style="width:18px;height:18px;stroke:currentColor;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
        }
      );
    });

    // ── Bottom Form ──
    document.getElementById('bottomForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = document.getElementById('bottomSubmitBtn');
      var err = document.getElementById('bottomFormError');
      var email = document.getElementById('bottomEmailInput').value.trim();

      if (!email) return;

      btn.disabled = true;
      btn.textContent = 'Joining...';
      err.classList.remove('visible');

      submitToFormspree(email, '', '',
        function() {
          document.getElementById('bottomForm').innerHTML = '<p style="font-size:15px;color:var(--detta-teal);font-weight:600;padding:14px 0;">You\'re on the list! Check your inbox.</p>';
        },
        function() {
          err.textContent = 'Something went wrong. Please try again.';
          err.classList.add('visible');
          btn.disabled = false;
          btn.textContent = 'Join';
        }
      );
    });
  </script>

</body>
</html>
