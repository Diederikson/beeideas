import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import * as authActions from 'app/auth/store/actions'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IRootState } from 'app/store/reducers'
import { IUserState } from 'app/auth/store/reducers/user.reducer'

function UserMenu() {
	const dispatch = useDispatch()
	const user = useSelector<IRootState, IUserState>(({ auth }) => auth.user)
	const { t } = useTranslation('layout')

	const [userMenu, setUserMenu] = useState(null)

	const userMenuClick = (event: any) => {
		setUserMenu(event.currentTarget)
	}

	const userMenuClose = () => {
		setUserMenu(null)
	}

	return (
		<>
			<Button className="h-64" onClick={userMenuClick}>
				{user.data.photoURL ? (
					<Avatar className="" alt="user photo" src={user.data.photoURL} />
				) : (
					<Avatar className="">{user.data.displayName[0]}</Avatar>
				)}

				<div className="hidden md:flex flex-col mx-12 items-start">
					<Typography component="span" className="normal-case font-600 flex">
						{user.data.displayName}
					</Typography>
					<Typography className="text-11 capitalize" color="textSecondary">
						{user.role.toString()}
					</Typography>
				</div>

				<Icon className="text-16 hidden sm:flex">
					{' '}
					{/* variant="action" */}
					keyboard_arrow_down
				</Icon>
			</Button>

			<Popover
				open={Boolean(userMenu)}
				anchorEl={userMenu}
				onClose={userMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'py-8'
				}}
			>
				{!user.role || user.role.length === 0 ? (
					<>
						<MenuItem component={Link} to="/login" role="button">
							<ListItemIcon className="min-w-40">
								<Icon>lock</Icon>
							</ListItemIcon>
							<ListItemText primary={t('login')} />
						</MenuItem>
						<MenuItem component={Link} to="/register" role="button">
							<ListItemIcon className="min-w-40">
								<Icon>person_add</Icon>
							</ListItemIcon>
							<ListItemText primary={t('register')} />
						</MenuItem>
					</>
				) : (
					<>
						<MenuItem component={Link} to="/profile" onClick={userMenuClose} role="button">
							<ListItemIcon className="min-w-40">
								<Icon>account_circle</Icon>
							</ListItemIcon>
							<ListItemText primary={t('my-profile')} />
						</MenuItem>
						<MenuItem component={Link} to="/apps/mail" onClick={userMenuClose} role="button">
							<ListItemIcon className="min-w-40">
								<Icon>mail</Icon>
							</ListItemIcon>
							<ListItemText primary={t('messages')} />
						</MenuItem>
						<MenuItem
							onClick={() => {
								dispatch(authActions.logoutUser())
								userMenuClose()
							}}
						>
							<ListItemIcon className="min-w-40">
								<Icon>exit_to_app</Icon>
							</ListItemIcon>
							<ListItemText primary={t('logout')} />
						</MenuItem>
					</>
				)}
			</Popover>
		</>
	)
}

export default UserMenu
