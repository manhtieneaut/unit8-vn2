import { configureStore } from '@reduxjs/toolkit'
import { manageUserReducer } from './reducer'

export default configureStore({
    reducer: {
        manageUser: manageUserReducer
        
    },
})