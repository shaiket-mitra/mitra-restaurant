import { assets } from "../../assets/assets";
import { useStoreContext } from "../../utils/hooks/useStoreContext";
import "./FoodItem.css";

export default function FoodItem({ item }) {
  const { _id, name, price, description, image } = item;
  const {cartItems, addToCart, removeFromCart, url} = useStoreContext()
  
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={url+"/images/"+image} alt="Food Item Image" />
        {!cartItems[_id] ? (
          <img
            onClick={() => addToCart(_id)}
            src={assets.add_icon_white}
            className="add"
            alt="Add Button"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt="Remove Button"
            />
            <p>{cartItems[_id]}</p>
            <img
              onClick={() => addToCart(_id)}
              src={assets.add_icon_green}
              alt="Add Green Button"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating Stars Image" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">৳ {price}</p>
      </div>
    </div>
  );
}
