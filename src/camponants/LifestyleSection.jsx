import { Col, Container, Row } from "react-bootstrap";
import { lifestyle } from "../../data/data";

export default function LifestyleSection() {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">Shop by lifestyle</h2>

      <Row className="g-4">
        {lifestyle.map((item, index) => (
          <Col xs={6} md={3} key={item.title}>
            <div className="text-center bg-light rounded-4 border p-4 h-100">
              <div className="mx-auto d-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: 74, height: 74, background: ["#f9e7df", "#e5f1d9", "#edf4e9", "#f4e6d5"][index], fontSize: "2.5rem" }}>
                {item.icon}
              </div>
              <div className="fw-bold mb-1">{item.title}</div>
              <small className="text-secondary">{item.text}</small>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}