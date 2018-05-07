import React, { Component } from 'react';
import Product from '../../src/component/Product/product';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action/index';
import {Link} from 'react-router-dom';

class Products extends Component {
state = {value:0}

componentDidMount () {
    console.log("[componetnDidMount: ]",this.props); 
    this.props.onInitProducts();
    };

    // inc =()=> {
    //   console.log('before: ' + this.state.value);
    //   this.setState({
    //     value: this.state.value+1
    //   });
    //   console.log('after: ' + this.state.value);
    //}
    
  render() {
    return (
      <div>
        { console.log("inside products, props:  ",this.props)}
        <button onClick={this.inc}>Click to update</button>
        {this.state.value}
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
