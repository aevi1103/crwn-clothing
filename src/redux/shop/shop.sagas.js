import { takeLatest, call, put, all } from 'redux-saga/effects' 
import ShopActionTypes from './shop.types'
import { firestore, convertCollectionSnapshopToMap } from '../../firebase/firebase.utils'
import {
    fetchCollectionSuccess,
    fetchCollectionFailure
} from './shop.actions'

//yield is like await in async/await

export function* fetchCollectionsAsync() {

    yield console.log('I am fired');

    try {
        
        const collectionref = firestore.collection('collections');
        const snapshot = yield collectionref.get();
        const collectionMap = yield call(convertCollectionSnapshopToMap, snapshot)
        yield put(fetchCollectionSuccess(collectionMap)) //like dispatch

    } catch (error) {
        yield put(fetchCollectionFailure(error.message)) 
    }   

}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, 
        fetchCollectionsAsync)
}

export function* shopSagas() {
    yield(all([
        call(fetchCollectionStart)
    ]))
}