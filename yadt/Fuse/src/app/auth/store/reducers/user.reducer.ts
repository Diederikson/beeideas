import * as Actions from '../actions'

export interface IUserState {
	role: string[]
	data: {
		uuid: string
		displayName: string
		photoURL: string
		email: string
		shortcuts: string[]
		settings: string
	}
}

const initialState: IUserState = {
	role: [],
	data: {
		uuid: '',
		displayName: '*UNKNOWN*',
		photoURL: 'assets/images/avatars/Velazquez.jpg',
		email: '*UNKNOWN*',
		shortcuts: [],
		settings: ''
	}
}

const user = (state = initialState, action: Actions.IUserAction) => {
	switch (action.type) {
		case Actions.SET_USER_DATA: {
			return {
				...initialState,
				...action.payload
			}
		}
		case Actions.REMOVE_USER_DATA: {
			return {
				...initialState
			}
		}
		case Actions.USER_LOGGED_OUT: {
			return initialState
		}
		default: {
			return state
		}
	}
}

export default user
