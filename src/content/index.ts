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
]

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}

export const tags = [...new Set(posts.map(p => p.tag))].sort()
