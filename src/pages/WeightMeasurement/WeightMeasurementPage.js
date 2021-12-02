import React, { useEffect,useState } from 'react';
import WeightMeasurements from "../../components/WeightMeasurement/WeightMeasurement";
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import styles from "./WeightMeasurementPage.module.css";
import { CircularProgress,Box } from "@mui/material";


function WeightMeasurementPage() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);

    return (
        <>
        <div className={styles.weightMeasurementAll}>
          <div className={styles.sideNavbar}>
              <SideNavbar />
          </div>
          {loading ? (
        <div className={styles.loadingBg}>
        <Box sx={{ display: "flex", paddingLeft:"700px", paddingTop:"350px",fill: "white" }}>
          <CircularProgress loading={loading} />
          <p>Now Loading</p>
        </Box>
        </div>
      ) : (
          <div  className={styles.weightMeasurement}>
          <WeightMeasurements />
          </div>
      )}
        </div>
        </>
    )
}

export default WeightMeasurementPage;
