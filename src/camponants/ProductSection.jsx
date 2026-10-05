import { Col, Container, Row } from "react-bootstrap";
import { products } from "../../data/data";
import SectionTitle from "./SectionTitle";
import CategoryList from "./CategoryList";
import ProductGrid from "./ProductGrid";

export default function ProductSection() {
  return (
    <Container fluid id="products" className="px-lg-4 py-4">
      <Row className="g-4">
        <Col xl={3} lg={4}>
          <SectionTitle title="Categories" />
          <CategoryList />
        </Col>

        <Col xl={9} lg={8}>
          <SectionTitle title="Popular products" link="View all" />
          <ProductGrid products={products} />
        </Col>
      </Row>
    </Container>
  );
}