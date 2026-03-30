import { useStoreContext } from "../../utils/hooks/useStoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

export default function FoodDisplay({ category }) {
  const { food_list } = useStoreContext();
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} item={item} />;
          }
        })}
      </div>
    </div>
  );
}
