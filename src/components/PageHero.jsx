export default function PageHero({ label, title, titleSpan, description }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg"></div>
      <div className="page-hero-overlay"></div>
      <div className="page-hero-content">
        <p className="section-label reveal">{label}</p>
        <h1 className="reveal stagger-1">
          {title} <span>{titleSpan}</span>
        </h1>
        <p className="reveal stagger-2">{description}</p>
      </div>
    </section>
  )
}
