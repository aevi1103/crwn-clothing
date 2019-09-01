import ShopActionTypes from './shop.types'

// import { firestore, convertCollectionSnapshopToMap } from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure= errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILIURE,
    payload: errorMessage
})

// export const fetchCollectionStartAsync = () => {
//     return dispatch => {

//         const collectionref = firestore.collection('collections');
//         dispatch(fetchCollectionStart())

//         collectionref.get().then(snapshot => {
//             const collectionMap = convertCollectionSnapshopToMap(snapshot);
//             dispatch(fetchCollectionSuccess(collectionMap));     
//         })
//         .catch(error => dispatch(fetchCollectionFailure(error.message)))
//     }
// }