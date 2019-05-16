
class Actions {
    static add = 'ADD';
    static update = 'UPDATE';
    static delete = 'DELETE';
    static updatedData = 'UPDATED_DATA';

    static Add(data) {
        return {
            type : this.add,
            data : data
        }
    }

    static Update(data) {
        return {
            type : this.update,
            data : data
        }
    }

    static Delete(id) {
        return {
            type : this.delete,
            id : id
        }
    }

    static UpdatedData(data) {
        return {
            type : this.updatedData,
            data : data
        }
    }
}

export default Actions;