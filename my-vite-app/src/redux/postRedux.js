const initialState = [
    { id: '1', title: 'New Project', content: 'I heard a good thing' },
    { id: '2', title: 'Slicess...', content: 'I heard a good thing' }
]


export const postSlice = (state = initialState, action) => {
    switch (action?.type) {
        case 'ADD_TITLE':
            return [
                ...state,
                {
                    id: String(state.length + 1),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ]
            case 'REMOVE_TITLE':
                return state.filter((item) => item.id !== action.payload.id);
        default: {
            return state;
        }
    }
}


export const addPost = (title, content) => ({
    type: 'ADD_TITLE',
    payload: { title, content }
})

export const deletePost = (id) => ({
    type: 'REMOVE_TITLE',
    payload: {id}
})