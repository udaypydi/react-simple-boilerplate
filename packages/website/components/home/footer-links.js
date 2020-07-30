import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

const FooterLinks = () => (
  <Row>
    <Col sm className='d-flex justify-content-center'>
      <div className='d-flex flex-column text-left'>
        <strong>Link Category</strong>
        <ul className='links'>
          <li><Link href='/'><a>Link 1</a></Link></li>
          <li><Link href='/'><a>Link 2</a></Link></li>
        </ul>
      </div>
    </Col>
    <Col sm className='d-flex justify-content-center'>
      <div className='d-flex flex-column'>
        <strong>Link Category</strong>
        <ul className='links'>
          <li><Link href='/'><a>Link 3</a></Link></li>
          <li><Link href='/'><a>Link 4</a></Link></li>
          <li><Link href='/'><a>Link 5</a></Link></li>
          <li><Link href='/'><a>Link 6</a></Link></li>
        </ul>
      </div>
    </Col>
    <Col sm className='d-flex justify-content-center'>
      <div className='d-flex flex-column'>
        <strong>Link Category</strong>
        <ul className='links'>
          <li><Link href='/'><a>Link 7</a></Link></li>
        </ul>
      </div>
    </Col>
  </Row>
)

export default FooterLinks