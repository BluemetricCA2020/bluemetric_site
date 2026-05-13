interface TeamMember {
  initials: string
  name: string
  role: string
  bio: string
  creds: string
  linkedin?: string
}

interface TeamText {
  pageLabel: string
  pageHeading: string
  pageSub: string
  clientAdvisoryLabel: string
  investmentLabel: string
  clientAdvisory: TeamMember[]
  investment: TeamMember[]
}

export const teamTranslations: { en: TeamText; nl: TeamText } = {
  en: {
    pageLabel: 'Team',
    pageHeading: 'The People Behind Your Wealth',
    pageSub: 'A dedicated team of investment professionals committed to delivering institutional-grade advisory.',
    clientAdvisoryLabel: 'Client Advisory Team',
    investmentLabel: 'Investment Analyst Team',
    clientAdvisory: [
      {
        initials: 'EvT',
        name: 'Emile van Thiel',
        role: 'Managing Partner',
        bio: 'Fascinated by the challenges of constructing robust portfolios that match client objectives. Ensures Bluemetric\'s services are always client-driven, objective and innovative.',
        creds: 'LL.M., CAIA',
        linkedin: 'https://www.linkedin.com/in/emile-van-thiel-3b444a2/',
      },
      {
        initials: 'JW',
        name: 'Jeroen Wulfse',
        role: 'Chief Commercial Officer',
        bio: 'Driving Bluemetric\'s commercial strategy and business development, strengthening client relationships and expanding the firm\'s market presence.',
        creds: 'MSc., CFA',
        linkedin: 'https://www.linkedin.com/in/jeroenwulfse/',
      },
      {
        initials: 'DH',
        name: 'Daniël Helder',
        role: 'Client Advisor',
        bio: 'Likes to take on the role of devil\'s advocate to ensure all interests are weighed for careful, well-founded investment decisions.',
        creds: 'MSc. Finance & Investments',
        linkedin: 'https://www.linkedin.com/in/dani%C3%ABl-helder/',
      },
      {
        initials: 'LP',
        name: 'Lisa Pelk',
        role: 'Client Specialist',
        bio: 'Enjoys being part of the dynamic of translating a client\'s wishes to her colleagues and vice versa. Her accuracy, speed, and high degree of focus make her highly valued by clients and colleagues alike.',
        creds: 'MSc. Finance & Investments, CFA',
        linkedin: 'https://www.linkedin.com/in/lisa-pelk/',
      },
      {
        initials: 'GvN',
        name: 'Gina van Nijendaal',
        role: 'Operations Officer',
        bio: 'Supports day-to-day operations at Bluemetric and serves as a key link between clients, colleagues, and external parties. With an eye for detail and a structured working approach, she contributes to the further professionalisation of processes and the safeguarding of quality.',
        creds: 'BSc. Business Administration',
        linkedin: 'https://www.linkedin.com/in/gina-van-nijendaal-55681b97/',
      },
      {
        initials: 'DP',
        name: 'Dominique Pietersen',
        role: 'Operations Officer',
        bio: 'Brings a strong analytical and process-oriented background that aligns well with the dynamic world of private equity and investment management. Her capabilities allow her to switch gears quickly while maintaining a clear overview in a complex and results-driven environment.',
        creds: 'LL.B.',
        linkedin: 'https://www.linkedin.com/in/dominique-pietersen-a427631a7/',
      },
    ],
    investment: [
      {
        initials: 'KvM',
        name: 'Koen van Mierlo',
        role: 'Managing Partner',
        bio: 'Responsible for the analyst team and a driving force behind the development of innovative investment concepts across public and private markets.',
        creds: 'MSc. Financial Economics, LL.M., CFA, CAIA',
        linkedin: 'https://www.linkedin.com/in/koen-van-mierlo-4a47b698/',
      },
      {
        initials: 'DK',
        name: 'Diederik Kappelle',
        role: 'Analyst',
        bio: 'Combines in-depth knowledge of the Private Equity sector with comprehensive analyses for the Investment Committee, emphasising less obvious factors.',
        creds: 'MSc. Financial Economics, CAIA',
        linkedin: 'https://www.linkedin.com/in/diederik-kappelle-889043b9/',
      },
      {
        initials: 'JC',
        name: 'Joost Cankrien',
        role: 'Analyst',
        bio: 'Translates the outcomes of private markets fund selection and ongoing monitoring into well-substantiated recommendations for the Investment Committee. Combines thorough due diligence with data-driven reporting, ensuring clients maintain a clear view of their portfolio.',
        creds: 'MSc. Finance & Investments',
        linkedin: 'https://www.linkedin.com/in/joost-cankrien/',
      },
      {
        initials: 'AS',
        name: 'Annegien Smilde',
        role: 'Analyst',
        bio: 'Brings valuable contribution to the analyst team through her analytical skills and the automation of quantitative processes.',
        creds: 'MSc. Quantitative Finance',
        linkedin: 'https://www.linkedin.com/in/annegiensmilde/',
      },
      {
        initials: 'BH',
        name: 'Benjamin Houkes',
        role: 'Analyst',
        bio: 'Applies his quantitative skills to the development of financial analyses and the automation of investment processes.',
        creds: 'MSc. Econometrics & Operations Research',
        linkedin: 'https://www.linkedin.com/in/benjamin-houkes-935121183/',
      },
      {
        initials: 'BvL',
        name: 'Bart van Lidth de Jeude',
        role: 'Analyst',
        bio: 'Combines a sharp analytical mindset with a broad interest in financial markets, contributing to rigorous investment research and portfolio analysis across asset classes.',
        creds: 'MSc. Finance',
        linkedin: 'https://www.linkedin.com/in/bart-van-lidth-de-jeude-a747842a0/',
      },
    ],
  },
  nl: {
    pageLabel: 'Team',
    pageHeading: 'De Mensen Achter Uw Vermogen',
    pageSub: 'Een toegewijd team van investeringsprofessionals, gericht op institutioneel advies van het hoogste niveau.',
    clientAdvisoryLabel: 'Client Advisory Team',
    investmentLabel: 'Investerings- & Analistenteam',
    clientAdvisory: [
      {
        initials: 'EvT',
        name: 'Emile van Thiel',
        role: 'Managing Partner',
        bio: 'Gefascineerd door de uitdagingen van het samenstellen van robuuste portefeuilles die aansluiten bij cliëntdoelstellingen. Zorgt ervoor dat de dienstverlening van Bluemetric altijd cliëntgericht, objectief en innovatief is.',
        creds: 'LL.M., CAIA',
        linkedin: 'https://www.linkedin.com/in/emile-van-thiel-3b444a2/',
      },
      {
        initials: 'JW',
        name: 'Jeroen Wulfse',
        role: 'Chief Commercial Officer',
        bio: 'Stuurt de commerciële strategie en business development van Bluemetric aan, versterkt cliëntrelaties en vergroot de marktpositie van het bedrijf.',
        creds: 'MSc., CFA',
        linkedin: 'https://www.linkedin.com/in/jeroenwulfse/',
      },
      {
        initials: 'DH',
        name: 'Daniël Helder',
        role: 'Client Advisor',
        bio: 'Neemt graag de rol van advocaat van de duivel aan om ervoor te zorgen dat alle belangen worden afgewogen voor zorgvuldige, goed onderbouwde investeringsbeslissingen.',
        creds: 'MSc. Finance & Investments',
        linkedin: 'https://www.linkedin.com/in/dani%C3%ABl-helder/',
      },
      {
        initials: 'LP',
        name: 'Lisa Pelk',
        role: 'Client Specialist',
        bio: 'Houdt ervan om deel uit te maken van de dynamiek bij het vertalen van de wensen van een klant naar haar collega\'s en vice versa. Haar nauwkeurigheid, snelheid en hoge mate van focus maken haar zeer gewaardeerd door klanten en collega\'s.',
        creds: 'MSc. Finance & Investments, CFA',
        linkedin: 'https://www.linkedin.com/in/lisa-pelk/',
      },
      {
        initials: 'GvN',
        name: 'Gina van Nijendaal',
        role: 'Operations Officer',
        bio: 'Ondersteunt de dagelijkse operatie binnen Bluemetric en vormt een belangrijke schakel tussen klanten, collega\'s en externe partijen. Met oog op detail en een gestructureerde werkwijze draagt ze bij aan het verder professionaliseren van processen en het borgen van kwaliteit.',
        creds: 'BSc. Business Administration',
        linkedin: 'https://www.linkedin.com/in/gina-van-nijendaal-55681b97/',
      },
      {
        initials: 'DP',
        name: 'Dominique Pietersen',
        role: 'Operations Officer',
        bio: 'Brengt een sterke analystische en procesgerichte achtergrond die goed aansluit bij de dynamische wereld van private equity en investment management. Door middel van haar kwaliteiten schakelt ze snel en bewaard ze het overzicht in een complexe en resultaat gerichte omgeving.',
        creds: 'LL.B.',
        linkedin: 'https://www.linkedin.com/in/dominique-pietersen-a427631a7/',
      },
    ],
    investment: [
      {
        initials: 'KvM',
        name: 'Koen van Mierlo',
        role: 'Managing Partner',
        bio: 'Verantwoordelijk voor het analistenteam en drijvende kracht achter de ontwikkeling van innovatieve investeringsconcepten in publieke en private markten.',
        creds: 'MSc. Financial Economics, LL.M., CFA, CAIA',
        linkedin: 'https://www.linkedin.com/in/koen-van-mierlo-4a47b698/',
      },
      {
        initials: 'DK',
        name: 'Diederik Kappelle',
        role: 'Analist',
        bio: 'Combineert diepgaande kennis van de Private Equity-sector met uitgebreide analyses voor het Investment Committee, met nadruk op minder voor de hand liggende factoren.',
        creds: 'MSc. Financial Economics, CAIA',
        linkedin: 'https://www.linkedin.com/in/diederik-kappelle-889043b9/',
      },
      {
        initials: 'JC',
        name: 'Joost Cankrien',
        role: 'Analist',
        bio: 'Joost houdt zich dagelijks bezig met de selectie, monitoring en rapportages van Private Equity fondsen.',
        creds: 'MSc. Finance & Investments',
        linkedin: 'https://www.linkedin.com/in/joost-cankrien/',
      },
      {
        initials: 'AS',
        name: 'Annegien Smilde',
        role: 'Analist',
        bio: 'Biedt een waardevolle bijdrage aan het analistenteam vanwege haar analystische vaardigheden en het automatiseren van kwantitatieve processen.',
        creds: 'MSc. Quantitative Finance',
        linkedin: 'https://www.linkedin.com/in/annegiensmilde/',
      },
      {
        initials: 'BH',
        name: 'Benjamin Houkes',
        role: 'Analist',
        bio: 'Zet zijn kwantitatieve kwaliteiten graag in bij het ontwikkelen van financiële analyses en het automatiseren van processen.',
        creds: 'MSc. Econometrics & Operations Research',
        linkedin: 'https://www.linkedin.com/in/benjamin-houkes-935121183/',
      },
      {
        initials: 'BvL',
        name: 'Bart van Lidth de Jeude',
        role: 'Analist',
        bio: 'Combineert een scherpe analytische geest met een brede interesse in financiële markten, en levert daarmee een bijdrage aan grondig beleggingsonderzoek en portefeuilleanalyse voor alle activaklassen.',
        creds: 'MSc. Finance',
        linkedin: 'https://www.linkedin.com/in/bart-van-lidth-de-jeude-a747842a0/',
      },
    ],
  },
}
