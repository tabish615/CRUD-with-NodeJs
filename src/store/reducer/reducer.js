import Actions from '../actions/actions';

function reducer(state = {
    data: [],
}, action) {

    switch (action.type) {
        case Actions.add:
            return {
                ...state,
                data: action.data,
            };
            break;

        case Actions.edit:
            return {
                ...state,
                data: action.data,
            };
            break;

        case Actions.update:
            return {
                ...state,
                data: action.data,
            };
            break;

        case Actions.delete:
            return {
                ...state,
                data: action.data,
            };
            break;

        case Actions.updatedData:
            return {
                ...state,
                data: action.data,
            };
            break;
    }
}

export default reducer;