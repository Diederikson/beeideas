import React from 'react'
import i18next from 'i18next'
import en from './i18n/en'
import nl from './i18n/nl'

i18next.addResourceBundle('nl', 'profile', nl)
i18next.addResourceBundle('en', 'profile', en)

const ProfileConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/profile',
			component: React.lazy(() => import('./Profile'))
		}
	]
}

export default ProfileConfig
