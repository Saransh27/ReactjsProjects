import React, { Component } from 'react';
import Product from '../../src/component/Product/product';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action/index';
import {Link} from 'react-router-dom';

class Products extends Component {

componentDidMount () {
    console.log("[componetnDidMount: ]",this.props); 
    this.props.onInitProducts();
}
  render() {
    console.log("inside products: ",this.props);
    return (
      <div>
        {
          this.props.listOfProducts != null ?
              (this.props.listOfProducts.map(
                (prod)=>{
                 return(
                <Link to={'/' + prod._id} key={prod._id}>
              <Product {...prod}/>
            </Link>
            )})
          ):null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("[Products] mapStateToProps:", state);
  console.log("[Products] listPRODUCTS:", state.product.products);
  return {
    listOfProducts : state.product.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onProductAdd: () => dispatch(actionCreators.AddProduct()),
      onInitProducts: ()=> dispatch(actionCreators.initProducts())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Products);
