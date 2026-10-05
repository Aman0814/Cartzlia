import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { FiAlignCenter } from "react-icons/fi";
import { GrActions } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const quickLinks = [
    ["%", "Weekly sale"],
    ["🥬", "Vegetables"],
    ["🥚", "Easter is coming"],
    ["🍗", "Poultry meat"],
    ["🍎", "Fresh fruits"],
    ["🥒", "St. Patrick's day"],
    ["🥝", "Exotic fruits"]
  ];

  return (
    <header className="sticky-top bg-white border-bottom">
      <Container fluid className="px-lg-4">
        <div className="d-flex align-items-center gap-3 py-2">
          <Button variant="light" className="rounded-3 border shadow-none p-2">
            <FiAlignCenter size={18} />
          </Button>

          <div className="fw-bold fs-5 me-2">Cartzilla</div>

          <Button
            variant="light"
            className="rounded-pill border shadow-none d-none d-lg-flex align-items-center justify-content-center gap-2"
            style={{ height: "42px", padding: "0 16px", whiteSpace: "nowrap" }}
          >
            <span>Categories</span>
            <i className="bi bi-chevron-down"></i>
          </Button>

          <InputGroup className="flex-grow-1">
            <InputGroup.Text className="bg-light border-0 rounded-start-pill ps-3">
              <FaSearch size={14} className="text-secondary" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search for products"
              className="border-0 bg-light rounded-end-pill shadow-none"
            />
          </InputGroup>

          <div className="delivery d-none d-lg-block text-secondary small">
            <div>Delivery</div>
            <div className="fw-semibold text-dark">
              Set your address <i className="bi bi-chevron-down"></i>
            </div>
          </div>

          <Button variant="light" className="rounded-3 border shadow-none p-2"><GrActions /></Button>
          <Button variant="light" className="rounded-3 border shadow-none p-2"><IoPersonOutline /></Button>

          <Button variant="light" className="rounded-3 border shadow-none p-2 position-relative cart-btn">
            <FaShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
          </Button>
        </div>

        <div
          className="d-flex align-items-center justify-content-center gap-4 py-2 overflow-auto quick-links border-top"
          style={{ whiteSpace: "nowrap" }}
        >
          {quickLinks.map(([icon, label]) => (
            <span key={label} className="d-inline-flex align-items-center gap-2 text-center">
              <em className="m-0 fs-6" style={{ fontStyle: "normal" }}>{icon}</em>
              {label}
            </span>
          ))}
        </div>
      </Container>
    </header>
  );
}