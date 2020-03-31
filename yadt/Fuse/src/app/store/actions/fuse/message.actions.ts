import { IMessageOptions } from 'app/store/reducers/fuse/message.reducer'

export const HIDE_MESSAGE = '[MESSAGE] CLOSE'
export const SHOW_MESSAGE = '[MESSAGE] SHOW'

export function hideMessage() {
	return {
		type: HIDE_MESSAGE
	}
}

export function showMessage(options: IMessageOptions) {
	return {
		type: SHOW_MESSAGE,
		options
	}
}
