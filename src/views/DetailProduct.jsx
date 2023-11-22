import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/actions/actionCreator";
import "./DetailProduct.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const detailProduct = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductById(id));
    console.log(product);
  }, [id]);
  const product = useSelector((state) => {
    return state.productReducer.productById;
  });
  return (
    <>
        <div className="product-detail">
          <div className="product-image">
            <img src={product?.mainImg} alt={`product ${product?.id}`} />
            </div>
            <div className="product-info">
              <h1>{product?.name}</h1>
              <p>{product?.description}</p>
              <p>{product?.User?.username}</p>
              <p>{product?.Category?.name}</p>
              <p1>
          {product?.price?.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
          <br />
        </p1>
              <button>Add to Cart</button>
          </div>
        </div>
        {product?.Images?.map((el) => {
          console.log(el);
          return <div>
        <img src={el.imgUrl} alt={`images ${el.id}`} />
        </div>
        })}
    </>
  );
};

export default detailProduct;
