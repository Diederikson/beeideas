import * as Actions from '../actions'
import { IActionState } from '.'

const initialState: IActionState = {
	success: false,
	error: {
		message: ''
	}
}

const register = (state = initialState, action: Actions.IRegisterAction) => {
	switch (action.type) {
		case Actions.REGISTER_SUCCESS: {
			return {
				...initialState,
				success: true
			}
		}
		case Actions.REGISTER_ERROR: {
			return {
				success: false,
				error: action.payload
			}
		}
		default: {
			return state
		}
	}
}

export default register
