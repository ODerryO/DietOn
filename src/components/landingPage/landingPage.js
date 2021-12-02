import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Row, Col, Image, } from "react-bootstrap"
import styles from "./landingPage.module.css"
import bg from "./bg.png"
// import { filter } from 'dom-helpers';
import diet from "./diet.png"
import prog1 from "./prog1.png"
import prog2 from "./prog2.png"
import prog3 from "./prog3.png"
import nut1 from "./nut1.png"
import nut2 from "./nut2.png"
import nut3 from "./nut3.png"
import nut4 from "./nut4.png"
import bgexe from "./bgexe.png"
import timeLogo from "./timeLogo.png"
import timeText from "./timeText.png"
import ios from "./ios.png"
import andro from "./andro.png"
import footer from "./footer.png"
import { Link } from "react-router-dom"




class LandingPage extends Component {
    render() {
        return (
        <div className={styles.boxAll}>  
            <div className={styles.Header} style={{ backgroundImage: `url(${bg})` ,backgroundRepeat: 'no-repeat',width:'100%',height:'700px' }}>
                <Navbar className="navbar navbar-expand-lg navbar-dark p-md-3">
                    <Nav className="me-auto">
                        <Nav.Link className={styles.li} href="#tracker">Tracker Program</Nav.Link>
                        <Nav.Link className={styles.li} href="#nutrition">Nutrition Facts</Nav.Link>
                        <Nav.Link className={styles.li} href="#exercise">Exercise Reminder</Nav.Link>
                        <Link to="/signinpage"><Button className={styles.Signin}>Sign In</Button></Link>
                        <Link to="/signuppage"><Button className={styles.Regis}>Register</Button></Link>
                    </Nav>                   
                </Navbar>
                 <div className={styles.diet}>
                    <img src={diet} alt="diet"/>
                </div>
                <div className="text-center">
                    <div className={styles.textTitle}>
                        <div>Your Diet Assistant</div>
                    </div>
                    <div className={styles.textQuestion}>
                        <div>What Is Diet On ?</div>
                    </div>                
                    <div className={styles.textDes}>
                        <div className="text-center">Diet On is a tracking application that helps people track their weight and measurement any time they want. So they can set the target on their ideal weight and measurement</div>
                    </div> 
                </div>                
            </div>
            <div className={styles.wrapper}>
                <div className={styles.title}>Tracker Program</div>                
                <Row>
                    <Col>
                        <Row>
                            <Col sm={2} className={styles.no1}>1</Col>
                            <Col sm={10}>
                                <div className={styles.textTop}>Keep The Balance By Finding The Right Size For Your Daily Calories</div>
                                <div className={styles.textBot}>Stay relaxed and don't need to diet too strictly, because Diet On has measured your calorie needs per day based on your current weight, your height and the weight you want to achieve, you are still free to eat your favorite foods</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={styles.prog1}><img src={prog1} alt="prog1"/></Col>
                </Row>
                <Row className={styles.num2}>
                    <Col className={styles.prog2}><img src={prog2} alt="prog2"/></Col>
                    <Col>
                        <Row>
                            <Col sm={2} className={styles.no1}>2</Col>
                            <Col sm={10}>
                                <div className={styles.textTop}>Don't worry about your diet plan will be ruined</div>
                                <div className={styles.textBot}>Are you too busy to remember your diet schedule? don't be too manual! leave it to Diet On, you just need to do your activities as usual, and let Diet On help you to remind your diet schedule, so that your diet schedule is not messed up.</div>
                            </Col>
                        </Row>
                    </Col>                   
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col sm={2} className={styles.no1}>3</Col>
                            <Col sm={10}>
                                <div className={styles.textTop}>Stay Motivated, By Keeping A Journal Of Your Diet Achievements</div>
                                <div className={styles.textBot}>We know! sometimes diets are boring and confusing, but wait! don't forget to check your progress for a week or even a month, you will feel surprised and motivated again to continue your diet</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={styles.prog1}><img src={prog3} alt="prog1"/></Col>
                </Row>                                 
            </div>
            <div className={styles.facts}>
                <div className={styles.nutFact}>
                    <div className={styles.nutTop}>Nutrition Facts</div>
                    <div className={styles.nutMid}>Don’t Just Eat It!</div>
                    <div className={styles.nutBot}>Don't just eat nutritious food, you also have to know the benefits and content of every ingredient you put in your food. so you know very well, what foods will really help your diet to be more effective</div>
                </div>
                <div className={styles.card}>
                    <Row>
                        <Col sm={3}>
                            <img src={nut1} alt="nut1"/>
                            <div className={styles.nutText}>A Combination Of Nutritious Packed Meal For Your Lunch</div>
                            <div className={styles.nutDate}>January 10, 2021 | 10:00 AM</div>
                        </Col>
                        <Col sm={3}>
                            <img src={nut2} alt="nut2"/>
                            <div className={styles.nutText}>Food That, If You Eat It, Still Makes You Slim</div>
                            <div className={styles.nutDate}>January 10, 2021 | 10:00 AM</div>
                        </Col>
                        <Col sm={3}>
                        <img src={nut3} alt="nut3"/>
                            <div className={styles.nutText}>Some of these fruits are highly recommended for Diet people</div>
                            <div className={styles.nutDate}>January 10, 2021 | 10:00 AM</div>
                        </Col>
                        <Col sm={3}>
                        <img src={nut4} alt="nut4"/>
                            <div className={styles.nutText}>A Combination Of Nutritious Packed Meal For Your Lunch</div>
                            <div className={styles.nutDate}>January 10, 2021 | 10:00 AM</div>
                        </Col>
                    </Row>
                </div>                
            </div>
            <div className={styles.exercise}>
                <Image className={styles.bgexe} src={bgexe}></Image>
                <div className={styles.exeTop}>Exercise Reminder</div>
                <div className={styles.exeMid}>Of Course! Your Diet Is Not Perfect Without Exercise</div>
                <div className={styles.exeBot}>Of course Diet On will remind you not to forget to keep your promise to exercise, with a weekly schedule that you have set each week, and let Diet On remind you with the Workout Reminder feature.</div>
                <Image className={styles.timeLogo} src={timeLogo}></Image>
                <Image className={styles.timeText} src={timeText}></Image>
            </div>
            <div className={styles.download}>
                <div className={styles.apps}>
                    <a className={styles.ios} target="_blank" rel="noreferrer" href="https://www.apple.com/app-store/"><img src={ios} alt="ios"/></a>
                    <a className={styles.andro}  target="_blank" rel="noreferrer" href="https://play.google.com/store"><img src={andro} alt="andro"/></a>
                </div>
            </div> 
            <div className={styles.footer}>
                <Image src={footer}></Image>
            </div>           
        </div>  
            // <div className={styles.Navbar}>
            //     <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
            //         <Nav className="me-auto">
            //             <Nav.Link className={styles.li} href="#tracker">Tracker Program</Nav.Link>
            //             <Nav.Link className={styles.li} href="#nutrition">Nutrition Facts</Nav.Link>
            //             <Nav.Link className={styles.li} href="#exercise">Exercise Reminder</Nav.Link>
            //             <Button className={styles.Signin}>Sing In</Button>
            //             <Button className={styles.Signup}>Sign Up</Button>
            //         </Nav>                   
            //     </Navbar>
            //     <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
            //         <div className={styles.Bg} style={{ backgroundImage: `url(${bg})` ,backgroundRepeat: 'no-repeat',width:'100%',height:'700px' }}>
                                            
            //         </div>
            //     </div>
            //     <div className={styles.diet}>
            //         <img src={diet} alt="diet"/>
            //     </div>
            // </div>
            
        );
    }
}

export default LandingPage;