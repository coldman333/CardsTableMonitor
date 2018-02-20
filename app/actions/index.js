import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function mockUpdate(items) {
    return {
        type: types.MOCK_UPDATE_ITEMS,
        items
    };
}

export function fixWarning(itemId) {
    return {
        type: types.FIX_WARNING,
        itemId
    };
}
