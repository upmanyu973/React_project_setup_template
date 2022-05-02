import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../redux/actions/userAction";
import { getUser } from "../redux/selectors/userSelectors";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Wow Product {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [iserror, setIserror] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector(getUser);
  const navigate = useNavigate();

  // const setvalues = async (key, value) => {
  //   let obj = { ...userData };
  //   obj[key] = value;
  //   setUserData(obj);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstname"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    });
    if (!iserror) {
      dispatch(
        userSignup(
          {
            firstName: data.get("firstname"),
            email: data.get("email"),
            password: data.get("password"),
            confirmPassword: data.get("confirmPassword"),
          },
          () => {
            navigate("/");
          }
        )
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            // noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  // error
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstname"
                  label="Firstname"
                  // value={userData.username}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  // value={userData.email}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  // value={userData.password}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  error={iserror}
                  onBlur={(e) => {
                    const confirmPassword = e.target.value;
                    let value = document.getElementById("password").value;
                    console.log(value == confirmPassword);
                    setIserror(value !== confirmPassword);
                  }}
                  id="confirmPassword"
                  label="Confirm Password"
                  // value={userData.confirmPassword}
                  name="confirmPassword"
                  autoComplete="family-name"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { userSignup } from "../redux/actions/userAction";
// import { getUser } from "../redux/selectors/userSelectors";

// const Signup = () => {
//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const dispatch = useDispatch();

//   const user = useSelector(getUser);
//   const navigate = useNavigate();
//   const signUp = () => {
//     dispatch(userSignup(userData));
//     navigate("/login");
//     console.log(userData);
//   };

//   const setvalues = async (key, value) => {
//     let obj = { ...userData };
//     obj[key] = value;
//     setUserData(obj);
//   };

//   return (
//     <div>
//       <form>
//         <div>
//           <label>Username :</label>
//           <input
//             type="text"
//             value={userData.username}
//             placeholder="username"
//             onChange={(e) => {
//               // let obj={...userData}
//               // obj.username=e.target.value
//               // setUserData(obj)
//               setvalues("username", e.target.value);
//             }}
//           />
//         </div>

//         <div>
//           <label>Email :</label>
//           <input
//             type="email"
//             value={userData.email}
//             placeholder="email"
//             onChange={(e) => {
//               setvalues("email", e.target.value);
//             }}
//           ></input>
//         </div>

//         <div>
//           <label>Password :</label>
//           <input
//             type="password"
//             value={userData.password}
//             placeholder="password"
//             onChange={(e) => {
//               setvalues("password", e.target.value);
//             }}
//           />
//         </div>

//         <div>
//           <label>Confirm Password :</label>
//           <input
//             type="password"
//             value={userData.confirmPassword}
//             placeholder="confirm password"
//             onChange={(e) => {
//               setvalues("confirmPassword", e.target.value);
//             }}
//           />
//         </div>
//       </form>
//       {/* {if(password=== confirmPassword)} */}
//       <button onClick={() => signUp()}>Signup</button>
//     </div>
//   );
// };

// export default Signup;
