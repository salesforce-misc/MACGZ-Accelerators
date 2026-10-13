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
  {
    id: "automotive-assist",
    name: "AutomotiveAssist",
    titleHtml: "Automotive<br>Assist.",
    eyebrow: "Claude · Automotive Cloud",
    summary:
      "A Claude Code plugin for Salesforce Automotive Cloud. It brings journey guidance, health checks, test-data scaffolding, and persona agents into the editor for OEM and dealer implementations.",
    cardSummary:
      "Guides Automotive Cloud implementations with skills, slash commands, agents, and org tools.",
    repoUrl: "https://github.com/salesforce-misc/AutomotiveAssist",
    setupUrl:
      "https://github.com/salesforce-misc/AutomotiveAssist/blob/master/docs/USER_GUIDE.md",
    requires: "Needs Claude Code and a Salesforce org with Automotive Cloud. Full commands are in the user guide.",
    products: ["Automotive Cloud", "Claude", "OEM & dealer"],
    install: [
      {
        label: "Clone",
        rest: "the repo",
        code: "git clone https://github.com/salesforce-misc/AutomotiveAssist.git",
      },
      {
        label: "Install & build",
        rest: "the plugin",
        code: "npm install && npm run build",
      },
      {
        label: "Open",
        rest: "it in Claude Code",
        code: "claude --plugin-dir /path/to/AutomotiveAssist",
      },
      {
        label: "Set it up",
        rest: "with the setup command.",
        code: "/auto:setup-plugin",
      },
    ],
    capsHeadline: "8 things it does",
    capsLede:
      "One plugin for the Automotive Cloud implementation. Ask for the journey, the check, or the data.",
    phases: [
      {
        label: "1 · Guidance",
        tone: "blue",
        span: 4,
        items: [
          {
            n: "01",
            title: "Walk the 26 journeys",
            body: "Covers data model, vehicles, finance, warranties, scheduler, connected services, and the rest of the Automotive Cloud journeys.",
            try: "Walk me through the vehicle data model.",
            icon: "compass",
          },
          {
            n: "02",
            title: "Match the persona",
            body: "Adapts to consultant, admin, developer, or SDET, using the persona journeys for setup and the daily loop.",
            try: "I’m the SDET. What’s my setup path?",
            icon: "chat",
          },
          {
            n: "03",
            title: "Configure a journey",
            body: "Slash commands under /auto:configure-* follow the journey map so setup stays in sequence.",
            try: "/auto:configure-vehicles",
            icon: "flag",
          },
          {
            n: "04",
            title: "Read the blueprint",
            body: "JOURNEY_MAP.md is the setup sequence behind every skill and command.",
            try: "What comes before warranties?",
            icon: "doc",
          },
        ],
      },
      {
        label: "2 · Check the org",
        tone: "violet",
        span: 2,
        items: [
          {
            n: "05",
            title: "Run a health check",
            body: "Looks for missing permissions, misconfigured settings, and skipped prerequisites.",
            try: "/auto:health-check",
            icon: "binoculars",
          },
          {
            n: "06",
            title: "Audit the setup",
            body: "Runs the audit framework against the org so gaps show up before go-live.",
            try: "/auto:audit",
            icon: "target",
          },
        ],
      },
      {
        label: "3 · Data & org tools",
        tone: "green",
        span: 2,
        items: [
          {
            n: "07",
            title: "Scaffold test data",
            body: "Builds realistic vehicles, assets, accounts, warranties, and financial records for an SDET.",
            try: "/auto:scaffold-test-data",
            icon: "chart",
          },
          {
            n: "08",
            title: "Query the org",
            body: "The MCP server wraps the Salesforce CLI for SOQL, metadata describe, and configuration export and import.",
            try: "Describe Vehicle and show the required fields.",
            icon: "loop",
          },
        ],
      },
    ],
    promiseLabel: "Built for implementers",
    promises: [
      "26 Automotive Cloud journeys",
      "Persona agents in the editor",
      "Apache 2.0",
    ],
  },
  {
    id: "manu-assist",
    name: "ManuAssist",
    titleHtml: "Manu<br>Assist.",
    eyebrow: "Claude · Manufacturing Cloud",
    summary:
      "An AI assistant for Salesforce Manufacturing Cloud. It puts guided setup, health checks, SOQL, and module knowledge in an MCP-capable editor — Claude Code, Cursor, or Claude Desktop.",
    cardSummary:
      "Guides Manufacturing Cloud setup across Sales Agreements, forecasting, warranty, inventory, and rebates.",
    repoUrl: "https://github.com/salesforce-misc/ManuAssist",
    setupUrl: "https://github.com/salesforce-misc/ManuAssist/blob/master/docs/USER_GUIDE.md",
    requires: "Needs Claude Code (or another MCP editor) and a Manufacturing Cloud org. Full commands are in the user guide.",
    products: ["Manufacturing Cloud", "Claude", "Agentforce"],
    install: [
      {
        label: "Clone",
        rest: "the repo",
        code: "git clone https://github.com/salesforce-misc/ManuAssist.git",
      },
      {
        label: "Install & build",
        rest: "the plugin",
        code: "npm install && npm run build",
      },
      {
        label: "Open",
        rest: "it in Claude Code",
        code: "claude --plugin-dir /path/to/ManuAssist",
      },
      {
        label: "Start",
        rest: "with the getting-started command.",
        code: "/mfg:getting-started",
      },
    ],
    capsHeadline: "8 things it does",
    capsLede:
      "One plugin across Manufacturing Cloud modules. Name the module or the check; the skill picks up the work.",
    phases: [
      {
        label: "1 · Configure",
        tone: "blue",
        span: 4,
        items: [
          {
            n: "01",
            title: "Set up Sales Agreements",
            body: "Guided configuration for Sales Agreements, with the same pattern for the other Manufacturing Cloud modules.",
            try: "/mfg:configure-sales-agreements",
            icon: "flag",
          },
          {
            n: "02",
            title: "Cover the core modules",
            body: "Skills span forecasting, warranty, partner visits, inventory allocation, rebates, analytics, and Agentforce.",
            try: "Help me configure warranty.",
            icon: "compass",
          },
          {
            n: "03",
            title: "Export the config",
            body: "Pulls org configuration out so you can compare environments or reuse a setup.",
            try: "/mfg:export-config",
            icon: "doc",
          },
          {
            n: "04",
            title: "Diff two orgs",
            body: "Compares Manufacturing Cloud orgs and shows what differs.",
            try: "/mfg:diff-orgs",
            icon: "loop",
          },
        ],
      },
      {
        label: "2 · Check the org",
        tone: "violet",
        span: 2,
        items: [
          {
            n: "05",
            title: "Health-check the org",
            body: "Checks the org for missing setup before you keep configuring.",
            try: "/mfg:health-check",
            icon: "binoculars",
          },
          {
            n: "06",
            title: "Audit the configuration",
            body: "Runs an audit across the modules you have turned on.",
            try: "/mfg:audit",
            icon: "target",
          },
        ],
      },
      {
        label: "3 · Work in the org",
        tone: "green",
        span: 2,
        items: [
          {
            n: "07",
            title: "Query with SOQL",
            body: "Runs SOQL from the editor through the MCP server’s Salesforce CLI wrappers.",
            try: "/mfg:soql-query",
            icon: "chart",
          },
          {
            n: "08",
            title: "Use a specialist agent",
            body: "Hands the thread to mfg-consultant, mfg-admin, or mfg-developer.",
            try: "Act as the manufacturing consultant.",
            icon: "chat",
          },
        ],
      },
    ],
    promiseLabel: "Built for implementers",
    promises: [
      "20+ Manufacturing Cloud skills",
      "30 slash commands",
      "Apache 2.0",
    ],
  },
  {
    id: "nzc-assist",
    name: "NZC-Assist",
    titleHtml: "Net Zero<br>Assist.",
    eyebrow: "Claude · Net Zero Cloud",
    summary:
      "A Claude Code plugin for Salesforce Net Zero Cloud. It covers licensing, reference data, activity sources, footprint calculation, annual inventories, and Disclosure & Compliance Hub setup.",
    cardSummary:
      "Guides Net Zero Cloud setup from licenses and emission factors through footprints, inventories, and DCH.",
    repoUrl: "https://github.com/salesforce-misc/NZC-Assist",
    setupUrl: "https://github.com/salesforce-misc/NZC-Assist/blob/main/docs/USER_GUIDE.md",
    requires:
      "Needs Claude Code and a Net Zero Cloud org. DCH sample packs need the vlocity CLI. Full commands are in the user guide.",
    products: ["Net Zero Cloud", "Claude", "Disclosure & Compliance"],
    install: [
      {
        label: "Clone",
        rest: "the repo",
        code: "git clone https://github.com/salesforce-misc/NZC-Assist.git",
      },
      {
        label: "Install & build",
        rest: "the plugin",
        code: "npm install && npm run build",
      },
      {
        label: "Open",
        rest: "it in Claude Code",
        code: "claude --plugin-dir /path/to/NZC-Assist",
      },
      {
        label: "Set it up",
        rest: "with the setup command.",
        code: "/nzc:setup-plugin",
      },
    ],
    capsHeadline: "8 things it does",
    capsLede:
      "One plugin for the carbon-accounting setup. Data and config first: licenses, factors, activity, footprints, inventories.",
    phases: [
      {
        label: "1 · Turn the cloud on",
        tone: "blue",
        span: 4,
        items: [
          {
            n: "01",
            title: "Enable Net Zero",
            body: "Walks licensing, Industries and Sustainability settings, record types, and config metadata.",
            try: "/nzc:enable-net-zero",
            icon: "flag",
          },
          {
            n: "02",
            title: "Assign permissions",
            body: "Assigns permission sets and permission set licenses through the Salesforce CLI.",
            try: "/nzc:assign-permissions",
            icon: "target",
          },
          {
            n: "03",
            title: "Load reference data",
            body: "Loads committed emission-factor and reference seed data before transactional activity.",
            try: "/nzc:load-reference-data",
            icon: "doc",
          },
          {
            n: "04",
            title: "Scaffold sample data",
            body: "Generates energy-use, activity, and footprint records, and tears them down in reverse order.",
            try: "/nzc:scaffold-sample-data",
            icon: "chart",
          },
        ],
      },
      {
        label: "2 · Calculate",
        tone: "violet",
        span: 2,
        items: [
          {
            n: "05",
            title: "Cover every source",
            body: "Skills cover stationary assets, vehicles, waste, water, and Scope 3 procurement and travel.",
            try: "Set up Scope 3 procurement.",
            icon: "compass",
          },
          {
            n: "06",
            title: "Calculate footprints",
            body: "Runs footprint calculation and ties results to the annual emissions inventory.",
            try: "/nzc:calculate-footprints",
            icon: "loop",
          },
        ],
      },
      {
        label: "3 · Check & disclose",
        tone: "green",
        span: 2,
        items: [
          {
            n: "07",
            title: "Audit and health-check",
            body: "Catches missing licenses, empty factor data, and footprints that are not linked to an inventory.",
            try: "/nzc:health-check",
            icon: "binoculars",
          },
          {
            n: "08",
            title: "Set up DCH",
            body: "Installs Disclosure & Compliance Hub: OmniStudio and DocGen, then GRI, ESRS, CDP, and SASB packages.",
            try: "/nzc:setup-dch",
            icon: "chat",
          },
        ],
      },
    ],
    promiseLabel: "Built for implementers",
    promises: [
      "Data and config scope",
      "Sample data with teardown",
      "Apache 2.0",
    ],
  },
];
