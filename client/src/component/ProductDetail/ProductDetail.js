import classes from './ProductDetail.css';
import React,{Component} from 'react';
import axios from '../../axios-root'

class productdetail extends Component
{
    state = {
        loadedPost: null
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            axios
                .get('/product/' + this.props.match.params.id)
                .then(response => {
                    this.setState({loadedPost: response.data});
                });
        }
    }
    deleteData(id) {
        axios.delete('/product/' + id)
            .then(response => {
                console.log("Delete: ", response.data)
            this.props.history.push('/');
                
            });
    }
    render() {
        return (this.state.loadedPost != null
            ? (
                <div className='row'>
                    <div className={`col-sm-2 col-xs-1`}></div>
                    <div className={`col-sm-8 col-xs-10 ${classes.productdiv}`}>
                        <div className={`col-sm-6 col-xs-6`}>
                            <img
                                src={this.state.loadedPost.productImage}
                                alt="product pic not available"
                                width={'300px'}
                                height={'300px'}/>
                        </div>
                        <div className={`col-sm-6 col-xs-6`}>
                            <p>{this.state.loadedPost.title}</p>
                            <hr/>
                            <p>Price: {this.state.loadedPost.price}</p>
                            <p>Quantity: {this.state.loadedPost.quantity}</p>
                            <button className={`btn btn-primary`}>Edit</button>
                            <button onClick={this.deleteData.bind(this,this.props.match.params.id)}className={`btn btn-danger`}>Delete</button>
                        </div>
                    </div>
                    <div className={`col-sm-2 col-xs-1`}></div>
                </div>
            )
            : null);
    }
}
export default productdetail;