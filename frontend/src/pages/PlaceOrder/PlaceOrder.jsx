import { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/hooks/useStoreContext";
import "./PlaceOrder.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

export default function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useStoreContext();

  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeMyOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 20,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      console.log(session_url);
      window.location.replace(session_url);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeMyOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delevery Information</p>
        <div className="multi-fields">
          <input
            required
            type="text"
            placeholder="First name"
            name="firstName"
            value={data.firstName}
            onChange={onChangeHandler}
          />
          <input
            required
            type="text"
            placeholder="Last name"
            name="lastName"
            value={data.lastName}
            onChange={onChangeHandler}
          />
        </div>
        <input
          required
          type="email"
          placeholder="Email address"
          name="email"
          value={data.email}
          onChange={onChangeHandler}
        />
        <input
          required
          type="text"
          placeholder="Street"
          name="street"
          value={data.street}
          onChange={onChangeHandler}
        />
        <div className="multi-fields">
          <input
            required
            type="text"
            placeholder="City"
            name="city"
            value={data.city}
            onChange={onChangeHandler}
          />
          <input
            required
            type="text"
            placeholder="State"
            name="state"
            value={data.state}
            onChange={onChangeHandler}
          />
        </div>
        <div className="multi-fields">
          <input
            required
            type="text"
            placeholder="Zip code"
            name="zipcode"
            value={data.zipcode}
            onChange={onChangeHandler}
          />
          <input
            required
            type="text"
            placeholder="Country"
            name="country"
            value={data.country}
            onChange={onChangeHandler}
          />
        </div>
        <input
          required
          type="text"
          placeholder="Phone"
          name="phone"
          value={data.phone}
          onChange={onChangeHandler}
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>৳ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>৳ {getTotalCartAmount() === 0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b className="total">Total</b>
              <b>
                ৳ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}
              </b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}
