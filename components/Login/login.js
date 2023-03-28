import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import catchErrors from '../../utils/catchErrors'
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { handleLogin } from '../../utils/auth';

import './login.scss';

const INITIAL_USER = {
	email: '',
	password: ''
}

const Login = () => {

    const [user, setUser] = useState(INITIAL_USER)
	const [disabled, setDisabled] = useState(true)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const isUser = Object.values(user).every(el => Boolean(el))
		isUser ? setDisabled(false) : setDisabled(true)
	}, [user])

	function handleChange(changedValues, allValues) {
		setUser(allValues)
	}

	async function handleSubmit() {
		event.preventDefault();

		try {
			setLoading(true);
			setError('')
      //make request to signup user
      const url = `${baseUrl}/api/login`
      const payload = { ...user }
      const response = await axios.post(url, payload)
      handleLogin(response.data);
		} catch(error) {
			catchErrors(error, setError);
		} finally {
			setLoading(false);
		}
    }
    
    return (
        <div className='login-wrapper'>
            <div className='login-title'>
				<h4>SIGN IN</h4>	
			</div>
            {error &&
			<Alert 
				type='warning'
				message={error}
			/>}
			<Form 
				loading={loading} 
				layout='vertical'
				onValuesChange={handleChange}
				onFinish={handleSubmit}
			>
					<Form.Item
						label="Email"
						name="email"
						type="email"
						value={user.email}
					>
						<Input prefix={<UserOutlined className="site-form-item-icon" />}/>
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						type="password"
						value={user.password}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
						/>
					</Form.Item>

					<Form.Item>
						<Button disabled={disabled || loading} type="primary" htmlType="submit">
						LOG IN
						</Button>
					</Form.Item>
			</Form>
        </div>
    )
}

export default Login;