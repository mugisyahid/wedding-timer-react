/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import './App.css';
import { Carousel, Grid, Image, Jumbotron, Row, Col, Panel } from 'react-bootstrap';
import { img } from './constant'

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
      const date = this.calculateCountdown();
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillMount() {
    this.stop();
  }
  calculateCountdown() {
    const timeLeft = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    console.log(moment().startOf('month'))

    // calculate time difference between now and expected date
    timeLeft.years = moment().diff('2018-07-08', 'years');
    timeLeft.months = moment().diff('2018-07-08', 'months');
    timeLeft.days = moment().diff(moment().startOf('month'), 'days') + 1;
    timeLeft.hours = moment().diff(moment().startOf('day'), 'hours') - 9; // 09:00 AM
    timeLeft.min = moment().diff(moment().startOf('hour'), 'minutes');
    timeLeft.sec =  moment().diff(moment().startOf('minute'), 'seconds');
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
            <Jumbotron style={{ background: 'border-box' }}>
              <h2>Ligar Mugi Syahid & Isma Rachmawati</h2>
              <br />
              <p>
                "Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya kamu mengingat kebesaran Allah." (QS. 51:49)
                  <br />
                  <br />
                <p style={{ textAlign: 'center' }}>❤ Alhamdulillah, we are now husband and wife. ❤</p>
              </p>

              <Carousel>
                {img.map((prop, key) => {
                  return <Carousel.Item>
                    <Image style={{ margin: '0 auto' }} src={prop.src} responsive />
                    <Carousel.Caption>
                      <h3 style={{color: `${prop.titleColor}`}}>{prop.title}</h3>
                      <p style={{color: `${prop.descColor}`}}>{prop.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>;
                })}
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
                  <strong>{countDown.years} {'Years'} </strong>
                  <strong>{countDown.months} {'Months'} </strong>
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
