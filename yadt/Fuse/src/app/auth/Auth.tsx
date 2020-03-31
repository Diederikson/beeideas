import FuseSplashScreen from '@fuse/core/FuseSplashScreen'
import * as userActions from 'app/auth/store/actions'
import jwtService from 'app/services/jwtService'
import * as Actions from 'app/store/actions'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Auth extends React.Component<IDispatchToProp> {
	state = {
		waitAuthCheck: true
	}

	componentDidMount() {
		return Promise.all([this.jwtCheck()]).then(() => {
			this.setState({ waitAuthCheck: false })
		})
	}

	jwtCheck = () =>
		new Promise(resolve => {
			jwtService.on('onAutoLogin', () => {
				this.props.showMessage({ message: 'Logging in with JWT' })

				/**
				 * Sign in and retrieve user data from Api
				 */
				jwtService
					.signInWithToken()
					.then(user => {
						this.props.setUserData({
							role: [user.role],
							data: {
								...user,
								shortcuts: [],
								settings: ''
							}
						})

						resolve()

						this.props.showMessage({ message: 'Logged in with JWT' })
					})
					.catch(error => {
						this.props.showMessage({ message: error })

						resolve()
					})
			})

			jwtService.on('onAutoLogout', (message: string) => {
				if (message) {
					this.props.showMessage({ message })
				}
				this.props.logout()
				resolve()
			})

			jwtService.on('onNoAccessToken', () => {
				resolve()
			})

			jwtService.init()
			return Promise.resolve()
		})

	render() {
		return this.state.waitAuthCheck ? <FuseSplashScreen /> : <>{this.props.children}</>
	}
}

interface IDispatchToProp {
	logout: typeof userActions.logoutUser
	setUserData: typeof userActions.setUserData
	showMessage: typeof Actions.showMessage
	hideMessage: typeof Actions.hideMessage
}

function mapDispatchToProps(dispatch: any) {
	return bindActionCreators(
		{
			logout: userActions.logoutUser,
			setUserData: userActions.setUserData,
			showMessage: Actions.showMessage,
			hideMessage: Actions.hideMessage
		},
		dispatch
	)
}

export default connect(null, mapDispatchToProps)(Auth)
