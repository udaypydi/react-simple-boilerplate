import { Container, Row, Col } from 'react-bootstrap'

const Usage = () => (
  <div className='bg-light'>
    <Container className='py-5'>
      <Row>
        <Col sm>
          <h3>Lorem Ipsum</h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          <code></code>
        </Col>
        <Col sm>
          <img/>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Usage