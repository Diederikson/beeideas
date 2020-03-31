import _ from '@lodash'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import * as Actions from 'app/store/actions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from 'app/store/reducers'

interface IProps {
	className: string
	children: Element[]
}

function NavbarFoldedToggleButton(props: IProps) {
	const dispatch = useDispatch()
	const settings: any = useSelector<IRootState>(({ fuse }) => fuse.settings.current)

	return (
		<IconButton
			className={props.className}
			onClick={() => {
				dispatch(
					Actions.setDefaultSettings(
						_.set({}, 'layout.config.navbar.folded', !settings.layout.config.navbar.folded)
					)
				)
			}}
			color="inherit"
		>
			{props.children}
		</IconButton>
	)
}

NavbarFoldedToggleButton.defaultProps = {
	children: <Icon>menu</Icon>
}

export default NavbarFoldedToggleButton
