import React, {Component} from 'react';
import AdminNAV from './admin/AdminNAV';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStatus } from '../ducks/reducer';

class Welcome extends Component { 
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get('/auth/me')
        .then(res => {
            this.props.getStatus(res.data.admin)
        })
    }


    render() {
    return (
        <div>
            <AdminNAV />
            <h1> Welcome </h1>
        </div>
        
    )
}   
    
}

export default connect(null, {getStatus})(Welcome)