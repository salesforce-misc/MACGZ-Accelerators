window.ACCELERATORS = [
  {
    id: "sales-agreement-agent",
    name: "Sales Agreement Agent",
    titleHtml: "Sales Agreement<br>Agent.",
    eyebrow: "Agentforce · Manufacturing Cloud",
    summary:
      "A ready-to-deploy Agentforce employee agent that takes AEs through the annual pricing cycle on Sales Agreements. Every org-specific rule is a setting, so you can reshape it for any org.",
    cardSummary:
      "Walks account executives through the annual pricing cycle on Manufacturing Cloud Sales Agreements.",
    repoUrl: "https://github.com/salesforce-misc/MACGZ-salesagreementagent",
    setupUrl:
      "https://github.com/salesforce-misc/MACGZ-salesagreementagent/blob/main/docs/SETUP.md",
    requires:
      "Needs Manufacturing Cloud + Agentforce. Full commands are in the README.",
    products: ["Manufacturing Cloud", "Agentforce", "Sales Agreements"],
    install: [
      {
        label: "Clone",
        rest: "the repo",
        code: "git clone https://github.com/salesforce-misc/MACGZ-salesagreementagent.git",
      },
      {
        label: "Deploy",
        rest: "to your org",
        code: "sf project deploy start -x manifest/package.xml",
      },
      {
        label: "Publish & activate",
        rest: "the agent",
        code: "sf agent publish authoring-bundle --api-name Sales_Agreement_Agent",
      },
      {
        label: "Set your rules",
        rest: "in the Sales Agreement Agent Setting record.",
      },
    ],
    capsHeadline: "8 things it does",
    capsLede:
      "One agent for the whole pricing cycle. The AE describes the step; the agent picks the capability.",
    phases: [
      {
        label: "1 · Agreement setup",
        tone: "blue",
        span: 4,
        items: [
          {
            n: "01",
            title: "Start the pricing work",
            body: "Finds the account and its plans, then logs the pricing Account Plan Objective.",
            try: "I’m starting pricing work for <customer>.",
            icon: "flag",
          },
          {
            n: "02",
            title: "Create or clone the agreement",
            body: "Builds a Draft agreement from an eligible opportunity, or clones the current one into the next period.",
            try: "Clone the current agreement into next year.",
            icon: "loop",
          },
          {
            n: "03",
            title: "Apply the approved increase",
            body: "Previews the change on every product and month, and commits only after you say yes.",
            try: "Apply the approved 4% across all products.",
            icon: "chart",
          },
          {
            n: "04",
            title: "Track the agreement",
            body: "Shows planned vs. actual volume and the products that deviate most.",
            try: "How is this agreement tracking against plan?",
            icon: "binoculars",
          },
        ],
      },
      {
        label: "2 · Customer conversation",
        tone: "violet",
        span: 2,
        items: [
          {
            n: "05",
            title: "Prepare for the conversation",
            body: "Coaches you step by step on what changed and how the increase ties to the customer’s priorities.",
            try: "Help me prepare for the pricing conversation with <customer>.",
            icon: "compass",
          },
          {
            n: "06",
            title: "Practice the conversation",
            body: "Role-plays a realistic customer, stays in character, then gives you coaching feedback.",
            try: "Let me practice the pricing conversation for <customer>.",
            icon: "chat",
          },
        ],
      },
      {
        label: "3 · Close-out",
        tone: "green",
        span: 2,
        items: [
          {
            n: "07",
            title: "Price list & signature",
            body: "Shares the agreement link, then walks you through Generate Document and Send For Signature on the record.",
            try: "Walk me through sending the price list for signature.",
            icon: "doc",
          },
          {
            n: "08",
            title: "Close out the cycle",
            body: "Completes your open tasks and closes the pricing objective, then tells you what it closed.",
            try: "Close out my pricing objective for <customer>.",
            icon: "target",
          },
        ],
      },
    ],
    promiseLabel: "Built to repurpose",
    promises: [
      "Rules live in one settings record",
      "Standard objects only",
      "Asks before every change",
    ],
  },
];
