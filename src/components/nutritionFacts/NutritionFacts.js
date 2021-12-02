import React, { Component } from 'react';
import "./nutritionfacts.css"
import { Row, Col, Dropdown } from 'react-bootstrap'
import Nutri from '../../assets/Nutri.png'
import Caro from '../../assets/Caro.png'
import styles from './nutFooter.module.css'
import nut1 from "./nut1.png"
import nut2 from "./nut2.png"
import nut3 from "./nut3.png"
import nut4 from "./nut4.png"
import nut5 from './nut5.png'
import { Link } from 'react-router-dom';

class NutritionFacts extends Component {
    render() {
        return (
            <div>
                <div className="homeNutri">
                    <div className="nutriTitle">Nutrition Fact and News</div>
                    <Row>
                        <Col><img src={Nutri} alt="nutri"/></Col>
                        <Col>
                          <div className="lorem">                       
                            <div className="trending">Trending</div>
                            <div className="loremTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, sed massa justo</div>
                            <div className="loremIsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, sed massa justo netus mattis quisque non. Pellentesque urna gravida ultricies nunc, diam tincidunt a, nam. Egestas viverra odio eget praesent a, ultrices facilisi. Egestas urna molestie mauris ut egestas diam. Consectetur cras vestibulum sollicitudin ultrices ornare morbi velit in. Ut euismod rutrum justo, suspendisse orci. </div>
                            <div className="loremJam">2 hours ago <span className="lucy">By Lucy Hiddleston  |  January 7, 2021</span></div>
                          </div>
                        </Col>
                    </Row>
                    <div className='caro'><img src={Caro} alt='caro'/></div>
                    <div className="greenBox">All Nutrition Facts and News Update</div>
                    
                    
                    <div className={styles.cards1}>
                    <Row>
                        <Col sm={3} className={styles.lef1}>
                            <img src={nut1} alt="nut1"/>
                            <div className={styles.nutTexts1}>A Combination Of Nutritious Packed Meal For Your Lunch</div>
                            <div className={styles.nutDates1}>January 10, 2021 | 10:00 AM</div>
                        </Col>
                        <Col sm={3} className={styles.lef1}><Link to="/foodthatpage">
                            <img src={nut2} alt="nut2"/>
                            <div className={styles.nutTexts1}>Food That, If You Eat It, Still Makes You Slim</div>
                            <div className={styles.nutDates1}>January 10, 2021 | 10:00 AM</div></Link>
                        </Col>
                        <Col sm={3} className={styles.lef1}>
                        <img src={nut3} alt="nut3"/>
                            <div className={styles.nutTexts1}>Some of these fruits are highly recommended for Diet people</div>
                            <div className={styles.nutDates1}>January 10, 2021 | 10:00 AM</div>
                        </Col>
                        <Col sm={3} className={styles.right1}>
                        <img src={nut4} alt="nut4"/>
                            <div className={styles.nutTexts}>A Combination Of Nutritious Packed Meal For Your Lunch</div>
                            <div className={styles.nutDates}>January 10, 2021 | 10:00 AM</div>
                        </Col>
                    </Row>
                    </div>
                    <Row className="box1">
                        <Col sm={9} className="boxgreen">All Nutrition Facts and News</Col>
                        <Col sm={3} className="boxSortby">
                            <Dropdown>
                                <Dropdown.Toggle className="ddNut"variant="success" id="dropdown-basic">Sort By</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Time</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Alphabet</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <div>
                        <Row>
                            <Col className={styles.lef2}>
                                <img src={nut1} alt="nut1"/>
                                <div className={styles.nutTexts1}>A Combination Of Nutritious Packed Meal For Your Lunch</div>
                                <div className={styles.nutDates1}>January 10, 2021 | 10:00 AM</div>
                            </Col>
                            <Col className={styles.lef3}>
                                <img src={nut5} alt="nut1"/>
                                <div className={styles.nutTexts1}>A Combination Of Nutritious Packed Meal For Your Lunch</div>
                                <div className={styles.nutDates1}>January 10, 2021 | 10:00 AM</div>
                            </Col>
                            <Col className={styles.lef4}>
                                <img src={nut3} alt="nut3"/>
                                <div className={styles.nutTexts1}>Some of these fruits are highly recommended for Diet people</div>
                                <div className={styles.nutDates1}>January 10, 2021 | 10:00 AM</div>
                            </Col>
                        </Row>
                        <Row className={styles.cardss}>
                            <Col className={styles.lef2}>
                                <img src={nut1} alt="nut1"/>
                                <div className={styles.nutTexts1}>A Combination Of Nutritious Packed Meal For Your Lunch</div>
                                <div className={styles.nutDates1}>January 10, 2021 | 10:00 AM</div>
                            </Col>
                            <Col className={styles.lef3}>
                                <img src={nut5} alt="nut1"/>
                                <div className={styles.nutTexts1}>A Combination Of Nutritious Packed Meal For Your Lunch</div>
                                <div className={styles.nutDates1}>January 10, 2021 | 10:00 AM</div>
                            </Col>
                            <Col className={styles.lef4}>
                                <img src={nut3} alt="nut3"/>
                                <div className={styles.nutTexts1}>Some of these fruits are highly recommended for Diet people</div>
                                <div className={styles.nutDates1}>January 10, 2021 | 10:00 AM</div>
                            </Col>
                        </Row>
                    </div>
                    

                    
                </div>
            </div>
        );
    }
}

export default NutritionFacts;