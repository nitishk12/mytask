const contactInitialState = []
const contactReducer = (state = contactInitialState, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            return [...state, action.payload]
        }
        case 'REMOVE_USER': {
            return state.filter(user => user.selected !== action.payload)
        }
        case 'SELECTED': {
            return state.map(user => {
                if (user.id == action.payload) {
                    return { ...user, ...{ selected: !user.selected } }
                } else {
                    return { ...user }
                }
            })
        }
        default: {
            return [...state]
        }
    }
}
export default contactReducer