import React from 'react'
import { Redirect } from 'react-router-dom'
import FuseUtils from '@fuse/utils'
import ExampleConfig from 'app/main/example/ExampleConfig'
import LoginConfig from 'app/main/login/LoginConfig'
import RegisterConfig from 'app/main/register/RegisterConfig'
import ProfileConfig from 'app/main/profile/ProfileConfig'


const routeConfigs = [ExampleConfig, LoginConfig, RegisterConfig, ProfileConfig] 

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin', 'staff', 'user']),
	{
		path: '/',
		component: () => <Redirect to="/example" />
	},
	{
		component: () => <Redirect to="/pages/errors/error-404" />
	},
];

export default routes
