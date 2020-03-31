import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup'
import AppBar from '@material-ui/core/AppBar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from 'app/store/reducers'
import { IUserState } from 'app/auth/store/reducers/user.reducer'
import { useTranslation } from 'react-i18next'

function AboutTab() {
	const user = useSelector<IRootState, IUserState>(state => state.auth.user)
	const { t } = useTranslation('profile')

	if (!user) {
		return null
	}

	return (
		<div className="md:flex max-w-2xl">
			<div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
				<FuseAnimateGroup
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					<Card className="w-full mb-16">
						<AppBar position="static" elevation={0}>
							<Toolbar className="px-8">
								<Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
									{t('personal-details')}
								</Typography>
							</Toolbar>
						</AppBar>

						<CardContent>
							<div className="mb-24">
								<Typography className="font-bold mb-4 text-15">{t('display-name')}</Typography>
								<Typography>{user.data.displayName}</Typography>
							</div>

							<div className="mb-24">
								<Typography className="font-bold mb-4 text-15">{t('email')}</Typography>
								<Typography>{user.data.email}</Typography>
							</div>

							<div className="mb-24">
								<Typography className="font-bold mb-4 text-15">{t('role')}</Typography>
								<Typography>{user.role}</Typography>
							</div>
						</CardContent>
					</Card>
				</FuseAnimateGroup>
			</div>
		</div>
	)
}

export default AboutTab
