import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Card extends Component {
    render() {
        return (
                <div>
                <div>
                    <img style={{height: '100%', position: 'absolute', left: '50%', transform: 'translate(-50%, 0%'}} src={this.props.imageurl} />
                </div>
                <div >
                    <div>{this.props.date}</div>
                <div>Quantity:
                    <span>{' '+this.props.quantity}</span>
                </div>    
                <div>Type:
                    <span>{' '+this.props.workType}</span>
                </div>
                <div>Estimate</div>
                <div>Labor:
                    <span>{' '+this.props.laborCost}</span>     
                </div> 
                <div>Supplies:
                        <span>{' '+this.props.suppliesCost}</span>    
                </div>  
                <div>Foam:
                    <span>{' '+this.props.foamCost}</span>    
                </div> 
                <div>Fabric:
                    <span>{' '+this.props.fabricCost}</span>    
                </div> 
                <div className="total">
                        {this.props.total}
                </div>      
                <div>Fabric</div>  
                <div>Brand:
                    <span>{' '+this.props.fabricBrand}</span>    
                </div>    
                <div>Pattern:
                    <span>{' '+this.props.fabricPattern}</span>    
                </div> 
                <div>Color:
                    <span>{' '+this.props.fabricColor}</span>
                    </div>
                <div>Yards:
                    <span>{' '+this.props.yards}</span>
                    </div>    
                </div>
                <div>Notes
                    <span>{this.props.notes}</span>
                </div>
            </div>
        );
    }
}