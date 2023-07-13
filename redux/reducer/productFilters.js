import * as Types from "../constants/actionTypes";

export default (state = { category: "" }, action) => {
    switch (action.type) {
        case Types.UPDATE_PRODUCT_FILTERS:
            return {
                ...state,
                ...action.payload.productFilters,
            };

        case Types.UPDATE_PRODUCT_CATEGORY:
            const { category } = action.payload;
            return {
                ...state,
                category,
            };
        case Types.UPDATE_RATING:
            const { rating } = action.payload;
            return {
                ...state,
                rating,
            };

        default:
            return state;
    }
};
