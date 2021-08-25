import axios from "axios";
import { SUBMIT_COMMENT } from "../../types";

// action
import clearErrorsAction from "./scream-clearerror";

const submitCommentAction =
  ({ screamId, commentData }) =>
  (dispatch) => {
    axios
      .post(`/scream/${screamId}/comment`, commentData)
      .then((res) => {
        dispatch({
          type: SUBMIT_COMMENT,
          payload: res.data,
        });

        dispatch(clearErrorsAction());
      })
      .catch((err) => {
        console.log(err);
      });
  };

export default submitCommentAction;
