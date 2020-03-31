import * as authActions from 'app/auth/store/actions'
import { TextFieldFormsy } from '@fuse/core/formsy'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
// @ts-ignore
import Formsy from 'formsy-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from 'app/store/reducers'
import { IActionState } from 'app/auth/store/reducers'
import { ILoginInput } from 'app/services/jwtService'
import { useTranslation } from 'react-i18next'

function JWTLoginTab() {
	const dispatch = useDispatch()
	const login = useSelector<IRootState, IActionState>(({ auth }) => auth.login)
	const { t } = useTranslation('loginPage')

	const [isFormValid, setIsFormValid] = React.useState(false)
	const formRef = React.useRef(document.createElement('div')) // Damn compiler...

	const getErrorMessage = (errorCode: string) => {
		switch (errorCode) {
			case 'credentials.incomplete':
				return 'Onjuiste invoer'
			case 'credentials.invalid':
				return 'Email/wachtwoord combinatie onbekend'
			default:
				return 'Onbekende fout'
		}
	}

	React.useEffect(() => {
		if (login.error && login.error.message) {
			// @ts-ignore
			formRef.current.updateInputsWithError({
				email: getErrorMessage(login.error.message),
				password: getErrorMessage(login.error.message)
			})
			disableButton()
		}
	}, [login.error])

	function disableButton() {
		setIsFormValid(false)
	}

	function enableButton() {
		setIsFormValid(true)
		// @ts-ignore
		formRef.current.updateInputsWithError({
			email: null,
			password: null
		})
	}

	function handleSubmit(model: ILoginInput) {
		dispatch(authActions.submitLogin(model))
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
					name="email"
					label={t('login.email')}
					onChange={enableButton}
					validations={{
						minLength: 4,
						isEmail: true
					}}
					validationErrors={{
						minLength: 'Minstens 4 karakters',
						isEmail: 'Geen geldig emailadres'
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
					label={t('login.password')}
					onChange={enableButton}
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
					aria-label="LOG IN"
					disabled={!isFormValid}
					value="legacy"
				>
					{t('login.login-button')}
				</Button>
			</Formsy>
		</div>
	)
}

JWTLoginTab.displayName = 'JWTLoginTab'
export default JWTLoginTab
