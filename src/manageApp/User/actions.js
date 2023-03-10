import { createAction } from "@reduxjs/toolkit";

let nextId = 0;
let articleId = 0;

export const getUserList = createAction('manageUser/getUserList');
export const addUserItem = createAction('manageUser/addUserItem', (userInfo)=>{
    nextId++
    return{
        payload:{
            info: userInfo,
            id:nextId,
            articles:[]
        }
    }
});
export const addArticleItem = createAction('manageUser/addArticleItem', (payload)=>{
    articleId++;
    return{
        payload:{
            article:{
                name: payload.article,
                id:articleId
            },
            id:payload.id
        }
    }
})

export const removeUserItem = createAction('manageUser/removeUserItem');
export const removeArticleItem = createAction('manageUser/removeArticleItem');