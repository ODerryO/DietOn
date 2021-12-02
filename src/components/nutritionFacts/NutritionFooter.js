import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap"
import nut1 from "./nut1.png"
import nut2 from "./nut2.png"
import nut3 from "./nut3.png"
import nut4 from "./nut4.png"
import styles from "./nutFooter.module.css"
import { Link } from "react-router-dom"


class NutritionFooter extends Component {
    render() {
        return (
            <div>
            <div>
                <div className={styles.cards}>
                    <Row className={styles.seeAll}>
                        <Col>Nutrition Facts and News Update</Col>
                        <Col className={styles.see}><Link to='/nutritionfactspage' className={styles.all}>See All</Link></Col>
                    </Row>
                    
                    <Row>
                        <Col sm={3} className={styles.lef}>
                            <img src={nut1} alt="nut1"/>
                            <div className={styles.nutTexts}>A Combination Of Nutritious Packed Meal For Your Lunch</div>
                            <div className={styles.nutDates}>January 10, 2021 | 10:00 AM</div>
                        </Col>
                        <Col sm={3} className={styles.lef}>
                            <img src={nut2} alt="nut2"/>
                            <div className={styles.nutTexts}>Food That, If You Eat It, Still Makes You Slim</div>
                            <div className={styles.nutDates}>January 10, 2021 | 10:00 AM</div>
                        </Col>
                        <Col sm={3} className={styles.lef}>
                        <img src={nut3} alt="nut3"/>
                            <div className={styles.nutTexts}>Some of these fruits are highly recommended for Diet people</div>
                            <div className={styles.nutDates}>January 10, 2021 | 10:00 AM</div>
                        </Col>
                        <Col sm={3} className={styles.right}>
                        <img src={nut4} alt="nut4"/>
                            <div className={styles.nutTexts}>A Combination Of Nutritious Packed Meal For Your Lunch</div>
                            <div className={styles.nutDates}>January 10, 2021 | 10:00 AM</div>
                        </Col>
                    </Row>
                </div>
            </div>
            </div>
        );
    }
}

export default NutritionFooter;