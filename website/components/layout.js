import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

function Layout({ children }) {
  return (
    <div className='w-100 h-100 d-flex flex-column'>
      <Navbar bg="light" expand="lg">
        <Link href="/" passHref>
          <Navbar.Brand>React-Simple-Boilerplate</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/docs" passHref>
              <Nav.Link>Docs</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='flex-grow-1 position-relative'>
        <div className='w-100 h-100 position-absolute d-flex flex-column overflow-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout