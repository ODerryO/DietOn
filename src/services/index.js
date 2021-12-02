import axios from "axios";


// Sign Up service
export const signUp = ({
    fullName,
    email,
    password,
    calorieSize,
    weight,
    height,
    waistline,
    thigh
}
  
) => {
  const data = {
    fullName,
    email,
    password,
    calorieSize,
    weight,
    height,
    waistline,
    thigh,
  };

  const url = "https://test-diet.herokuapp.com/v1/users/register";
  return axios(
    {
      method: "POST",
      url,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    },
    console.log(data)
  );
};

// Sign In Service

export const signIn = ({
  email,
  password
}

) => {
const data = {
  email,
  password
};

const url = "https://test-diet.herokuapp.com/v1//users/signin";
return axios(
  {
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  },
  console.log(data)
);
};


//weightmeasurement
export const weightMeasurement = ({
  weight,
  waistline,
  thigh
}

) => {
const data = {
  weight,
  waistline,
  thigh
};

const url = "https://test-diet.herokuapp.com/v1/wms";
const storage = window.localStorage;
let token = storage.getItem('token')

return axios(
  {
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    data: JSON.stringify(data),
  },
  console.log(data),
  console.log(token)
);
};

