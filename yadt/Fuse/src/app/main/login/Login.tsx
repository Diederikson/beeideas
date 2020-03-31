import React from 'react'
import FuseAnimate from '@fuse/core/FuseAnimate'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import { darken } from '@material-ui/core/styles/colorManipulator'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import JWTLoginTab from './tabs/JWTLoginTab'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}))

function Login() {
	const classes = useStyles()
	const { t } = useTranslation('loginPage')

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0')}>
			<div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">
				<FuseAnimate animation="transition.expandIn">
					<img className="w-128 mb-32" src="assets/images/logos/fuse.svg" alt="logo" />
				</FuseAnimate>

				<FuseAnimate animation="transition.slideUpIn" delay={300}>
					<Typography variant="h3" color="inherit" className="font-light">
						{t('login.welcome')}
					</Typography>
				</FuseAnimate>

				<FuseAnimate delay={400}>
					<Typography variant="subtitle1" color="inherit" className="max-w-512 mt-16">
						{t('login.description1')}
						<br />
						{t('login.description2')}
					</Typography>
				</FuseAnimate>
			</div>

			<FuseAnimate animation={{ translateX: [0, '100%'] }}>
				<Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>
					<CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
						<Typography variant="h6" className="text-center md:w-full mb-48">
							{t('login.header')}
						</Typography>

						<JWTLoginTab />

						<div className="flex flex-col items-center justify-center pt-32">
							<span className="font-medium">{t('login.register-header')}</span>
							<Link className="font-medium" to="/register">
								{t('login.register-link')}
							</Link>
						</div>
					</CardContent>
				</Card>
			</FuseAnimate>
		</div>
	)
}

Login.displayName = 'Login'
export default Login
