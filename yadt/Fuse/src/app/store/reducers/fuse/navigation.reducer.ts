import navigationConfig from 'app/fuse-configs/navigationConfig'
import * as Actions from '../../actions/fuse'

export interface INavigationMainItem extends INavigationItem {
	children: INavigationItem[]
}

export interface INavigationItem {
	id: string
	title: string
	translate: string
	type: string
	icon: string
}

const initialState: INavigationMainItem[] = navigationConfig

const navigation = (state = initialState, action: Actions.INavigationAction) => {
	switch (action.type) {
		case Actions.GET_NAVIGATION: {
			return [...state]
		}
		case Actions.SET_NAVIGATION: {
			return [...action.navigation]
		}
		case Actions.RESET_NAVIGATION: {
			return [...initialState]
		}
		default: {
			return state
		}
	}
}

export default navigation
