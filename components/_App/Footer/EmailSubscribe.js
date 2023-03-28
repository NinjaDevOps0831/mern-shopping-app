import { 
    MailOutlined, 
    InstagramFilled, 
    TwitterCircleFilled, 
    FacebookFilled, 
    YoutubeFilled 
} from '@ant-design/icons'

const EmailSubscribe = () => {
    return(
        <div className='email-subscribe'>
            <h5>KEEP IN TOUCH, SUBSCRIBE NOW</h5>
            <div className='email-input'>
                <input placeholder="Your Email" />
                <MailOutlined />
            </div>
            <div className='footer-icons'>
                <InstagramFilled />
                <TwitterCircleFilled />
                <FacebookFilled />
                <YoutubeFilled />
            </div>
        </div>
    )
}

export default EmailSubscribe;