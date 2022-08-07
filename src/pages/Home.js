import '../css/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <>
        <Container>
            <Row>
                <Col style={{disply:'flex', justifyContent:'right'}}>
                    This is Home
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Home;
