import { IDialogOptions } from 'app/store/reducers/fuse/dialog.reducer'

export const OPEN_DIALOG = '[DIALOG] OPEN'
export const CLOSE_DIALOG = '[DIALOG] CLOSE'

export function closeDialog() {
	return {
		type: CLOSE_DIALOG
	}
}

export function openDialog(options: IDialogOptions) {
	return {
		type: OPEN_DIALOG,
		options
	}
}
