import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://dummyjson.com/products");
  const getProducts = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const responseData = await response.json();
        setData(responseData.products);
        setLoading(false);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getcategories = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (response.ok) {
        const responseData = await response.json();
        setCat(responseData.products);
        setLoading(false);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const uniqueCategories = Array.from(
    new Set(cat.map((item) => item.category))
  );
  console.log(uniqueCategories);
  useEffect(() => {
    getProducts();
    getcategories();
  }, [url]);

  return (
    <>
      <h1 className="text-3xl mt-5 pt-10 text-center">Our Latest Products</h1>
      <hr className="w-1/4 h-1.5 mt-2 rounded bg-black mx-auto" />
      <div>
        <div className="">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex gap-3 w-full sm:justify-start md:justify-center flex-wrap mt-4" >
              <button
                onClick={() => setUrl(`https://dummyjson.com/products`)}
                className="bg-emerald-400 p-2 rounded cursor-pointer border-2 border-emerald-400 hover:bg-white"
              >
                all
              </button>
              {uniqueCategories.map((item) => (
                <button
                  onClick={() =>
                    setUrl(`https://dummyjson.com/products/category/${item}`)
                  }
                  key={item.index}
                  className="bg-emerald-400 p-2 rounded cursor-pointer border-2 border-emerald-400 hover:bg-white"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className=" grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-3 p-4 ">
          {data.map((item) => (
            <div
              className="flex  flex-col justify-center items-start border-1 border-gray-700 bg-slate-200 rounded-lg px-2 py-2 shadow-lg "
              key={item.id}
            >

              <div className="w-30 h-40 mx-auto p-2">
                <img
                  src={item.thumbnail}
                  className="w-full h-full object-cover rounded-md"
                  alt={item.title}
                />
              </div>
              <div className="flex justify-between items-center flex-row w-full ">
              <h4 className="font-thin">{item.title}</h4>
                <span className="bg-emerald-200 w-20 rounded-lg text-center">
                  {item.price}$
                </span>

              </div>
              <span className="ml-1">rate : {item.rating}/5</span>
              <NavLink
                to={`/products/${item.id}`}
                className="bg-emerald-300 w-full rounded-lg text-gray-700 capitalize border-2 text-center border-emerald-300 hover:bg-transparent"
              >
                view all details{" "}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
