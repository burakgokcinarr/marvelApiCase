import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiConfig, Api_Key } from '../config'

const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (thunkAPI) => {
        //let key  = Api_Key.ts + Api_Key.private_api_key + Api_Key.public_api_key;
        //let hash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.MD5, key);
        let response  = await apiConfig.get(
            Api_Key.character_path,
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
    loading: false,
    searchResult: [],
    error:''
}

const fetchCharactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        searchCharacters: (state, action) => {
            const filteredCharacter = state.data.filter((item) =>
                item.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            return {
                ...state,
                searchResult: filteredCharacter
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            //state.data.push(action.payload);
            state.data    = action.payload.results;
            state.loading = false;
            state.error   = '';
        }),
        builder.addCase(fetchCharacters.rejected, (state, action) => {
            state.loading = false;
            state.data    = [];
            state.error   = action.error.message
        })
    },
})  

export const { searchCharacters } = fetchCharactersSlice.actions;

export const fetchDataCharacters = fetchCharacters;

export default fetchCharactersSlice.reducer;