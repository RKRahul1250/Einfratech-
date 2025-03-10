import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { 
  FaUsers, 
  FaShoppingCart, 
  FaChartPie, 
  FaCashRegister, 
  FaHeadset, 
  FaClipboardList, 
  FaCalendarAlt, 
  FaStore, 
  FaChartLine, 
  FaToolbox, 
  FaTruck, 
  FaHome 
} from "react-icons/fa";
import "./RetailPage.css";
import { Link } from "react-router-dom";

const RetailPage = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".animate-icon");
    icons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add("icon-animated");
      }, index * 200);
    });
  }, []);

  return (
    <div className="retail-page">
      {/* Hero Section */}
      <section className="Retail-section text-center text-white py-5 mt-5">
        <Container>
          <h2 className="mb-2 display-5 fw-bold">Connected Workplace for Retail</h2>
          <p className="mb-4 lead">Manage retail operations efficiently and deliver superior customer experiences.</p>
        </Container>
      </section>
      
      <section className="features-section">
  <Container>
    <Row className="g-4">
      <Col lg={6} md={12}>
        <Card className="feature-card">
          <Card.Body>
            <div className="d-flex align-items-center mb-4">
              <div className="feature-icon me-3 text-primary">
                <FaUsers size={24} />
              </div>
              <h4 className="feature-title m-0 fw-bold">Keep Your Customers Coming Back</h4>
            </div>
            <p className="text-secondary mb-4">A positive customer experience starts with smooth store operations.</p>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center">
                <FaUsers className="me-3 text-primary" />
                <span className="text-secondary">Positive interactions & visitor management</span>
              </li>
              <li className="d-flex align-items-center">
                <FaCalendarAlt className="me-3 text-primary" />
                <span className="text-secondary">User metrics & space planning</span>
              </li>
              <li className="d-flex align-items-center">
                <FaChartLine className="me-3 text-primary" />
                <span className="text-secondary">Capital projects & financial planning</span>
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={6} md={12}>
        <Card className="feature-card">
          <Card.Body>
            <div className="d-flex align-items-center mb-4">
              <div className="feature-icon me-3 text-primary">
                <FaUsers size={30} />
              </div>
              <h4 className="feature-title m-0 fw-bold">Achieve Store Excellence</h4>
            </div>
            <p className="text-secondary mb-4">Optimize operations and drive business growth with data-driven insights.</p>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center">
                <FaUsers className="me-3 text-primary" />
                <span className="text-secondary">Real-time store performance monitoring</span>
              </li>
              <li className="d-flex align-items-center">
                <FaCalendarAlt className="me-3 text-primary" />
                <span className="text-secondary">Streamlined maintenance management</span>
              </li>
              <li className="d-flex align-items-center">
                <FaChartLine className="me-3 text-primary" />
                <span className="text-secondary">Efficient vendor coordination</span>
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      
      
    </Row>
  </Container>
</section>
      
      {/* Explore Retail Solutions */}
      <section className="solutions-section py-5">
        <Container>
          <h2 className="text-center mb-3 fw-bold">Explore Retail Solutions</h2>
          <p className="text-center mb-5 text-secondary">Enhance your retail operations with these advanced solutions.</p>
          <Row className="g-4">
            <Col md={4}>
              <Card className="solution-card shadow-lg p-4 text-center border-0">
                <div className="card-icon mb-3 mx-auto text-primary">
                  <FaToolbox size={42} />
                </div>
                <Card.Title className="fw-bold">Facilities Maintenance</Card.Title>
                <Card.Text className="text-secondary">Maintain store equipment and ensure performance within your retail locations.</Card.Text>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="solution-card shadow-lg p-4 text-center border-0">
                <div className="card-icon mb-3 mx-auto text-warning">
                  <FaTruck size={42} />
                </div>
                <Card.Title className="fw-bold">Dispatch & Vendor Management</Card.Title>
                <Card.Text className="text-secondary">Ensure on-time vendor response and service delivery to your retail locations.</Card.Text>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="solution-card shadow-lg p-4 text-center border-0">
                <div className="card-icon mb-3 mx-auto text-danger">
                  <FaHome size={42} />
                </div>
                <Card.Title className="fw-bold">Real Estate & Space Planning</Card.Title>
                <Card.Text className="text-secondary">Optimize store arrangement and space utilization for maximum efficiency.</Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Cards */}
      <section className="solutions-section py-5">
  <Container>
    <Row className="g-4">
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mb-3 mx-auto text-primary">
            <FaUsers size={42} />
          </div>
          <Card.Title className="fw-bold">Customer Engagement</Card.Title>
          <Card.Text className="text-secondary">Enhance customer satisfaction with AI-driven insights and recommendations.</Card.Text>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mb-3 mx-auto text-success">
            <FaShoppingCart size={42} />
          </div>
          <Card.Title className="fw-bold">Smart Inventory</Card.Title>
          <Card.Text className="text-secondary">Automate stock management and prevent losses with real-time tracking.</Card.Text>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mb-3 mx-auto text-danger">
            <FaChartPie size={42} />
          </div>
          <Card.Title className="fw-bold">Data Analytics</Card.Title>
          <Card.Text className="text-secondary">Make informed business decisions with advanced analytics and reporting.</Card.Text>
        </Card>
      </Col>
    </Row>
  </Container>
</section>


      {/* Additional Solutions */}
      <section className="solutions-section py-5 bg-light">
  <Container>
    
    <Row className="g-4">
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mx-auto text-primary animate-icon">
            <FaCashRegister size={42} />
          </div>
          <Card.Title className="fw-bold">POS System</Card.Title>
          <Card.Text className="text-secondary">Modernize point-of-sale systems for seamless and efficient transactions.</Card.Text>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mx-auto text-warning animate-icon">
            <FaHeadset size={42} />
          </div>
          <Card.Title className="fw-bold">Customer Support</Card.Title>
          <Card.Text className="text-secondary">Enhance service quality with AI-powered customer support solutions.</Card.Text>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="solution-card shadow-lg p-4 text-center border-0">
          <div className="card-icon mx-auto text-danger animate-icon">
            <FaClipboardList size={42} />
          </div>
          <Card.Title className="fw-bold">Order Management</Card.Title>
          <Card.Text className="text-secondary">Streamline order tracking, processing, and fulfillment for efficiency.</Card.Text>
        </Card>
      </Col>
    </Row>
  </Container>
</section>


      {/* Call to Action */}

      <section className="cta-section text-center py-4 bg-dark text-white">
  <Container>
    
    <h2 className="fw-bold">Ready to Transform Your Retail Business?</h2>
    <p className="lead text-light">Join thousands of businesses using our AI-powered solutions.</p>
    <a href="/contactus" className="btn btn-primary btn-lg">Contact Us Today</a>
  </Container>
</section>

    </div>
  );
};

export default RetailPage;