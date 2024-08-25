import Login from "../login";
import Signup from "../signup";

export const MODAL_TYPE = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
};

export const MODAL_TYPE_VS_COMPONENT = {
  [MODAL_TYPE.LOGIN]: Login,
  [MODAL_TYPE.SIGNUP]: Signup,
};
