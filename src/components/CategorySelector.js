import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

function Header() {
	let { filter } = useParams()
	return (
		<div className="sticky-top bg-white">
			<Nav justify variant="tabs" activeKey={filter} defaultActiveKey="pending">
				<Nav.Item>
					<Nav.Link as={Link} to="/pending" eventKey="pending">
						Pending
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to="/completed" eventKey="completed">
						Completed
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to="/all" eventKey="all">
						All
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<div className="row justify-content-center">
				<Button as={Link} to="/add" variant="warning" className="my-3 px-4">
					Create Todo
				</Button>
			</div>
		</div>
	)
}

export default Header
