import type { Post } from '../types'

const post: Post = {
  slug: 'warren-buffett-private-markets',
  title: "Buffett's Paradox: Cautioning Against Private Equity While Running One",
  author: 'Team Bluemetric',
  date: '2024-10-30',
  tag: 'Private Equity',
  image: null,
  body: `At the 2023 annual shareholder meeting of Berkshire Hathaway (BH), Warren Buffett once again cautioned against private equity, asserting that BH could generate better returns on private acquisitions than PE firms — without the hefty fees. It is a recurring theme in his annual letters and shareholder meetings: PE is expensive, opaque, and not worth the premium. Yet a closer look at BH's own investment record and portfolio composition raises an interesting question: is Buffett warning against a strategy he himself has been executing for decades?

BH's long-term track record speaks for itself. Since 1987, BH shares have outperformed the S&P 500 by a wide margin. Over the period 1965–2022, BH generated an annualised return of 19.8% versus 9.9% for the S&P 500.

![Figure 1 — Berkshire Hathaway Return Since 1987](/images/bh-performance-1987.svg)

_Source: Bloomberg (December 1987 – September 2024), indexed to 100 at start._

This exceptional performance has elevated Buffett to a near-mythical status in investment circles. His reluctance to engage with the fees and leverage of conventional PE seems principled. But the comparisons he draws — between BH's low-cost, long-term ownership and the short-term financial engineering of PE firms — deserve scrutiny. As Buffett himself once put it: PE firms "avoid them like the plague" as competitors for acquisitions, because BH operates with permanent capital and no exit pressure.

The paradox deepens when one examines the composition of his portfolio and the academic literature on the sources of his returns.

## 1. Buffett's Returns Examined

Academic research has sought to decompose BH's exceptional return. A widely cited study by Frazzini, Kabiller, and Pedersen (2018) found that much of Buffett's alpha can be attributed to two systematic factors: the use of modest leverage (approximately 1.7x) and a consistent preference for quality, low-risk, and value-oriented stocks — characteristics captured by well-known factor models.

Once these exposures are accounted for, the residual alpha shrinks considerably. Furthermore, when the trailing five-year return of BH is compared to the S&P 500, a clear convergence trend emerges over the past two decades (Figure 2). In the 1990s, BH's trailing five-year return regularly exceeded 30–38% per year. Since the mid-2000s, it has generally tracked closer to the broader market.

![Figure 2 — Trailing 5-Year Annualised Returns](/images/bh-trailing-5yr.svg)

_Source: Bloomberg (1992–2022), trailing 5-year annualised total returns._

This does not diminish the achievement — generating market-like returns at scale, with a favourable risk profile, is itself remarkable. But it does suggest that the exceptional performance of the 1980s and 1990s was not simply the product of stock picking genius alone.

## 2. Buffett and Private Markets

A less frequently discussed dimension of BH's strategy is the extent to which it resembles a private equity approach. The majority of BH's assets — estimated at 42–55% of its portfolio over the past two decades — are held in wholly-owned private operating businesses, not publicly traded securities (Figure 3).

![Figure 3 — Berkshire Hathaway Asset Allocation](/images/bh-asset-allocation.svg)

_Source: Berkshire Hathaway Annual Reports (2000–2020), Bluemetric estimates._

These subsidiaries include GEICO, BNSF Railway, Berkshire Hathaway Energy, and dozens of manufacturing and services companies. BH acquires these businesses outright, retains management, provides operational autonomy, and holds them indefinitely. The capital deployment model — acquiring control positions in private companies, improving operations, and benefiting from long-term compounding — closely mirrors the logic of private equity, albeit without the fixed-term fund structure or the leverage-heavy financial engineering that Buffett publicly criticises.

This distinction is important. Buffett's criticism of PE is largely directed at the fee structure and the pressure to exit within a defined fund life. On those dimensions, BH differs materially. But in terms of investment philosophy — buying businesses below intrinsic value, improving governance, and holding through the cycle — the parallel is closer than his rhetoric suggests.

## 3. A 'Fair' Comparison

If a significant portion of BH's assets consists of private businesses, then the S&P 500 — a public equity benchmark — is arguably the wrong benchmark. A more appropriate comparison would blend a public equity index with a private market benchmark, weighted according to BH's actual portfolio composition.

Frazzini, Kabiller, and Pedersen (2018) constructed such a blended benchmark. When BH's performance is measured against this adjusted standard, the apparent outperformance narrows substantially (Figure 4). BH's annualised return of approximately 9.9% over the period 2000–2022 aligns almost exactly with the adjusted fair benchmark of 9.9%, while the conventional S&P 500 benchmark delivered approximately 8.2% per year over the same period.

![Figure 4 — Berkshire Hathaway vs Adjusted Benchmark (indexed 100)](/images/bh-fair-benchmark.svg)

_Source: Bloomberg; Frazzini, Kabiller & Pedersen (2018), adjusted for private market exposure._

In other words, once the appropriate benchmark is applied — one that accounts for BH's substantial private market exposure — the performance edge over the fair benchmark all but disappears. Buffett's returns are consistent with what one would expect from a well-run, diversified business with meaningful private market allocation.

## Conclusion: Ambiguous Wisdom

None of this diminishes the real achievements of BH or the genuine insight in Buffett's investment principles. His discipline, his patience, his focus on durable competitive advantages, and his long-term ownership culture have created extraordinary value over six decades. These qualities are rare and worth studying.

But the specific criticism of private equity deserves to be read with nuance. When Buffett warns against PE, his objections are largely structural — the fee drag, the leverage, the exit pressure. When stripped of those structural features, what remains of the PE philosophy — control ownership of private businesses, operational involvement, and long-term compounding — is precisely what BH itself does at scale. Investors evaluating private market allocations would do well to keep this distinction in mind: the best critique of PE may lie not in rejecting private ownership, but in demanding better terms.`,
}

export default post
