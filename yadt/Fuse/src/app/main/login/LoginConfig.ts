import { authRoles } from 'app/auth'
import i18next from 'i18next'
import Login from './Login'
import en from './i18n/en'
import nl from './i18n/nl'

i18next.addResourceBundle('nl', 'loginPage', nl)
i18next.addResourceBundle('en', 'loginPage', en)

const LoginConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/login',
			component: Login
		}
	]
}

export default LoginConfig
