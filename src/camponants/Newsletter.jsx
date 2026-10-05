import { Button, Form, InputGroup } from "react-bootstrap";

export default function Newsletter() {
  return (
    <section className="bg-dark text-white py-5 px-3 text-center">
      <h2 className="fw-bold mb-3" style={{ letterSpacing: "-0.06em" }}>Stay in touch with us</h2>
      <p className="text-light-emphasis mb-4">Receive the latest updates about our products &amp; promotions</p>

      <Form onSubmit={(e) => e.preventDefault()} className="mx-auto" style={{ maxWidth: 640 }}>
        <InputGroup className="overflow-hidden rounded-pill border border-secondary">
          <Form.Control type="email" placeholder="Your email" className="bg-transparent text-white border-0 shadow-none" />
          <Button type="submit" className="rounded-pill px-4 border-0" style={{ background: "linear-gradient(135deg, #ff7e73, #ff5c8d)" }}>
            Subscribe
          </Button>
        </InputGroup>
      </Form>
    </section>
  );
}