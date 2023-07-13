import * as Types from "../constants/actionTypes";
import { deleteProduct, findProductIndexById } from "../../util/util";
import storage from "../../util/localStorage";

const initialState = {
    modal: false,
    items: [],
};

export default (state = initialState, action) => {
    let index = null;

    switch (action.type) {
        case Types.OPEN_COMPARE:
            return {
                ...state,
                modal: true,
            };

        case Types.CLOSE_COMPARE:
            return {
                ...state,
                modal: false,
            };

        case Types.INIT_LOCALSTORAGE:
            return {
                ...state,
                items: [...action.payload.compare],
            };

        case Types.ADD_TO_COMPARE:
            index = findProductIndexById(state.items, action.payload.product.id);
            if (index !== -1) return state;

            const items = [...state.items, action.payload.product];

            storage.set("dokani_compare", items);

            return {
                ...state,
                items,
            };

        case Types.DELETE_FROM_COMPARE:
            const list = deleteProduct(state.items, action.payload.productId);
            storage.set("dokani_compare", list);

            return {
                ...state,
                items: [...list],
            };

        case Types.CLEAR_COMPARE:
            storage.set("dokani_compare", []);

            return {
                ...state,
                items: [],
            };

        default:
            return state;
    }
};
