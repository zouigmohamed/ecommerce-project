import { AiOutlineShoppingCart } from "react-icons/ai";
import { TfiAlignJustify } from "react-icons/tfi";

import { NavLink } from "react-router-dom";
import { nav } from "../Data";
const Navbar = () => {
  return (
    <div className="bg-slate-200 flex justify-between  text-1xl px-12 py-4 items-center">
      <div>
        <img src="../../public/logoipsum-256.svg" alt="" className="h-10 " />
      </div>
      <div className="sm:hidden  md:block uppercase">
        <ul className="flex  gap-5">
          {nav.map((item) => (
            <li key={item.text}>
              <NavLink to={item.path}>{item.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <NavLink to="/cart" className="capitalize">
          <AiOutlineShoppingCart className="inline-block mx-2" /> cart
        </NavLink>
      </div>

      <div>
        <TfiAlignJustify className=" text-3xl text-slate-500 md:hidden sm:block" />
      </div>
    </div>
  );
};

export default Navbar;
