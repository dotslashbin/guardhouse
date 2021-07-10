import React, { useEffect } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import { DataGrid } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: any) => ({
	table: {
		height: 500,
		width: '100%'
	}
}))

const columns = [
	{ field: 'id', headerName: 'ID', width: 100 },
	{
		field: 'block_unit',
		headerName: 'Block - Unit',
		width: 150,
		editable: true,
	},
	{
		field: 'occupant_name',
		headerName: 'Occupant',
		width: 300,
		editable: true,
	},
	{
		field: 'contact_number',
		headerName: 'Contact number',
		width: 200,
		editable: true,
	},
]



export default function UnitList(): JSX.Element {
	const classes = useStyles()
	const { units  } = usePage().props
	useEffect(() => {
		Inertia.get('http://localhost:3000/units', { page: 1, limit: 10 }, {
			replace: true,
			preserveState: true
		})

	}, [])


	const rows = (units)? units: []

	return(
		<div className={classes.table}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={10}
				disableSelectionOnClick
			/>
		</div>
		
	)
}