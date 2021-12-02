import React from 'react';
import { ReactComponent as HomeIcon } from "../../assets/SideNavbar/homeIcon.svg";
import { ReactComponent as CalorieTrackerIcon } from "../../assets/SideNavbar/calorieTracker.svg";
import { ReactComponent as MealPlanIcon } from "../../assets/SideNavbar/mealPlanIcon.svg";
import { ReactComponent as ExercisePlanIcon } from "../../assets/SideNavbar/exercisePlanIcon.svg";
import { ReactComponent as WeightMeasurementIcon } from "../../assets/SideNavbar/weightMeasurementIcon.svg";
import styles from "./SideNavbar.module.css";
import { CircularProgress } from '@mui/material';
import { Link } from "react-router-dom";

export const SideNavbarData = [
    {
        title: "home",
        icon: <HomeIcon className={styles.HomeIcon} />,
        link: "/homepage",
        cName: "nav-text",
        loading: <CircularProgress />
    },
    {
        title: "calorie tracker",
        icon: <CalorieTrackerIcon />,
        link: "/calorietrackerpage",
        cName: "nav-text"
    },
    {
        title: "meal plan",
        icon: <MealPlanIcon />,
        link: "/mealplanpage",
        cName: "nav-text"
    },
    {
        title: "exercise plan",
        icon: <ExercisePlanIcon />,
        link: "/exerciseplanpage",
        cName: "nav-text"
    },
    {
        title: "weight and measurement",
        icon: <WeightMeasurementIcon />,
        link: "/weightmeasurementpage",
        cName: "nav-text"
    }
];
    
