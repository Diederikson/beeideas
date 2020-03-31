import { TextFieldFormsy } from '@fuse/core/formsy'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import InputAdornment from '@material-ui/core/InputAdornment'
import * as authActions from 'app/auth/store/actions'
// @ts-ignore
import Formsy from 'formsy-react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IActionState } from 'app/auth/store/reducers'
import { IRootState } from 'app/store/reducers'
import { ISubmitRegister } from 'app/auth/store/actions'
import { useTranslation } from 'react-i18next'

function JWTRegisterTab() {
	const dispatch = useDispatch()
	const register = useSelector<IRootState, IActionState>(({ auth }) => auth.register)
	const { t } = useTranslation('registerPage')

	const [isFormValid, setIsFormValid] = useState(false)
	const formRef = useRef(document.createElement('div')) // Damn compiler...

	useEffect(() => {
		if (register.error && register.error.message) {
			// @ts-ignore
			formRef.current.updateInputsWithError({
				...register.error
			})
			disableButton()
		}
	}, [register.error])

	function disableButton() {
		setIsFormValid(false)
	}

	function enableButton() {
		setIsFormValid(true)
	}

	function handleSubmit(model: ISubmitRegister) {
		dispatch(authActions.submitRegister(model))
	}

	return (
		<div className="w-full">
			<Formsy
				onValidSubmit={handleSubmit}
				onValid={enableButton}
				onInvalid={disableButton}
				ref={formRef}
				className="flex flex-col justify-center w-full"
			>
				<TextFieldFormsy
					className="mb-16"
					type="text"
					name="displayName"
					label={t('register.display-name')}
					validations={{
						minLength: 4
					}}
					validationErrors={{
						minLength: 'Minstens 4 karakters'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									person
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextFieldFormsy
					className="mb-16"
					type="text"
					name="email"
					label={t('register.email')}
					validations="isEmail"
					validationErrors={{
						isEmail: 'Voer een geldig emailadres in'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									email
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextFieldFormsy
					className="mb-16"
					type="password"
					name="password"
					label={t('register.password')}
					validations="equalsField:password-confirm"
					validationErrors={{
						equalsField: 'Wachtwoorden komen niet overeen'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									vpn_key
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextFieldFormsy
					className="mb-16"
					type="password"
					name="password-confirm"
					label={t('register.password-repeat')}
					validations="equalsField:password"
					validationErrors={{
						equalsField: 'Wachtwoorden komen niet overeen'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									vpn_key
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					className="w-full mx-auto mt-16 normal-case"
					aria-label={t('register.register-button')}
					disabled={!isFormValid}
					value="legacy"
				>
					{t('register.register-button')}
				</Button>
			</Formsy>
		</div>
	)
}

JWTRegisterTab.displayName = 'JWTRegisterTab'
export default JWTRegisterTab
