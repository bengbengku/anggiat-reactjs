import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import PulseLoader from 'react-spinners/PulseLoader'

export default class CardLayout extends React.Component {
  render() {
    return (
      <>
        <Container>
          {this.props.loading ? (
            <Row>
              <Col className='d-flex justify-content-md-center py-3'>
                <PulseLoader color='#e46258' size={20} />
              </Col>
            </Row>
          ) : (
            <Row>
              {this.props.data?.map((d, i) => (
                <Col key={i} className='d-flex justify-content-md-center py-3'>
                  <Card style={{ width: '18rem', maxHeight: '550px' }}>
                    <Card.Img
                      variant='top'
                      src={
                        d.urlToImage !== null
                          ? d.urlToImage
                          : 'https://res.cloudinary.com/dzwhzly1e/image/upload/v1664573876/random/Image_not_available_evkjjr.png'
                      }
                      style={{ maxHeight: '137px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>{d.title}</Card.Title>
                      <Card.Text>
                        {d.author !== null ? d.author : 'Jhon Doe'} -{' '}
                        {d.publishedAt.replace(/T/, ' ').substr(0, 19)}
                      </Card.Text>
                      <Card.Text>
                        {`${
                          d.description !== null
                            ? d.description.substring(0, 93)
                            : this.props.dummyLorem
                        }`}
                        ...
                      </Card.Text>
                      <Button variant='primary'>Details..</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </>
    )
  }
}
