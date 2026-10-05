import { Col } from "react-bootstrap";

export default function ProductCard({ product }) {
  return (
    <Col xs={6} lg={3}>
      <div className="product-card h-100 position-relative">
        <button className="heart" aria-label="Add to wishlist">
          <i className="bi bi-heart"></i>
        </button>

        {product.sale && <span className="sale-badge">-30%</span>}

        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="small fw-semibold mt-2">{product.price}</div>
        <div className="product-name">{product.name}</div>
        <div className="text-muted tiny">{product.unit}</div>

        <button className="add-btn" aria-label="Add product">
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </Col>
  );
}