import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <Row className="g-3">
      {products.map((product) => (
        <ProductCard product={product} key={product.name} />
      ))}
    </Row>
  );
}