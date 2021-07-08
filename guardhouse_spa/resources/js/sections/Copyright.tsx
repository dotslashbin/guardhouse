import React from 'react' 
import { Link, Typography } from '@material-ui/core'

export default function Copyright():JSX.Element {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://linked.com/in/joshuafuentes">
        Joshua Fuentes
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}