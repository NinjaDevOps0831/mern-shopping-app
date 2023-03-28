import { Card, Col, Row } from 'antd';

function ProductList({ products }) {
  return (
    <Row gutter={[16, 32]}>
    {
      products.map(product => {
        return(
          <Col span={8} key={product._id}>
            <a href={`/product?_id=${product._id}`}>
              <Card 
                key={product._id} 
                hoverable
                cover={<img alt="example"src={product.mediaUrl} />}
                bodyStyle={{marginBottom: "-5px"}}
              >
                <h3>{product.name}</h3>
                <div>${product.price}</div>
              </Card>
              </a>
          </Col>
        )
      })
    }
    </Row>
  );
}

export default ProductList;
