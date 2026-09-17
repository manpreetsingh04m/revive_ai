export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "3rem 1.5rem",
        background:
          "linear-gradient(160deg, #012652 0%, #0a3a6e 45%, #0D94FB22 100%)",
        color: "#fff",
        fontFamily: "inherit",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <p
          style={{
            opacity: 0.75,
            letterSpacing: "0.08em",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          GEEKS2CODE · MENTORING ROUND
        </p>
        <h1
          style={{
            fontSize: "2.4rem",
            margin: "0.5rem 0 0.75rem",
            fontWeight: 800,
          }}
        >
          Revive AI
        </h1>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.6,
            opacity: 0.9,
            maxWidth: 560,
          }}
        >
          Autonomous, <strong>bounded</strong> AI revenue recovery. Phases 1–2
          are in: data model, Zod guardrails, JWT auth, and merchant login.
        </p>

        <section
          style={{
            marginTop: "2.5rem",
            padding: "1.25rem 1.5rem",
            background: "rgba(255,255,255,0.08)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <h2 style={{ fontSize: "1rem", margin: "0 0 0.75rem" }}>
            Show mentors now
          </h2>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.2rem",
              lineHeight: 1.8,
              opacity: 0.95,
            }}
          >
            <li>
              <code>MENTORING.md</code> — pitch + phase checklist
            </li>
            <li>
              Guardrails: <code>schemas/aiDecision.js</code> +{" "}
              <code>test/guardrails.test.js</code>
            </li>
            <li>
              Auth: <code>/login</code> → JWT → protected merchant session
            </li>
            <li>
              Next: Phase 3 recovery engine (batch + audit trail)
            </li>
          </ul>
        </section>

        <p style={{ marginTop: "1.75rem" }}>
          <a
            href="/login"
            style={{
              display: "inline-block",
              padding: "0.7rem 1.25rem",
              background: "#0D94FB",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Open merchant login
          </a>
        </p>
      </div>
    </main>
  );
}
