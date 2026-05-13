import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Footer from '../components/layout/Footer'

export default function ComplaintsRemuneration() {
  useDocumentTitle('Complaints & Remuneration Policy | Bluemetric')

  return (
    <>
      <article className="blog-post">
        <div className="blog-post-inner">
          <h1 className="blog-post-title">Complaints Procedure</h1>
          <p className="blog-post-meta">Last updated: May 2026</p>

          <div className="blog-post-body">
            <p>
              At Bluemetric, we strive to provide our clients with the best possible service. If, despite
              our efforts, you are dissatisfied with any aspect of our service, we encourage you to share
              your complaint with us so that we can address it promptly and to your satisfaction.
            </p>
            <p>
              A complaint is defined as any expression of dissatisfaction concerning an aspect of our
              service.
            </p>

            <h2>How to submit a complaint</h2>
            <p>You can submit your complaint either by telephone or in writing (by post or email).</p>
            <ul>
              <li>
                <strong>By telephone:</strong> If you submit a complaint by telephone, our complaints
                officer will receive it and inform the management. The complaints officer will record your
                name, address, contact details, and a description of the complaint, together with the date
                of receipt, in our complaints register. We will then inform you about the further procedure
                and the assessment by management.
              </li>
              <li>
                <strong>In writing (post or email):</strong> Complaints received by post or email are also
                handled by the complaints officer. The complaint is recorded in the complaints register
                together with the date of receipt. Within one week of receipt, you will receive
                confirmation that your complaint is being processed.
              </li>
            </ul>

            <h2>Handling of your complaint</h2>
            <p>
              The complaints officer is the managing partner of Bluemetric. In their absence, the role is assumed by
              another member of the management. The complaints officer is never the same person as the
              individual to whom the complaint relates.
            </p>
            <p>
              Once your complaint has been submitted, the complaints officer will inform the person
              concerned, and both you and that person will be given the opportunity to provide an
              explanation. We aim to handle complaints within 30 days of receipt. The complaints officer
              will keep you informed of progress throughout the process and will notify you in writing of
              the assessment as to whether the complaint is well-founded, where appropriate accompanied
              by recommendations.
            </p>
            <p>
              If the complaint has been resolved to your satisfaction, you, the complaints officer, and
              the person concerned will sign the assessment of the well-foundedness of the complaint and,
              where applicable, the agreed solution.
            </p>

            <h2>Complaints register</h2>
            <p>
              All relevant information relating to your complaint, including the nature of the complaint
              and the manner in which it has been handled, is recorded in our complaints register. This
              data is retained for a minimum of five years.
            </p>

            <h2>Not satisfied with the outcome?</h2>
            <p>
              If the handling of your complaint is not to your satisfaction, you may turn to the Dutch
              Financial Services Complaints Institute (Klachteninstituut Financiële Dienstverlening,
              Kifid), to which Bluemetric is affiliated.
            </p>

          </div>

          <h2 className="blog-post-title" style={{ marginTop: 64 }}>Remuneration Policy</h2>
          <div className="blog-post-body">
            <p>
              Bluemetric applies a controlled remuneration policy designed to prevent remuneration from
              leading to excessive risks for the firm, sustainability-related risks, or the careless
              treatment of clients. Bluemetric's policy is determined based on the company's results, the
              results achieved by the relevant team, and the performance of the individual employee. The
              remuneration policy is, however, not linked to specific individual financial targets.
              Remuneration is gender-neutral, promotes sound and ethical business operations, and ensures
              that employees are not given incentives that could harm the interests of clients.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
