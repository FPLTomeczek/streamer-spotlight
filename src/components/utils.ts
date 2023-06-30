import { ToastOptions, toast } from "react-toastify";
import { Toast } from "../enums/streamerForm";

export const displayToast = ({ msg, type }: { msg: string; type: Toast }) => {
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
    case Toast.SUCCESS:
      return toast.success(msg, options);
    case Toast.ERROR:
      return toast.error(msg, options);
    default:
      return toast.info(msg, options);
  }
};
