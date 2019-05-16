import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';
import {connect} from 'react-redux';
import Middleware from '../store/middleware/middleware'

class EditItem extends Component {

  constructor(props) {
      super(props);
      this.addItemService = new ItemService();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {items: ''};
  }

  componentDidMount(){
    axios.get('http://localhost:4200/items/edit/'+this.props.match.params.id)
    .then(response => {
      this.setState({ items: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange(event) {
    this.setState({items: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateItem(this.state.items,this.props.match.params.id);
    this.props.history.push('/index');
  }


  render() {
    return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Edit Item:
                <input type="text" value={this.state.items.item} onChange={this.handleChange}  />
              </label><br/>
              <input type="submit" value="Update" />
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
      updateItem : (data,id) => dispatch(Middleware.updateMiddleware(data, id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditItem);