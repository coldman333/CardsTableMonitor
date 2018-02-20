import { assets } from '../mock/mock.js';

import * as types from '../actions/types';

function sortItemsBy(items, by) {
    items.sort((a, b) => {
        if(a[by] < b[by]) {
            return -1;
        }
        if(a[by] > b[by]) {
            return 1;
        }
        return 0;
    });
    return items;
}

const initialState = {
    items: assets,
};

export default function CardTableState(state = initialState, action) {
    switch (action.type) {
        case types.MOCK_UPDATE_ITEMS: {
            const newItems = [...state.items];
            newItems[action.items.id] = action.items;

            return {
                ...state,
                items: newItems
            };
        }
        case types.FIX_WARNING: {
            const newItems = [...state.items];
            newItems[action.itemId].warning = false;

            return {
                ...state,
                items: newItems
            };
        }
        default:
            return state;
    }
}
