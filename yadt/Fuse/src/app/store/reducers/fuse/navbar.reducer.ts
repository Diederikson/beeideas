import * as Actions from '../../actions/fuse'
import { IAction } from 'app/store/actions'

export interface INavbarState {
	foldedOpen: boolean
	mobileOpen: boolean
}

const initialState: INavbarState = {
	foldedOpen: false,
	mobileOpen: false
}

const navbar = (state = initialState, action: IAction) => {
	switch (action.type) {
		case Actions.TOGGLE_FOLDED_NAVBAR: {
			return {
				...state,
				foldedOpen: !state.foldedOpen
			}
		}
		case Actions.OPEN_FOLDED_NAVBAR: {
			return {
				...state,
				foldedOpen: true
			}
		}
		case Actions.CLOSE_FOLDED_NAVBAR: {
			return {
				...state,
				foldedOpen: false
			}
		}
		case Actions.TOGGLE_MOBILE_NAVBAR: {
			return {
				...state,
				mobileOpen: !state.mobileOpen
			}
		}
		case Actions.OPEN_MOBILE_NAVBAR: {
			return {
				...state,
				mobileOpen: true
			}
		}
		case Actions.CLOSE_MOBILE_NAVBAR: {
			return {
				...state,
				mobileOpen: false
			}
		}
		default: {
			return state
		}
	}
}

export default navbar
