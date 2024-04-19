
// import React from 'react';
// import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

// const Footer = () => {
//   return (

// <footer className="bg-dark text-light py-5 footer">

// <div className="text-center text-light">
//       </div>
//       <Container>
//         <Row>
//           <Col md={3} className="mb-3">
//             <h5>About Us</h5>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nisi sit amet ipsum varius consectetur.</p>
//           </Col>
//           <Col md={3} className="mb-3">
//             <h5>Quick Links</h5>
//             <ListGroup>
//               <ListGroupItem className="text-item">Home</ListGroupItem>
//               <ListGroupItem className="text-item">About</ListGroupItem>
//               <ListGroupItem className="text-item">Services</ListGroupItem>
//               <ListGroupItem className="text-item">Contact</ListGroupItem>
//             </ListGroup>
//           </Col>
//           <Col md={3} className="mb-3">
//             <h5>Follow Us</h5>
//             <ListGroup>
//               <ListGroupItem className="text-item">Facebook</ListGroupItem>
//               <ListGroupItem className="text-item">Twitter</ListGroupItem>
//               <ListGroupItem className="text-item">Instagram</ListGroupItem>
//             </ListGroup>
//           </Col>
//           <Col md={3}>
//             <h5>Newsletter</h5>
//             <form>
//               <input type="email" placeholder="Enter your email" className="form-control mb-3" />
//               <button type="submit" className="btn btn-primary">Subscribe</button>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//       <div className="text-center text-light">
//         &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 footer">
      <div className="text-center text-light">
      </div>
      <Container>
        <Row>
          <Col md={3} className="mb-3">
            <h5>About Us</h5>
            <p>Join our Us for tailored support and endless opportunities. Unlock your potential today!</p>
          </Col>
          <Col md={3} className="mb-3">
            <h5>Quick Links</h5>
            <ListGroup>
              <ListGroupItem className="text-item">Home</ListGroupItem>
              <ListGroupItem className="text-item">About</ListGroupItem>
              <ListGroupItem className="text-item">Services</ListGroupItem>
              <ListGroupItem className="text-item">Contact</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3} className="mb-3">
            <h5>Follow Us</h5>
            <ListGroup>
              <ListGroupItem className="text-item">Facebook</ListGroupItem>
              <ListGroupItem className="text-item">Twitter</ListGroupItem>
              <ListGroupItem className="text-item">Instagram</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h5>Newsletter</h5>
            <form>
              <input type="email" placeholder="Enter your email" className="form-control mb-3" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </Col>
        </Row>
      </Container>
      <div className="text-center text-light">
        &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
