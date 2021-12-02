import React from "react";
import styles from "./WeightMeasurement.module.css";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  FormControl,
  OutlinedInput,
  Modal,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import Calender from "../calender/calender";
import Collapses from "./Collapse";
import { connect, useDispatch } from "react-redux";
import { getWeightMeasurementAsync } from "../../redux/actions";
// import MyVerticallyCenteredModal from "./EditModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 627,
  height: 624,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 627,
  height: 320,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const handleDate = () => {
  var m = new Date();
  var dateString =
    m.getUTCFullYear() +
    "-" +
    ("0" + (m.getUTCMonth() + 1)).slice(-2) +
    "-" +
    ("0" + m.getUTCDate()).slice(-2);
  return dateString;
};

function WeightMeasurements(props) {
  const [values, setValues] = React.useState({
    date: handleDate(),
    weight: "",
    waistline: "",
    thigh: "",
  
  });

  const dispatch = useDispatch();

  const onChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleSubmit = (prop) => (event) => {
    console.log(handleDate());
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
    dispatch(getWeightMeasurementAsync(values));
  };

  

  

  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <>
      <div className={styles.addWrapper}>
        <div className={styles.textWM}>
          <p>Weight and Measurement</p>
        </div>
        <div className={styles.addWM}>
          <Link to="#" onClick={handleOpenAdd}>
            {" "}
            <p>add Weight and Measurement</p>{" "}
          </Link>
          <FormControl onSubmit={handleSubmit}>
            <Modal
              open={openAdd}
              onClose={handleCloseAdd}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "24px",
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  Add Your Daily Weight and Measurement
                </Typography>
                <Typography
                  id="modal-modal-description1"
                  sx={{
                    mt: 2,
                    textAlign: "left",
                    fontSize: "18px",
                  }}
                >
                  You can report your daily weight and measurement, it’s a good
                  chance to know how is your diet progress has come so far?
                </Typography>
                <Typography
                  id="modal-modal-description-weight"
                  sx={{
                    mt: 2,
                  }}
                >
                  Weight
                </Typography>
                <Container
                  sx={{
                    mt: 2,
                    ml: -3,
                  }}
                >
                  <FormControl
                    sx={{ m: 0, width: "525px", borderRadius: "0px" }}
                    variant="outlined"
                  >
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={values.weight}
                      onChange={onChange("weight")}
                      // onSubmit={handleSubmit}
                      endAdornment={
                        <InputAdornment position="end">kg</InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                      sx={{
                        borderRadius: "10px",
                        height: "50px",
                      }}
                    />
                  </FormControl>
                </Container>
                <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                  Measurement
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    mt: 2,
                  }}
                >
                  <FormControl sx={{ m: 0 }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-waistline"
                      placeholder="waistline"
                      value={values.waistline}
                      onChange={onChange("waistline")}
                      // onSubmit={handleSubmit}
                      endAdornment={
                        <InputAdornment position="end">cm</InputAdornment>
                      }
                      aria-describedby="outlined-waistline-helper-text"
                      inputProps={{
                        "aria-label": "waistline",
                      }}
                      sx={{
                        borderRadius: "10px",
                        height: "50px",
                        width: "240px",
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{ ml: 5 }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-thigh"
                      placeholder="thigh"
                      value={values.thigh}
                      onChange={onChange("thigh")}
                      // onSubmit={handleSubmit}
                      endAdornment={
                        <InputAdornment position="end">cm</InputAdornment>
                      }
                      aria-describedby="outlined-thigh-helper-text"
                      inputProps={{
                        "aria-label": "thigh",
                      }}
                      sx={{
                        borderRadius: "10px",
                        height: "50px",
                        width: "240px",
                      }}
                    />
                  </FormControl>
                </Box>
                <Container sx={{ ml: -3, marginTop: "141px" }}>
                  <Button
                    id={styles.saveBTn}
                    variant="contained"
                    type="submit"
                    sx={{
                      bgcolor: "#0e9c4a",
                      width: "525px",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      handleCloseAdd();
                      console.log("cek");
                      handleOpen2();
                    }}
                  >
                    Save
                  </Button>
                </Container>
              </Box>
            </Modal>
          </FormControl>
        </div>
      </div>
      <div className={styles.calender}>
        <Calender />
      </div>

      <div className={styles.todayEditWrapper}>
        <div className={styles.todayWM}>
          <p>Today</p>
        </div>
        <div className={styles.editWM}>
          <div className={styles.editAllModal}>
            <Link to="#" id={styles.editLink} onClick={handleOpen}>
              Edit Weight and Measurement
            </Link>
            <form onSubmit={handleSubmit}>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                      fontSize: "24px",
                      fontFamily: "Poppins, sans-serif",
                      textAlign: "left",
                    }}
                  >
                    Edit Your Daily Weight and Measurement
                  </Typography>
                  <Typography
                    id="modal-modal-description1"
                    sx={{
                      mt: 2,
                      textAlign: "left",
                      fontSize: "18px",
                    }}
                  >
                    You can report your daily weight and measurement, it’s a
                    good chance to know how is your diet progress has come so
                    far?
                  </Typography>
                  <Typography
                    id="modal-modal-description-weight"
                    sx={{
                      mt: 2,
                    }}
                  >
                    Weight
                  </Typography>
                  <Container
                    sx={{
                      mt: 2,
                      ml: -3,
                    }}
                  >
                    <FormControl
                      sx={{ m: 0, width: "525px", borderRadius: "0px" }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        value={values.weight}
                        onChange={onChange("weight")}
                        endAdornment={
                          <InputAdornment position="end">kg</InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                        }}
                        sx={{
                          borderRadius: "10px",
                          height: "50px",
                        }}
                      />
                    </FormControl>
                  </Container>
                  <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                    Measurement
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      mt: 2,
                    }}
                  >
                    <FormControl sx={{ m: 0 }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-waistline"
                        placeholder="waistline"
                        value={values.waistline}
                        onChange={onChange("waistline")}
                        endAdornment={
                          <InputAdornment position="end">cm</InputAdornment>
                        }
                        aria-describedby="outlined-waistline-helper-text"
                        inputProps={{
                          "aria-label": "waistline",
                        }}
                        sx={{
                          borderRadius: "10px",
                          height: "50px",
                          width: "240px",
                        }}
                      />
                    </FormControl>
                    <FormControl sx={{ ml: 5 }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-thigh"
                        placeholder="thigh"
                        value={values.thigh}
                        onChange={onChange("thigh")}
                        endAdornment={
                          <InputAdornment position="end">cm</InputAdornment>
                        }
                        aria-describedby="outlined-thigh-helper-text"
                        inputProps={{
                          "aria-label": "thigh",
                        }}
                        sx={{
                          borderRadius: "10px",
                          height: "50px",
                          width: "240px",
                        }}
                      />
                    </FormControl>
                  </Box>
                  <Container sx={{ ml: -3, marginTop: "141px" }}>
                    <Button
                      id={styles.saveBTn}
                      variant="contained"
                      type="submit"
                      sx={{
                        bgcolor: "#0e9c4a",
                        width: "525px",
                        height: "50px",
                        borderRadius: "10px",
                      }}
                      onClick={() => {
                        handleClose();
                        console.log("cek");
                        handleOpen2();
                      }}
                    >
                      Save
                    </Button>
                  </Container>
                </Box>
              </Modal>
            </form>
          </div>
        </div>
      </div>
      <div>
        {/* <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
      </div>
      <div>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style2}>
            <Typography
              id="modal-modal-description1"
              sx={{
                mt: 5,
                ml: 10,
                fontSize: "24px",
                width: "385px",
                textAlign: "center",
                placeItems: "center",
              }}
            >
              Successfully Save The Daily Weight and Measurement
            </Typography>

            <Container sx={{ ml: -3, marginTop: "100px" }}>
              <Button
                id={styles.saveBTn}
                variant="contained"
                sx={{
                  bgcolor: "#0e9c4a",
                  width: "525px",
                  height: "50px",
                  borderRadius: "10px",
                }}
                onClick={handleClose2}
              >
                Ok
              </Button>
            </Container>
          </Box>
        </Modal>
      </div>
      <div className={styles.wmBox}>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "#CFEBDB",
              height: "60px",
              width: "1000px",
              borderRadius: "10px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <div className={styles.contentBoxWrapper}>
              <p id={styles.weight}>Weight</p>
              <p>Waistline</p>
              <p id={styles.thigh}>Thigh</p>
            </div>
          </Box>
        </Container>
      </div>
      <div className={styles.wmBox2}>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "white",
              height: "60px",
              width: "1000px",
              borderRadius: "10px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <div className={styles.contentBoxWrapper2}>
              <p id={styles.weight2}>{values.weight} cm</p>
              <p>{values.waistline} cm</p>
              <p id={styles.thigh2}> {values.thigh} cm</p>
            </div>
          </Box>
        </Container>
      </div>
      <div className={styles.chartProgressWrapper}>
        <Collapses />
        {/* <Link to="#">
          <p>
            See Monthly Weight Chart Progress{" "}
            <span>
              <img src={SortUpIcon} alt="sortUpIcon" />{" "}
            </span>{" "}
          </p>
        </Link> */}
      </div>
    </>
  );
}

export default connect(null, { getWeightMeasurementAsync })(WeightMeasurements);
