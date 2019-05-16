import React, { Component } from 'react';
// import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './TableRow';
import {connect} from 'react-redux';
import Middleware from '../store/middleware/middleware'

class IndexItem extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '', items: [] };
        // this.addItemService = new ItemService();
    }
    componentDidMount() {
        this.props.updatedItem()
    }
    componentWillReceiveProps(nextprops){
        console.log(nextprops);
        if(nextprops.state1.data.length){
            this.setState({
                items : nextprops.state1.data
            })
        }
        else {
            this.setState({
                items : []
        })
        }
    }
    tabRow() {
        if (this.state.items.length) {
            return this.state.items.map(function (object, i) {
                return <TableRow obj={object} key={i} />;
            })
        }
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>Item</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
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
        updatedItem : (data) => dispatch(Middleware.updatedDataMiddleware(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IndexItem);