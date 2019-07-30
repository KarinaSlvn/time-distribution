export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_STICKER':
            return {
                result: [...state, {}]
            };
        case 'REMOVE_STICKER':
            return {
                result: action.payload
            };
        default:
            return state
    }
}