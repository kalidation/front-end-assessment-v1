import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ProductForm } from "../Update/ProductForm";
import { createProductForm } from "../../../actions/products";


/**
 * Import "createProductForm" action 
 * Dispatch the action when OnSave() using the Dispatch function from props inheited by middleware 
 */
const AddFormContainer = ({ categories, dispatch }) => (
  <>
    <Link to="/">Home</Link>
    <ProductForm
      onSave={(data) => {
        dispatch(createProductForm(data));
      }}
      categories={categories}
    />
  </>
);

/**
 * add the dispatch prop type 
 */
AddFormContainer.propTypes = {
  categories: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(AddFormContainer);
