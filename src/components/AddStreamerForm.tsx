import { useForm, SubmitHandler } from "react-hook-form";
import { IStreamer } from "../interfaces";

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
    formState: { errors },
  } = useForm<IStreamer>();
  const onSubmit: SubmitHandler<IStreamer> = (data) => {
    console.log(data);
    // mutation.mutate({data});
  };

  // const mutation = useMutation<IStreamer, Error>(
  //   (newStreamer) => {
  //     return axios.post(URL, newStreamer);
  //   }
  // );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register("name", { required: true })} />
      {errors.name?.type === "required" && (
        <p role="alert">Field Name is required</p>
      )}
      <label>Platform</label>
      <select {...register("platform", { required: true })}>
        <option value={StreamerPlatform.TWITCH}>Twitch</option>
        <option value={StreamerPlatform.YOUTUBE}>Youtube</option>
        <option value={StreamerPlatform.TIKTOK}>Tiktok</option>
        <option value={StreamerPlatform.KICK}>Kick</option>
        <option value={StreamerPlatform.RUMBLE}>Rumble</option>
      </select>
      <label>Description</label>
      <textarea {...register("desc", { required: true })} />
      {errors.desc?.type === "required" && (
        <p role="alert">Field Description is required</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddStreamerForm;
