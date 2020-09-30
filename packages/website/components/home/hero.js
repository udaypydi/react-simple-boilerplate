import Router from 'next/router'
import { Jumbotron, Container, Button } from 'react-bootstrap'

const Hero = () => (
  <Jumbotron fluid>
    <Container>
      <h1>React Simple Boilerplate</h1>
      <p>
        Start your next react project in seconds.
      </p>
      <Button variant='outline-primary' onClick={() => Router.push('/docs/getting-started')}>Get started</Button>
    </Container>
  </Jumbotron>
)

export default Hero