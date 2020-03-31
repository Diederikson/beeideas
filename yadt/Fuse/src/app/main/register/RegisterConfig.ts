import { authRoles } from 'app/auth'
import Register from './Register'
import i18next from 'i18next'
import en from './i18n/en'
import nl from './i18n/nl'

i18next.addResourceBundle('nl', 'registerPage', nl)
i18next.addResourceBundle('en', 'registerPage', en)

const RegisterConfig = {
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
			path: '/register',
			component: Register
		}
	]
}

export default RegisterConfig
