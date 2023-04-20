import React from "react";
import { IoMenu } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { MdClear, MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./companylogo.svg";
import { useDispatch, useSelector } from "react-redux";

// navbar profile Images
import order from "../../../../../../images/navbarProfileImages/orders.png";
import wishlists from "../../../../../../images/navbarProfileImages/wishlist.png";
import coupon from "../../../../../../images/navbarProfileImages/coupons.png";
import account from "../../../../../../images/navbarProfileImages/account.png";
import address from "../../../../../../images/navbarProfileImages/address.png";
import profile from "../../../../../../images/navbarProfileImages/profile.png";
import contactUs from "../../../../../../images/navbarProfileImages/contact.png";
import signOut from "../../../../../../images/navbarProfileImages/signout.png";
import { userSignout } from "../../../../../../redux/actions/userAction";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Untitled Design");
  const [active, setActive] = useState(false);
  const [toggleUserPanel, setToggleUserPanel] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [popUp, setPopup] = useState(false);
  const userAccount = () => {
    setOpen(!open);
    setToggleUserPanel(!toggleUserPanel);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  document.onclick = function (e) {
    if (
      e.target.id !== "diy-title-id" &&
      e.target.id !== "bipencil" &&
      e.target.id !== "diy-title-input"
    ) {
      setEditTitle(false);
      console.log("Title ===> ", title);
    }
  };
  const user_details = useSelector((state) => state.user.userDetail);
  const userCart = useSelector((state) => state.cart.cart);
  return (
    <>
      <div className="nav-panel" style={{ left: active ? "0px" : "-175px" }}>
        <Navpanel setActive={setActive} />
      </div>
      <div className="navbar">
        <div className="logo flex justify-center items-center">
          <Link to="/">
            <img src={logo} alt="logo" />{" "}
          </Link>
          {active ? (
            <MdClear className="icon" onClick={() => setActive(false)} />
          ) : (
            // <SideBar/>
            <IoMenu className="icon" onClick={() => setActive(true)} />
          )}
        </div>
        <div
          className="diy-title flex justify-center items-center"
          id="diy-title-id"
          style={{ display: "flex", alignItems: "center" }}
        >
          {editTitle ? (
            <input
              id="diy-title-input"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <span>{title}</span>
          )}
          <BiPencil
            id="bipencil"
            className="icons"
            onClick={() => setEditTitle(!editTitle)}
          />
        </div>
        <div className="user-account flex justify-center items-center">
          <VscAccount className="icons" onClick={userAccount} />
          <div className="cart-icon">
            <span className="item-count">
              <span className="item-count-value">{userCart.length}</span>
            </span>
            <Link to="/cartpage">
              <MdOutlineShoppingCart className="icon" />
            </Link>
          </div>
          {/* <div className={toggleUserPanel ? "toggle" : ""}>
            <UserDashBoard />
          </div> */}
          {toggleUserPanel && (
            <div
              className="bg-[#ffff] rounded-md flex flex-col justify-center absolute right-[43px] mt-[21rem] 2xl:mt-[23rem] box-border shadow-md w-[200px] 2xl:w-[220px]"
              onMouseLeave={() => setToggleUserPanel(false)}
              onClick={() => setToggleUserPanel(false)}
            >
              <div className="list-padding">
                <div className="mt-1">
                  <p className="text-[#FF6B00] text-sm xl:text-base 2xl:text-lg font-bold text-left mb-4">
                    Hi {user_details?.name?.substr(0, 12)}..!
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-[10px]">
                    <img src={order} alt="" className="w-[18px] h-[18px]" />
                    <Link
                      to="/userdashboard/1"
                      className=" text-[#000000] text-xs xl:text-sm 2xl:text-base font-['Roboto'] hover:font-bold hover:text-[#003459]"
                    >
                      Orders
                    </Link>
                  </div>
                  <div className="flex flex-row items-center gap-[10px]">
                    <img src={wishlists} alt="" className="w-[18px] h-[18px]" />
                    <Link
                      to="/userdashboard/2"
                      className=" text-[#000000] text-xs xl:text-sm 2xl:text-base font-['Roboto'] hover:font-bold hover:text-[#003459]"
                    >
                      Wishlist
                    </Link>
                  </div>
                  <div className="flex flex-row items-center gap-[10px]">
                    <img src={coupon} alt="" className="w-[18px] h-[18px]" />
                    <Link
                      to="/userdashboard/3"
                      className=" text-[#000000] text-xs xl:text-sm 2xl:text-base font-['Roboto'] hover:font-bold hover:text-[#003459]"
                    >
                      Coupons
                    </Link>
                  </div>
                  <div className="flex flex-row items-center gap-[10px]">
                    <img src={account} alt="" className="w-[18px] h-[18px]" />
                    <Link
                      to="/userdashboard/4"
                      className=" text-[#000000] text-xs xl:text-sm 2xl:text-base font-['Roboto'] hover:font-bold hover:text-[#003459]"
                    >
                      My Account
                    </Link>
                  </div>
                  <div className="flex flex-row items-center gap-[10px]">
                    <img src={address} alt="" className="w-[18px] h-[18px]" />
                    <Link
                      to="/userdashboard/5"
                      className=" text-[#000000] text-xs xl:text-sm 2xl:text-base font-['Roboto'] hover:font-bold hover:text-[#003459]"
                    >
                      Saved Address
                    </Link>
                  </div>
                  <div className="flex flex-row items-center gap-[10px]">
                    <img src={profile} alt="" className="w-[18px] h-[18px]" />
                    <Link
                      to="/userdashboard/6"
                      className=" text-[#000000] text-xs xl:text-sm 2xl:text-base font-['Roboto'] hover:font-bold hover:text-[#003459]"
                    >
                      Edit Profile
                    </Link>
                  </div>
                  <div className="flex flex-row items-center gap-[10px]">
                    <img src={contactUs} alt="" className="w-[18px] h-[18px]" />
                    <Link
                      to="/userdashboard/7"
                      className=" text-[#000000] text-xs xl:text-sm 2xl:text-base font-['Roboto'] hover:font-bold hover:text-[#003459]"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="flex flex-row items-center gap-[10px]">
                    <img src={signOut} alt="" className="w-[18px] h-[18px]" />
                    <Link
                      to="/userdashboard/9"
                      className=" text-[#000000] text-xs xl:text-sm 2xl:text-base font-['Roboto'] hover:font-bold hover:text-[#003459]"
                      onClick={() => {
                        dispatch(userSignout());
                        navigate("/");
                        setPopup(true);
                      }}
                    >
                      Sign Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

const Navpanel = ({ setActive }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="panel">
      <MdClear className="icon" onClick={() => setActive(false)} />
      <div className="links2">
        Categories
        {show ? (
          <IoIosArrowBack onClick={() => setShow(!show)} />
        ) : (
          <IoIosArrowForward onClick={() => setShow(!show)} />
        )}
        {show && (
          <ul>
            <li>Posters</li>
            <li>Siganges</li>
            <li>Floor Graphics</li>
            <li>Asset Markings</li>
            <li>Pictograms</li>
          </ul>
        )}
      </div>
      <div className="links2">Campaigns</div>
      <div className="links2">Resources</div>
      <div className="links2">Bulk Orders</div>
      <div className="links2">About</div>
      <div className="links2">Contacts</div>
    </div>
  );
};
