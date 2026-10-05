import { Col, Container, Row } from "react-bootstrap";
import { footerColumns } from "../../data/data";

export default function Footer() {
  return (
    <footer className="bg-dark text-light">
      <Container fluid className="px-lg-4 py-5">
        <Row className="g-4">
          <Col lg={4}>
            <h3 className="fw-bold mb-3" style={{ letterSpacing: "-0.06em" }}>Cartzilla</h3>
            <p className="text-light-emphasis mb-3" style={{ maxWidth: 360 }}>
              With a wide selection of fresh produce, pantry staples, and household essentials, we've got everything you need just a click away.
            </p>
            <div className="text-white fs-5">◎ f ◉ ◌</div>
          </Col>

          {footerColumns.map(([heading, ...links]) => (
            <Col xs={6} md={3} lg={2} key={heading}>
              <h4 className="text-white fs-6 fw-bold mb-3">{heading}</h4>
              {links.map((link) => (
                <a href="#" key={link} className="d-block text-light-emphasis text-decoration-none small mb-2">
                  {link}
                </a>
              ))}
            </Col>
          ))}
        </Row>

        <div className="border-top border-secondary mt-4 pt-3 text-center small text-light-emphasis">
          © All rights reserved. Made with ♥ by Coderthemes
        </div>
      </Container>
    </footer>
  );
}