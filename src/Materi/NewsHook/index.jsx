import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import axios from 'axios'
import CardLayout from './CardLayout'
import NavbarLayout from '../NavbarLayout'

const apiKey = '60ee971353de4312824f5672323db06f'
let dummyLorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'

const NewsHook = () => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState(null)
  console.log(news)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=id&q=${search}&apiKey=${apiKey}`
        )
        setNews(data.articles)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [search])

  return (
    <>
      <Row className='g-0'>
        <NavbarLayout />
      </Row>
      <Container style={{ height: '100%' }}>
        <Row className='py-4'>
          <Col>
            <InputGroup className='d-flex align-items-center'>
              <Form.Control
                placeholder='Pencarian'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant='outline-secondary' id='button-addon2'>
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <CardLayout loading={loading} data={news} dummyLorem={dummyLorem} />
    </>
  )
}

export default NewsHook
