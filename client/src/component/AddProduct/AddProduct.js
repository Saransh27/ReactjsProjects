import React, {Component} from 'react';
import axios from '../../axios-root.js';
import Spinner from '../UI/Spinner/Spinner';

class AddProduct extends Component
{
    state = {
        loading: false
    }

    handleSubmit = (event) => {

        this.setState({loading: true});
        event.preventDefault();
        const data = new FormData();
        data.append('productImage', this.uploadInput.files[0]);
        data.append('title', this.title.value);
        data.append('price', this.price.value);
        data.append('quantity', this.quantity.value);

        console.log("Inside Add Product");
        console.log("data:  ", data);

        axios
            .post('/product', data)
            .then(response => {
                console.log('success');
                this.setState({loading: false});
            })
            .catch(error => {
                console.log('Error Occurred');
                this.setState({loading: false});
            });
        console.log(axios);
        console.log("after post");
    }
    render()
    {
        let display = '';
        
        return (
            display = this.state.loading
            ? <Spinner/>
            : (
            <div className='row'>
                {display}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            ref={ref => {
                            this.title = ref;
                        }}
                            placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            ref={ref => {
                            this.price = ref;
                        }}
                            placeholder="Price"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            ref={ref => {
                            this.quantity = ref;
                        }}
                            placeholder="Price"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="productImage">File Input</label>
                        <input
                            type="file"
                            ref={ref => {
                            this.uploadInput = ref;
                        }}
                            id="productImage"/>
                    </div>
                    <button className="btn btn-primary">Post</button>
                </form>
            </div>)
        );
    }
}
export default AddProduct;