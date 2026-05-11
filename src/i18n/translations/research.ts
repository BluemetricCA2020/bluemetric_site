interface ResearchCard {
  tag: string
  title: string
  meta: string
}

interface ResearchText {
  pageLabel: string
  pageHeading: string
  pageSub: string
  readLink: string
  filterAll: string
  note: string
  cards: ResearchCard[]
}

export const researchTranslations: { en: ResearchText; nl: ResearchText } = {
  en: {
    pageLabel: 'Insights',
    pageHeading: 'Insights & Publications',
    pageSub: 'Research-driven perspectives on markets, asset allocation, and portfolio strategy.',
    readLink: 'Read article →',
    filterAll: 'All authors',
    note: 'Our research publications are available to clients and qualified investors. Contact us for access.',
    cards: [
      { tag: 'Private Markets', title: 'Private Equity Market Update H2 2024', meta: 'Research Paper · Q4 2024' },
      { tag: 'Macro Outlook', title: 'Global Economic Outlook 2025', meta: 'White Paper · Q1 2025' },
      { tag: 'Asset Allocation', title: 'Strategic Allocation in a Higher-Rate Environment', meta: 'Research Note · Q3 2024' },
      { tag: 'Risk Analysis', title: 'Navigating Geopolitical Risk in Portfolios', meta: 'Research Paper · Q2 2024' },
    ],
  },
  nl: {
    pageLabel: 'Inzichten',
    pageHeading: 'Inzichten & Publicaties',
    pageSub: 'Onderzoeksgedreven perspectieven op markten, asset allocatie en portefeuillestrategie.',
    readLink: 'Lees artikel →',
    filterAll: 'Alle auteurs',
    note: 'Onze onderzoekspublicaties zijn beschikbaar voor cliënten en gekwalificeerde beleggers. Neem contact op voor toegang.',
    cards: [
      { tag: 'Private Markets', title: 'Private Equity Market Update H2 2024', meta: 'Research Paper · Q4 2024' },
      { tag: 'Macro-economie', title: 'Global Economic Outlook 2025', meta: 'White Paper · Q1 2025' },
      { tag: 'Asset Allocatie', title: 'Strategic Allocation in a Higher-Rate Environment', meta: 'Research Note · Q3 2024' },
      { tag: 'Risicoanalyse', title: 'Navigating Geopolitical Risk in Portfolios', meta: 'Research Paper · Q2 2024' },
    ],
  },
}
