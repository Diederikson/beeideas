import i18next from 'i18next'
import nl from './navigation-i18n/nl'
import en from './navigation-i18n/en'

i18next.addResourceBundle('en', 'navigation', en)
i18next.addResourceBundle('nl', 'navigation', nl)

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'example-component',
				title: 'Example',
				translate: 'EXAMPLE',
				type: 'item',
				icon: 'whatshot',
				url: '/example'
			}
		]
	}
]

export default navigationConfig
