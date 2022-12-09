import * as Crypto from 'expo-crypto';

const public_api_key    = '199d0b89cc471d611f834b7a420e2643';
const private_api_key   = '8ee76ae7b64061eed3e02c2efc088ccb56ef29ab';
const ts                = 'marvel';

const character_path    = '/v1/public/characters';
const comics_path       = '/v1/public/comics';

const getHashKey = async() => {
    let key  = ts + private_api_key + public_api_key;
    let hash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.MD5, key);

    return hash;
}

export default {
    public_api_key,
    private_api_key,
    ts,
    character_path,
    comics_path,
    getHashKey
}