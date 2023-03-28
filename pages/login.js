import { Row, Col } from 'antd';
import { default as LoginForm} from '../components/Login/Login';
import Signup from '../components/Login/signup';

function Login() {
	
	return (
		<Row justify='space-around' gutter={[48, 8]} style={{ padding: '6rem'}}>
			<Col span={10}>
				<LoginForm />
			</Col>
			<Col span={10}>
				<Signup />
			</Col>
		</Row>
	);
}

export default Login;
