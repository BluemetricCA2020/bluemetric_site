interface Service {
  num: string
  title: string
  desc: string
  items: string[]
}

interface ServicesText {
  pageLabel: string
  pageHeading: string
  pageSub: string
  sectionLabel: string
  sectionHeading: string
  services: Service[]
}

export const servicesTranslations: { en: ServicesText; nl: ServicesText } = {
  en: {
    pageLabel: 'Services',
    pageHeading: 'How we serve you',
    pageSub: 'Institutional-grade investment advisory tailored to the needs of ultra-high-net-worth families and Family Offices.',
    sectionLabel: 'Our Expertise',
    sectionHeading: 'Five pillars of service',
    services: [
      {
        num: '01',
        title: 'Strategic Asset Allocation',
        desc: 'Constructing and continuously optimizing diversified portfolios aligned with your long-term objectives and risk appetite.',
        items: ['Total portfolio construction and optimization', 'Risk-return profiling and scenario analysis', 'Periodic rebalancing and tactical adjustments'],
      },
      {
        num: '02',
        title: 'Manager Selection',
        desc: 'Rigorous, data-driven identification and due diligence of best-in-class investment managers across all asset classes.',
        items: ['Quantitative screening and qualitative assessment', 'Pre-Selection Committee and investment review', 'Ongoing monitoring and performance attribution'],
      },
      {
        num: '03',
        title: 'Monitoring',
        desc: 'Transparent reporting and in-depth risk analysis across all asset classes, custodians, and structures in a single unified platform.',
        items: ['Multi-custodian aggregation and custom dashboards', 'Performance attribution and benchmarking', 'Factor-based risk, stress testing, and liquidity analysis'],
      },
      {
        num: '04',
        title: 'Advisory',
        desc: 'Expert guidance across public and private markets, combining tactical allocation with access to institutional-quality investment opportunities.',
        items: ['Public markets: equity, fixed income, and ETF strategies', 'Private markets: PE, VC, infrastructure, and private debt', 'Co-investments, secondaries, and tail-risk hedging'],
      },
      {
        num: '05',
        title: 'Cashflow Planning & Monitoring',
        desc: 'Comprehensive liquidity planning and cash flow monitoring to align investment horizons with personal and family commitments.',
        items: ['Multi-year cash flow projections', 'Liquidity management and commitment pacing', 'Distribution and capital call forecasting'],
      },
    ],
  },
  nl: {
    pageLabel: 'Diensten',
    pageHeading: 'Hoe wij u dienen',
    pageSub: 'Institutionele vermogensbegeleiding op maat voor vermogende families en Family Offices.',
    sectionLabel: 'Onze Expertise',
    sectionHeading: 'Vijf pijlers van dienstverlening',
    services: [
      {
        num: '01',
        title: 'Strategische Asset Allocatie',
        desc: 'Het samenstellen en continu optimaliseren van gediversifieerde portefeuilles, afgestemd op uw langetermijndoelstellingen en risicoprofiel.',
        items: ['Totale portefeuilleconstructie & -optimalisatie', 'Risico-rendementprofilering en scenarioanalyse', 'Periodieke herbalancering en tactische aanpassingen'],
      },
      {
        num: '02',
        title: 'Manager Selectie',
        desc: 'Rigoureuze, datagedreven identificatie en due diligence van best-in-class vermogensbeheerders over alle beleggingscategorieën.',
        items: ['Kwantitatieve screening en kwalitatieve beoordeling', 'Pre-Selection Committee en investeringsreview', 'Doorlopende monitoring en prestatieattributie'],
      },
      {
        num: '03',
        title: 'Monitoring',
        desc: 'Transparante, alomvattende rapportage en diepgaande risicoanalyse over alle beleggingscategorieën, custodians en structuren in één geïntegreerd platform.',
        items: ['Multi-custodian portefeuilleaggregatie', 'Prestatieattributie en benchmarking', 'Aangepaste dashboards en realtime toegang', 'Factorgebaseerde risicodecompositie', 'Stresstesting en staartrisico-analyse', 'Valuta- en liquiditeitsblootstellingsbeheer'],
      },
      {
        num: '04',
        title: 'Advies',
        desc: 'Deskundige begeleiding in publieke en private markten — tactische allocatie, rigoureuze managerselectie en toegang tot institutionele private market-mogelijkheden.',
        items: ['Aandelen- en vastrentende fondsselectie', 'Tactische asset allocatie en herbalancering', 'ETF- en indexstrategie-implementatie', 'Left tail hedging', 'Private equity en venture capital allocatie', 'Co-investeringen en directe deal sourcing', 'Secundaire markt-mogelijkheden', 'Infrastructuur', 'Private debt'],
      },
      {
        num: '05',
        title: 'Cashflow Planning & Monitoring',
        desc: 'Uitgebreide liquiditeitsplanning en cashflow-monitoring om investeringshorizonten af te stemmen op persoonlijke en familiale verplichtingen.',
        items: ['Meerjarige cashflowprojecties', 'Liquiditeitsbeheer en commitment pacing', 'Distributie- en capital call-prognoses'],
      },
    ],
  },
}
