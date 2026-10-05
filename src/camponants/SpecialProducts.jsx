import { Col, Container, Row } from "react-bootstrap";
import { products } from "../../data/data";
import SectionTitle from "./SectionTitle";
import ProductGrid from "./ProductGrid";

export default function SpecialProducts() {
  return (
    <Container fluid className="px-lg-4 py-4">
      <Row className="g-4">
        <Col lg={3}>
          <div className="rounded-4 p-3 h-100" style={{ background: "linear-gradient(180deg, #d4e9ef 0%, #d7efe6 100%)", minHeight: 200 }}>
            <h4 className="fw-bold fs-4 mb-3 lh-sm">
              Make breakfast
              <br />
              healthy and
              <br />
              easy
            </h4>
            <a href="#" className="text-dark text-decoration-none fw-bold small">Shop now ›</a>
            <div className="position-absolute end-0 bottom-0 me-3 mb-2" style={{ fontSize: "2.5rem" }}>🍊 🥝</div>
          </div>
        </Col>

        <Col lg={9}>
          <SectionTitle title="Special products" link="View all" />
          <ProductGrid products={products.slice(0, 4)} />
        </Col>
      </Row>
    </Container>
  );
}