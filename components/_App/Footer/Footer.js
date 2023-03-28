import EmailSubscribe from './EmailSubscribe'

import './Footer.scss'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-content'>
                <div className='item-email'>
                    <EmailSubscribe />
                </div>
                <div className='item-contact'>
                    <h5>Contact Us</h5>
                    <ul>
                        <li>Customer Service</li>
                        <li>Email Us</li>
                        <li>Stores</li>
                    </ul>
                </div>
                <div className='item-order'>
                    <h5>Order Tracking</h5>
                    <ul>
                        <li>Track Your Order</li>
                        <li>Schedule Delivery</li>
                    </ul>
                </div>
                <div className='item-resource'>
                    <h5>Resources</h5>
                    <ul>
                        <li>My Account</li>
                        <li>Catalogs</li>
                        <li>Business Sales</li>
                    </ul>
                </div>
            </div>
            Copyright &copy; {new Date().getFullYear()} Modern Furniture
        </div>
    )
}

export default Footer;