import "./ProductItem.css";
import { Link } from "react-router-dom";
const ProductItem = ({ product }) => {
  return (
    <Link to={`${product.id}`}>
      <div className="product">
        <img src={product.mainImg} alt={`Product ${product.id}`} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p1>
          {product.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p1>
      </div>
    </Link>
  );
};

export default ProductItem;
