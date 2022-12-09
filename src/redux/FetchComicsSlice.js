import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiConfig, Api_Key } from '../config'

const fetchComics = createAsyncThunk(
    'comics/fetchComics',
    async (thunkAPI) => {
        //let key  = Api_Key.ts + Api_Key.private_api_key + Api_Key.public_api_key;
        //let hash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.MD5, key);
        let response  = await apiConfig.get(
            Api_Key.comics_path,
            {
                params: {
                    "apikey": Api_Key.public_api_key, 
                    "hash": await Api_Key.getHashKey(), 
                    "ts": Api_Key.ts
                }
            }
        );
        
        const { data } = response.data;

        return data;
    }
)

const initialState = {
    data: [],
    searchResult: [],
    loading: false,
    error:''
}

const fetchComicsSlice = createSlice({
    name: 'comics',
    initialState,
    reducers: {
        searchCharacters: (state, action) => {
            const filteredComics = state.data.filter((item) =>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
            );
            return {
                ...state,
                searchResult: filteredComics
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComics.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchComics.fulfilled, (state, action) => {
            //state.data.push(action.payload);
            state.data    = action.payload.results;
            state.loading = false;
            state.error   = '';
        }),
        builder.addCase(fetchComics.rejected, (state, action) => {
            state.loading = false;
            state.data    = [];
            state.error   = action.error.message
        })
    },
})  

export const { searchCharacters } = fetchComicsSlice.actions;

export const fetchDataComics = fetchComics;

export default fetchComicsSlice.reducer;