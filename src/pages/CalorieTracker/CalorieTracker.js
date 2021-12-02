import React from 'react'
import './calorie.css'
import CaloriRemaining from "../../assets/CaloriRemaining.png"
import CaloriTarget from "../../assets/CaloriTarget.png"
import CaloriToday from "../../assets/CaloriToday.png"
import Breakfast from "../../assets/Breakfast.png"
import { Row, Col, Modal, Button, Form, CloseButton} from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
    return (
    <div>
      <Modal className="modalCalo"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <CloseButton className="closeBtn"onClick={props.onHide}/> 
            <div className="modalBody" closeButton>
            <div className="modalTitle">Change Calorie Target</div>
            <div className="modalIsi">You can change your current calorie target to your new calorie target by filling in the fields below.</div>
            <Form.Control className="modalInput" type="kcal" placeholder="1400 Kcal"/>
            <Button className="modalSave" onClick={props.onHide}>Save</Button>
        </div>         
      </Modal> 
    </div>
    );
  }    

function CalorieTracker() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <Row className="titl">
                <Col className="caloTitle">Calorie Traker</Col>
                <Col className="caloEdit" variant="primary" onClick={() => setModalShow(true)}>Edit Calorie Target</Col>
            </Row>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <Row className="calNewUser" >
                <Col className="iconCal">
                    <img className="calImg" src={CaloriTarget} alt="icon-calori"/>
                    <div>
                        <p className="calTittle">Calorie Target</p>
                        <p className="kcal">1400 Kcal</p>
                    </div>
                </Col>
                <Col className="iconCal">
                    <img className="calImg" src={CaloriToday} alt="icon-calori" />
                    <div>
                        <p className="calTittle">Calorie Target</p>
                        <p className="kcal">Calorie Target</p>
                    </div>
                </Col>         
                <Col className="iconCal">
                    <img className="calImg" src={CaloriRemaining} alt="icon-calori" />
                        <div>
                            <p className="calTittle">Calorie Target</p>
                            <p className="kcal">Calorie Target</p>
                        </div>
                </Col>
            </Row>
            <div className="mealCalo">
                <div className="mealTitle">Todays Meals Calorie</div>
                <div className="breakfastCalo">
                    <img className="breakfastLogo" src={Breakfast} alt="breakfast"/>
                    <div className="breakfastText">
                        <div className="breakfastTitle">Breakfast</div>
                        <div className="breakfastIsi">
                            <Row className="bread">
                                <Col>Bread</Col>
                                <Col className="breakfastRight">106 Cal</Col>
                            </Row>
                            <Row className="jam">
                                <Col>Strawberry Jam</Col>
                                <Col className="breakfastRight">40 Cal</Col>
                            </Row>
                            <hr/>
                            <Row className="jam">
                                <Col>Total</Col>
                                <Col className="breakfastRight">146 Cal</Col>
                            </Row>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CalorieTracker;
