import FuseAnimate from '@fuse/core/FuseAnimate'
import FusePageSimple from '@fuse/core/FusePageSimple'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import AboutTab from './tabs/AboutTab'
import SettingsTab from './tabs/SettingsTab'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { IRootState } from 'app/store/reducers'
import { IUserState } from 'app/auth/store/reducers/user.reducer'

const useStyles = makeStyles(theme => ({
	layoutHeader: {
		height: 320,
		minHeight: 320,
		[theme.breakpoints.down('md')]: {
			height: 240,
			minHeight: 240
		}
	}
}))

function ProfilePage() {
	const classes = useStyles()
	const [selectedTab, setSelectedTab] = useState(0)
	const user = useSelector<IRootState, IUserState>(state => state.auth.user)
	const { t } = useTranslation('profile')

	function handleTabChange(_: any, value: number) {
		setSelectedTab(value)
	}

	return (
		<FusePageSimple
			classes={{
				header: classes.layoutHeader,
				toolbar: 'px-16 sm:px-24'
			}}
			header={
				<div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
					<div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
						<FuseAnimate animation="transition.expandIn" delay={300}>
							<Avatar className="w-96 h-96" src={user.data.photoURL} />
						</FuseAnimate>
						<FuseAnimate animation="transition.slideLeftIn" delay={300}>
							<Typography className="md:mx-24" variant="h4" color="inherit">
								{user.data.displayName}
							</Typography>
						</FuseAnimate>
					</div>

					<div className="flex items-center justify-end">
						<Button className="normal-case" variant="contained" color="primary" aria-label={t('click')}>
							{t('click')}
						</Button>
					</div>
				</div>
			}
			contentToolbar={
				<Tabs
					value={selectedTab}
					onChange={handleTabChange}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="off"
					classes={{
						root: 'h-64 w-full border-b-1'
					}}
				>
					<Tab
						classes={{
							root: 'h-64'
						}}
						label={t('details')}
					/>
					<Tab
						classes={{
							root: 'h-64'
						}}
						label={t('settings')}
					/>
				</Tabs>
			}
			content={
				<div className="p-16 sm:p-24">
					{selectedTab === 0 && <AboutTab />}
					{selectedTab === 1 && <SettingsTab />}
				</div>
			}
		/>
	)
}

export default ProfilePage
