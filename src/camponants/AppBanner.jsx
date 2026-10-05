import { Button, Col, Container, Row } from "react-bootstrap";

export default function AppBanner() {
  return (
    <Container fluid className="px-lg-4 py-5">
      <Row className="g-3">
        <Col lg={7}>
          <div className="d-flex align-items-center justify-content-between rounded-4 p-3 h-100 bg-light" style={{ minHeight: 200 }}>
            <div>
              <h3 className="fw-bold lh-sm mb-3" style={{ fontSize: "clamp(1.6rem, 2vw, 2.5rem)", letterSpacing: "-0.06em" }}>
                Make online shop easier
                <br />
                with our Cartzilla App
              </h3>
              <Button variant="dark" className="rounded-pill me-2 mb-2">▶ Google Play</Button>
              <Button variant="dark" className="rounded-pill mb-2"> App Store</Button>
            </div>
            <div style={{ fontSize: "7rem" }}>🧑‍🌾</div>
          </div>
        </Col>

        <Col lg={5}>
          <div className="d-flex align-items-center justify-content-between rounded-4 p-3 h-100 bg-light" style={{ minHeight: 200 }}>
            <div>
              <h3 className="fw-bold lh-sm mb-3" style={{ fontSize: "clamp(1.6rem, 2vw, 2.5rem)", letterSpacing: "-0.06em" }}>
                We'd love to
                <br />
                hear what you
                <br />
                think!
              </h3>
              <small className="fw-bold">Give a feedback ›</small>
            </div>
            <div style={{ fontSize: "7rem" }}>👩‍🍳</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}