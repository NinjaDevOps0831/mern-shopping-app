import { Row } from 'antd';
import useWindowSize from '../../hooks/useWindowSize';

function HeroImage({mediaUrl}) {

    const size = useWindowSize();

    let imageSize = size.width >= 1200 ? '=format&fit=crop&w=1200&h=850&q=80' : '=format&fit=crop&w=800&h=450&q=80'
    let imageStyle = 
                size.width >= 1200 
                ? {objectFit: 'cover', height: '75vh', width: '100%'} 
                : {objectFit: 'cover', height: '50vh', width: '100%'}

    return(
        <Row style={{ marginBottom: '2rem'}}>
            <img 
                alt='hero iamge'
                src={`${mediaUrl}${imageSize}`}
                style={imageStyle}
            />
        </Row>
    )
}

export default HeroImage;