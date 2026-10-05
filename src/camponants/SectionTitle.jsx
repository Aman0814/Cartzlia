
export default function SectionTitle({ title, link }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {link && <a href="#">{link} ›</a>}
    </div>
  );
}