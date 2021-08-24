import axios from "axios";
import { LOADING_UI, SET_SCREAM, STOP_LOADING_UI } from "../../types";

const getScreamAction = (screamId) => (dispatch) => {
  dispatch({ type: LOADING_UI });

  axios
    .get(`/scream/${screamId}`)
    .then((res) => {
      dispatch({
        type: SET_SCREAM,
        payload: res.data,
      });

      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getScreamAction;
