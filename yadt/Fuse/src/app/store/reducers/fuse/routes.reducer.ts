// import routesConfig from 'app/fuse-configs/routesConfig';

import { IAction } from 'app/store/actions'

export interface IRoutesState {}

const initialState: IRoutesState = {}

const routes = (state = initialState, action: IAction) => {
	switch (action.type) {
		default: {
			return state
		}
	}
}

export default routes
