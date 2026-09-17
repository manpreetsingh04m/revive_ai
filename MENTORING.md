# Geeks2Code — Mentoring round guide

How we’re building **Revive AI** in clear, demoable chunks so mentors can follow progress and ask the right questions.

---

## Pitch (30 seconds)

> Merchants lose money on failed and overdue payments. Manual collections don’t scale, and unbounded AI messaging is risky.  
> **Revive AI** diagnoses each invoice with an LLM, then only runs **bounded** actions (WhatsApp, payment link, card retry, voice) behind **Zod + confidence ≥ 0.85 + max 3 retries**, with a full **audit trail**.

---

## Build phases (what to show)

| Phase | Status | What landed | Mentor talking points |
|-------|--------|-------------|------------------------|
| **1 · Foundation** | Done | Models, Zod schemas, constants, guardrail tests, Next shell | “AI output is structured & validated before any action” |
| **2 · Auth** | Done | JWT middleware, register/login/`/me`, seed user, login UI | “Merchant console is protected; decisions are attributable” |
| **3 · Recovery engine** | Done | AI client, recovery engine, WhatsApp / Razorpay / voice, `/api` routes | “End-to-end: invoice → decision → action → audit” |
| **4 · Dashboard** | Done | KPIs, invoices, audit feed, run-batch, recovery / agent pages | “Live merchant UX for the demo” |

---

## Phase 1 — files to open with mentors

```text
backend/src/config/constants.js     # confidence 0.85, max retries 3, allowed actions
backend/src/schemas/aiDecision.js   # Zod: root_cause, action, confidence, recovery_probability
backend/src/models/Invoice.js       # ledger object
backend/src/models/AuditLog.js      # immutable decision log
backend/test/guardrails.test.js     # proves low confidence → escalate / block
```

Run guardrail tests (no Mongo needed for these):

```bash
cd backend && npm install && npm test
```

---

## Phase 2 — auth demo

```text
backend/src/middleware/auth.js
backend/src/routes/auth.js
backend/src/server.js               # /health + /api/auth only for now
frontend/src/app/login/page.tsx
```

```bash
cd backend
cp .env.example .env   # set MONGODB_URI + JWT_SECRET
npm run seed
npm run dev            # http://localhost:4000

cd ../frontend
cp .env.example .env.local
npm install && npm run dev   # http://localhost:3000/login
```

Demo login: `merchant@autorecover.ai` / `Recover@123`

---

## What mentors usually probe

1. **Why not let the LLM message freely?** → Guardrails + allowlist of actions.  
2. **How do you know what the AI did?** → `AuditLog` every decision (`SUCCESS` / `BLOCKED_BY_GUARDRAIL`).  
3. **What’s the recovery probability for?** → Prioritize / explain which invoices to chase first.  
4. **What’s next for the round?** → Phase 3 engine + Phase 4 dashboard for a full live run.

---

## Not yet in this repo (coming in Phase 3–4)

- `services/recoveryEngine.js`, `aiClient.js`, payment links, voice  
- Full `/api/invoices`, `/api/run-batch`, metrics  
- Dashboard, invoices portal, agent / conversations UI  

Ask for the next phase when you’re ready to copy those pieces in.
