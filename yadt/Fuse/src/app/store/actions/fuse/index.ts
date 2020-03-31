import { IAction } from '..'
import { INavigationMainItem } from 'app/store/reducers/fuse/navigation.reducer'
import { IMessageOptions } from 'app/store/reducers/fuse/message.reducer'
import { IDialogOptions } from 'app/store/reducers/fuse/dialog.reducer'

export * from './navigation.actions'
export * from './settings.actions'
export * from './navbar.actions'
export * from './message.actions'
export * from './dialog.actions'

export interface INavigationAction extends IAction {
	navigation: INavigationMainItem[]
}

export interface IMessageAction extends IAction {
	options: IMessageOptions
}

export interface IDialogAction extends IAction {
	options: IDialogOptions
}
