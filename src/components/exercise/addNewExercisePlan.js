// import SeacrhExe from "./searchExercise"
import "./addNewExercisePlan.css"
import { styled, alpha } from "@mui/material/styles";
import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import { getExercise } from "./exerciseAction";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Stack from '@mui/material/Stack';
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Route } from "react-router-dom";
import ExercisePlanId from './ExercisePlanUser'




function AddNewExercise (props) {

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100pa",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  React.useEffect(() => {
    props.getExercise()
  }, [])

  const handleChange = (event) => {
    setCurrency(event.target.exer);
  };

  let [showAlert, setShowAlert] = useState(false)
  let handleShow = (e) => setShowAlert(true)


  const timeSet = [
    {
      exer: 'Hours',
      label: 'Hours',
    },
    {
      exer: 'Minute',
      label: 'Minutes',
    }
  ];

  const [currency, setCurrency] = React.useState('');

  let [searchTerm, setSearchTerm] = useState("")


  console.log(props, "ini propese terbaru")
  return (
    <div>
      <p className="fontTitle">Exercise Plan</p>
      <div className="bgrSearch">
        <div className="wrapperSearch">
        <Box sx={{ flexGrow: 2, borderRadius: "10px", width: "500px"}}>
            <AppBar
              position="static"
              sx={{
                bgcolor: "white",
                color: "black",
                borderRadius: "10px",
                width: "500px",
                marginLeft: "250px",
                marginTop: "40px"
              }}
            >
            <Search
              sx={{
                width: "500px",

              }}
            >
              <SearchIconWrapper>
                <SearchIcon
                  sx={{
                    marginLeft: "425px",
                    fill: "#0e9c4a",
                    position: "absoulte",
                  }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                inputProps={{ "aria-label": "search" }}
                sx={{
                  fontSize: "22px",
                  color: "black",
                }}
                onChange={(event) => {
                  setSearchTerm(event.target.value)
                }}
              />
            </Search>
          </AppBar>
        </Box>
        </div>
      </div>
      
      <div className="wrapperExercise">
        
        {props.Exercise.ExercisePlan.filter((exer) => {
          if (searchTerm === "") {
            return exer
          } else if (exer.name.toLowerCase(). includes(searchTerm.toLowerCase())) {
            return exer
          }
        })
        .map((exer,key) => (
          <div className="exercisePlanList" key={key}>
            <div className="imgExercise">
              <img src={exer.logoExercise} />
            </div>
            <div className="exerciseList">
              <p className="listExercise"> {exer.name} </p>
            </div>
            <div className="exerciseTime">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "10ch" }
                }}
                noValkeyate
                autoComplete="off"
                >
                <div className="exerExercise">
                  <TextField
                    className="outlined-number"
                    type="number"
                    color="success"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </div>
              </Box>
            </div>
            <div className="exerciseSide">
                <Box
                  component="form"
                  sx={{
                  '& .MuiTextField-root': { m: 1},
                  }}
                  noValkeyate
                  autoComplete="off"
                  >
                  <div className="exerciseSkeye">
                    <TextField
                      className="timeSet outlined-select-currency-native"
                      select
                      color="success"
                      exer={currency}
                      onChange={handleChange}
                      size= "small"
                      SelectProps={{
                        native: true,
                        }}
                      >
                      {timeSet.map((option) => (
                      <option key={option.exer} exer={option.exer}>
                      {option.label}
                      </option>
                      ))}
                    </TextField>
                  </div>
                </Box>
              </div>
            
            <div className="kclExercise">
              <p className="listKcl">{exer.calorie}</p>
            </div>
            <div className="btnWrapper">
              <div className="btnExercise">  
                <div className="btnSetAlert">
                  <Button onClick={handleShow}  variant="contained" color="success">
                    Set Alert
                  </Button>
                </div>
              </div>
              <div>
              { showAlert ? 
                  <div className="pickDate">
                  <Stack component="form" noValidate spacing={1}>
                    <TextField
                      id="time"
                      label="Alarm clock"
                      type="time"
                      ampm="false"
                      defaultValue=""
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      sx={{ width: 150 }}
                    />
                  </Stack>
              </div>
              : null
               }
              </div>
            </div>
            <div className="btnAddExe">
              <Button  variant="contained" color="success">
              Add
            </Button>
            
            <Route path={`exercisePlanUser/${exer.id}`} exact render={() => <ExercisePlanId Exer={props.Exercise.ExercisePlan}/>}/>


              </div>
          </div>
        ))
        
        }
      </div>
    </div>
  )
}

const MapStateToProps = (store) => {
  return ({
    Exercise: store.Exercise
  })
}

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getExercise: getExercise
  }, dispatch)
}

export default connect(MapStateToProps, MapDispatchToProps)(AddNewExercise)