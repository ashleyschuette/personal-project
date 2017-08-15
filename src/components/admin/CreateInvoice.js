import React, { Component } from 'react';
import AdminNAV from './AdminNAV';
import axios from 'axios';

export default class CreateInvoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            workType: '',
            quantity: '',
            furnitureType: '',
            laborCost: '',
            suppliesCost: '',
            foamCost: '',
            fabricCost: '',
            fabricBrand: '',
            fabricPattern: '',
            fabricColor: '',
            yards: '',
            notes: ''
        }

        this.dateonChange = this.dateonChange.bind(this);
        this.workTypeonChange = this.workTypeonChange.bind(this);
        this.quantityonChange = this.quantityonChange.bind(this);
        this.furnitureTypeonChange = this.furnitureTypeonChange.bind(this);
        this.laborCostonChange = this.laborCostonChange.bind(this);
        this.suppliesCostonChange = this.suppliesCostonChange.bind(this);
        this.foamCostonChange = this.foamCostonChange.bind(this);
        this.fabricCostonChange = this.fabricCostonChange.bind(this);
        this.fabricBrandonChange = this.fabricBrandonChange.bind(this);
        this.fabricPatternonChange = this.fabricPatternonChange.bind(this);
        this.fabricColoronChange = this.fabricColoronChange.bind(this);
        this.yardsonChange = this.yardsonChange.bind(this);
        this.notesonChange = this.notesonChange.bind(this);

        this.onSave = this.onSave.bind(this);
    }

    dateonChange(event) {
        this.setState({
            date: event.target.value
        })
    }

     workTypeonChange(event) {
        this.setState({
            workType: event.target.value
        })
     }
    
     quantityonChange(event) {
         this.setState({
            quantity: event.target.value
        })
     }
    
     furnitureTypeonChange(event) {
         this.setState({
            furnitureType: event.target.value
        })
     }
    
     laborCostonChange(event) {
         this.setState({
            laborCost: event.target.value
        })
     }
    
     suppliesCostonChange(event) {
         this.setState({
            suppliesCost: event.target.value
        })
     }
    
     foamCostonChange(event) {
         this.setState({
            foamCost: event.target.value
        })
     }
    
     fabricCostonChange(event) {
         this.setState({
            fabricCost: event.target.value
        })
     }
    
     fabricBrandonChange(event) {
         this.setState({
            fabricBrand: event.target.value
        })
     }
    
     fabricPatternonChange(event) {
         this.setState({
            fabricPattern: event.target.value
        })
     }
    
     fabricColoronChange(event) {
         this.setState({
            fabricColor: event.target.value
        })
     }
    
     yardsonChange(event) {
         this.setState({
            yards: event.target.value
        })
     }
    
     notesonChange(event) {
         this.setState({
            notes: event.target.value
        })
    }

    onSave() {
        axios.post('/api/createinvoice/2', {
            date: this.state.date,
            workType: this.state.workType,
            quantity: parseInt(this.state.quantity),
            furnitureType: this.state.furnitureType,
            laborCost: this.state.laborCost,
            suppliesCost: this.state.suppliesCost,
            foamCost: this.state.foamCost,
            fabricCost: this.state.fabricCost,
            fabricBrand: this.state.fabricBrand,
            fabricPattern: this.state.fabricPattern,
            fabricColor: this.state.fabricColor,
            yards: this.state.yards,
            notes: this.state.notes
        })
            .then((response) => console.log(response))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <AdminNAV />
                <div className="component-content">
                    <h1 className="component-header">Create New Invoice</h1>
                    <div className="new-invoice-content">
                <div className="inline-inputs">
                <h3 className="label">Date</h3>
                <input className="bottom-line date-font" onChange={this.dateonChange} type="date" />
                    </div>
                <div className="type-quantity">    
                <div>
                <h3 className="label">Type</h3>
                <select onChange={this.workTypeonChange}>
                    <option>Select</option>
                    <option value="Upholstery">Upholstery</option>
                    <option value="Refinishing">Refinishing</option>
                        </select>
                </div>  
                <div className="quantity-select">        
                <h3 className="label">Quantity</h3>
                <select onChange={this.quantityonChange}>
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                            </select>
                   
                </div>  
                <div className="type-line">        
                <input onChange={this.furnitureTypeonChange} placeholder="Furniture Type" />
                </div>
                </div> 
                <div className="invoice-fabric-container"> 
                <div>       
                <h3 className="label">Invoice</h3>
                <div className="inline-inputs">  
                <h4 className="label">Labor $</h4>
                <input className="bottom-line" onChange={this.laborCostonChange} />
                </div>  
                <div className="inline-inputs">     
                <h4 className="label">Supplies $</h4>
                <input className="bottom-line" onChange={this.suppliesCostonChange} />
                    </div>
                <div className="inline-inputs">     
                <h4 className="label">Foam $</h4>
                <input className="bottom-line" onChange={this.foamCostonChange} />
                    </div>
                <div className="inline-inputs">     
                <h4 className="label">Fabric $</h4>
                <input className="bottom-line" onChange={this.fabricCostonChange}/>
                            </div>
                </div>  
                <div className="fabric-container">       
                <h3 className="label">Fabric</h3>    
                <input onChange={this.fabricBrandonChange} placeholder="Fabric Brand" />
                <input onChange={this.fabricPatternonChange} placeholder="Pattern" />
                <input onChange={this.fabricColoronChange} placeholder="Color" />
                <input onChange={this.yardsonChange} placeholder="Yards" />
                </div> 
                </div>        
                <h3 className="label notes-label">Notes</h3>
                <input className="notes-container" onChange={this.notesonChange}/>
                <button onClick={this.onSave}>SAVE</button>
                </div> 
                </div>
            </div>    
        )
    }
}