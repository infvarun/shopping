import React, { Component } from "react";
import CollectionPreview  from '../../components/collection-preview/collection-preview';

import SHOP_DATA from './shop.data'

class ShopPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        //destructure state for easy access of collection
        const { collections } = this.state;

        return (
            <div className='shop-page'>
            {
                //spread operator- shorthand for getting all attribute from collection as variable 
                  collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
            </div>
          );
    }
}

export default ShopPage;