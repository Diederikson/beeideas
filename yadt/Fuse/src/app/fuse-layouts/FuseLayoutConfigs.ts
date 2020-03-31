import layout1 from './layout1/Layout1Config'
import layout2 from './layout2/Layout2Config'
import layout3 from './layout3/Layout3Config'
import i18next from 'i18next'
import en from './i18n/en'
import nl from './i18n/nl'

i18next.addResourceBundle('nl', 'layout', nl)
i18next.addResourceBundle('en', 'layout', en)

const FuseLayoutConfigs = {
	layout1,
	layout2,
	layout3
}

export default FuseLayoutConfigs
