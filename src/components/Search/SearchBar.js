import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import JSONDATA from "../../MOCK_DATA.json";
import styles from "./SearchBar.css";
import { Link } from "react-router-dom";

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
    width: "auto",
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
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  

  return (
    <Box sx={{ flexGrow: 2, borderRadius: "10px", width: "1000px" }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          color: "black",
          borderRadius: "10px",
          width: "500px",
          marginLeft: "250px",
        }}
      >
        <Search
          sx={{
            width: "500px",
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
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          {JSONDATA.slice()
            .filter((value) => {
              if (searchTerm === "") {
                return ;
              } else if (
                value.food.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            })
            .map((val, key) => {
              return (
                <div className={styles.user} key={key}>
                 <Link to="/addfoodmealplanpage">
                     <p style={{ fontSize: "18px", textAlign: "center", textDecoration: "none" }} >
                    {val.food}
                  </p> </Link>
              
                </div>
              );
            })}
        </Search>
      </AppBar>
    </Box>
  );
}

