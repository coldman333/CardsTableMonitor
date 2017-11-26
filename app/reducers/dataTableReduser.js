import { assets } from '../mock/mock.js';
const SORT_BY = 'SORT_BY';
const APPLAY_FILTER = 'APPLAY_FILTER';
const RESET_FILTER = 'RESET_FILTER';
const UPDATE_ITEMS = 'UPDATE_ITEMS';


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
    items: sortItemsBy(assets, 'id'),
};

export default function DataTableState(state = initialState, action) {
    switch (action.type) {
        case SORT_BY:
            const  copyState  = {...state};
            const items = sortItemsBy( copyState.items, action.by);
            return { items };

        case UPDATE_ITEMS:
            // todo filter
            return { ...state };

        case APPLAY_FILTER:
            // todo filter
            return { ...state };
        case RESET_FILTER:
            return { ...state };
        default:
            return state;
    }
}
