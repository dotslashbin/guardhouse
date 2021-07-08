import React from 'react'
import { AppBar, IconButton, makeStyles, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
}))

export default function Navbar(props:any): JSX.Element {

	const classes = useStyles()
	const { drawerOpen, open } = props

	return (<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
		<Toolbar className={classes.toolbar}>
			<IconButton
				edge="start"
				color="inherit"
				aria-label="open drawer"
				onClick={drawerOpen}
				className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
			>
				<MenuIcon />
			</IconButton>
			<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
			Guardhouse
			</Typography>
		</Toolbar>
	</AppBar>)
}