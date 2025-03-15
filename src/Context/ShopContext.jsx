import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product"; // Correct the import statement

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = { all_product }; // Use the correct variable name

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;