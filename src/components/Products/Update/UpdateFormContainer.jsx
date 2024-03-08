import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProductById} from '../../../reducers/products';
import {ProductForm} from './ProductForm';
import {Link} from 'react-router-dom';
import {updateProductForm} from '../../../actions/products';

/**
 * Import "updateProductForm" action 
 * Dispatch the action when OnSave() using the Dispatch function from props inheited by middleware 
 */
/**
 * distruct the "productId" prop
 * add the productId condition
 */
const UpdateFormContainer = ({categories, dispatch, product, productId}) => {
    if (!product || !productId) {
        return null;
    }

    return (
        <>
            <Link to='/'>Home</Link>
            <ProductForm
                onSave={(data) => {
                    dispatch(updateProductForm(productId, data))
                }}
                product={product}
                categories={categories}
            />
        </>
    );
};

UpdateFormContainer.propTypes = {
    product: PropTypes.object,
    categories: PropTypes.array,
    history: PropTypes.object,
    productId: PropTypes.number
};

const mapStateToProps = (state, {productId}) => ({
    product: getProductById(state, productId),
    categories: state.categories,
});

export default connect(mapStateToProps)(UpdateFormContainer);
