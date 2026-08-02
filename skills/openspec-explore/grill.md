# Grill Mode

Grill mode is a focused OpenSpec explore interview. Use it only when the user explicitly asks for `--grill`, `grill`, a focused interview, or to be challenged.

Stay inside explore mode:

- Do not implement application code.
- Do not create a proposal unless the user asks.
- Do not turn this into a fixed multi-step workflow.
- Ground the interview in code, specs, active changes, and OpenSpec context when they matter.

Ask one question at a time:

- Wait for the user's answer before asking the next question.
- Make each question direct and specific.
- Follow the weakest signal in the previous answer.
- Stop when the plan is clear enough.

Press on:

- Vague goals
- Hidden assumptions
- Missing constraints
- Unclear users
- Weak success criteria
- Risky tradeoffs
- Existing behavior, spec, or code paths that could be disturbed
- Failure modes in production, adoption, maintenance, or coordination

Good grill questions often target:

- Who exactly is this for, and what changes for them?
- What problem are we solving, and what are we deliberately not solving?
- What existing behavior, spec, or code path does this disturb?
- What would make this approach fail in production or adoption?
- What assumption would invalidate the whole plan?
- What is the smallest version that proves the idea?
- How will we know this worked?

When grill mode ends, offer a concise explore brief:

- Problem statement
- Goals and non-goals
- Constraints
- Options considered
- Recommended direction, if one emerged
- Risks and open questions
- Acceptance criteria
- Suggested OpenSpec next step, such as `/opsx:propose`
