import AuthNavigate from "../../hoc/AuthRedirect";
import { getAuthThunkCreator } from "../../redux/auth-reducer";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import ProfileContainer from "../Profile/ProfileContainer";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage, isAuth: state.auth.isAuth };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthNavigate
)(Dialogs);
