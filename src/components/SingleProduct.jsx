import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import { addToCart } from "../reducers/cartSlice";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [mainImage, setMainImage] = useState(null); // Initialize mainImage to null
  const dispatch = useDispatch();
  const cart = useSelector((state)=> state.cart)

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
    <div className="bg-slate-200 border-2 mt-2 rounded-sm p-2">
      <h2 className="text-center text-2xl">Product Details</h2>

      <div className="flex flex-row gap-2 h-auto">
        <div className=" w-full border-slate-900 border-2 p-2 rounded-lg">
          <div className="w-full mx-auto ">
            <img
              src={mainImage}
              alt="Main Image"
              className="w-full h-80 object-center rounded-lg"
            />
          </div>
          <div className="flex flex-row items-center justify-center flex-wrap h-30 w-30 ">
            {productImages.map((item, index) => (
              <img
                src={item}
                key={index}
                alt={`Image ${index}`}
                className={`w-30 h-32 rounded-md border-1 border-black mt-2 mr-2 object-cover cursor-pointer ${
                  productImages[index] === mainImage
                    ? "border-2 border-red-800 "
                    : ""
                }`}
                onClick={() => setMainImage(productImages[index])}
              />
            ))}
          </div>
        </div>
        <div className="w-3/4 border-2 p-2 border-red-700  ">
          <div className="flex justify-between">
            <h2 className="text-4xl underline  underline-offset-8">
              {product.title}
            </h2>
            <h2 className="text-2xl ">category : {product.category}</h2>
          </div>
          <h2 className="text-xl  mt-4 ">{product.stock} item (s) in stock.</h2>
          <h2 className="text-xl bg-yellow-300 inline-block p-2 rounded mt-4 ">
            {" "}
            <AiFillStar className="inline-block " /> {product.rating} /5
          </h2>
          <p className="leading-loose text-3xl m-3 font-light  p-2 mt-5 text-slate-600 ">
            {product.description}
          </p>
          <div className="flex justify-between mt-5 ">
            <span className="bg-emerald-400 p-5  text-center rounded-lg border-2 border-emerald-400  text-white m-3 inline-block text-2xl w-2/6">
              {product.price} $
            </span>
            <span
              onClick={() => dispatch(addToCart(product))}
              className="bg-emerald-400 p-5 text-center flex m-3 rounded-lg border-2 border-emerald-400 hover:bg-transparent cursor-pointer capitalize hover:text-black text-white items-center justify-between text-2xl w-2/6"
            >
              <AiOutlineShoppingCart className="text-3xl" />
              add to cart
            </span>
          </div>
        </div>
      </div>
      {/* <div>
        {cart.map((item) =>
          <p>{item.title}</p>)}
      </div> */}
    </div>
  );
};

export default SingleProduct;
