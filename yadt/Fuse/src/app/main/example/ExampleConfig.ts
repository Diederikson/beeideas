import i18next from 'i18next'
import Example from './Example'
import en from './i18n/en'
import nl from './i18n/nl'

i18next.addResourceBundle('nl', 'examplePage', nl)
i18next.addResourceBundle('en', 'examplePage', en)

const ExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/example',
			component: Example
		}
	]
}

export default ExampleConfig

/**
 * Lazy load Example
 */
/*
import React from 'react';

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};

export default ExampleConfig;

*/
