import { useForm, SubmitHandler } from "react-hook-form";
import { IStreamer } from "../../interfaces";
import { createStreamer } from "../../api/streamers";
import { useMutation } from "react-query";
import { AddStreamerFormStyled } from "../../styles/streamer-form/StreamerForm.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

enum StreamerPlatform {
  TWITCH = "twitch",
  YOUTUBE = "youtube",
  TIKTOK = "tiktok",
  KICK = "kick",
  RUMBLE = "rumble",
}

const AddStreamerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<IStreamer>();

  const onSubmit: SubmitHandler<IStreamer> = (data) => {
    console.log(data);
    mutation.mutate(data);
    console.log(mutation);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  const mutation = useMutation<IStreamer, Error, IStreamer>(createStreamer, {
    onSuccess: () => {
      toast.success("Streamer Successfully Added!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  });

  return (
    <>
      <AddStreamerFormStyled onSubmit={handleSubmit(onSubmit)}>
        <div className="form-data-container">
          <label>Name</label>
          <input
            {...register("name", { required: true })}
            className="name-input"
          />
          {errors.name?.type === "required" && (
            <p role="alert">Field Name is required</p>
          )}
        </div>
        <div className="form-data-container">
          <label>Platform</label>
          <select
            {...register("platform", { required: true })}
            className="platform-select"
          >
            <option value={StreamerPlatform.TWITCH}>Twitch</option>
            <option value={StreamerPlatform.YOUTUBE}>Youtube</option>
            <option value={StreamerPlatform.TIKTOK}>Tiktok</option>
            <option value={StreamerPlatform.KICK}>Kick</option>
            <option value={StreamerPlatform.RUMBLE}>Rumble</option>
          </select>
        </div>
        <div className="form-data-container">
          <label>Description</label>
          <textarea rows={10} {...register("desc", { required: true })} />
          {errors.desc?.type === "required" && (
            <p role="alert">Field Description is required</p>
          )}
        </div>
        <div className="btn-form-submit-container">
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>
      </AddStreamerFormStyled>
      <ToastContainer />
    </>
  );
};

export default AddStreamerForm;
