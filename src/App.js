/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import { Carousel, Grid, Image, Jumbotron, Row, Col, Panel } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown("2018-07-08T09:00:00.000");
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillMount() {
    this.stop();
  }
  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date()) - Date.parse(new Date(endDate))) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {

    const countDown = this.state;

    console.log(countDown)

    return (
      <div>
        <Grid md={10}>
          <Row>
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <Carousel>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/1.PNG" responsive/>
                  <Carousel.Caption>
                    {/* <h3>Tunangan tgl sekian</h3> */}
                    {/* <p>fasdfasdfasdfasdfasdf</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/2.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/3.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/4.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/5.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/6.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/7.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/8.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/9.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/10.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/11.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/12.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/13.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/14.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="/img/15.JPG" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Jumbotron>
          </Row>
          <Row className="vertical-center-row">
            <Col md={2}>
            </Col>
            <Col md={8}>
              <Panel>
                <Panel.Heading>We've been married for: </Panel.Heading>
                <Panel.Body className={'text-center'}>
                  <strong>{countDown.days} {'Days'} </strong>
                  <strong>{countDown.hours} {'Hours'} </strong>
                  <strong>{countDown.min}  {'Minutes'} </strong>
                  <strong>{countDown.sec}  {'Seconds'} </strong>
                </Panel.Body>
              </Panel>
            </Col>
            <Col md={2}>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
