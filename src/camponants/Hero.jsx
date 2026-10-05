import { Button, Col, Container, Row } from "react-bootstrap";
import heroImage from "../image/grocery10.png";

export default function Hero() {
  return (
    <section className="bg-light-subtle border-bottom" style={{ background: "linear-gradient(115deg, #eef3ee 0%, #eff0ef 40%, #f5f1ea 100%)" }}>
      <Container fluid className="px-lg-4 py-4 py-lg-0">
        <Row className="align-items-center min-vh-50">
          <Col lg={6} className="py-5">
            <div className="text-success fw-bold text-uppercase small letter-spacing">
              <span className="me-2">●</span> Organic products to your table
            </div>
            <h1 className="display-4 fw-bold mt-3 mb-4 lh-1" style={{ letterSpacing: "-0.06em" }}>
              Organic eggs from
              <br />
              home-grown
              <br />
              chicken
            </h1>
            <Button variant="outline-dark" className="rounded-pill px-4 py-2 fw-semibold">
              Shop now <i className="bi bi-arrow-right"></i>
            </Button>
          </Col>

          <Col lg={6} className="position-relative text-center py-4">
            <img src={heroImage} alt="Fresh organic groceries" className="img-fluid" style={{ maxHeight: 480, objectFit: "contain" }} />
            <div className="position-absolute start-0 bottom-0 bg-white rounded-4 px-3 py-2 shadow-sm text-center border">
              <div className="text-uppercase small text-secondary">Fresh</div>
              <div className="fw-bold">Natural</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}