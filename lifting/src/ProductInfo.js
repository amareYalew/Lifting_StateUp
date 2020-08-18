import React, { Component } from 'react'

export default class ProductInfo extends Component {

    handleChange = e => {
        this.props.onQuantityChange(e.target.value)
    }

    render() {
        return (
            <div style={{ border: '3px solid red' }}>
                <h2>Order Information...</h2>
                <p>
                    <label>Product Name :

                         <select>
                            <option value="Product-1">Product-1</option>
                            <option value="Product-2">Product-2</option>
                            <option value="Product-3">Product-3</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        Enter Quantity :<input type="text" value={this.props.quantity} onChange={this.handleChange}/>
                    </label>
                </p>
            </div>
        )
    }
}
