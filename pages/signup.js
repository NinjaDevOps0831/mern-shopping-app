import React, { useState, useEffect } from 'react';
import { Button, Form, Icon, Message, Segment } from "semantic-ui-react";
import Link from "next/link";
import axios from 'axios';
import catchErrors from '../utils/catchErrors';
import baseUrl from '../utils/baseUrl';
import { handleLogin } from '../utils/auth';

const INITIAL_USER = {
	name: '',
	email: '',
	password: ''
}

function Signup() {
	
	const [user, setUser] = useState(INITIAL_USER)
	const [disabled, setDisabled] = useState(true)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const isUser = Object.values(user).every(el => Boolean(el))
		isUser ? setDisabled(false) : setDisabled(true)
	}, [user])

	function handleChange(event) {
		const {name, value} = event.target
		setUser(prevState => ({ ...prevState, [name]: value} ))
	}

	async function handleSubmit() {
		event.preventDefault();

		try {
			setLoading(true);
			setError('')
			const url = `${baseUrl}/api/signup`
			const payload = { ...user }
			const response = await axios.post(url, payload)
			handleLogin(response.data)
		} catch(error) {
			catchErrors(error, setError);
		} finally {
			setLoading(false);
		}
	}
	

	return (
		<>
			<Message
				attached
				icon="setting"
				header="Get Started!"
				content="Create a new account"
				color="teal"
			/>
			<Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
				<Message
					error
					header="Opps!"
					content={error}
				/>
				<Segment>
					<Form.Input
						fluid
						icon="user"
						iconPosition="left"
						label="Name"
						placeholder="Name"
						name="name"
						value={user.name}
						onChange={handleChange}
					/>
					<Form.Input
						fluid
						icon="envelope"
						iconPosition="left"
						label="Email"
						placeholder="Email"
						name="email"
						type="email"
						value={user.email}
						onChange={handleChange}
					/>
					<Form.Input
						fluid
						icon="lock"
						iconPosition="left"
						label="Password"
						placeholder="Password"
						name="password"
						type="password"
						value={user.password}
						onChange={handleChange}
					/>
					<Button 
						disabled={disabled || loading}
						icon="signup" 
						type="submit" 
						color="orange" 
						content="Signup" 
					/>
				</Segment>
			</Form>
			<Message attached="bottom" warning>
				<Icon name="help" />
				Existing user?{""}
				<Link href="/login">
					<a>log in here</a>
				</Link>
				{""}instead.
			</Message>
		</>
	);
}

export default Signup;
