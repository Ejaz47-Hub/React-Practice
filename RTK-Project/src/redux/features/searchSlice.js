import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    initialState:{
        query:'',
        activeTab:'',
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,action){
            state.query = action.payload
        },
        setActive(state,action){
            state.activeTab = action.payload
        },
        setResults(state,action){
            state.results = action.payload
        },
        setLoading(state,action){
            state.loading = action.payload
        },
        setError(state,action){
            state.error = action.payload
        }
    }
})

export const {setQuery,setActive,setResults,setLoading,setError} = searchSlice.actions

export default searchSlice.reducer