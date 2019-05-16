import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ItemService from './ItemService';
import {connect} from 'react-redux';
import Middleware from '../store/middleware/middleware'

class TableRow extends Component {

    constructor(props) {
        super(props);
        // this.addItemService = new ItemService();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.deleteItem(this.props.obj._id);
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.item}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj._id} >Edit</Link>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Delete" />
                    </form>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state){
    return {
        state1: state,
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteItem : (id) => dispatch(Middleware.deleteMiddleware(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TableRow);