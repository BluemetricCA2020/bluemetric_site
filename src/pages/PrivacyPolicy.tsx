import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Footer from '../components/layout/Footer'

export default function PrivacyPolicy() {
  useDocumentTitle('Privacy Policy | Bluemetric')

  return (
    <>
      <article className="blog-post">
        <div className="blog-post-inner">
          <h1 className="blog-post-title">Privacy Policy</h1>
          <p className="blog-post-meta">Last updated: May 2026</p>

          <div className="blog-post-body">
            <p>
              This privacy statement describes how Bluemetric B.V. handles the personal data you provide
              when you visit our website or apply for a position at Bluemetric.
            </p>
            <p>
              We may update this statement from time to time by revising this page. You are advised to
              review this page periodically to ensure that you agree with any changes.
            </p>

            <h2>Privacy Statement</h2>
            <p>
              Your privacy is important to us. We strive to provide clear information about how we use
              your personal data. In addition, we take measures to secure and protect your data against
              misuse, comply with all applicable privacy laws and regulations, and cooperate with data
              protection supervisory authorities.
            </p>

            <h2>Which personal data we process and why?</h2>
            <p>
              We process your personal data on the basis of your consent, the performance of a contract,
              a legal obligation, or our legitimate interest, depending on the purpose of the processing.
            </p>
            <p>
              This is done exclusively for the following purposes: providing our services, managing client
              relationships, assessing job applications, complying with legal obligations, and ensuring
              safe and ethical business operations.
            </p>
            <p>
              We do not retain your personal data longer than necessary for the purposes for which it was
              collected, unless a statutory retention obligation applies. Retention periods are defined in
              our internal processing register.
            </p>

            <h2>1. Visiting the Bluemetric website</h2>
            <p>
              We collect your IP address and use cookies for traffic analysis to identify which pages are
              visited. This information is used solely for statistical analysis, to improve our website
              and tailor it to the needs of visitors.
            </p>

            <h3>Links to other websites</h3>
            <p>
              Our website may contain links to other websites that may be of interest to you. Once you
              use these links and leave our site, we no longer have control over that website. Therefore,
              we cannot be held responsible for the protection and privacy of any information you provide
              while visiting such sites. Such websites are not governed by this privacy statement. Please
              consult the privacy statement of the relevant website.
            </p>

            <h2>2. Applying for a job at Bluemetric</h2>
            <p>When you apply for a position, we may collect the following personal data:</p>
            <ul>
              <li><strong>Contact Information:</strong> name, address, email, and phone number.</li>
              <li><strong>Professional Information:</strong> CV, cover letter, work experience, education, skills, and qualifications.</li>
              <li><strong>Identification Information:</strong> date of birth, nationality, and identification documents.</li>
              <li><strong>Application Information:</strong> position applied for, source of application, and any correspondence related to your application.</li>
              <li><strong>Assessment Information:</strong> interview notes, test results, and feedback from references.</li>
            </ul>
            <p>
              We use your personal data to assess your suitability for the position you applied for,
              communicate with you throughout the recruitment process, conduct background checks and
              verify your information, and to comply with legal and regulatory requirements.
            </p>

            <h2>3. Sharing your personal data</h2>
            <p>
              We only share your personal data when this is necessary and in accordance with applicable
              laws and regulations. This may occur in the following situations:
            </p>
            <ul>
              <li>When we are legally obliged to do so, for example at the request of a supervisory authority or judicial body;</li>
              <li>When necessary for the provision of our services or the management of client relationships;</li>
              <li>When third parties (such as service providers, IT partners, compliance advisors, or recruiters) perform work for us that requires access to personal data;</li>
              <li>When required to detect or prevent violations of laws and regulations, fraud, abuse, or security incidents;</li>
              <li>When internal departments or external parties are involved in handling job applications or whistleblower reports.</li>
            </ul>
            <p>
              In some cases, personal data is shared with parties outside the European Economic Area
              (EEA), such as financial institutions, funds, or service providers. If personal data is
              transferred outside the EEA, Bluemetric ensures that such transfers only take place when
              necessary and that appropriate safeguards are in place.
            </p>

            <h2>4. How we keep your personal data secure</h2>
            <p>
              We take all reasonable steps to keep your data secure. We have implemented appropriate
              physical, electronic, and organizational measures to protect personal data against
              unauthorized access or disclosure.
            </p>
            <p>
              Bluemetric maintains an internal processing register in which all processing activities are
              recorded in accordance with the General Data Protection Regulation (GDPR). This register
              helps us ensure compliance with privacy legislation.
            </p>

            <h2>5. Reporting under the Whistleblower Scheme</h2>
            <p>
              When you submit a report under our Whistleblower Scheme, we process personal data of the
              reporter and of the person(s) to whom the report relates.
            </p>
            <p>This may include:</p>
            <ul>
              <li>name, contact details, and position;</li>
              <li>the content of the report and related documents;</li>
              <li>data collected during the investigation, such as notes or correspondence.</li>
            </ul>
            <p>We process this data solely in order to:</p>
            <ul>
              <li>register, investigate, and handle the report;</li>
              <li>comply with legal obligations under the Dutch Whistleblower Protection Act;</li>
              <li>protect the rights and interests of all parties involved.</li>
            </ul>
            <p>
              The data is treated confidentially and shared only with individuals directly involved in
              handling the report. All information is retained for as long as necessary for handling the
              report and in accordance with statutory retention periods.
            </p>

            <h2>6. Your rights</h2>
            <p>
              You have certain rights under the General Data Protection Regulation (GDPR). These include
              the right to:
            </p>
            <ul>
              <li>request access and obtain a copy of your personal data;</li>
              <li>request rectification or erasure of your personal data;</li>
              <li>restrict the processing of your personal data;</li>
              <li>object to the processing of your personal data;</li>
              <li>request data portability;</li>
              <li>withdraw any consent you have previously given at any time, without affecting the lawfulness of processing carried out before the withdrawal.</li>
            </ul>
            <p>
              Where we have not obtained personal data directly from you, you also have the right to be
              informed about the source of that data.
            </p>
            <p>
              To exercise these rights, please contact us using the contact details provided below. We
              will consider and act upon any request in accordance with applicable data protection laws.
            </p>
            <p>
              Email: <a href="mailto:info@bluemetric.nl">info@bluemetric.nl</a><br />
              Address: Claude Debussylaan 46, 1082 MD Amsterdam, The Netherlands.
            </p>
            <p>
              If you are not satisfied with the way we handle your personal data or your request, you can
              file a formal complaint. You also have the right to lodge a complaint with the Dutch Data
              Protection Authority (Autoriteit Persoonsgegevens).
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
