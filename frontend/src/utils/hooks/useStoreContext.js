import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

export const useStoreContext = () => useContext(StoreContext);