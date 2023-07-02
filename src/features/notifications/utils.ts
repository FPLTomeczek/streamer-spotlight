import { ToastOptions, toast } from "react-toastify";
import { ToastState } from "./enums/toastState";
import { TOAST_CLOSE_TIME_MS } from "./constants";

export const displayToast = ({
  msg,
  type,
}: {
  msg: string;
  type: ToastState;
}) => {
  const options: ToastOptions = {
    position: "top-left",
    autoClose: TOAST_CLOSE_TIME_MS,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  switch (type) {
    case ToastState.SUCCESS:
      return toast.success(msg, options);
    case ToastState.ERROR:
      return toast.error(msg, options);
    default:
      return toast.info(msg, options);
  }
};
