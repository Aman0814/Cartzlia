import { categories } from "../../data/data";

export default function CategoryList() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 py-4">
      {categories.map((category) => (
        <div
          key={category.name}
          className="d-flex align-items-center gap-3 px-3 py-2 bg-light rounded-pill"
          style={{
            width: "250px",
            minHeight: "70px",
            whiteSpace: "nowrap",
            border: "none"
          }}
        >
          <span
            className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm"
            style={{ width: "44px", height: "44px", fontSize: "22px", flexShrink: 0 }}
          >
            {category.icon}
          </span>

          <div className="d-flex flex-column justify-content-center overflow-hidden">
            <span className="text-dark" style={{ fontSize: "0.95rem", lineHeight: 1.3 }}>
              {category.name}
            </span>
            <small className="text-muted" style={{ lineHeight: 1.2 }}>
              {category.count}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}