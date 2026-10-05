import { Button, Col, Container, Row } from "react-bootstrap";
import { recipes } from "../../data/data";

export default function RecipesSection() {
  return (
    <Container fluid className="px-lg-4 py-4">
      <Row className="g-4 align-items-stretch">
        <Col lg={5}>
          <h2 className="fw-bold mb-3">Recipes</h2>

          {recipes.map((recipe) => (
            <div className="d-flex gap-3 py-3 border-bottom" key={recipe.title}>
              <img src={recipe.image} alt={recipe.title} className="rounded-3" style={{ width: 100, height: 88, objectFit: "cover" }} />
              <div>
                <div className="fw-semibold mb-2">{recipe.title}</div>
                <small className="text-secondary">
                  ◷ {recipe.time} &nbsp; ◇ Easy &nbsp; ♧ {recipe.servings}
                </small>
              </div>
            </div>
          ))}

          <a href="#" className="d-inline-block mt-3 text-dark text-decoration-none fw-bold small">View all ›</a>
        </Col>

        <Col lg={7}>
          <div className="d-flex flex-column flex-md-row gap-3 bg-white border rounded-4 p-3 h-100">
            <img
              src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=450&q=80"
              alt="The Best in Gastronomy"
              className="rounded-4"
              style={{ width: 220, height: 260, objectFit: "cover" }}
            />

            <div className="d-flex flex-column justify-content-center">
              <span className="d-inline-block w-auto align-self-start px-3 py-1 bg-light rounded-pill small fw-semibold text-secondary mb-2">Cookbook</span>
              <h3 className="fw-bold lh-1 mb-2" style={{ fontSize: "2rem", letterSpacing: "-0.05em" }}>The Best in Gastronomy</h3>
              <small className="text-secondary">Author: Dana Chambers</small>
              <p className="text-secondary mt-2 mb-3">
                An exquisite cookbook that takes readers on a culinary journey around the world.
              </p>
              <strong className="fs-2 fw-bold">$12.40</strong>
              <Button variant="dark" className="rounded-pill mt-3 px-3 w-auto">Shop book ›</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}