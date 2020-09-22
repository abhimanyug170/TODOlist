import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

class TodoCreate extends Component {
	state = { title: '', content: '', titleError: '' }

	onTitleChange = (event) => {
		this.setState({ title: event.target.value })
	}

	onDescriptionChange = (event) => {
		this.setState({ content: event.target.value })
	}

	renderTitleError() {
		return <small>{this.state.titleError}</small>
	}

	onFormSubmit = (event) => {
		event.preventDefault()

		if (!this.state.title) {
			this.setState({ titleError: 'Please give a valid title' })
		} else {
			this.setState({ titleError: '' })
		}

		this.props.addTodo(this.state)
	}

	render() {
		return (
			<div className="row justify-content-center">
				<div className="col-md-6">
					<Form as="form" onSubmit={this.onFormSubmit} className="mt-5">
						<Form.Group controlId="formGroupTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" onChange={this.onTitleChange} value={this.state.title} />
							{this.renderTitleError()}
						</Form.Group>
						<Form.Group controlId="formGroupDescription">
							<Form.Label>Description (optional)</Form.Label>
							<Form.Control as="textarea" onChange={this.onDescriptionChange} value={this.state.content} />
						</Form.Group>
						<Button variant="primary" type="submit" className="px-5 d-block mx-auto mt-4">
							Submit
						</Button>
					</Form>
				</div>
			</div>
		)
	}
}

export default connect(null, { addTodo })(TodoCreate)
