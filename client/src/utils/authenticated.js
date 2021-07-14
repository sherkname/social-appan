import jwtDecode from "jwt-decode";
import { SET_AUTHENTICATED } from "../redux/types";
import signOutUserAction from "../redux/actions/user-actions/user-signout";
import getUserDataAction from "../redux/actions/user-actions/user-getdata";
import axios from "axios";

// redux
import store from "../redux/stores";

const authenticated = () => {
  const token = localStorage.FBIdToken;
  if (token) {
    const decodeToken = jwtDecode(token);
    if (decodeToken.exp * 1000 < Date.now()) {
      store.dispatch(signOutUserAction());

      window.location.href = "/login";
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common["Authorization"] = token;
      store.dispatch(getUserDataAction());
    }
  }

  return JSON.stringify("Token is Brokened");
};

export default authenticated;