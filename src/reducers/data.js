import { RECIVE_API_DATA } from '../duck/actions'

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECIVE_API_DATA:
            return data;
        default:
            return state;
    }
}