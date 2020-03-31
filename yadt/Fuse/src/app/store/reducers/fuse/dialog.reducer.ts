import * as Actions from 'app/store/actions/fuse'

export interface IDialogOptions {
	children: string
}

export interface IDialogState {
	state: boolean
	options: IDialogOptions
}

const initialState: IDialogState = {
	state: false,
	options: {
		children: 'Hi'
	}
}

const dialog = (state = initialState, action: Actions.IDialogAction) => {
	switch (action.type) {
		case Actions.OPEN_DIALOG: {
			return {
				...state,
				state: true,
				options: {
					...state.options,
					...action.options
				}
			}
		}
		case Actions.CLOSE_DIALOG: {
			return {
				...state,
				state: false
			}
		}
		default: {
			return state
		}
	}
}

export default dialog
