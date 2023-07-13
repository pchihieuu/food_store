import { deleteProduct, findProductIndexById } from "../../util/util";
import * as Types from "../constants/actionTypes";

// {items:[],filteredList:[]}

export default (state = { items: [] }, action) => {
    switch (action.type) {
        case Types.FETCHED_PRODUCT:
            return {
                ...state,
                items: [...action.payload.products],
            };

        case Types.FETCHED_MORE_PRODUCT:
            const mergeAllProducts = [
                ...state.items,
                ...action.payload.products,
            ];
            // console.log(mergeAllProducts);
            const limit =
                action.payload.total &&
                mergeAllProducts.length > action.payload.total
                    ? mergeAllProducts.splice(0, action.payload.total)
                    : mergeAllProducts;

            return {
                ...state,
                items: [...limit],
            };

        case Types.ADD_PRODUCT:
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case Types.DELETE_PRODUCT:
            return deleteProduct(state, action.payload.id);

        case Types.UPDATE_PRODUCT:
            const index = findProductIndexById(state, action.payload.product.id);
            state[index] = action.payload.product;

            return { ...state };

        default:
            return state;
    }
};
