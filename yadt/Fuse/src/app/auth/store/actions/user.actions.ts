import history from '@history'
import _ from '@lodash'
import jwtService from 'app/services/jwtService'
import * as MessageActions from 'app/store/actions/fuse/message.actions'
import * as FuseActions from 'app/store/actions/fuse'
import { IUserState } from '../reducers/user.reducer'
import { IRootState } from 'app/store/reducers'

export const SET_USER_DATA = '[USER] SET DATA'
export const REMOVE_USER_DATA = '[USER] REMOVE DATA'
export const USER_LOGGED_OUT = '[USER] LOGGED OUT'

/**
 * Set User Data
 */
export function setUserData(user: IUserState) {
	return (dispatch: any) => {
		/*
        You can redirect the logged-in user to a specific route depending on his role
         */

		// history.location.state = {
		//     redirectUrl: user.redirectUrl // for example 'apps/academy'
		// }

		/*
        Set User Settings
         */
		dispatch(FuseActions.setDefaultSettings(user.data.settings))

		/*
        Set User Data
         */
		dispatch({
			type: SET_USER_DATA,
			payload: user
		})
	}
}

/**
 * Update User Settings
 */
export function updateUserSettings(settings: string) {
	return (dispatch: any, getState: () => IRootState) => {
		const oldUser = getState().auth.user
		const user = _.merge({}, oldUser, { settings })

		updateUserData(user, dispatch)

		return dispatch(setUserData(user))
	}
}

/**
 * Update User Shortcuts
 */
export function updateUserShortcuts(shortcuts: string[]) {
	return (dispatch: any, getState: () => IRootState) => {
		const { user } = getState().auth
		const newUser = {
			...user,
			shortcuts
		}
		updateUserData(newUser, dispatch)

		return dispatch(setUserData(newUser))
	}
}

/**
 * Remove User Data
 */
export function removeUserData() {
	return {
		type: REMOVE_USER_DATA
	}
}

/**
 * Logout
 */
export function logoutUser() {
	return (dispatch: any, getState: () => IRootState) => {
		const { user } = getState().auth

		if (!user.role || user.role.length === 0) {
			// is guest
			return null
		}

		history.push({
			pathname: '/'
		})

		jwtService.logout()
		dispatch(FuseActions.setInitialSettings())

		return dispatch({
			type: USER_LOGGED_OUT
		})
	}
}

/**
 * Update User Data
 */
function updateUserData(user: IUserState, dispatch: any) {
	if (!user.role || user.role.length === 0) {
		// is guest
		return
	}

	jwtService
		.updateUserData(user.data)
		.then(() => {
			dispatch(MessageActions.showMessage({ message: 'User data saved with api' }))
		})
		.catch(error => {
			dispatch(MessageActions.showMessage({ message: error.message }))
		})
}
