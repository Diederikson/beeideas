import FuseUtils from '@fuse/utils/FuseUtils'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { apiURL_JWT, IJwtResponse, ICreateUserInput, ILoginInput, IUpdateUserInput, IUserResponse } from '.'
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors()
		this.handleAuthentication()
	}

	setInterceptors = () => {
		axios.interceptors.response.use(
			response => {
				return response
			},
			err => {
				return new Promise((_, __) => {
					if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
						// if you ever get an unauthorized response, logout the user
						this.emit('onAutoLogout', 'Invalid access_token')
						this.setSession('')
					}
					throw err
				})
			}
		)
	}

	handleAuthentication = () => {
		const access_token = this.getAccessToken()

		if (!access_token) {
			this.emit('onNoAccessToken')

			return
		}

		if (this.isAuthTokenValid(access_token)) {
			this.setSession(access_token)
			this.emit('onAutoLogin', true)
		} else {
			this.setSession('')
			this.emit('onAutoLogout', 'access_token expired')
		}
	}

	createUser = (data: ICreateUserInput) => {
		return new Promise<IUserResponse>((resolve, reject) => {
			axios.post<IJwtResponse>(`${apiURL_JWT}/api/register`, data).then(response => {
				if (response.data.user) {
					this.setSession(response.data.user.token)
					resolve(response.data.user)
				} else {
					reject(response.data.error)
				}
			})
		})
	}

	signInWithEmailAndPassword = ({ email, password }: ILoginInput) => {
		return new Promise<IUserResponse>((resolve, reject) => {
			axios
				.post<IJwtResponse>(`${apiURL_JWT}/api/auth`, {
					email,
					password
				})
				.then(response => {
					if (response.data.user) {
						this.setSession(response.data.user.token)
						resolve(response.data.user)
					} else {
						reject(response.data.error)
					}
				})
		})
	}

	signInWithToken = () => {
		return new Promise<IUserResponse>((resolve, _) => {
			axios
				.post<IJwtResponse>(`${apiURL_JWT}/api/auth/token`, {
					token: this.getAccessToken()
				})
				.then(response => {
					if (response.data.user.token) {
						this.setSession(response.data.user.token)
						resolve(response.data.user)
					} else {
						this.logout()
						Promise.reject(new Error('Failed to login with token.'))
					}
				})
				.catch(__ => {
					this.logout()
					Promise.reject(new Error('Failed to login with token.'))
				})
		})
	}

	updateUserData = (user: IUpdateUserInput) => {
		return axios.post<IJwtResponse>(`${apiURL_JWT}/api/auth/user/update`, user)
	}

	setSession = (token: string) => {
		if (token) {
			localStorage.setItem('jwt_access_token', token)
			axios.defaults.headers.common.Authorization = `Bearer ${token}`
		} else {
			localStorage.removeItem('jwt_access_token')
			delete axios.defaults.headers.common.Authorization
		}
	}

	logout = () => {
		this.setSession('')
	}

	isAuthTokenValid = (token: string) => {
		if (!token) {
			return false
		}
		const decoded = jwtDecode<{ exp: number }>(token)
		const currentTime = Date.now() / 1000
		if (decoded.exp < currentTime) {
			console.warn('access token expired')
			return false
		}

		return true
	}

	getAccessToken = () => {
		return window.localStorage.getItem('jwt_access_token')
	}
}

const instance = new JwtService()

export default instance
