import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: any) => ({
	table: {
		height: 500,
		width: '100%'
	}
}))

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'unit',
		headerName: 'Unit',
		width: 150,
		editable: true,
	},
	{
		field: 'visitor_name',
		headerName: 'Visitor Name',
		width: 300,
		editable: true,
	},
	{
		field: 'entry',
		headerName: 'Entered on',
		type: 'number',
		width: 110,
		editable: true,
	},
	{
		field: 'exit',
		headerName: 'Exited on',
		sortable: true,
		width: 110,
	},
]

const rows = [
	{ id: 1, unit: 'Snow', visitor_name: 'Jon', entry: 35, exit:'yes' },
	{ id: 2, unit: 'Lannister', visitor_name: 'Cersei', entry: 42, exit:'yes' },
	{ id: 3, unit: 'Lannister', visitor_name: 'Jaime', entry: 45, exit:'yes' },
	{ id: 4, unit: 'Stark', visitor_name: 'Arya', entry: 16, exit:'yes' },
	{ id: 5, unit: 'Targaryen', visitor_name: 'Daenerys', entry: null, exit:'yes' },
	{ id: 6, unit: 'Melisandre', visitor_name: null, entry: 150, exit:'yes' },
	{ id: 7, unit: 'Clifford', visitor_name: 'Ferrara', entry: 44, exit:'yes' },
	{ id: 8, unit: 'Frances', visitor_name: 'Rossini', entry: 36, exit:'yes' },
	{ id: 9, unit: 'Roxie', visitor_name: 'Harvey', entry: 65, exit:'yes' },
]



export default function Visits(): JSX.Element {
	const classes = useStyles()

	return (
		<div className={classes.table}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				disableSelectionOnClick
			/>
		</div>
	)
}
