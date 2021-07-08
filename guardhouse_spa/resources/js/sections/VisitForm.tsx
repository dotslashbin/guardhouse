import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator' 
import { Button, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	formField: {
		width: '100%', 
		marginBottom: '20px'
	}, 
	note: {
		fontStyle: 'italic'
	}
}))


export default function VisitForm(): JSX.Element {
	
	const classes = useStyles()

	const [fullName, setFullName] = useState('')


	return (
		<div>
			<Typography>
				Enter guest name...
			</Typography>
			<ValidatorForm  className={classes.form} onSubmit={() => {alert('heheh')}}>
				<TextValidator className={classes.formField} 
					name="fullName"
					label="Full Name"
					validators={['required']}
					value={fullName}
					errorMessages={['Full name is required']}
					onChange={(input: any) => {setFullName(input.target.value)}}/>
				<TextValidator className={classes.formField} 
					name="icLast3"
					label="IC (last 3)"
					validators={['required']}
					value={fullName}
					errorMessages={['IC is required']}
					onChange={(input: any) => {setFullName(input.target.value)}}/>
				<Button 
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}>Add</Button>
			</ValidatorForm>
		</div>
	)
}