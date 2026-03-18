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
    /* ── Tokens ── */
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
      --detta-success: #1A7A4A;
      --radius-lg: 16px;
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

    /* ── Animations ── */
    @keyframes wlFadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes wlFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes wlPop {
      0%  { transform: scale(0.8); opacity: 0; }
      60% { transform: scale(1.05); }
      100%{ transform: scale(1); opacity: 1; }
    }
    @keyframes wlOrbDrift {
      0%, 100% { transform: translate(0, 0); }
      50%      { transform: translate(-10px, -20px); }
    }
    @keyframes wlFloat {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-12px); }
    }
    @keyframes wlShimmer {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes wlLineGrow {
      from { transform: scaleX(0); opacity: 0; }
      to   { transform: scaleX(1); opacity: 1; }
    }

    .wl-gradient-text {
      background: linear-gradient(135deg, var(--detta-teal) 0%, var(--detta-teal-mid) 40%, var(--detta-amber) 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: wlShimmer 5s ease-in-out infinite;
    }
    @media (prefers-reduced-motion: reduce) {
      .wl-gradient-text { animation: none; }
    }

    /* ── Scroll reveal ── */
    .pub-reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
    }
    .pub-reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .pub-reveal[data-delay="1"] { transition-delay: 0.1s; }
    .pub-reveal[data-delay="2"] { transition-delay: 0.2s; }
    .pub-reveal[data-delay="3"] { transition-delay: 0.3s; }
    .pub-reveal[data-delay="4"] { transition-delay: 0.4s; }

    /* ══════════════════════════════════════════════════════
       HERO SECTION
       ══════════════════════════════════════════════════════ */
    .hero {
      position: relative;
      overflow: hidden;
      background: var(--detta-white);
      min-height: min(100vh, 860px);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    /* Background gradients */
    .hero-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .hero-bg-grad {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 80% 60% at 25% 40%, rgba(13,79,79,0.06) 0%, transparent 70%),
        radial-gradient(ellipse 60% 80% at 80% 25%, rgba(200,146,42,0.04) 0%, transparent 60%);
    }
    .hero-orb-teal {
      position: absolute;
      top: -96px;
      left: -96px;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      opacity: 0.04;
      background: radial-gradient(circle, #0D4F4F 0%, transparent 70%);
      animation: wlOrbDrift 14s ease-in-out infinite;
    }
    .hero-orb-amber {
      position: absolute;
      bottom: -128px;
      right: -128px;
      width: 450px;
      height: 450px;
      border-radius: 50%;
      opacity: 0.025;
      background: radial-gradient(circle, #C8922A 0%, transparent 70%);
      animation: wlOrbDrift 11s ease-in-out infinite 4s;
    }

    /* Floating geometric accents */
    .hero-accent-square {
      position: absolute;
      top: 16%;
      right: 10%;
      width: 56px;
      height: 56px;
      border: 1px solid rgba(13,79,79,0.04);
      border-radius: 16px;
      transform: rotate(45deg);
      animation: wlFloat 9s ease-in-out infinite;
      display: none;
    }
    .hero-accent-circle {
      position: absolute;
      bottom: 28%;
      left: 6%;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid rgba(200,146,42,0.05);
      animation: wlFloat 7s ease-in-out infinite 2s;
      display: none;
    }
    @media (min-width: 1024px) {
      .hero-accent-square,
      .hero-accent-circle { display: block; }
    }

    .hero-inner {
      position: relative;
      z-index: 10;
      padding: 64px 16px 64px;
      max-width: 1120px;
      margin: 0 auto;
      width: 100%;
    }
    @media (min-width: 640px) { .hero-inner { padding-left: 24px; padding-right: 24px; } }
    @media (min-width: 768px) { .hero-inner { padding-top: 80px; padding-bottom: 80px; } }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 48px;
      align-items: start;
    }
    @media (min-width: 768px) {
      .hero-grid {
        grid-template-columns: 1.15fr 1fr;
        gap: 48px;
      }
    }
    @media (min-width: 1024px) {
      .hero-grid { gap: 64px; }
    }

    /* Left column */
    .hero-left {
      text-align: center;
    }
    @media (min-width: 768px) {
      .hero-left {
        text-align: left;
        padding-top: 24px;
      }
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 9999px;
      background: rgba(13,79,79,0.04);
      border: 1px solid rgba(13,79,79,0.07);
      margin-bottom: 24px;
      animation: wlFadeUp 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s both;
    }
    .hero-badge svg {
      width: 12px;
      height: 12px;
      color: var(--detta-amber);
    }
    .hero-badge span {
      font-size: 10px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--detta-ink-mid);
      font-family: var(--font-body);
    }

    .hero h1 {
      font-family: var(--font-display);
      font-weight: 300;
      font-size: clamp(2rem, 5vw, 3.2rem);
      line-height: 1.08;
      letter-spacing: -0.03em;
      color: var(--detta-ink);
      animation: wlFadeUp 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.15s both;
      margin: 0;
    }
    .hero h1 .wl-gradient-text {
      font-weight: 400;
    }

    .hero-subtitle {
      margin-top: 20px;
      max-width: 448px;
      font-family: var(--font-body);
      font-size: clamp(0.95rem, 1.5vw, 1.05rem);
      line-height: 1.7;
      color: var(--detta-ink-mid);
      animation: wlFadeUp 0.6s cubic-bezier(0.25,0.46,0.45,0.94) 0.25s both;
    }
    @media (max-width: 767px) {
      .hero-subtitle { margin-left: auto; margin-right: auto; }
    }
    .hero-subtitle .hl {
      font-weight: 600;
      color: var(--detta-teal);
    }

    .hero-disclaimer {
      margin-top: 10px;
      font-family: var(--font-body);
      font-size: 11px;
      color: var(--detta-ink-light);
      animation: wlFadeIn 0.5s ease-out 0.45s both;
    }

    .hero-trust-badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 16px;
      margin-top: 24px;
      animation: wlFadeIn 0.5s ease-out 0.55s both;
    }
    @media (min-width: 768px) {
      .hero-trust-badges { justify-content: flex-start; }
    }
    .hero-trust-badges .badge-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .hero-trust-badges .badge-item svg {
      width: 12px;
      height: 12px;
      color: var(--detta-teal-mid);
      flex-shrink: 0;
    }
    .hero-trust-badges .badge-item span {
      font-size: 10px;
      font-weight: 500;
      color: var(--detta-ink-light);
      font-family: var(--font-body);
    }

    .hero-social-mobile {
      margin-top: 24px;
      display: flex;
      justify-content: center;
    }
    @media (min-width: 768px) {
      .hero-social-mobile { display: none; }
    }

    /* Right column — Form card */
    .hero-right {
      animation: wlFadeUp 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s both;
    }
    @media (min-width: 768px) {
      .hero-right { margin-top: 16px; }
    }

    .form-card {
      position: relative;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      background: rgba(255,255,255,0.80);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: var(--radius-lg);
      box-shadow:
        0 1px 2px rgba(13,79,79,0.04),
        0 8px 32px rgba(13,79,79,0.06),
        0 20px 50px rgba(13,79,79,0.04);
    }
    .form-card-line {
      position: absolute;
      top: 0;
      left: 24px;
      right: 24px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(13,79,79,0.12), rgba(200,146,42,0.08), transparent);
    }
    .form-card-header {
      padding: 32px 28px 4px;
      text-align: center;
    }
    .form-card-header .logo-wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
    .form-card-header p {
      font-size: 12px;
      color: var(--detta-ink-mid);
      font-family: var(--font-body);
    }
    .form-card-body {
      padding: 16px 28px 28px;
    }

    /* Form elements */
    .wl-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
    }
    .wl-input, .wl-select {
      height: 44px;
      width: 100%;
      font-size: 14px;
      font-family: var(--font-body);
      padding: 0 14px;
      border: 1px solid rgba(13,79,79,0.10);
      border-radius: 12px;
      background: var(--detta-card);
      color: var(--detta-ink);
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .wl-input::placeholder { color: var(--detta-ink-light); }
    .wl-input:focus, .wl-select:focus {
      border-color: rgba(13,79,79,0.30);
      box-shadow: 0 0 0 3px rgba(13,79,79,0.10);
    }
    .wl-select {
      appearance: none;
      -webkit-appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%238A8A9E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 14px center;
      padding-right: 40px;
      cursor: pointer;
      color: var(--detta-ink-light);
    }
    .wl-select.has-value {
      color: var(--detta-ink);
    }

    .wl-submit {
      height: 44px;
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      font-family: var(--font-body);
      color: #fff;
      background: linear-gradient(135deg, #0D4F4F 0%, #1A7070 100%);
      border: none;
      border-radius: 12px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 2px 8px rgba(13,79,79,0.2);
      transition: all 0.2s;
    }
    .wl-submit:hover { box-shadow: 0 4px 16px rgba(13,79,79,0.3); }
    .wl-submit:active { transform: scale(0.98); }
    .wl-submit:disabled { opacity: 0.6; cursor: not-allowed; }
    .wl-submit svg {
      width: 16px;
      height: 16px;
      stroke: currentColor;
      stroke-width: 2;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .form-field { animation: wlFadeUp 0.4s ease-out both; }
    .form-field-1 { animation-delay: 0.4s; }
    .form-field-2 { animation-delay: 0.5s; }
    .form-field-3 { animation-delay: 0.6s; }
    .form-field-4 { animation-delay: 0.7s; }

    .form-error-msg {
      font-size: 13px;
      color: var(--detta-amber);
      font-family: var(--font-body);
      text-align: center;
      display: none;
    }
    .form-error-msg.visible { display: block; }

    /* Success state */
    .success-state {
      display: none;
      text-align: center;
      padding: 24px 0;
      animation: wlFadeUp 0.6s cubic-bezier(0.25,0.46,0.45,0.94) both;
    }
    .success-state.active { display: block; }
    .success-icon {
      width: 64px;
      height: 64px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      background: linear-gradient(135deg, rgba(13,79,79,0.10) 0%, rgba(13,79,79,0.04) 100%);
      border: 1px solid rgba(13,79,79,0.10);
      animation: wlPop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.2s both;
    }
    .success-icon svg {
      width: 32px;
      height: 32px;
      color: var(--detta-teal);
      stroke: var(--detta-teal);
      stroke-width: 2;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .success-state h3 {
      font-family: var(--font-display);
      font-weight: 300;
      font-size: 20px;
      color: var(--detta-ink);
      letter-spacing: -0.02em;
      margin-bottom: 4px;
    }
    .success-state p {
      font-size: 13px;
      max-width: 280px;
      margin: 0 auto;
      line-height: 1.6;
      color: var(--detta-ink-mid);
      font-family: var(--font-body);
    }

    /* Social proof */
    .social-proof {
      display: none;
    }
    .social-proof.visible {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 9999px;
      background: rgba(13,79,79,0.04);
      border: 1px solid rgba(13,79,79,0.06);
      animation: wlFadeIn 0.5s ease-out 0.9s both;
    }
    .social-proof svg {
      width: 14px;
      height: 14px;
      color: var(--detta-teal-mid);
      stroke: var(--detta-teal-mid);
      stroke-width: 2;
      fill: none;
    }
    .social-proof span {
      font-size: 12px;
      color: var(--detta-ink-mid);
      font-family: var(--font-body);
    }
    .social-proof strong {
      color: var(--detta-ink);
    }

    .hero-social-desktop {
      display: none;
      justify-content: center;
      margin-top: 20px;
    }
    @media (min-width: 768px) {
      .hero-social-desktop { display: flex; }
    }

    /* ══════════════════════════════════════════════════════
       HOW IT WORKS
       ══════════════════════════════════════════════════════ */
    .how-section {
      position: relative;
      overflow: hidden;
      background: var(--detta-card);
      padding: 80px 16px;
    }
    @media (min-width: 640px) { .how-section { padding-left: 24px; padding-right: 24px; } }

    .how-inner {
      max-width: 896px;
      margin: 0 auto;
    }
    .how-heading {
      text-align: center;
      margin-bottom: 40px;
    }
    .how-heading h2 {
      font-family: var(--font-display);
      font-weight: 300;
      font-size: clamp(1.6rem, 3.5vw, 2.2rem);
      color: var(--detta-ink);
      letter-spacing: -0.02em;
    }

    /* Desktop step icons row with connecting lines */
    .steps-icons-row {
      display: none;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    @media (min-width: 768px) {
      .steps-icons-row { display: flex; }
    }
    .step-icon-box {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      background: var(--detta-card);
    }
    .step-icon-box svg {
      width: 24px;
      height: 24px;
      stroke-width: 1.8;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .step-icon-box-0 {
      border: 2px solid rgba(13,79,79,0.15);
      box-shadow: 0 4px 16px rgba(13,79,79,0.06);
    }
    .step-icon-box-0 svg { stroke: #0D4F4F; }
    .step-icon-box-1 {
      border: 2px solid rgba(26,90,138,0.15);
      box-shadow: 0 4px 16px rgba(26,90,138,0.06);
    }
    .step-icon-box-1 svg { stroke: #1A5A8A; }
    .step-icon-box-2 {
      border: 2px solid rgba(26,122,74,0.15);
      box-shadow: 0 4px 16px rgba(26,122,74,0.06);
    }
    .step-icon-box-2 svg { stroke: #1A7A4A; }

    .step-connector {
      flex: 1;
      height: 2px;
      margin: 0 -1px;
      border-radius: 1px;
      transform-origin: left center;
    }
    .step-connector-0 {
      background: linear-gradient(90deg, rgba(13,79,79,0.25), rgba(26,90,138,0.25));
      animation: wlLineGrow 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.5s both;
    }
    .step-connector-1 {
      background: linear-gradient(90deg, rgba(26,90,138,0.25), rgba(26,122,74,0.25));
      animation: wlLineGrow 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.8s both;
    }

    /* Step text grid */
    .steps-text-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px;
    }
    @media (min-width: 768px) {
      .steps-text-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
    }
    .step-card { text-align: center; }

    /* Mobile step icon */
    .step-mobile-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
      background: var(--detta-card);
    }
    @media (min-width: 768px) {
      .step-mobile-icon { display: none; }
    }
    .step-mobile-icon svg {
      width: 20px;
      height: 20px;
      stroke-width: 1.8;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .step-mobile-icon-0 {
      border: 2px solid rgba(13,79,79,0.15);
      box-shadow: 0 4px 12px rgba(13,79,79,0.06);
    }
    .step-mobile-icon-0 svg { stroke: #0D4F4F; }
    .step-mobile-icon-1 {
      border: 2px solid rgba(26,90,138,0.15);
      box-shadow: 0 4px 12px rgba(26,90,138,0.06);
    }
    .step-mobile-icon-1 svg { stroke: #1A5A8A; }
    .step-mobile-icon-2 {
      border: 2px solid rgba(26,122,74,0.15);
      box-shadow: 0 4px 12px rgba(26,122,74,0.06);
    }
    .step-mobile-icon-2 svg { stroke: #1A7A4A; }

    .step-label {
      font-size: 10px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--detta-teal-mid);
      font-family: var(--font-body);
      display: block;
    }
    .step-title {
      font-size: 16px;
      font-weight: 500;
      color: var(--detta-ink);
      font-family: var(--font-body);
      margin: 6px 0;
    }
    .step-desc {
      font-size: 13px;
      line-height: 1.7;
      color: var(--detta-ink-mid);
      font-family: var(--font-body);
      max-width: 260px;
      margin: 0 auto;
    }

    /* ══════════════════════════════════════════════════════
       VALUE MATH / COST SECTION
       ══════════════════════════════════════════════════════ */
    .value-section {
      position: relative;
      overflow: hidden;
      background: var(--detta-teal);
      padding: 80px 0;
    }

    /* Atmosphere layers */
    .value-atmosphere {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .value-grad-bottom {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 100% 60% at 50% 100%, rgba(26,112,112,0.5) 0%, transparent 60%);
    }
    .value-orb {
      position: absolute;
      top: 15%;
      right: 10%;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(200,146,42,0.10) 0%, transparent 60%);
      animation: wlOrbDrift 11s ease-in-out infinite;
    }
    .value-noise {
      position: absolute;
      inset: 0;
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      background-size: 128px 128px;
    }

    .value-inner {
      position: relative;
      z-index: 10;
      padding: 0 16px;
      max-width: 672px;
      margin: 0 auto;
    }
    @media (min-width: 640px) { .value-inner { padding: 0 24px; } }

    .value-heading {
      text-align: center;
      margin-bottom: 32px;
    }
    .value-heading h2 {
      font-family: var(--font-display);
      font-weight: 300;
      font-size: clamp(1.6rem, 3.5vw, 2.2rem);
      color: rgba(255,255,255,0.95);
      letter-spacing: -0.02em;
      margin-bottom: 8px;
    }
    .value-heading p {
      font-size: 13px;
      color: rgba(255,255,255,0.45);
      font-family: var(--font-body);
    }

    /* Slider card */
    .slider-card {
      border-radius: 16px;
      overflow: hidden;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 8px 40px rgba(0,0,0,0.15);
    }

    .slider-area {
      padding: 28px 24px 20px;
    }
    @media (min-width: 640px) { .slider-area { padding: 28px 32px 20px; } }

    .slider-labels {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 4px;
    }
    .slider-labels span {
      font-size: 11px;
      color: rgba(255,255,255,0.30);
      font-family: var(--font-body);
    }
    .slider-labels input {
      flex: 1;
    }

    /* Custom range slider */
    .wl-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 5px;
      border-radius: 3px;
      outline: none;
      cursor: pointer;
    }
    .wl-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: white;
      border: 3px solid rgba(200,146,42,0.8);
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      cursor: grab;
      transition: transform 0.15s ease;
    }
    .wl-slider::-webkit-slider-thumb:hover { transform: scale(1.15); }
    .wl-slider::-moz-range-track {
      height: 5px;
      border-radius: 3px;
      border: none;
    }
    .wl-slider::-moz-range-thumb {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: white;
      border: 3px solid rgba(200,146,42,0.8);
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      cursor: grab;
    }

    .slider-value {
      text-align: center;
      margin-top: 4px;
      font-family: var(--font-display);
      font-weight: 300;
      font-size: clamp(1.4rem, 3vw, 1.8rem);
      color: rgba(255,255,255,0.90);
      letter-spacing: -0.02em;
    }

    /* Fee callout */
    .fee-callout {
      padding: 20px 24px;
      text-align: center;
      background: rgba(239,68,68,0.06);
      border-top: 1px solid rgba(239,68,68,0.10);
    }
    @media (min-width: 640px) { .fee-callout { padding: 20px 32px; } }
    .fee-callout .fee-label {
      font-size: 10px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: rgba(248,113,113,0.65);
      font-family: var(--font-body);
      margin-bottom: 6px;
    }
    .fee-callout .fee-amount {
      font-family: var(--font-display);
      font-weight: 300;
      font-size: clamp(1.4rem, 3vw, 2rem);
      color: rgba(248,113,113,0.9);
      letter-spacing: -0.02em;
      line-height: 1;
    }
    .fee-callout .fee-note {
      font-size: 11px;
      margin-top: 6px;
      color: rgba(248,113,113,0.45);
      font-family: var(--font-body);
    }

    /* Detta value strip */
    .detta-value-strip {
      padding: 16px 24px;
      text-align: center;
      background: rgba(255,255,255,0.03);
      border-top: 1px solid rgba(255,255,255,0.05);
    }
    @media (min-width: 640px) { .detta-value-strip { padding: 16px 32px; } }
    .detta-value-strip .detta-line {
      font-size: 14px;
      font-weight: 500;
      color: rgba(255,255,255,0.80);
      font-family: var(--font-body);
    }
    .detta-value-strip .detta-line .green { color: rgba(52,211,153,0.9); }
    .detta-value-strip .detta-sub {
      font-size: 11px;
      color: rgba(255,255,255,0.35);
      font-family: var(--font-body);
      margin-top: 2px;
    }

    .value-disclaimer {
      font-size: 10px;
      text-align: center;
      margin-top: 20px;
      max-width: 448px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
      color: rgba(255,255,255,0.25);
      font-family: var(--font-body);
    }
    .value-disclaimer a {
      color: rgba(255,255,255,0.25);
      text-decoration: underline;
      transition: color 0.15s;
    }
    .value-disclaimer a:hover { color: rgba(255,255,255,0.40); }

    /* ══════════════════════════════════════════════════════
       TRUST SECTION
       ══════════════════════════════════════════════════════ */
    .trust-section {
      position: relative;
      overflow: hidden;
      background: var(--detta-card);
      padding: 80px 16px;
    }
    @media (min-width: 640px) { .trust-section { padding-left: 24px; padding-right: 24px; } }

    .trust-inner {
      max-width: 896px;
      margin: 0 auto;
    }
    .trust-heading {
      text-align: center;
      margin-bottom: 40px;
    }
    .trust-heading h2 {
      font-family: var(--font-display);
      font-weight: 300;
      font-size: clamp(1.6rem, 3.5vw, 2.2rem);
      color: var(--detta-ink);
      letter-spacing: -0.02em;
    }

    .trust-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    @media (min-width: 768px) {
      .trust-grid { grid-template-columns: repeat(3, 1fr); }
    }

    .trust-card {
      border-radius: 12px;
      padding: 24px;
      text-align: center;
      cursor: default;
      background: var(--detta-white);
      border: 1px solid rgba(13,79,79,0.05);
      box-shadow: 0 1px 8px rgba(13,79,79,0.03);
      transition: box-shadow 0.3s;
    }
    .trust-card:hover { box-shadow: 0 4px 16px rgba(13,79,79,0.08); }

    .trust-card-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
    }
    .trust-card-icon svg {
      width: 20px;
      height: 20px;
      stroke-width: 1.8;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .trust-card-icon-0 {
      background: linear-gradient(135deg, rgba(13,79,79,0.06) 0%, rgba(13,79,79,0.02) 100%);
      border: 1px solid rgba(13,79,79,0.04);
    }
    .trust-card-icon-0 svg { stroke: #0D4F4F; }
    .trust-card-icon-1 {
      background: linear-gradient(135deg, rgba(26,90,138,0.06) 0%, rgba(26,90,138,0.02) 100%);
      border: 1px solid rgba(26,90,138,0.04);
    }
    .trust-card-icon-1 svg { stroke: #1A5A8A; }
    .trust-card-icon-2 {
      background: linear-gradient(135deg, rgba(26,122,74,0.06) 0%, rgba(26,122,74,0.02) 100%);
      border: 1px solid rgba(26,122,74,0.04);
    }
    .trust-card-icon-2 svg { stroke: #1A7A4A; }

    .trust-card h3 {
      font-size: 15px;
      font-weight: 500;
      color: var(--detta-ink);
      font-family: var(--font-body);
      margin-bottom: 6px;
    }
    .trust-card p {
      font-size: 13px;
      line-height: 1.65;
      color: var(--detta-ink-mid);
      font-family: var(--font-body);
    }

    /* ══════════════════════════════════════════════════════
       FAQ SECTION
       ══════════════════════════════════════════════════════ */
    .faq-section {
      position: relative;
      overflow: hidden;
      background: var(--detta-white);
      padding: 80px 16px;
    }
    @media (min-width: 640px) { .faq-section { padding-left: 24px; padding-right: 24px; } }

    .faq-inner {
      max-width: 672px;
      margin: 0 auto;
    }
    .faq-heading {
      text-align: center;
      margin-bottom: 32px;
    }
    .faq-heading h2 {
      font-family: var(--font-display);
      font-weight: 300;
      font-size: clamp(1.6rem, 3.5vw, 2.2rem);
      color: var(--detta-ink);
      letter-spacing: -0.02em;
    }

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .faq-item {
      border-radius: 12px;
      padding: 0 20px;
      overflow: hidden;
      background: var(--detta-card);
      box-shadow: 0 1px 4px rgba(13,79,79,0.03), 0 2px 10px rgba(13,79,79,0.02);
    }
    .faq-trigger {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 0;
      font-size: 14px;
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
      width: 16px;
      height: 16px;
      stroke: var(--detta-ink-light);
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
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
    .faq-item.open .faq-body { max-height: 500px; }
    .faq-answer {
      padding: 0 0 16px;
      font-size: 13px;
      color: var(--detta-ink-mid);
      font-family: var(--font-body);
      line-height: 1.7;
    }

    /* ══════════════════════════════════════════════════════
       FOOTER
       ══════════════════════════════════════════════════════ */
    .site-footer {
      padding: 32px 16px;
      background: var(--detta-white);
      border-top: 1px solid rgba(13,79,79,0.05);
    }
    @media (min-width: 640px) { .site-footer { padding-left: 24px; padding-right: 24px; } }

    .footer-inner {
      max-width: 672px;
      margin: 0 auto;
      text-align: center;
    }
    .footer-inner .footer-disclaimer {
      font-size: 11px;
      line-height: 1.7;
      color: var(--detta-ink-light);
      font-family: var(--font-body);
      margin-bottom: 12px;
    }
    .footer-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      font-size: 11px;
      font-family: var(--font-body);
    }
    .footer-links a {
      color: var(--detta-ink-light);
      text-decoration: none;
      transition: color 0.15s;
    }
    .footer-links a:hover { text-decoration: underline; }
    .footer-links .dot {
      color: var(--detta-ink-light);
      opacity: 0.3;
    }
  </style>
</head>
<body>

  <!-- ═══════════════════════════════════════════════════════════
       HERO
       ═══════════════════════════════════════════════════════════ -->
  <section class="hero">
    <!-- Background layers -->
    <div class="hero-bg">
      <div class="hero-bg-grad"></div>
      <div class="hero-orb-teal"></div>
      <div class="hero-orb-amber"></div>
    </div>

    <!-- Floating accents -->
    <div class="hero-accent-square"></div>
    <div class="hero-accent-circle"></div>

    <div class="hero-inner">
      <div class="hero-grid">

        <!-- Left: Headlines -->
        <div class="hero-left">
          <div class="hero-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <span>Early access</span>
          </div>

          <h1>
            Resolve your debt.<br />
            <span class="wl-gradient-text">Keep the savings.</span>
          </h1>

          <p class="hero-subtitle">
            Debt settlement companies charge 15–25% of what you owe — just in fees.
            <span class="hl">Detta</span>
            gives you the tools to do it yourself and
            <span class="hl">keep the savings.</span>
          </p>

          <p class="hero-disclaimer">
            Self-help software, not a law firm. You make every decision.
          </p>

          <div class="hero-trust-badges">
            <div class="badge-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>No credit card</span>
            </div>
            <div class="badge-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>No escrow fees</span>
            </div>
            <div class="badge-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Free forever tier</span>
            </div>
          </div>

          <div class="hero-social-mobile">
            <div class="social-proof" id="socialProofMobile"></div>
          </div>
        </div>

        <!-- Right: Form card -->
        <div class="hero-right">
          <div class="form-card">
            <div class="form-card-line"></div>
            <div class="form-card-header">
              <div class="logo-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" height="44" width="140.8" aria-label="Detta — Debt Resolution, Reimagined" role="img">
                  <text x="160" y="42" font-family="'Fraunces', Georgia, serif" font-weight="300" font-size="56" fill="#0D4F4F" text-anchor="middle" dominant-baseline="central" letter-spacing="1">detta</text>
                  <rect x="14" y="64" width="292" height="3" rx="1.5" fill="#C8922A" />
                  <text x="160" y="86" font-family="'DM Sans', system-ui, sans-serif" font-weight="500" font-size="11" fill="#1A7070" text-anchor="middle" letter-spacing="0.12em">DEBT RESOLUTION, REIMAGINED</text>
                </svg>
              </div>
              <p>Reserve your spot today</p>
            </div>
            <div class="form-card-body">
              <form class="wl-form" id="waitlistForm">
                <div class="form-field form-field-1">
                  <input type="email" name="email" class="wl-input" placeholder="Your email address" required id="emailInput" autocomplete="email" />
                </div>
                <div class="form-field form-field-2">
                  <input type="text" name="firstName" class="wl-input" placeholder="First name (optional)" id="nameInput" autocomplete="given-name" />
                </div>
                <div class="form-field form-field-3">
                  <select name="debtSituation" class="wl-select" id="situationSelect">
                    <option value="" disabled selected>What's your situation? (optional)</option>
                    <option value="credit_card">Credit card debt</option>
                    <option value="medical">Medical debt</option>
                    <option value="student_loans">Student loans</option>
                    <option value="multiple">Multiple debts</option>
                    <option value="collections">Debts in collections</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="form-field form-field-4">
                  <button type="submit" class="wl-submit" id="submitBtn">
                    Join the Waitlist
                    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                </div>
                <p class="form-error-msg" id="formError"></p>
              </form>

              <div class="success-state" id="successState">
                <div class="success-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 id="successHeading">You're on the list!</h3>
                <p>We'll email you when it's your turn.</p>
              </div>
            </div>
          </div>
          <div class="hero-social-desktop">
            <div class="social-proof" id="socialProofDesktop"></div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════
       HOW IT WORKS
       ═══════════════════════════════════════════════════════════ -->
  <section class="how-section">
    <div class="how-inner">
      <div class="how-heading">
        <h2 class="pub-reveal">How Detta works</h2>
      </div>

      <!-- Desktop: icons in a row with connecting lines -->
      <div class="steps-icons-row pub-reveal">
        <div class="step-icon-box step-icon-box-0">
          <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </div>
        <div class="step-connector step-connector-0"></div>
        <div class="step-icon-box step-icon-box-1">
          <svg viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
        </div>
        <div class="step-connector step-connector-1"></div>
        <div class="step-icon-box step-icon-box-2">
          <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
      </div>

      <!-- Step text cards -->
      <div class="steps-text-grid">
        <div class="step-card pub-reveal" data-delay="0">
          <div class="step-mobile-icon step-mobile-icon-0">
            <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <span class="step-label">Step 01</span>
          <h3 class="step-title">Add your debts</h3>
          <p class="step-desc">Enter what you owe — names, balances, and how far behind you are. Takes 5 minutes.</p>
        </div>
        <div class="step-card pub-reveal" data-delay="1">
          <div class="step-mobile-icon step-mobile-icon-1">
            <svg viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
          </div>
          <span class="step-label">Step 02</span>
          <h3 class="step-title">Get your plan</h3>
          <p class="step-desc">Anna assigns each debt a resolution track and shows you what to do first.</p>
        </div>
        <div class="step-card pub-reveal" data-delay="2">
          <div class="step-mobile-icon step-mobile-icon-2">
            <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <span class="step-label">Step 03</span>
          <h3 class="step-title">Resolve it yourself</h3>
          <p class="step-desc">Generate letters, track responses, and negotiate directly. You keep every dollar you save.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════
       VALUE MATH — What settlement companies charge
       ═══════════════════════════════════════════════════════════ -->
  <section class="value-section">
    <!-- Atmosphere -->
    <div class="value-atmosphere">
      <div class="value-grad-bottom"></div>
      <div class="value-orb"></div>
      <div class="value-noise"></div>
    </div>

    <div class="value-inner">
      <div class="value-heading">
        <h2 class="pub-reveal">What settlement companies charge</h2>
        <p class="pub-reveal">Drag the slider to see how much goes to fees.</p>
      </div>

      <div class="slider-card pub-reveal">
        <!-- Slider -->
        <div class="slider-area">
          <div class="slider-labels">
            <span>$5K</span>
            <input type="range" min="5000" max="100000" step="1000" value="20000" class="wl-slider" id="debtSlider" aria-label="Total debt amount" />
            <span>$100K</span>
          </div>
          <p class="slider-value" id="sliderValue">$20,000</p>
        </div>

        <!-- Fee callout -->
        <div class="fee-callout">
          <p class="fee-label">A settlement company would charge</p>
          <p class="fee-amount" id="feeRange">$3,000 – $5,000</p>
          <p class="fee-note">in fees (15–25% of enrolled debt)*</p>
        </div>

        <!-- Detta value -->
        <div class="detta-value-strip">
          <p class="detta-line">With <span class="green">Detta</span>, you keep that money.</p>
          <p class="detta-sub">Same letters. Same strategy. You do it yourself.</p>
        </div>
      </div>

      <p class="value-disclaimer pub-reveal">
        * Traditional settlement companies charge 15–25% of enrolled debt. Estimates are illustrative. Results vary.
        Detta is self-help software — <a href="/terms">terms</a>.
      </p>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════
       TRUST SECTION
       ═══════════════════════════════════════════════════════════ -->
  <section class="trust-section">
    <div class="trust-inner">
      <div class="trust-heading">
        <h2 class="pub-reveal">Built on trust</h2>
      </div>
      <div class="trust-grid">
        <div class="trust-card pub-reveal" data-delay="0">
          <div class="trust-card-icon trust-card-icon-0">
            <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>No Escrow, No Middlemen</h3>
          <p>We never hold, collect, or move your money. You pay creditors directly.</p>
        </div>
        <div class="trust-card pub-reveal" data-delay="1">
          <div class="trust-card-icon trust-card-icon-1">
            <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <h3>Self-Help Software</h3>
          <p>Detta is not a law firm or debt settlement company. You make every decision.</p>
        </div>
        <div class="trust-card pub-reveal" data-delay="2">
          <div class="trust-card-icon trust-card-icon-2">
            <svg viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
          </div>
          <h3>AI-Ready Platform</h3>
          <p>Built from the ground up for intelligent guidance. Smart today, smarter tomorrow.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════
       FAQ
       ═══════════════════════════════════════════════════════════ -->
  <section class="faq-section">
    <div class="faq-inner">
      <div class="faq-heading">
        <h2 class="pub-reveal">Common questions</h2>
      </div>
      <div class="faq-list">

        <div class="faq-item pub-reveal" data-delay="0">
          <button class="faq-trigger" onclick="toggleFaq(this)">
            Is Detta a debt settlement company?
            <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-body">
            <p class="faq-answer">No. Detta is self-help software. We do not negotiate with creditors on your behalf, and we never hold or manage your money. You contact creditors directly using the tools, templates, and guidance Detta provides.</p>
          </div>
        </div>

        <div class="faq-item pub-reveal" data-delay="1">
          <button class="faq-trigger" onclick="toggleFaq(this)">
            How is this different from hiring a settlement company?
            <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-body">
            <p class="faq-answer">Settlement companies negotiate on your behalf and typically charge 15–25% of your enrolled debt. They often require you to stop making payments and deposit money into an escrow account they control. With Detta, there's no escrow, no middleman fees, and you decide when and how to pay. The tradeoff is that you're doing the work yourself — and Detta gives you everything you need to do it well.</p>
          </div>
        </div>

        <div class="faq-item pub-reveal" data-delay="2">
          <button class="faq-trigger" onclick="toggleFaq(this)">
            What types of debt does Detta work for?
            <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-body">
            <p class="faq-answer">Detta is designed for unsecured debts — credit cards, medical bills, personal loans, and debts in collections. It is not designed for secured debts like mortgages or auto loans, and it does not cover student loans held by the federal government.</p>
          </div>
        </div>

        <div class="faq-item pub-reveal" data-delay="3">
          <button class="faq-trigger" onclick="toggleFaq(this)">
            Do I need legal or financial experience?
            <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-body">
            <p class="faq-answer">Not at all. Detta provides plain-language guidance, ready-to-send letter templates, phone call scripts, and educational resources — all designed for people with no prior experience navigating debt resolution.</p>
          </div>
        </div>

        <div class="faq-item pub-reveal" data-delay="4">
          <button class="faq-trigger" onclick="toggleFaq(this)">
            Does Detta guarantee I'll reduce my debt?
            <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-body">
            <p class="faq-answer">No. Detta provides tools and guidance, but outcomes depend on your individual circumstances, the creditors involved, and the actions you take. We do not guarantee any specific reduction, settlement, or outcome. Every situation is different.</p>
          </div>
        </div>

        <div class="faq-item pub-reveal" data-delay="4">
          <button class="faq-trigger" onclick="toggleFaq(this)">
            Is Detta legal advice?
            <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-body">
            <p class="faq-answer">No. Detta is self-help software, not a law firm, and nothing provided through Detta constitutes legal, financial, or tax advice. If you need legal representation, we encourage you to consult a licensed attorney in your state.</p>
          </div>
        </div>

        <div class="faq-item pub-reveal" data-delay="4">
          <button class="faq-trigger" onclick="toggleFaq(this)">
            When will Detta be available?
            <svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-body">
            <p class="faq-answer">We're onboarding waitlist members in waves. Join the waitlist and we'll email you as soon as your spot opens. Early joiners get priority access.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════
       FOOTER
       ═══════════════════════════════════════════════════════════ -->
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-disclaimer">
        Detta is self-help software, not a law firm or debt settlement company. Results vary depending on individual circumstances.
      </p>
      <div class="footer-links">
        <a href="/privacy">Privacy</a>
        <span class="dot">&middot;</span>
        <a href="/terms">Terms</a>
        <span class="dot">&middot;</span>
        <a href="mailto:support@detta.us">support@detta.us</a>
      </div>
    </div>
  </footer>

  <!-- ═══════════════════════════════════════════════════════════
       SCRIPTS
       ═══════════════════════════════════════════════════════════ -->
  <script>
    // ─────────────────────────────────────────────────────────
    // IMPORTANT: Replace YOUR_FORM_ID with your Formspree form ID.
    // Find it at: https://formspree.io/forms -> your form -> Integration -> Form ID
    // It looks like: xpwzgkbn (8 characters)
    // ─────────────────────────────────────────────────────────
    var FORMSPREE_URL = 'https://formspree.io/f/mojkywvp';

    // ── FAQ Accordion ──
    function toggleFaq(trigger) {
      var item = trigger.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(el) { el.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    }

    // ── Scroll Reveal ──
    (function() {
      var reveals = document.querySelectorAll('.pub-reveal');
      if (!reveals.length) return;

      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

      reveals.forEach(function(el) { observer.observe(el); });
    })();

    // ── Slider ──
    (function() {
      var slider = document.getElementById('debtSlider');
      var valueEl = document.getElementById('sliderValue');
      var feeEl = document.getElementById('feeRange');

      function updateSlider() {
        var val = Number(slider.value);
        var pct = ((val - 5000) / 95000) * 100;
        slider.style.background = 'linear-gradient(90deg, rgba(200,146,42,0.6) ' + pct + '%, rgba(255,255,255,0.1) ' + pct + '%)';
        valueEl.textContent = '$' + val.toLocaleString();
        var low = Math.round(val * 0.15).toLocaleString();
        var high = Math.round(val * 0.25).toLocaleString();
        feeEl.textContent = '$' + low + ' \u2013 $' + high;
      }

      slider.addEventListener('input', updateSlider);
      updateSlider();
    })();

    // ── Select placeholder color ──
    (function() {
      var sel = document.getElementById('situationSelect');
      sel.addEventListener('change', function() {
        if (sel.value) {
          sel.classList.add('has-value');
        }
      });
    })();

    // ── Formspree Submit ──
    function submitToFormspree(email, firstName, situation, onSuccess, onError) {
      var body = { email: email };
      if (firstName) body.firstName = firstName;
      if (situation) body.debtSituation = situation;
      body._subject = 'New Detta waitlist signup';

      // Capture referral source
      var ref = new URLSearchParams(window.location.search).get('ref');
      if (ref) body.source = ref;

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
      var sel = document.getElementById('situationSelect');
      var situation = sel.value;

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
          btn.innerHTML = 'Join the Waitlist <svg viewBox="0 0 24 24" style="width:16px;height:16px;stroke:currentColor;stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
        }
      );
    });
  </script>

</body>
</html>
