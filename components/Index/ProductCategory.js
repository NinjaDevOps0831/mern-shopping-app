import { Row, Col, Card } from 'antd';
import { CATEGORY_COVERS_URL } from '../../constants/images';

function ProductCategory() {

    const categories = ['sofas', 'chairs', 'bedroom', 'tables', 'storages']
    return(
        <Row gutter={8} justify="space-around" style={{ marginBottom: '2rem'}}>
            {categories.map( (category, index) => {
                return(
                    <Col key={index} span={4}>
                        <a href={`/category?category=${category}`}>
                            <Card 
                                key={category}
                                style={{ width: '200px'}}
                                cover={<img src={`${CATEGORY_COVERS_URL[category]}=format&fit=crop&w=200&h=150&q=50`} />}
                            >
                                {category}
                            </Card>
                        </a>
                    </Col>
                )
            })}
        </Row>
    )
}

export default ProductCategory;