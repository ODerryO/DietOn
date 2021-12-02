import React, { Component } from 'react';
import "./nutritionfacts.css"
import nut6 from "./nut6.png"
import nut7 from "./nut7.png"
import nut8 from "./nut8.png"
import { Card } from "react-bootstrap"

class FoodThat extends Component {
    render() {
        return (
            <div className="foodHome">
                <div className="foodTitle">Nutrition Fact and News</div>
                <div className="foodTit">Food That, If You Eat It, Still Makes You Slim</div>
                <div className="foodAm">10:00 AM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="foodDate">Elena Noor&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;January 7, 2021</span></div>
                <img src={nut6} alt="nut6"/> 
                <div class="d-flex bd-highlight">
                    <div class="p-2 w-100 bd-highlight">
                        <div className="foodIsi">
                            <div className="foodIsi1">Source: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            <div className="foodIsi2">&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, sed massa justo netus mattis quisque non. Pellentesque urna gravida ultricies nunc, diam tincidunt a, nam. Egestas viverra odio eget praesent a, ultrices facilisi. Egestas urna molestie mauris ut egestas diam. Consectetur cras vestibulum sollicitudin ultrices ornare morbi velit in. Ut euismod rutrum justo, suspendisse orci. Suscipit sit tellus cursus enim neque ullamcorper. Ac massa vulputate feugiat convallis diam etiam. Senectus convallis non aliquam sit.</div>
                            <div className="foodTit1">1. Food That, If You Eat It, Still Makes You Slim</div>
                            <img src={nut7} alt="nut7" />
                            <div className="foodIsi1">Source: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            <div className="foodIsi2">&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, sed massa justo netus mattis quisque non. Pellentesque urna gravida ultricies nunc, diam tincidunt a, nam. Egestas viverra odio eget praesent a, ultrices facilisi. Egestas urna molestie mauris ut egestas diam. Consectetur cras vestibulum sollicitudin ultrices ornare morbi velit in. Ut euismod rutrum justo, suspendisse orci. Suscipit sit tellus cursus enim neque ullamcorper. Ac massa vulputate feugiat convallis diam etiam. Senectus convallis non aliquam sit.</div>
                        </div>
                    </div>
                    <div class="p-2 flex-shrink-1 bd-highlight">
                        <div className="foodSide">
                            <div className="foodSideisi">
                                <div className="foodSideTit">Recommended for you</div>
                                <Card className="foodCard">
                                    <Card.Img variant="top" src={nut8} alt="nut8" />
                                    <Card.Body>
                                        <Card.Title className="foodCardTit">A Combination Of Nutritious Packed Meal For Your Lunch</Card.Title>
                                        <Card.Text>Elena Noor</Card.Text>
                                        <Card.Text>January 7, 2021 | 10:00 AM</Card.Text>
                                    </Card.Body>
                                </Card>
                                <div className="foodLast">Last Update</div>
                                <div className="foodLastisi">A Combination Of Nutritious Packed Meal For Your Lunch</div>
                                <div className="foodLastisi">A Combination Of Nutritious Packed Meal For Your Lunch</div>
                                <div className="foodLastisi">A Combination Of Nutritious Packed Meal For Your Lunch</div>
                                <div className="foodLastisi">A Combination Of Nutritious Packed Meal For Your Lunch</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodThat;