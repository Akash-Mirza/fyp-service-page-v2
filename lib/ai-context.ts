/* ============================================================
   FYP Desk - AI ASSISTANT CONTEXT (the Q4 fix)
   The old page copied a two-line blurb. This copy explains the
   WHOLE offer so any LLM understands who the student is, what
   Plan 1 and Plan 2 are, what we do and do not offer, the
   guidance kit, and the viva-prep promise - then the student
   pastes it and asks their own question.
   ============================================================ */

export interface Assistant {
  name: string;
  url: string;
  accent: string;
}

export const AI_CONTEXT = {
  intro:
    "Context for the assistant: I am a final-year BSCS student at GCUF " +
    "working on my Final Year Project (FYP), and I am reading the FYP " +
    "Desk guide page. FYP Desk is a small service run by a class fellow " +
    "for my own class fellows - it is not open to the public. \n\n" +
    "WHAT FYP DESK OFFERS - two plans: \n\n" +
    "Plan 1 - The Builder (Rs 10,000, one payment or installments of " +
    "4,000 + 4,000 + 2,000): for students who want to build the project " +
    "themselves. I (the service) provide a validated FYP idea (or " +
    "validate the group's own idea), an advisor-ready proposal and " +
    "synopsis, the full document kit - requirements (SRS), design " +
    "(HLD/SDD/LLD), acceptance criteria, wireframes - plus a ready " +
    "guidance kit: high-level development instructions, guidance for " +
    "agentic development, and setup help for free coding agents (CLI " +
    "and desktop). The student writes the code; the kit guides every " +
    "stage. \n\n" +
    "Plan 2 - The Guided (Rs 30,000 standard, limited launch offer " +
    "Rs 20,000 for the first five groups, six installments of 5,000): " +
    "the service takes full responsibility - everything in Plan 1, plus " +
    "the complete codebase, tests, running app, the presentation slides, " +
    "and after the build, training on the project: how to run it, what " +
    "framework and language it uses, what each part does, question/answer " +
    "practice, and preparation for the FYP viva and project " +
    "representation, so the student walks in confident. \n\n" +
    "WHAT WE ARE NOT: this is not a public company or a marketplace - " +
    "it is one senior class fellow taking care of his own class. " +
    "Delivery transfers 100% at final payment; the student owns " +
    "everything. The proposal conversation is free, and the first " +
    "installment only starts work after the advisor approves the " +
    "proposal. \n\n" +
    "THE REAL GOAL: not just delivery - the student should genuinely " +
    "learn the skills relevant to their FYP along the journey and pass " +
    "the viva with confidence. My question:",

  assistants: [
    { name: "ChatGPT", url: "https://chatgpt.com/", accent: "#0F4C81" },
    { name: "Gemini", url: "https://gemini.google.com/", accent: "#FFC107" },
    { name: "Claude", url: "https://claude.ai/new", accent: "#C98A5B" },
    { name: "Qwen", url: "https://chat.qwen.ai/", accent: "#5E5CE6" },
    { name: "DeepSeek", url: "https://chat.deepseek.com/", accent: "#4D6BFE" },
    { name: "Grok", url: "https://grok.com/", accent: "#10B981" },
    { name: "Perplexity", url: "https://www.perplexity.ai/", accent: "#20808D" },
    { name: "Copilot", url: "https://copilot.microsoft.com/", accent: "#5C2D91" },
  ] as Assistant[],

  toastCopied: "Context copied - paste it in the chat and ask your question.",
  toastCopiedOnly: "Context copied - paste it wherever you need it.",
};
