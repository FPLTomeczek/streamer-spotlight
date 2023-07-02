import { ToastOptions, toast } from "react-toastify";
import { ToastState } from "../streamers/enums/toastState";

export const displayToast = ({
  msg,
  type,
}: {
  msg: string;
  type: ToastState;
}) => {
  const options: ToastOptions = {
    position: "top-left",
    autoClose: 5000,
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
