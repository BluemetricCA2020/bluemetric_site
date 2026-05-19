import type { Post } from '../types'

const post: Post = {
  slug: 'is-small-really-beautiful',
  title: 'Is Small Really Beautiful?',
  author: 'Team Bluemetric',
  date: '2025-02-05',
  tag: 'Private Equity',
  image: null,
  body: `Investors seeking exposure to private equity typically diversify their buyout allocation by market segment. A recurring question is whether managers in the Large Cap segment can still add sufficient value. We examine the added value — and the additional risks — that funds from different market segments can contribute to a private equity portfolio.

A well-known phenomenon in actively managed public funds is that once investors identify a successful fund manager, an increase in committed capital follows. However, as fund size grows, it typically becomes harder to continue beating the market. The decline in alpha is driven in part by factors such as increased competition in the upper segment and correspondingly fewer inefficiencies to exploit.

In private equity, a similar dynamic exists in fundraising. Successful buyout managers often graduate from the Small Cap to the Large Cap segment after a track record of success, as they are able to attract ever-larger amounts of capital. While private equity has historically outperformed public equity markets, there is debate over whether Large Cap managers can sustain outperformance relative to Small Cap managers. Is it even desirable to invest in the Large Cap segment?

## Dispersion vs. Average

A logical starting point for this question is to assess the historical returns of buyout managers. Looking at performance ranked by fund size and adjusted for the specific vintage year, a clear pattern emerges (see Figure 1). Smaller funds offer potentially stronger performance than larger funds. However, the same sword cuts both ways — the likelihood of significantly below-average returns also increases. On average, the difference between the two market segments is marginal.

![Figure 1 — Impact of Fund Size on Performance](/images/pe-fund-size-performance.svg)

_Source: Preqin; performance ranked by fund size, vintage-adjusted._

Furthermore, the data presented may be subject to a selection bias. The availability of data on Small Cap funds depends more heavily on managers who voluntarily disclose their own results. Since underperforming funds are less inclined to publicise their track record, an artificially upward bias in reported Small Cap performance may arise — skewing conclusions in favour of the Small Cap segment. (Many private markets databases rely on the Freedom of Information Act for their data, which requires public pension funds to disclose their investments. Given their large capital positions, most pension funds invest primarily in Large Cap funds, making information provision in that segment comparatively more transparent.)

## Mythbusting: Nuancing the Stereotypes

Of course, we cannot drive forward by looking in the rear-view mirror. Before an informed judgement can be made about future investments in the Large Cap versus Small Cap segment, it is useful to assess qualitative characteristics as well. Several stereotypes deserve some nuance:

**1. Large Cap value creation is primarily driven by debt financing.**

The use of debt financing is a conventional component of buyout investments, but the degree to which managers rely on external financing varies considerably. Large Cap transactions carry a substantially higher debt multiple (debt relative to EBITDA) of approximately 5x, compared to roughly 3x for Small Cap transactions. However, the debt ratio — debt relative to enterprise value — is much more comparable between the two segments: approximately 50% versus 45%. This implies that both segments are similarly dependent on the leverage effect of debt in their value creation process.

**2. The Large Cap segment offers little room for operational improvements.**

Large Cap managers typically acquire stakes in large, more professionalised businesses, leading to the perception that there is limited scope for operational improvement. Nevertheless, more than 40% of value creation in large investments is driven by revenue growth and margin improvements (based on a study of 624 investments with an average enterprise value of USD 665 million). Large Cap managers can also specialise in more complex transactions such as take-privates of listed companies and carve-outs. Smaller managers, by contrast, often focus on specific niches or sectors where they can deploy specialised knowledge. In short, both segments offer distinct opportunities to implement business improvements.

**3. The Large Cap segment is more competitive than Small Cap.**

The number of available companies in the Large Cap segment is naturally lower than in the Small Cap segment. With a growing number of market participants, this can drive up company valuations. And indeed, purchase multiples in the Large Cap segment tend to be higher than in the Small Cap segment. While this may partly reflect supply and demand dynamics, the higher risks in the Small Cap segment also exert a dampening effect on valuations. It is therefore not accurate to assess the degree of competition solely through observed prices. Lower multiples — and correspondingly higher risks — do, however, offer enhanced upside potential for investors in the Small Cap segment.

## Include Both in a PE Portfolio?

As is often the case in investing, the picture is two-sided: the Small Cap segment offers potential outperformance, though it comes with additional risks. It is also more challenging to identify and evaluate successful Small Cap managers in advance, given their shorter track records. At the same time, the value added by manager selection is most pronounced in this segment. The trade-off between investing in Large Cap and Small Cap managers therefore partly depends on the resources one is prepared to commit to an effective selection process.`,
}

export default post
