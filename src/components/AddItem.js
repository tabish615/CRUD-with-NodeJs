import React, { Component } from 'react';
// import ItemService from './ItemService';
import {connect} from 'react-redux';
import Middleware from '../store/middleware/middleware'

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        // this.addItemService = new ItemService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addItem(this.state.value);
        this.props.history.push('/index');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add Item:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label><br />
                    <input type="submit" value="Submit" />
                </form>
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
        addItem : (data) => dispatch(Middleware.addMiddleware(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddItem);