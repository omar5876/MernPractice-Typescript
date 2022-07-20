import s from "../../css/VideoForm.module.css";
const VideoForm = () => {
  return (
    <div className={s.formContainer}>
      <form>
        
          <h2>New Video</h2>
      
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
        
      
          <label htmlFor="url">Url</label>
          <input type="text" name="url" />
        
      
          <label htmlFor="description">Description</label>
          <input type="text" name="description" />
        
      
            <input type="submit" value={'Create'} />
        
      </form>
    </div>
  );
};

export default VideoForm;
