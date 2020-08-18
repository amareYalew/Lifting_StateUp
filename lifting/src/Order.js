import React, { Component } from 'react'
import Product from './ProductInfo';
import Address from './Address';

import Summery from './Summery';


export default class Order extends Component {

    state = {
        quantity: '',
        address: ''
    }

    orderInfoChanged = (val) => {
        this.setState({ quantity:val})
        
    }
    addressChanged=(val)=>{

        this.setState({address:val});
      
      }
    render() {
        return (
            <div>
                <h1>Welcome to Product Order Screen...</h1>
                <Product quantity={this.state.quantity}
                  onQuantityChange={this.orderInfoChanged}  
                ></Product>
                <Address address={this.state.address} 
                onAddressChange={this.addressChanged}>
                    
                </Address>
                < Summery quantity={this.state.quantity} address={this.state.address} 

                    onQuantityChange={this.orderInfoChanged}/>
                    
      
            </div>
        )
    }
}
