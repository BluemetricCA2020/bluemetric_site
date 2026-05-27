import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Footer from '../components/layout/Footer'

export default function NotFound() {
  useDocumentTitle('Page Not Found | Bluemetric')

  return (
    <>
      <section className="not-found">
        <div className="not-found-inner">
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page not found</h1>
          <p className="not-found-message">
            The page you are looking for may have moved or no longer exists.
          </p>
          <Link to="/" className="not-found-link">← Back to Home</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
