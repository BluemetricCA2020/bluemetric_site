import type { Post } from '../types'

const post: Post = {
  slug: 'private-credit-stress-test',
  title: 'The Private Credit Stress Test: Credit Crisis or Sentiment Correction?',
  author: 'Team Bluemetric',
  date: '2026-05-27',
  tag: 'Private Credit',
  image: null,
  body: `Private credit has grown to a market size of over USD 2 trillion, establishing itself as a structural pillar within private markets. Alongside institutional investors, retail investors also entered via seemingly liquid structures. Where investors long viewed the segment as a stable source of returns, the market faces a different reality in 2026: AI disruption and price declines are testing confidence. Concerns about credit risk are compounded by liquidity risk as investors seek to exit their positions. Are these concerns justified?

## Illiquid Investment, Liquid Structures

Private credit investments are by nature relatively illiquid. Nevertheless, investors can access the asset class in various ways. The structures can be arranged along the liquidity spectrum into three categories:

**1. Illiquid.** Traditional private credit funds that draw down capital gradually with a term of 8 to 12 years. Early exit is generally not an option.

**2. Semi-liquid.** Offers investors the ability to sell their interest at fixed intervals, though the redemption capacity per period is capped. Examples include interval funds and non-traded BDCs (Business Development Companies).

**3. Liquid.** Publicly traded funds priced like regular equities, where the price reflects both (i) credit quality and (ii) investor return requirements. Listed BDCs are the primary category.

Most retail investors have entered through the latter two categories, which carry a potential liquidity mismatch: the underlying loans are illiquid while the overlying structures are partly not. This had important implications for the private credit segment when concerns about credit quality increased and the number of desired redemptions rose earlier this year.

## When the Mismatch Becomes Visible

These concerns were clearly visible in the declining prices of publicly traded BDCs (see Figure 1). In March, BDCs traded at an average discount of 26% relative to the book value of the underlying loan portfolio.

![Figure 1 — BDC Performance vs. Global Equity Market](/images/pc-bdc-performance.png)

A comparable decline in confidence is evident among non-traded BDCs: during the first quarter of 2026, investors requested redemptions averaging 12% of fund size, well above the quarterly limit of 5% that most funds apply. As managers were unable to honour all requests, the instrument proved less liquid than expected during periods of market stress. An extreme example is the funds of manager Blue Owl, where redemption requests reached 22% and even 40% within their technology-focused fund. The question is to what extent these price declines and redemption requests are justified. Answering that requires a distinction between the fundamental credit risk of the underlying loans and sentiment around the market segment.

## Doubts About Credit Quality: Fraud Cases and AI Disruption

After a relatively long period of stability, concerns about credit risk first arose in September 2025: the bankruptcies of First Brands and Tricolor exposed major fraud cases and underscored the importance of thorough analysis of the underlying companies in which one invests.

Earlier this year, a more systematic shock followed with the 'SaaS-pocalypse'. Software has traditionally been one of the preferred sectors for lenders due to its predictable and scalable business model, driven by recurring subscriptions and high margins. Autonomous AI agents are putting this under pressure: per-user licences become less logical when one agent works on behalf of multiple users, and selling additional modules becomes harder as generic models make functionality more broadly available. This led to sharp declines in the software loan market (see Figure 2).

![Figure 2 — Loan Market Price Declines](/images/pc-loan-prices.png)

BDCs have significant exposure to software companies, at approximately 20 to 30%. The sector correction therefore contributed substantially to the price declines of BDCs. Not all software exposure is equal, however. Business-critical software with high switching costs, such as a fully integrated ERP system, remains relevant. Standalone tools for tasks such as note-taking or simple data processing are expected to face greater risk of replacement by an AI agent.

## From Concerns to Data

Although concerns about credit quality, and software in particular, have increased, fundamental data show limited evidence of credit losses within the segment so far:

**1. Software risk.** The default rate in the software sector was relatively low in 2024. The rise in 2025 brought it back to the market average.

**2. Defaults within BDCs.** Realised defaults within BDC portfolios amounted to 3.3% in 2025, in line with 2024.

**3. Market size.** Private credit represents approximately 12.5% of total bank lending, compared to approximately 53% for mortgage lending at the time of the financial crisis. Contagion risks are therefore structurally more limited in scale than in 2008.

On the other hand, payment-in-kind (PIK) interest is increasing. Rather than paying interest in cash, the interest is added to the principal of the loan. At listed BDCs, this now accounts for an average of 8% of investment income. This can be a signal of liquidity pressure on the borrower and increases the risk of loss in the event of default: a signal to continue monitoring.

## Private Credit Investments: What Now?

So far, there is limited evidence of fundamental credit stress in the underlying loans within the private credit segment. The recent price declines and redemption requests therefore appear to be predominantly sentiment-driven: part of the investor base realised that their risk appetite and investment horizon were insufficiently aligned with the chosen product structure.

This illustrates that portfolio construction requires more than a judgement on the attractiveness of an asset class. Not only the risk-return characteristics of the investment itself need to be evaluated. The manner in which access is obtained also forms an essential part of the investment process.`,
}

export default post
