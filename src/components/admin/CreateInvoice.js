import React, { Component } from 'react';
import AdminNAV from './AdminNAV';

export default class CreateInvoice extends Component {
    render() {
        return (
            <div>
                <nav>
                    <AdminNAV/>
                </nav>
                <h1> Create New Invoice </h1>
                <h3>Date</h3>
                <input placeholder="YYYY-MM-DD" />
                <h3>Type of Work</h3>
                <select>
                    <option>Select</option>
                    <option value="Upholstery">Upholstery</option>
                    <option value="Refinishing">Refinishing</option>
                </select>
                <h3>Quantity</h3>
                <select>
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
                <input placeholder="Furniture Type" />
                <h3>Estimate</h3>
                <h4>Labor $</h4>
                <input />
                <h4>Supplies $</h4>
                <input />
                <h4>Foam $</h4>
                <input />
                <h4>Fabric $</h4>
                <input />
                <h3>Fabric</h3>
                <input placeholder="Fabric Brand" />
                <input placeholder="Pattern" />
                <input placeholder="Color" />
                <input placeholder="Yards" />
                <h3>Notes</h3>
                <input />
                <button>SAVE</button>
            </div>    
        )
    }
}