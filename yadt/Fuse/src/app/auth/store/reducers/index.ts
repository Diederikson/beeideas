import { combineReducers } from 'redux'
import login from './login.reducer'
import register from './register.reducer'
import user, { IUserState } from './user.reducer'

export interface IAuthState {
	user: IUserState
	login: IActionState
	register: IActionState
}

const authReducers = combineReducers<IAuthState>({
	user,
	login,
	register
})

export default authReducers

export interface IErrorState {
	message: string
}

export interface IActionState {
	success: boolean
	error: IErrorState
}
