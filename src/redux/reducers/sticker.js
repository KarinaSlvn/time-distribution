export default (state = {}, {id, type, text}) => {
    switch (type) {
        case 'ADD_STICKER':
            return {
                result: [...state, {id, text}]
            };
        case 'REMOVE_STICKER':
            return {
                result: state.filter(item => item.id !== id)
            };
        default:
            return state
    }
}