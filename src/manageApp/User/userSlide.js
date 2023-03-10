import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'User',
    initialState: {
        users: []
    },
    reducers: {
        addUserItem: (state, action) => {
            state.users.push(action);
        },
        removeUserItem: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action)
        },
        removeArticleItem: (state, action) => {
            state.users = state.users.map((user) => {
                if (user.id === action.id) {
                    user.articles = user.articles.filter(article => {
                        return article.id !== action.articleId
                    });
                }
                return user;
            })
        },
        addArticleItem: (state, action) => {
            state.users = state.users.map((user) => {
                if (user.id === action.id) {
                    user.articles.push(action.article);
                }
                return user;
            })
        }

    }
}
)
// Action creators are generated for each case reducer function
export const { addUserItem, addArticleItem, removeUserItem, removeArticleItem } = userSlice.actions
export default userSlice.reducer