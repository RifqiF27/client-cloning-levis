import { useEffect, useState } from "react";
import "./Home.css";
// import { baseUrl } from "../baseUrl.js/baseUrl";
import ProductItem from "../components/ProductItem";
import useFetch from "../hooks/useFetch";
import {useDispatch, useSelector} from 'react-redux'
import { fetchProduct } from "../store/actions/actionCreator";

const Home = () => {
  // const {data, error, loading, fetchData}= useFetch('/Product');
  // const [products, setProducts] = useState([]);
  
  const dispatch = useDispatch()
  const products = useSelector((state) => {
    console.log(state);
    return state.productReducer.products
  })
  console.log(products);
  
  useEffect(() => {
    dispatch(fetchProduct())
  }, []);

  return (
    <>
      <section className="home">
        <img
          src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1519,height=855,quality=60,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/userimages/NGS/home/501campaign/new/Levis_Poster_501Day_16x9_V1.jpg"
          alt=""
        />
        <div className="home-text">
          <h1>Discover Levi's</h1>
          <p>Shop the latest collection of levi's</p>
          <a href="#">Shop Now</a>
        </div>
      </section>
      <div className="tag">
      <h1>FEATURED PRODUCTS</h1>

      </div>
      <button className="btn" onClick={(()=> {
        fetchData()
      })}>refetching</button>
      {/* {loading && <div>Loading...</div>}
      {!loading && !error &&  */}
        <section className="featured-products">
        {products.map((product, idx) => (
          <ProductItem product={product} key={idx} />
          ))}
      </section>
      
    </>
  );
};
export default Home;
