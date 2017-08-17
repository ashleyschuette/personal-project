import React, { Component } from 'react';
import Payment from './Payment';


export default class DetailsCard extends Component {
    render() {
        console.log(this.props)
        return (
            <div >
                <div className="invoice-detail-content">
                <div className="image-holder">
                    <img style={{height: '250px'}} src={this.props.imageurl} />
                    </div>
                <div className="invoice-text">
                    <div className="top-right">
                        <div className="excel-address">        
                            <div className="company-name">Excel Interiors</div>
                            <div>7892 Market Blvd.</div>   
                            <div>Chanhassen, MN 55317</div> 
                        </div>                
                        <div className="top-right-invoice">
                        <div className="top-invoice-date">   
                        Invoice Date:
                        <div>{' '+this.props.date}</div>
                        </div>             
                    <div>Quantity:
                        <span>{' '+this.props.quantity}</span>
                    </div>    
                    <div>Type:
                        <span>{' '+this.props.workType}</span>
                    </div>
                    <div>Amount Due:
                        <span>{' '+this.props.total}</span>    
                    </div>                
                    </div>                
                    </div>  
                <div className="left-content">
                <div className="invoice-header">
                    <h1 className="invoice-header-text">Invoice</h1>  
                    <span className="amounts">Amount</span>                
                </div>        
                <div className="amount-label">
                    <h1>Labor</h1>
                    <span className="amounts">{' '+this.props.laborCost}</span>     
                </div> 
                <div className="amount-label">
                    <h1>Supplies</h1>
                        <span className="amounts">{' '+this.props.suppliesCost}</span>    
                </div>  
                <div className="amount-label">
                    <h1>Foam</h1>
                    <span className="amounts">{' '+this.props.foamCost}</span>    
                </div> 
                <div className="amount-label">
                    <h1>Fabric</h1>            
                    <span className="amounts">{' ' + this.props.fabricCost}</span>
                </div> 
                <div className="fabric-details">           
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
                <div className="amount-label">TOTAL
                        <span className="amounts">{this.props.total}</span>
                            </div>
                <div className="amount-due">Amount Due
                    <span className="amounts"> ${this.props.total}</span>            
                </div> 
                  <div>           
                    <Payment
                        total={this.props.total}/>            
                </div>            
                </div>        
                </div>
                </div>    
            </div>    
        );
    }
}