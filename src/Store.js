import {configureStore} from "@reduxjs/toolkit"
import { customReducer } from "./Reducers"


const store = configureStore({
    reducer:{
        counter : customReducer
    }
})

export default store