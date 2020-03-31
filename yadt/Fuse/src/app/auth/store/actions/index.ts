import { IUserState } from '../reducers/user.reducer'
import { IAction } from 'app/store/actions'

export * from './login.actions'
export * from './register.actions'
export * from './user.actions'

export interface IUserAction extends IAction {
	payload: IUserState
}

export interface ILoginAction extends IAction {
	payload: { message: string }
}

export interface IRegisterAction extends IAction {
	payload: { message: string }
}
