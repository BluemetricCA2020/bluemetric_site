import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Footer from '../components/layout/Footer'

export default function Disclaimer() {
  useDocumentTitle('Disclaimer | Bluemetric')

  return (
    <>
      <article className="blog-post">
        <div className="blog-post-inner">
          <h1 className="blog-post-title">Disclaimer</h1>
          <p className="blog-post-meta">Last updated: May 2026</p>

          <div className="blog-post-body">
            <p>
              This communication and the information contained herein has been compiled in part on the
              basis of information provided verbally and in writing by or on behalf of sources we have
              consulted (data rate information systems, fund managers, etc.).
            </p>
            <p>
              Although this communication and the information it contains have been drafted with the
              utmost care, Bluemetric and/or its employees do not accept or concede any liability with
              regard to the accuracy and completeness thereof. The recipient of this report may ask
              anything with regard to (the drafting of) the content of this report and may request
              further documentation to substantiate it. Information provided by Bluemetric B.V. cannot
              be considered advice or an offer of financial instruments, unless otherwise stated. Please
              note that the value of your investment may fluctuate. Past performance is no guarantee of
              future performance.
            </p>
          </div>

          <h2 className="blog-post-title" style={{ marginTop: 64 }}>Sustainability Disclaimer</h2>
          <div className="blog-post-body">
            <p>
              A "sustainability risk" within the meaning of the SFDR is defined as: "an environmental,
              social or governance event or condition that, if it occurs, could cause a negative material
              impact on the value of a client's investments."
            </p>
            <p>
              Environmental sustainability risks relate, among other things, to climate change, water
              scarcity, and the use of natural resources. Social risks include, among others, product
              liability and respect for labor rights. In the area of governance, risks may arise in
              relation to remuneration, the stability and diversity of management, business ethics, and
              shareholder rights.
            </p>
            <p>
              When selecting funds, sustainability risks are taken into consideration, among other
              factors. Bluemetric has carefully evaluated the requirements of the Principal Adverse Impact
              (PAI) regime under Article 4 of the SFDR and has decided not to consider the adverse
              impacts of investment decisions on sustainability factors at entity level. The reason for
              this is the limited size of its business and the complexity of obtaining the information
              required for this purpose.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
