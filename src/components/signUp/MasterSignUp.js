import React, { Component } from "react";
import MultiStepProgressBar from "./MultiStepProgressBar";
import styles from "./signUp.module.css";
import SignUp from "./signUp";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";
import SignUp4 from "./SignUp4";
// import axios from "axios";
import { connect } from "react-redux";
import { getSignUpAsync } from "../../redux/actions";

// fetch('https://test-diet.herokuapp.com/v1/users/register')
// .then(res => res.json())
// .then(data => console.log(data))

class MasterSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      fullName: "",
      email: "",
      password: "",
      weight: "",
      height: "",
      waistline: "",
      thigh: "",
      calorieSize: "",
    };

    this.handleChange = this.handleChange.bind(this);

    this._next = this._next.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleInput1 = (values) => {
    this.setState({
      fullName: values.fullName,
      email: values.email,
      password: values.password
    });
  };

  handleInput2 = (values) => {
    this.setState({
      weight: values.weight,
      height: values.height,
      waistline: values.waistline,
      thigh: values.thigh
    });
  };

  handleInput3 = (values) => {
    this.setState({
      calorieSize: values.calorieSize
    });
  };

  handleSubmit = () => {
    const {
      fullName,
      email,
      password,
      weight,
      height,
      waistline,
      thigh,
      calorieSize,
    } = this.state;
    alert(`Your Sign Up detail: \n
       FullName: ${fullName} \n
       Email: ${email} \n
       Password: ${password} \n
       Weight: ${weight} \n
       Height: ${height} \n
       Waistline: ${waistline} \n
       Thigh: ${thigh} \n
       CalorieSize: ${calorieSize}
       `);

    this.props.getSignUpAsync({
      fullName,
      email,
      password,
      weight,
      height,
      waistline,
      thigh,
      calorieSize,
      next:this._next
    }
      
    );
   

    //  return axios.post("http://test-diet.herokuapp.com/v1/users/register", {
    //     user: {
    //       fullName: fullName,
    //       email: email,
    //       password: password,
    //       weight: weight,
    //       height: height,
    //       waistline: waistline,
    //       thigh: thigh,
    //       calorieSize: calorieSize
    //     }
    //   },
    //   { withCredentials: true }
    //   )
    //   .then(response => {
    //     console.log("sign up res", response);
    //     return response
    //     // if (response.data.status === "created") {
    //     //   this.props.handleSuccessfulAuth(response.data);
    //     // }
    //   })
    //   .catch(error => {
    //     console.log("sign up error", error);
    //     return error
    //   });
  };

  _next() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  get renderMultiStep() {
    let currentStep = this.state.currentStep;

    if (currentStep <= 4) {
      return <MultiStepProgressBar currentStep={this.state.currentStep} />;
    }
    return null;
  }

  render() {
    return (
      <>
        {/* <Form onSubmit={this.handleSubmit}> */}
        <div className={styles.SignUp}>
          {/* <Card>
            <CardBody> */}
          <SignUp
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleInput1={this.handleInput1}
            step={this.renderMultiStep}
            next={this._next}
            fullName={this.state.fullName}
            email={this.state.email}
            password={this.state.password}
          />
          <SignUp2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleInput2={this.handleInput2}
            step={this.renderMultiStep}
            next={this._next}
            weight={this.state.weight}
            height={this.state.height}
            waistline={this.state.waistline}
            thigh={this.state.thigh}
          />
          <SignUp3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleInput3={this.handleInput3}
            handleSubmit={this.handleSubmit}
            step={this.renderMultiStep}
            next={this._next}
            calorieSize={this.state.calorieSize}
          />
          <SignUp4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            step={this.renderMultiStep}
            next={this._next}
          />
          {/* </CardBody>
            </Card> */}
        </div>
        {/* </Form> */}
      </>
    );
  }
}

export default connect(null, { getSignUpAsync })(MasterSignUp);
