export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user }
}
export const removeUser = (selected) => {
    return { type: 'REMOVE_USER', payload: selected }
}
export const markSelected = (id) => {
    return { type: 'SELECTED', payload: id }
}