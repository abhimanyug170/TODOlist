import mapKeys from 'lodash/mapKeys'
import omit from 'lodash/omit'
import { ADD_TODO, FETCH_TODOS, MARK_COMPLETED, EDIT_TODO, DELETE_TODO, FETCH_TODO } from '../actions/types'

export default (state = {}, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, [action.payload._id]: action.payload }
		case FETCH_TODOS:
			return { ...state, ...mapKeys(action.payload, '_id') }
		case MARK_COMPLETED:
			state[action.payload].isPending = false
			return { ...state }
		case FETCH_TODO:
			return { ...state, [action.payload._id]: action.payload }
		case EDIT_TODO:
			return { ...state, [action.payload._id]: action.payload }
		case DELETE_TODO:
			return omit(state, action.payload)
		default:
			return state
	}
}
