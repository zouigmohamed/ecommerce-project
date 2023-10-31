import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../reducers/cartSlice";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [mainImage, setMainImage] = useState(null); // Initialize mainImage to null
  const dispatch = useDispatch();
  const cart = useSelector((state)=> state.cart.products)

  const { id } = useParams();

  const getProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        setProductImages(data.images);
        setMainImage(data.images[0]); // Set the main image here
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-slate-200 border-2 mt-2 rounded-sm p-2 ">
      <h2 className="text-center text-2xl  ">Product Details</h2>

      <div className="flex sm:flex-col-reverse gap-2 h-auto mt-2  lg:flex-row-reverse ">
        <div className=" w-full border-slate-300 border-2 p-2 rounded-lg">
          <div className="w-full mx-auto ">
            <img
              src={mainImage}
              alt="Main Image"
              className="w-full h-80 object-contain  rounded-lg bg-white"
            />
          </div>
          <div className="flex flex-row items-center justify-center flex-wrap h-30 w-30 ">
            {productImages.map((item, index) => (
              <img
                src={item}
                key={index}
                alt={`Image ${index}`}
                className={`w-36 h-32 rounded-md mt-2 mr-2 bg-white object-scale-down cursor-pointer ${
                  productImages[index] === mainImage
                    ? "border-2 border-red-800 "
                    : "border-2 border-gray-500 "
                }`}
                onClick={() => setMainImage(productImages[index])}
              />
            ))}
          </div>
        </div>
        <div className="w-full border-2 py-4 px-2 border-red-200 rounded-lg h-auto flex flex-col justify-between ">
          <div className="flex justify-between lg:flex-col  ">
            <h2 className="text-3xl underline  underline-offset-8">
              {product.title}
            </h2>
            <h2 className="text-2xl sm:mt-2 bg-white w-1/2 p-1 rounded  text-slate-500">category : {product.category}</h2>
          </div>
          <h2 className="text-base  mt-4 ">{product.stock} item (s) in stock.</h2>
          <h2 className="text-xl bg-yellow-300 inline-block p-2 rounded mt-4 w-1/5 ">
            {" "}
            <AiFillStar className="inline-block  " /> {product.rating} /5
          </h2>
          <p className="leading-loose text-3xl m-3 font-light  p-2 mt-5 text-slate-600 ">
            {product.description}
          </p>
          <div className="flex justify-between  h-10  ">
            <span className="bg-emerald-400 p-5  text-center rounded-lg border-2 border-emerald-400 justify-center items-center text-white  flex w-auto  text-1xl ">
              {product.price} $
            </span>
            <span
              onClick={() => dispatch(addToCart(product))}
              className="bg-emerald-400 p-5 text-center flex  rounded-lg border-2 border-emerald-400 hover:bg-transparent cursor-pointer capitalize hover:text-black text-white items-center justify-between text-1xl w-2/6"
            >
              <AiOutlineShoppingCart className="text-3xl" />
              add to cart
            </span>
          </div>
        </div>
      </div>
      {/* <div>
        {cart.map((item) =>
          <p key={item.d}>{item.title}</p>)}
      </div> */}
    </div>
  );
};

export default SingleProduct;
