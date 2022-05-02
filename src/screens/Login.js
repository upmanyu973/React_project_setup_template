import * as React from "react";
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
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TYPES } from "../redux/types/types";
import { errorSelector } from "../redux/selectors/errorSelector";
import { userLogin } from "../redux/actions/userAction";
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

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(
    (state) => errorSelector([TYPES.LOGIN], state),
    shallowEqual
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    dispatch(
      userLogin(
        {
          email: data.get("email"),
          password: data.get("password"),
        },
        () => {
          navigate("/dashboard");
        }
      )
    );
  };
  React.useEffect(() => {
    console.log(error);
  }, [error]);
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

// import React, { useEffect, useState } from "react";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { userLogin } from "../redux/actions/userAction";
// import { errorSelector } from "../redux/selectors/errorSelector";
// import { getUser } from "../redux/selectors/userSelectors";
// import { TYPES } from "../redux/types/types";

// const Login = () => {
//   const [userData, setUserData] = useState({
//     username: "",
//     password: "",
//   });
//   const setValues = async (key, values) => {
//     let obj = { ...userData };
//     obj[key] = values;
//     setUserData(obj);
//   };
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector(getUser);
//   const error = useSelector(
//     (state) => errorSelector([TYPES.LOGIN], state),
//     shallowEqual
//   );
//   const login = (e) => {
//     // console.log(userData);

//     dispatch(
//       userLogin(userData, () => {
//         navigate("/home");
//       })
//     );
//   };

//   useEffect(() => {
//     console.log(error);
//   }, [error]);
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
//               setValues("username", e.target.value);
//             }}
//           />
//         </div>

//         <div>
//           <label>password :</label>
//           <input
//             type="password"
//             value={userData.password}
//             placeholder="password"
//             onChange={(e) => {
//               setValues("password", e.target.value);
//             }}
//           />
//         </div>
//       </form>
//       <button onClick={() => login()}>Login</button>
//       <div>{error[0]}</div>
//     </div>
//   );
// };

// export default Login;
