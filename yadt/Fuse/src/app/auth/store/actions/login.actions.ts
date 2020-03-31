import jwtService from 'app/services/jwtService'
import * as UserActions from './user.actions'

export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

interface ISubmitLogin {
	email: string
	password: string
}

export function submitLogin({ email, password }: ISubmitLogin) {
	return (dispatch: any) =>
		jwtService
			.signInWithEmailAndPassword({ email, password })
			.then(user => {
				dispatch(
					UserActions.setUserData({
						role: [user.role],
						data: {
							...user,
							shortcuts: [],
							settings: ''
						}
					})
				)

				return dispatch({
					type: LOGIN_SUCCESS
				})
			})
			.catch(error => {
				return dispatch({
					type: LOGIN_ERROR,
					payload: error
				})
			})
}
