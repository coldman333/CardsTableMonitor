import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function sortBy(by) {
    console.log('sort by ' + by);
    return {
        type: 'SORT_BY',
        by
    };
}

// export function updateItems(by) {
//     console.log('sort by ' + by);
//     return {
//         type: 'SORT_BY',
//         by
//     };
// }
