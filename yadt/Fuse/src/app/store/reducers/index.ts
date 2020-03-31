import auth, { IAuthState } from 'app/auth/store/reducers'
import fuse, { IFuseState } from './fuse'
import { combineReducers } from 'redux'

export interface IRootState {
	auth: IAuthState
	fuse: IFuseState
}

const createReducer = (asyncReducers: any) =>
	combineReducers<IRootState>({
		auth,
		fuse,
		...asyncReducers
	})

export default createReducer
