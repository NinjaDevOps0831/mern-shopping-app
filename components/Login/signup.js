import Link from "next/link";
import { Button } from 'antd';

import './login.scss';

const Signup = () => {
    return (
        <div className='login-wrapper'>
            <h4 className='login-title'>CREATE AN ACCOUNT</h4>
            <p>Are you a new customer? Create an account today and enjoy these benefits:</p>
            <ul>
                <li>Purchase products</li>
                <li>Speedy Checkout</li>
                <li>Easier Order Tracking</li>
            </ul>
            <Link href="/signup">
                <Button type='primary'> CREATE ACCOUNT </Button>
            </Link>
        </div>
    )
}

export default Signup;