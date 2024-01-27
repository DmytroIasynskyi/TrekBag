import {useContext} from "react";
import {ItemsContext} from "../contexts/ItemsContextProvider.jsx";

export function useItemsContext() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error(
      "useItemsContext must be used within a ItemsProvider"
    );
  }
  return context;
}