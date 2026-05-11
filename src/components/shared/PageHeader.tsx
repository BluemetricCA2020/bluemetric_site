import Brandmark from './Brandmark'

interface PageHeaderProps {
  label: string
  heading: string
  sub: string
}

export default function PageHeader({ label, heading, sub }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="page-header-brandmark">
        <Brandmark width={400} height={400} variant="color" />
      </div>
      <div className="page-header-inner">
        <div className="page-label">{label}</div>
        <h1 className="page-heading">{heading}</h1>
        <p className="page-sub">{sub}</p>
      </div>
    </section>
  )
}
