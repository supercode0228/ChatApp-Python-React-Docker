import React from 'react';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
	Button,
	Form,
	FormGroup,
	Label
} from 'reactstrap';

class RoomJoinDlg extends React.Component {
	constructor() {
		super();
		this.state={
			email: '',
			user_name: '',
			errors: {}
		}
	}

	onTextChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	onSubmit = (e, params) => {
		e.preventDefault();
		const { email, user_name } = this.state;
		if (email === '') this.setState({ errors: { email: 'This field is required'}});
		else if (user_name === '') this.setState({ errors: { user_name: 'This field is required'}});
		else {
			this.setState({
				email: '',
				user_name: '',
				errors: {}
			});
			this.props.onSubmit(params);
		}
	}

	onCanel = () => {
		this.setState({
			email: '',
			user_name: '',
			errors: {}
		});
		this.props.onToggle();
	}

	render () {
		const {
			modalRJDlg,
			room_name,
			room_id,
			onToggle
		} = this.props;

		const {
			email,
			user_name,
			errors
		} = this.state;

		const params = {
			room_id,
			email,
			user_name
		};

		return (
			<Modal isOpen={modalRJDlg} toggle={onToggle}>
				<ModalHeader toggle={onToggle}>
					Join to {room_name}
				</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="name">Email</Label>
							<Input
								id="email"
								type="email"
								name="email"
								required
								placeholder="Please type your email.."
								value={email}
								onChange={this.onTextChange}
							/>
							{errors.email && <span className="text-danger">{errors.email}</span>}
						</FormGroup>
						<FormGroup>
							<Label for="name">Username</Label>
							<Input
								id="name"
								name="user_name"
								placeholder="Please type your username..."
								value={user_name}
								onChange={this.onTextChange}
							/>
							{errors.user_name && <span className="text-danger">{errors.user_name}</span>}
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={(e) => this.onSubmit(e, params)}>JOIN</Button>
					<Button color="secondary" onClick={this.onCanel}>CANCEL</Button>
				</ModalFooter>
			</Modal>
		)
	}
};

export default RoomJoinDlg;
