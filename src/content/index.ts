import type { Post } from './types'
import diversificatie from './posts/diversificatie-een-alternatief-perspectief'
import schaduwbank from './posts/de-schaduwbank-van-private-equity'
import persistentie from './posts/persistentie-in-private-equity'
import sterren from './posts/sterren-van-de-markt'
import onconventioneel from './posts/onconventionele-wijsheden-portefeuilleconstructie'
import ventureCapital from './posts/venture-capital-realizing-the-unrealized'
import hedgefondsen from './posts/hedgefondsen-rocksterren-of-vergane-glorie'
import slapenPrijs from './posts/de-prijs-van-onbezorgd-slapen'
import innovatieSecondary from './posts/innovatie-secondary-private-equity-markt'
import tweedehands from './posts/tweedehands-private-equity-portefeuille'
import calmSeas from './posts/calm-seas-dont-make-skilled-sailors'
import peOutlook from './posts/private-equity-outlook-herculean-trials'
import smoothOperators from './posts/smooth-operators-vs-mr-market'
import peValueCreation from './posts/pe-value-creation'
import impactViaPE from './posts/impact-via-private-equity'
import warrenBuffett from './posts/warren-buffett-private-markets'
import isSmallBeautiful from './posts/is-small-really-beautiful'
import peResilient from './posts/pe-resilient-uncertain-world'
import democratisingPE from './posts/democratising-private-equity'
import specialtyFinance from './posts/specialty-finance-private-credit'
import peOneStepBack from './posts/pe-one-step-back-two-forward'
import secondaryDevelopments from './posts/secondary-pe-market-developments'
import peNavigating2026 from './posts/pe-navigating-2026'
import privateCreditStressTest from './posts/private-credit-stress-test'

export const posts: Post[] = [
  diversificatie,
  schaduwbank,
  persistentie,
  sterren,
  onconventioneel,
  ventureCapital,
  hedgefondsen,
  slapenPrijs,
  innovatieSecondary,
  tweedehands,
  calmSeas,
  peOutlook,
  smoothOperators,
  peValueCreation,
  impactViaPE,
  warrenBuffett,
  isSmallBeautiful,
  peResilient,
  democratisingPE,
  specialtyFinance,
  peOneStepBack,
  secondaryDevelopments,
  peNavigating2026,
  privateCreditStressTest,
].sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}

export const tags = [...new Set(posts.map(p => p.tag))].sort()
