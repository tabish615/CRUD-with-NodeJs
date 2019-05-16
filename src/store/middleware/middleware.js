import Actions from '../actions/actions';
import axios from 'axios';

class Middleware {

    static addMiddleware(data) {
        return dispatch => {
            axios.post('http://localhost:4200/items/add/post', {
                item: data
            })
                .then(function (response) {
                    console.log(response);
                    dispatch(Middleware.updatedDataMiddleware())
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    static updateMiddleware(data, id) {
        return dispatch => {
            axios.post('http://localhost:4200/items/update/' + id, {
                item: data
            })
                .then(res => {
                    // this.setState({ items: res.data });
                    dispatch(Middleware.updatedDataMiddleware())
                })
                .catch(err => console.log(err))
        }
    }

    static deleteMiddleware(id) {
        return dispatch => {
            axios.delete('http://localhost:4200/items/delete/' + id)
                .then(function (response) {
                    console.log(response)
                    console.log('Deleted')
                    dispatch(Middleware.updatedDataMiddleware())
                })
                .catch(err => console.log(err))
        }
    }

    static updatedDataMiddleware(data) {
        return dispatch => {
            axios.get('http://localhost:4200/items')
            .then(response => {
                console.log(response);
                // this.setState({ items: response.data });
                dispatch(Actions.UpdatedData(response.data))
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }
}

export default Middleware;