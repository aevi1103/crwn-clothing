import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from '../collection/collection.component'

import { firestore, convertCollectionSnapshopToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshop = null;

    componentDidMount() {
        
        const { updateCollections } = this.props

        const collectionref = firestore.collection('collections');

        // collectionref.onSnapshot(async snapshot => {
        //     const collectionMap = convertCollectionSnapshopToMap(snapshot);
        //     updateCollections(collectionMap);     
        //     this.setState({ loading: false });
        // })

        //other way using promise
        collectionref.get().then(snapshot => {
            const collectionMap = convertCollectionSnapshopToMap(snapshot);
            updateCollections(collectionMap);     
            this.setState({ loading: false });
        })

    }
    
    render() {  

        const { match } = this.props
        const { loading } = this.state;

        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>) 
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);