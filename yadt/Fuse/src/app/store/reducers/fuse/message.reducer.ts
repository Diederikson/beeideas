import * as Actions from '../../actions/fuse'

export interface IMessageOptions {
	anchorOrigin?: {
		vertical: string
		horizontal: string
	}
	autoHideDuration?: number
	message: string
	variant?: string
}

export interface IMessageState {
	state: boolean | null
	options: IMessageOptions
}

const initialState: IMessageState = {
	state: null,
	options: {
		anchorOrigin: {
			vertical: 'top',
			horizontal: 'center'
		},
		autoHideDuration: 6000,
		message: 'Hi',
		variant: undefined
	}
}

const message = (state = initialState, action: Actions.IMessageAction) => {
	switch (action.type) {
		case Actions.SHOW_MESSAGE: {
			return {
				state: true,
				options: {
					...initialState.options,
					...action.options
				}
			}
		}
		case Actions.HIDE_MESSAGE: {
			return {
				...state,
				state: null
			}
		}
		default: {
			return state
		}
	}
}

export default message
