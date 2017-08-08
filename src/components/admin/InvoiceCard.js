import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imageurl} />
                {this.props.date}
                {this.props.firstName+' '+this.props.lastName}
                {this.props.furnitureType}
                {this.props.workType}
                {this.props.quantity}
                {this.props.total}
            </div>
        );
    }
}