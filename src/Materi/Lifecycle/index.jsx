import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import axios from 'axios'
import CardLayout from './pembahasan/CardLayout'

const apiKey = 'c25267a46a0843dcb8366de2101507d5'
const nullImg =
  'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png'
let dummyLorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'

export default class Lifecycle extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      news: [],
      loading: true,
    }
  }

  getData = async (search) => {
    let trendingHeadlinesEndpoint = `https://newsapi.org/v2/top-headlines?country=id&q=${search}&apiKey=${apiKey}`
    try {
      const { data } = await axios.get(trendingHeadlinesEndpoint)
      this.setState({ news: data.articles })
      this.setState({ loading: false })
      return data.articles
    } catch (error) {
      console.log(error)
    }
  }
  async componentDidMount() {
    await this.getData('')
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value })
    this.setState({ loading: true })
    this.getData(e.target.value)
  }

  render() {
    return (
      <>
        <Row className='g-0'>
          <Col>
            <Navbar bg='dark' variant='dark'>
              <Container>
                <Navbar.Brand href='#home'>React Class News</Navbar.Brand>
                <Nav className='me-auto'>
                  <Nav.Link href='#home'>Home</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
        </Row>
        <Container style={{ height: '100%' }}>
          <Row className='py-4'>
            <Col>
              <InputGroup className='d-flex align-items-center'>
                <Form.Control
                  placeholder='Pencarian'
                  aria-label="Recipient's username"
                  aria-describedby='basic-addon2'
                  onKeyUp={this.handleSearch}
                />
                <Button variant='outline-secondary' id='button-addon2'>
                  Search
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
        <CardLayout
          data={this.state.news}
          nullImg={nullImg}
          dummyLorem={dummyLorem}
          loading={this.state.loading}
        />
      </>
    )
  }
}
