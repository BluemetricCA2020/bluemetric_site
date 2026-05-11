interface ContactText {
  sectionLabel: string
  formHeading: string
  formIntro: string
  conversationHeading: string
  emileName: string
  emileRole: string
  koenName: string
  koenRole: string
  addressLine1: string
  addressLine2: string
  addressCountry: string
  afmNote: string
  labelFirstName: string
  labelLastName: string
  labelEmail: string
  labelPhone: string
  labelSubject: string
  subjectPlaceholder: string
  subjectWealth: string
  subjectReporting: string
  subjectPrivate: string
  subjectGeneral: string
  labelMessage: string
  submit: string
  sending: string
  success: string
  error: string
  emailError: string
}

export const contactTranslations: { en: ContactText; nl: ContactText } = {
  en: {
    sectionLabel: 'Contact',
    formHeading: 'Get in touch',
    formIntro: "We'd welcome the opportunity to discuss how we can serve your wealth management needs.",
    conversationHeading: "Let's have a conversation.",
    emileName: 'Emile van Thiel',
    emileRole: 'Managing Partner',
    koenName: 'Koen van Mierlo',
    koenRole: 'Managing Partner',
    addressLine1: 'Claude Debussylaan 46',
    addressLine2: '1082 MD Amsterdam',
    addressCountry: 'The Netherlands',
    afmNote: 'Registered with the AFM (Dutch Authority for the Financial Markets)',
    labelFirstName: 'First Name',
    labelLastName: 'Last Name',
    labelEmail: 'Email Address',
    labelPhone: 'Phone',
    labelSubject: 'Subject',
    subjectPlaceholder: 'Select a topic',
    subjectWealth: 'Wealth Advisory',
    subjectReporting: 'Consolidated Reporting',
    subjectPrivate: 'Private Markets',
    subjectGeneral: 'General Inquiry',
    labelMessage: 'Message',
    submit: 'Send Message',
    sending: 'Sending…',
    success: 'Thank you. We will be in touch shortly.',
    error: 'Something went wrong. Please try again or email us directly at info@bluemetric.nl.',
    emailError: 'Please enter a valid email address.',
  },
  nl: {
    sectionLabel: 'Contact',
    formHeading: 'Neem contact op',
    formIntro: 'Wij verwelkomen graag de gelegenheid om te bespreken hoe wij u kunnen dienen op het gebied van vermogensbeheer.',
    conversationHeading: 'Laten we in gesprek gaan.',
    emileName: 'Emile van Thiel',
    emileRole: 'Managing Partner',
    koenName: 'Koen van Mierlo',
    koenRole: 'Managing Partner',
    addressLine1: 'Claude Debussylaan 46',
    addressLine2: '1082 MD Amsterdam',
    addressCountry: 'Nederland',
    afmNote: 'Geregistreerd bij de AFM (Autoriteit Financiële Markten)',
    labelFirstName: 'Voornaam',
    labelLastName: 'Achternaam',
    labelEmail: 'E-mailadres',
    labelPhone: 'Telefoon',
    labelSubject: 'Onderwerp',
    subjectPlaceholder: 'Selecteer een onderwerp',
    subjectWealth: 'Vermogensadvies',
    subjectReporting: 'Geconsolideerde Rapportage',
    subjectPrivate: 'Private Markets',
    subjectGeneral: 'Algemene Vraag',
    labelMessage: 'Bericht',
    submit: 'Verstuur Bericht',
    sending: 'Versturen…',
    success: 'Dank u. Wij nemen spoedig contact met u op.',
    error: 'Er is iets misgegaan. Probeer het opnieuw of stuur ons een e-mail op info@bluemetric.nl.',
    emailError: 'Voer een geldig e-mailadres in.',
  },
}
