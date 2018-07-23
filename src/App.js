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
                  <Image style={{ margin: '0 auto'}} src="http://res.cloudinary.com/dhg9t661w/image/upload/v1532389368/wedding/1.png" responsive/>
                  <Carousel.Caption>
                    {/* <h3>Tunangan tgl sekian</h3> */}
                    {/* <p>fasdfasdfasdfasdfasdf</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="http://res.cloudinary.com/dhg9t661w/image/upload/v1532389347/wedding/2.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="http://res.cloudinary.com/dhg9t661w/image/upload/v1532389339/wedding/3.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="http://res.cloudinary.com/dhg9t661w/image/upload/v1532389335/wedding/4.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="https://res.cloudinary.com/dhg9t661w/image/upload/v1532389333/wedding/5.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="https://res.cloudinary.com/dhg9t661w/image/upload/v1532389346/wedding/6.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="https://res.cloudinary.com/dhg9t661w/image/upload/v1532389342/wedding/7.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="https://res.cloudinary.com/dhg9t661w/image/upload/v1532389342/wedding/10.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="https://res.cloudinary.com/dhg9t661w/image/upload/v1532389332/wedding/9.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="https://res.cloudinary.com/dhg9t661w/image/upload/v1532389342/wedding/10.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="http://res.cloudinary.com/dhg9t661w/image/upload/v1532389343/wedding/11.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="https://res.cloudinary.com/dhg9t661w/image/upload/v1532389346/wedding/12.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="http://res.cloudinary.com/dhg9t661w/image/upload/v1532389352/wedding/13.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="https://res.cloudinary.com/dhg9t661w/image/upload/v1532389348/wedding/14.jpg" responsive />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image style={{ margin: '0 auto'}} src="https://res.cloudinary.com/dhg9t661w/image/upload/v1532389348/wedding/15.jpg" responsive />
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
