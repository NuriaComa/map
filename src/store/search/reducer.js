const initialState = { search: [{
        address: 'Barcelona',
        lat: 41.38879,
        lng: 2.15899,
    }] };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'MODIFY_SEARCH':
        return {
            ...state,
            search: [action.payload, ...state.search]
        };
        default:
            return state
    }
};

export const selectActiveWord = state => state.searchReducer.search;
