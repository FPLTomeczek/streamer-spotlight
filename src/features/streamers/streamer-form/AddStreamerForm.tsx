import { useForm, SubmitHandler } from "react-hook-form";
import { IStreamer } from "../interfaces";
import { createStreamer } from "../services/streamers";
import { useMutation, useQueryClient } from "react-query";
import { AddStreamerFormStyled } from "../../../styles/streamers/StreamerForm.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import InputError from "./InputError";
import { noWhitespaceRegex } from "./utils";
import { displayToast } from "../../notifications/utils";
import { ToastState } from "../enums/toastState";
import { StreamerPlatform } from "../../../enums/platform";

const AddStreamerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<IStreamer>();

  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<IStreamer> = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  const mutation = useMutation<IStreamer, Error, IStreamer>(createStreamer, {
    onSuccess: () => {
      queryClient.invalidateQueries("streamers");
      displayToast({
        msg: "Streamer Successfully Added!",
        type: ToastState.SUCCESS,
      });
    },
    onError: (err) => {
      displayToast({ msg: err.message, type: ToastState.ERROR });
    },
  });

  return (
    <>
      <AddStreamerFormStyled onSubmit={handleSubmit(onSubmit)}>
        <div className="form-data-container">
          <label>Name</label>
          <input
            {...register("name", {
              required: true,
              pattern: noWhitespaceRegex,
            })}
            className="data-input"
          />
          {errors.name?.type && <InputError type={errors.name.type} />}
        </div>
        <div className="form-data-container">
          <label>Platform</label>
          <select
            {...register("platform", { required: true })}
            className="data-input"
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
          <textarea
            className="data-input"
            rows={10}
            {...register("desc", {
              required: true,
              pattern: noWhitespaceRegex,
            })}
          />
          {errors.desc?.type && <InputError type={errors.desc.type} />}
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
