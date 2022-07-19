import s from "../../css/VideoForm.module.css";
const VideoForm = () => {
  return (
    <div className={s.formContainer}>
      <form>
        <div className={s.formTitle}>
          <h2>New Video</h2>
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="url">Url</label>
          <input type="text" name="url" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" />
        </div>
        <div>
            <input type="submit" value={'Create'} />
        </div>
      </form>
    </div>
  );
};

export default VideoForm;
