import FuseUtils from '@fuse/utils'
import { INavigationMainItem, INavigationItem } from 'app/store/reducers/fuse/navigation.reducer'
import { IRootState } from 'app/store/reducers'

export const GET_NAVIGATION = '[NAVIGATION] GET NAVIGATION'
export const SET_NAVIGATION = '[NAVIGATION] SET NAVIGATION'
export const RESET_NAVIGATION = '[NAVIGATION] RESET NAVIGATION'

export function getNavigation() {
	return {
		type: GET_NAVIGATION
	}
}

export function setNavigation(navigation: INavigationMainItem[]) {
	return {
		type: SET_NAVIGATION,
		navigation
	}
}

export function resetNavigation() {
	return {
		type: RESET_NAVIGATION
	}
}

export function appendNavigationItem(item: INavigationItem, parentId: INavigationMainItem) {
	return (dispatch: any, getState: () => IRootState) => {
		const { navigation } = getState().fuse
		return dispatch({
			type: SET_NAVIGATION,
			navigation: FuseUtils.appendNavItem(navigation, item, parentId)
		})
	}
}

export function prependNavigationItem(item: INavigationItem, parentId: INavigationMainItem) {
	return (dispatch: any, getState: () => IRootState) => {
		const { navigation } = getState().fuse
		return dispatch({
			type: SET_NAVIGATION,
			navigation: FuseUtils.prependNavItem(navigation, item, parentId)
		})
	}
}

export function updateNavigationItem(id: string, item: INavigationMainItem) {
	return (dispatch: any, getState: () => IRootState) => {
		const { navigation } = getState().fuse
		return dispatch({
			type: SET_NAVIGATION,
			navigation: FuseUtils.updateNavItem(navigation, id, item)
		})
	}
}

export function removeNavigationItem(id: string) {
	return (dispatch: any, getState: () => IRootState) => {
		const { navigation } = getState().fuse
		return dispatch({
			type: SET_NAVIGATION,
			navigation: FuseUtils.removeNavItem(navigation, id)
		})
	}
}
