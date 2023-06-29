const InputError = ({ type }: { type: string }) => {
  const getErrorMsg = () => {
    switch (type) {
      case "required":
        return "Field is required";
      case "pattern":
        return "No trailing or leading spaces allowed";
      default:
        return "Validation Error";
    }
  };

  return <p role="alert">{getErrorMsg()}</p>;
};

export default InputError;
