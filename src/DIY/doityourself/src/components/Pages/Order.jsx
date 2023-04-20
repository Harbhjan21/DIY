import React, { useState } from "react";
import "./order.css";
import NavbarDiy from "../DoItYourSelf/Commons/Navbar";
import { FaMinus, FaPlus } from "react-icons/fa";
import mat_img from "../../images/material.png";
import { deletePic } from "../DoItYourSelf/Image/header/pic";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../../../backend";
const Order = () => {
  const [qty, setQty] = useState(1);
  // const dispatch = useDispatch()
  const projectId = useSelector((state)=>state.projects.commons.projectID)
  const [project, setProject] = useState([])
  const [pageDetail, setPageDetail] = useState(null)
  const [mat, setmat] = useState([])
  const [dim, setdim] = useState([])
  const [Matdim, setMatdim] = useState([])
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [cart, setCart] = useState([])
  let c = []
  // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyMDI1NWM2MWE3NTM3NGNjZGI3OTkiLCJSb2xlIjoidXNlciIsImlhdCI6MTY3MTEyMTAyMywiZXhwIjoxNjc0NzIxMDIzfQ.xNl3muAOJC1Jn8h6ngkAEq9uz00hJz7vaQljabIlByA"
  let token = JSON.parse(localStorage.getItem('myuser')).token
  console.log(token)
  const addToPage = async (data) => {
    // console.log(data,"ddddddddddddddddd")
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyMDI1NWM2MWE3NTM3NGNjZGI3OTkiLCJSb2xlIjoidXNlciIsImlhdCI6MTY3MTEyMTAyMywiZXhwIjoxNjc0NzIxMDIzfQ.xNl3muAOJC1Jn8h6ngkAEq9uz00hJz7vaQljabIlByA"
    // console.log("asdasda", myuser)
    const response = await fetch(`${API}diy/diyaddToPage`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${token}`
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data.data)
      setPageDetail(data.data)

    }
  }
  const increaseQty = () => {

    let data = {

      operationType: null,
      materialDimension: Matdim[0]._id,
      qty: qty + 1,
      pageId: pageDetail._id,
    }
    addToPage(data)

    // console.log(cart)
    c = []
    cart.forEach((e, i) => {

      if (e.pageId != pageDetail._id) {
        c.push(e)
      }
    })
    c.push({
      pageId: pageDetail._id,
      quantity: qty + 1, total: Matdim.length != 0 ? Matdim[0].price * (qty + 1) : Number, name: pageDetail.name ? pageDetail.name : "diyPage", cart: pageDetail.cart, material_obj_id: Matdim.length > 0 ? Matdim[0]._id : ""
    })
    console.log(c)
    setCart(c)
    setQty(qty + 1);
    console.log(c)
  };

  useEffect(() => {

    // dispatch(getProjectForOrder("123"))
    const getProject = async () => {
      // let id = "63a304014cf7061ef89b04f5" //preojectId
      // let id = "63a3da6f207dbe04a410a8ab"
      const response = await fetch(`${API}diy/diygetproject?id=${projectId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
          // "x-access-token": `${token}`
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        // console.log(data.data)
        setProject(data.data.project)
        setPageDetail(data.data.project[0].pageArray[0])
        data.data.project[0].pageArray.forEach(e => {
          let obj = {
            pageId: e._id,
            quantity: 1,
            total: Number,
            name: e.name,
            cart: e.cart,
            material_obj_id: Matdim.length > 0 ? Matdim[0]._id : ""
          }
          c.push(obj)
          setCart(c)
          // console.log(c)
        });
      }
    }
    const getMat = async () => {
      const response = await fetch(`${API}material/getMaterialDiy`, {
        method: "Get",
        // body: JSON.stringify(img),
        headers: {
          "Content-Type": "application/json"
          // "x-access-token": `${token}`
        },
      });
      const data = await response.json();
      // console.log(data.data)
      setmat(data.data.filter((e, i) => {
        return i == 0 || data.data[i - 1].material_title != e.material_title
      }))
      setdim(data.data.filter((e, i) => {
        return data.data[0].material_title == e.material_title
      }))
      // setMatdim(data.data.filter((e,i)=>{
      //   return data.data[0].material_title== e.material_title && data.data[0].dimension_title == e.dimension_title
      // }))
      setValue(data.data[0].material_title)
      setValue1(data.data[0].dimension_title)
    }
    getProject()
    getMat()



  }, [])
  useEffect(() => {

    console.log(value, value1)
    const getSingleMAtDim = async () => {
      const response = await fetch(`${API}material/getSingleMaterial?dimension_title=${value1}&material_title=${value}`, {
        method: "Get",
        // body: JSON.stringify(img),
        headers: {
          "Content-Type": "application/json"
          // "x-access-token": `${token}`
        },
      });
      const data = await response.json();
      // console.log(data.data)
      setMatdim(data.data)
    }
    getSingleMAtDim()

  }, [value, value1])

  const decreaseQty = () => {
    let data = {

      operationType: null,
      materialDimension: Matdim[0]._id,
      qty: qty > 1 ? qty - 1 : 1,
      pageId: pageDetail._id
    }
    addToPage(data)

    c = []
    cart.forEach((e, i) => {

      if (e.pageId != pageDetail._id) {
        c.push(e)
      }
    })
    c.push({
      pageId: pageDetail._id,
      quantity: qty > 1 ? qty - 1 : 1, total: Matdim.length != 0 ? Matdim[0].price * (qty - 1 > 1 ? qty - 1 : 1) : Number, name: pageDetail.name, cart: pageDetail.cart, material_obj_id: Matdim.length > 0 ? Matdim[0]._id : ""
    })
    console.log(c)
    setCart(c)

    setQty((pval) => {
      if (pval <= 1) return 1;
      return pval - 1;
    });
  };

  const PageDetail = (e) => {
    setPageDetail(e)
    let c = cart
    let dup = cart.filter((b) => {
      return b.pageId == e._id
    })
    if(dup.length==0){
      c.push({
        pageId: e._id,
        quantity: 1, total: Matdim.length != 0 ? Matdim[0].price * (1) : Number, name: e.name, cart: pageDetail.cart, material_obj_id: Matdim.length > 0 ? Matdim[0]._id : ""
      })
      setCart(c)
    }
  
  }

  useEffect(() => {
    let c;
    if (cart != null) {
      cart.forEach((e, i) => {
        if (e.pageId == pageDetail._id) {
          c = i
        }
      })
      cart[c] != undefined && setQty(cart[c].quantity)
    }
  }, [pageDetail])

  const handleChange = (e) => {

    setValue(e.target.value);
    // console.log(e.target.value)
    setdim(mat.filter((b, i) => {
      let t = true;
      if (b.material_title == e.target.value && t) {
        setValue1(b.dimension_title)
        t = false;
      }
      return b.material_title == e.target.value
    }))


  };
  const handleChangeValue1 = (e) => {
    setValue1(e.target.value);
    console.log(e.target.value)

  };

  const addToCart = async () => {
    for (let i = 0; i < cart.length; i++) {
      // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyMDI1NWM2MWE3NTM3NGNjZGI3OTkiLCJSb2xlIjoidXNlciIsImlhdCI6MTY3MTEyMTAyMywiZXhwIjoxNjc0NzIxMDIzfQ.xNl3muAOJC1Jn8h6ngkAEq9uz00hJz7vaQljabIlByA"
      const response = await fetch(`${API}auth/update_user_cart`, {
        method: "POST",
        body: JSON.stringify(cart[i]),
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${token}`
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data.data)
        setCart([])
        // setProject([]);
        // setPageDetail([])
      }
    }
  }

  const remove = (id) => {
    setCart(cart.filter((e) => {
      return e.pageId != id
    }))
    // console.log(cart,"remove")
  }


  return (
<>
<NavbarDiy/>
    <div className="order-container">

      {/* {console.log(project)} */}
      <div className="all-designs">
        {project.length != 0 && project[0].pageArray.length != 0 && project[0].pageArray.map((e, i) => {
          if (e.cart == true) return <div key={e._id} className="each_design" onClick={() => { PageDetail(e) }}>
            <p>Design - {i + 1}</p>
          </div>
        })}
      </div>

      <div className="order-page">
        <div className="design-box">
          <div className="img-box"></div>
          <div className="btn-box">
            <button>Edit Design</button>
            <button>Create New</button>
          </div>
        </div>
        <div className="description-box">
          <p className="title">Untiled Design</p>
          <div className="cat-name">
            <span className="title">Category:</span>
            <span className="title">Poster</span>
          </div>
          <div>
            <span className="title">Canvas Size:</span>
            <select value={value1} name="dimension" className="dimension-select" onChange={handleChangeValue1}>
              {mat.length != 0 && dim.map((e) => {
                return <option key={e._id} value={e.dimension_title}>{e.dimension_title}</option>
              })}

              {/* <option value="7">7 x 14</option>
              <option value="9">7 x 24</option>
              <option value="11">14 x 7</option>
              <option value="14">14 x 24</option>
              <option value="18">24 x 28</option> */}
            </select>
          </div>
          <div>
            <span style={{ marginRight: "28px" }} className="title">
              Material:
            </span>
            <select value={value} name="dimension" className="dimension-select" onChange={(e) => { handleChange(e) }}>
              {mat.length != 0 && mat.map((e) => {
                return <option key={e._id} value={e.material_title}>{e.material_title}</option>
              })}
              {/* <option value="xyz">xyz</option>
              <option value="pqr">pqr</option>
              <option value="mno">mno</option>
              <option value="ijk">ijk</option> */}
            </select>
          </div>
          <div className="material-desc">
            <img src={Matdim.length != 0 && Matdim[0].material_imgUrl} alt="img" />
            <p>
              {Matdim.length != 0 && Matdim[0].material_title} Price: ₹{Matdim.length != 0 && Matdim[0].price} per print
              (Inclusive of all taxes)
            </p>
          </div>
          <div className="qty">
            <p className="title">Quality:</p>
            <div className="qty_checker">
              <span>
                <FaMinus onClick={decreaseQty} />
              </span>
              <section>{qty}</section>
              <span>
                <FaPlus onClick={increaseQty} />
              </span>
            </div>
          </div>
          <div className="description">
            <p>
              Posters include 3M double-sided mounting tape on top and bottom.
            </p>
            <p>The Interior warranty is three years.</p>
            <p>
              Printing material variant Self-adhesive vinyl is premium quality.
            </p>
            <p>
              3M film with Mat Laminate. Both Interior and Exterior warranty is
              of three years.
            </p>
            <p>
              Prices are inclusive of G.S.T Shipping free for orders above two
              thousand (2000/-) Indian rupees.
            </p>
            <p>Performa invoices can be generated at checkout</p>
          </div>
        </div>
        <div className="summary-box">
          <p className="heading">Order Summary(Create Your Own)</p>
          {cart.length != 0 ? cart.map((e, i) => {
            if (e.cart == true) return <div key={e.pageId} className="order">
              <div>
                <p className="sub-heading">{e.name?e.name:"Untitled Design"}</p>
                <p className="desc">
                  {Matdim.length != 0 && Matdim[0].material_title} Price: ₹{Matdim.length != 0 && Matdim[0].price} per print
                  (Inclusive of all taxes)
                </p>
              </div>
              <img onClick={() => { remove(e.pageId) }} src={deletePic} alt="" />
              {/* {console.log(pageDetail)} */}

              <p className="sub-heading">&#8377;{e.total}</p>
              {/* <Side cart={cart} pageDetail={pageDetail}/> */}
            </div>
          }) : "Added to the cart"}


          <div className="order">
            <div>
              <p className="sub-heading">Coupon Discount</p>
              <p className="coupon">Apply Coupon</p>
            </div>
            <p className="sub-heading">&#8377;0</p>
          </div>

          <div className="order">
            <div>
              <p className="sub-heading">Delivery Charge</p>
              <p className="desc"> Shipping Free on orders above &#8377;2000</p>
            </div>
            <p className="sub-heading">FREE</p>
          </div>
          <div className="line" />
          <div className="order">
            <p className="ttl">Total</p>
            {/* <p className="ttl">&#8377;{qty *Matdim.length!=0 &&  Matdim[0].price}</p> */}
          </div>
          <div className="btn-box">
            <button onClick={addToCart}>Add to Cart</button>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Order;


// const Side = ({cart,pageDetail})=>{
//   console.log(cart,"r0000000000000000000000000000000")
//   return( <>
//  { cart.map((e)=>{
//     if(cart.pageId == pageDetail._id) return  <p> {e.total}</p>
//   })}
//   </>
// )}