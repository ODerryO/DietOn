import { Modal, Button } from "@mui/material";
import { React, render } from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Your Daily Weight and Measurement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You can report your daily weight and measurement, it’s a good chance
          to know how is your diet progress has come so far?
        </p>
        <div>
          <p>weight</p>
          <input type="number" placeholder="in kg" />
        </div>
        <div>
            <p>Measurement</p>
        <input type="number" placeholder="waistline cm" />
        <input type="number" placeholder="thigh cm" /> 
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;

//   function App() {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//       <>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch vertically centered modal
//         </Button>

//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//       </>
//     );
//   }

//   render(<App />);
