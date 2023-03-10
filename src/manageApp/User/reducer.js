import { createReducer } from "@reduxjs/toolkit";
import { addUserItem, removeUserItem, removeArticleItem, addArticleItem } from "./actions";


const initialState = {
    users: []
};

export const manageUserReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addUserItem, (state, action) => {
            state.users.push(action.payload);
        })
        .addCase(removeUserItem, (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        })
        .addCase(removeArticleItem, (state, action) => {
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    user.articles = user.articles.filter(article => {
                        return article.id !== action.payload.articleId
                    });
                }
                return user;
            })
        })
        .addCase(addArticleItem, (state, action) => {
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    user.articles.push(action.payload.article);
                }
                return user;
            })
        })
        .addDefaultCase(() => {})
})
