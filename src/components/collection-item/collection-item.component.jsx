import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'

import CustomButton from '../../components/custom-button/custom-button.component'
import './collection-item.styles.scss'

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.styles'

const CollectionItem = ({ item, addItem }) => {

    const { imageUrl, name, price } = item;

    return (
      <CollectionItemContainer>
        <ImageContainer style={{ backgroundImage: `url(${imageUrl})`}} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <CustomButton onClick={() => addItem(item)} isCollectionpreview={true}>Add to cart</CustomButton>
      </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);