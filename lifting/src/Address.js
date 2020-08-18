import React, { Component } from 'react'
import UserPrefer from './UserPrefer'

export default class Address extends Component {

    handleChange=e=>{

        this.props.onAddressChange(e.target.value);
     
      };

    render() {
        return (
            <div style={{border:'3px solid red'}}>
          <h2>Address Information...</h2>
          <p>

<label>Address : <textarea value={this.props.address} onChange={this.handleChange}></textarea></label>

</p>
           <UserPrefer/>     
            </div>
        )
    }
}
