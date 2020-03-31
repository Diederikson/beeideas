import { combineReducers } from 'redux'
import dialog, { IDialogState } from './dialog.reducer'
import message, { IMessageState } from './message.reducer'
import navbar, { INavbarState } from './navbar.reducer'
import navigation, { INavigationMainItem } from './navigation.reducer'
import routes, { IRoutesState } from './routes.reducer'
import settings from './settings.reducer'

export interface IFuseState {
	navigation: INavigationMainItem[]
	settings: any
	navbar: INavbarState
	message: IMessageState
	dialog: IDialogState
	routes: IRoutesState
}

const fuseReducers = combineReducers<IFuseState>({
	navigation,
	settings,
	navbar,
	message,
	dialog,
	routes
})

export default fuseReducers
