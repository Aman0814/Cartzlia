import { Col, Container, Row } from "react-bootstrap";

const promos = [
  { count: "124 products", title: "Only fresh fish to your table", type: "#f7d7d1", art: "🐟" },
  { count: "87 products", title: "Products for Easter table", type: "#f4ebd0", art: "🧁" },
  { count: "28 products", title: "Berries from the garden", type: "#d8ebf7", art: "🫐" }
];

export default function PromoCards() {
  return (
    <Container fluid className="px-lg-4 py-3">
      <Row className="g-3">
        {promos.map((promo) => (
          <Col md={4} key={promo.title}>
            <div className="rounded-4 p-3 position-relative overflow-hidden h-100" style={{ background: promo.type, minHeight: 170 }}>
              <small className="text-secondary small fw-semibold">{promo.count}</small>
              <h3 className="mt-2 mb-3 fw-bold fs-5" style={{ maxWidth: 180 }}>{promo.title}</h3>
              <a href="#products" className="text-dark text-decoration-none fw-bold small">Shop now ›</a>
              <div className="position-absolute end-0 bottom-0 me-2 mb-2" style={{ fontSize: "4rem", lineHeight: 1 }}>{promo.art}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}