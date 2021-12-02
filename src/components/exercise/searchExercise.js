import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { changeText, getExercise } from './exerciseAction'
import Button from '@mui/material/Button';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  wkeyth: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    wkeyth: "auto",
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
    transition: theme.transitions.create("wkeyth"),
    wkeyth: "100%",
    [theme.breakpoints.up("md")]: {
      wkeyth: "20ch",
    },
  },
}));

function SearchExercise (props) {

  function handleTextInputChange(e){
      props.changeText(e.target.value)
  }

  function handleSearch(e){
    e.preventDefault()
    props.getExercise (props.Exercise.text)
  }

  return (
    <div>
        <Box sx={{ flexGrow: 2, borderRadius: "10px", wkeyth: "500px" }}>
          <AppBar
            position="static"
            sx={{
              bgcolor: "white",
              color: "black",
              borderRadius: "10px",
              wkeyth: "500px",
              marginLeft: "250px",
            }}
          >
          <Search
            sx={{
              wkeyth: "500px",
              marginLeft: "0px",
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
              placeholder="Search the food"
              inputProps={{ "aria-label": "search" }}
              sx={{
                fontSize: "22px"
              }}
              onChange={ handleTextInputChange}
              onClick={handleSearch}
            />

          </Search>
        </AppBar>
      </Box>
      <div>
        <input type="text" onChange={handleTextInputChange} onClick/>
        <Button onClick={handleSearch} variant="text">Text</Button>
      </div>
      </div>
      
  )
}

const MapStateToProps = store => {
  return({
    Exercise: store.Exercise
  })
}

const MapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeText: (text) => dispatch(changeText(text)),
    getExercise: getExercise
  }, dispatch)
}

export default connect (MapStateToProps, MapDispatchToProps)(SearchExercise)