// @ts-nocheck
import FuseNavigation from '@fuse/core/FuseNavigation'
import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from 'app/store/reducers'
import { INavigationMainItem } from 'app/store/reducers/fuse/navigation.reducer'

interface IProps {
	className: string
	navigation: INavigationMainItem[]
	layout: any
	dense: any
	active: any
}

function Navigation(props: IProps) {
	const navigation = useSelector<IRootState>(({ fuse }) => fuse.navigation)

	return (
		<FuseNavigation
			className={clsx('navigation', props.className)}
			navigation={navigation}
			layout={props.layout}
			dense={props.dense}
			active={props.active}
		/>
	)
}

Navigation.defaultProps = {
	layout: 'vertical'
}

export default Navigation
