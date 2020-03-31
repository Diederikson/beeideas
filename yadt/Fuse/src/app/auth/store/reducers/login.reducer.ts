import * as Actions from '../actions'
import { IActionState } from '.'

const initialState: IActionState = {
	success: false,
	error: {
		message: ''
	}
}

const login = (state = initialState, action: Actions.ILoginAction) => {
	switch (action.type) {
		case Actions.LOGIN_SUCCESS: {
			return {
				...initialState,
				success: true
			}
		}
		case Actions.LOGIN_ERROR: {
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

export default login
