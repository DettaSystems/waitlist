/* Detta waitlist modal — opens the "Reserve your spot" signup card as a popup
 * from any "Join the waitlist" CTA that is NOT inside the site header.
 * Self-contained, no dependencies. Namespaced `dtw-` to avoid clashing with
 * the homepage's inline form JS. Submits to the same Formspree endpoint. */
(function () {
  "use strict";
  if (window.__dtwModalLoaded) return;
  window.__dtwModalLoaded = true;

  var FORMSPREE_URL = "https://formspree.io/f/mojkywvp";

  var SITUATIONS = [
    ["credit_card", "Credit card debt"],
    ["medical", "Medical debt"],
    ["student_loans", "Student loans"],
    ["multiple", "Multiple debts"],
    ["collections", "Debts in collections"],
    ["other", "Other"]
  ];

  // ── Styles ──
  var css =
    ".dtw-overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(13,43,43,.55);backdrop-filter:blur(3px);opacity:0;transition:opacity .18s ease}" +
    ".dtw-overlay[hidden]{display:none}" +
    ".dtw-overlay.dtw-open{opacity:1}" +
    ".dtw-card{position:relative;width:100%;max-width:440px;background:#FBFDFD;border:1px solid #D9E5E5;border-radius:16px;box-shadow:0 24px 60px rgba(13,79,79,.28);padding:30px 28px 26px;transform:translateY(8px) scale(.98);transition:transform .18s ease;font-family:'DM Sans',system-ui,-apple-system,sans-serif;color:#1A2B2B;max-height:calc(100vh - 40px);overflow-y:auto}" +
    ".dtw-overlay.dtw-open .dtw-card{transform:none}" +
    ".dtw-close{position:absolute;top:12px;right:12px;width:34px;height:34px;border:0;background:transparent;color:#4A5C5C;font-size:24px;line-height:1;border-radius:8px;cursor:pointer}" +
    ".dtw-close:hover{background:#E8F4F4;color:#0D4F4F}" +
    ".dtw-eyebrow{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#C8922A;margin:0 0 6px}" +
    ".dtw-title{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:26px;line-height:1.15;color:#0D4F4F;margin:0 0 6px;letter-spacing:-.02em}" +
    ".dtw-sub{font-size:15px;color:#4A5C5C;margin:0 0 18px;line-height:1.5}" +
    ".dtw-form{display:flex;flex-direction:column;gap:11px}" +
    ".dtw-hp{position:absolute!important;left:-9999px!important;width:1px;height:1px;opacity:0;pointer-events:none}" +
    ".dtw-input{width:100%;box-sizing:border-box;font:inherit;font-size:15px;padding:12px 14px;border:1px solid #D9E5E5;border-radius:10px;background:#fff;color:#1A2B2B}" +
    ".dtw-input:focus{outline:none;border-color:#1A7070;box-shadow:0 0 0 3px rgba(26,112,112,.15)}" +
    ".dtw-select{appearance:none;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><path d=\"M2 4l4 4 4-4\" stroke=\"%234A5C5C\" stroke-width=\"1.6\" fill=\"none\" stroke-linecap=\"round\"/></svg>');background-repeat:no-repeat;background-position:right 14px center}" +
    ".dtw-submit{margin-top:4px;width:100%;font:inherit;font-weight:600;font-size:15px;color:#fff;background:linear-gradient(135deg,#0D4F4F,#1A7070);border:0;border-radius:10px;padding:13px 20px;cursor:pointer;box-shadow:0 2px 10px rgba(13,79,79,.22)}" +
    ".dtw-submit:hover{filter:brightness(1.06)}" +
    ".dtw-submit:disabled{opacity:.7;cursor:default}" +
    ".dtw-error{color:#B4341F;font-size:14px;margin:2px 0 0;min-height:0}" +
    ".dtw-legal{font-size:12px;color:#7A8A8A;margin:14px 0 0;line-height:1.5}" +
    ".dtw-success{text-align:center;padding:8px 0 4px}" +
    ".dtw-check{width:52px;height:52px;margin:0 auto 12px;border-radius:50%;background:#E8F4F4;color:#0D4F4F;font-size:26px;display:flex;align-items:center;justify-content:center}" +
    ".dtw-success h3{font-family:'Fraunces',Georgia,serif;color:#0D4F4F;font-size:22px;margin:0 0 6px}" +
    ".dtw-success p{color:#4A5C5C;font-size:15px;margin:0}";

  // ── DOM ──
  var opts = SITUATIONS.map(function (s) {
    return '<option value="' + s[0] + '">' + s[1] + "</option>";
  }).join("");

  var html =
    '<div class="dtw-card" role="document">' +
    '<button type="button" class="dtw-close" id="dtwClose" aria-label="Close">×</button>' +
    '<p class="dtw-eyebrow">Early access</p>' +
    '<h2 class="dtw-title" id="dtwTitle">Reserve your spot</h2>' +
    '<p class="dtw-sub">Join the waitlist and we’ll email you the moment your spot opens. No spam, ever.</p>' +
    '<form class="dtw-form" id="dtwForm" novalidate>' +
    '<input type="text" name="_gotcha" id="dtwGotcha" tabindex="-1" autocomplete="off" aria-hidden="true" class="dtw-hp" />' +
    '<input type="email" name="email" id="dtwEmail" class="dtw-input" placeholder="Your email address" required autocomplete="email" />' +
    '<input type="text" name="firstName" id="dtwName" class="dtw-input" placeholder="First name (optional)" autocomplete="given-name" />' +
    '<select name="debtSituation" id="dtwSituation" class="dtw-input dtw-select">' +
    '<option value="" disabled selected>What are you dealing with? (optional)</option>' +
    opts +
    "</select>" +
    '<button type="submit" class="dtw-submit" id="dtwSubmit">Join the Waitlist</button>' +
    '<p class="dtw-error" id="dtwError" role="alert"></p>' +
    "</form>" +
    '<div class="dtw-success" id="dtwSuccess" hidden>' +
    '<div class="dtw-check">✓</div>' +
    "<h3>You’re on the list!</h3>" +
    "<p>We’ll email you when it’s your turn.</p>" +
    "</div>" +
    '<p class="dtw-legal">Self-help software, not a law firm. We never hold your money or contact your creditors.</p>' +
    "</div>";

  var lastTrigger = null;
  var overlay, form;

  function build() {
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    overlay = document.createElement("div");
    overlay.className = "dtw-overlay";
    overlay.id = "dtwOverlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "dtwTitle");
    overlay.hidden = true;
    overlay.innerHTML = html;
    document.body.appendChild(overlay);

    form = document.getElementById("dtwForm");
    document.getElementById("dtwClose").addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !overlay.hidden) close();
    });
    form.addEventListener("submit", onSubmit);
  }

  function open(e) {
    if (e) e.preventDefault();
    lastTrigger = e && e.currentTarget ? e.currentTarget : null;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    // force reflow then animate
    void overlay.offsetWidth;
    overlay.classList.add("dtw-open");
    var email = document.getElementById("dtwEmail");
    if (email) setTimeout(function () { email.focus(); }, 60);
    try { if (window.plausible) window.plausible("Waitlist Modal Open"); } catch (_) {}
  }

  function close() {
    overlay.classList.remove("dtw-open");
    document.body.style.overflow = "";
    setTimeout(function () { overlay.hidden = true; }, 180);
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  }

  function submitToFormspree(email, firstName, situation, onOk, onErr) {
    var body = { email: email };
    if (firstName) body.firstName = firstName;
    if (situation) body.debtSituation = situation;
    body._subject = "New Detta waitlist signup";
    var gc = document.getElementById("dtwGotcha");
    body._gotcha = gc ? gc.value : "";
    try {
      var params = new URLSearchParams(window.location.search);
      var ref = params.get("ref");
      if (ref) body.source = ref;
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(function (k) {
        var v = params.get(k); if (v) body[k] = v;
      });
      if (document.referrer) body.referrer = document.referrer;
      body.referralCode = window.__dettaRef || "";
      body.signupSource = "modal";
    } catch (_) {}
    fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body)
    }).then(function (res) {
      if (res.ok) onOk();
      else res.json().then(function (d) { onErr(d); }).catch(function () { onErr({}); });
    }).catch(function () { onErr({}); });
  }

  function onSubmit(e) {
    e.preventDefault();
    var btn = document.getElementById("dtwSubmit");
    var err = document.getElementById("dtwError");
    var emailEl = document.getElementById("dtwEmail");
    var email = emailEl.value.trim();
    var name = document.getElementById("dtwName").value.trim();
    var situation = document.getElementById("dtwSituation").value;
    err.textContent = "";
    if (!email) {
      emailEl.setAttribute("aria-invalid", "true");
      emailEl.focus();
      err.textContent = "Please enter your email address.";
      return;
    }
    emailEl.removeAttribute("aria-invalid");
    btn.disabled = true;
    btn.textContent = "Joining…";
    submitToFormspree(email, name, situation,
      function () {
        form.style.display = "none";
        var s = document.getElementById("dtwSuccess");
        if (s) s.hidden = false;
        try { if (window.plausible) window.plausible("Signup"); } catch (_) {}
      },
      function () {
        err.textContent = "Something went wrong. Please try again.";
        btn.disabled = false;
        btn.textContent = "Join the Waitlist";
      }
    );
  }

  function bind() {
    var links = document.querySelectorAll('a[href="/#waitlist"], a[href="#waitlist"]');
    Array.prototype.forEach.call(links, function (a) {
      // Skip any CTA inside a site header / nav — those keep their behavior.
      if (a.closest("header, nav, .topbar, [role=banner]")) return;
      a.addEventListener("click", open);
    });
  }

  function init() {
    build();
    bind();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
