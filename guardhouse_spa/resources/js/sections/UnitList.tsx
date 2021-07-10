import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'

import { Button } from '@material-ui/core'

export default function UnitList(): JSX.Element {

	const x = usePage().props
	console.log('from usepage', x)

	const doTest = () => {
		Inertia.get('http://localhost:3000/units', { page: 1, limit: 10 }, {
			replace: true,
			preserveState: true
		})
	}

	return(
		<div>
			{(x.foo? x.foo:'NA')}
			<Button onClick={() => {doTest()}}>test</Button>
		</div>
	)
}