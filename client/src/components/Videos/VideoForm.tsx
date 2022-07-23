import React, { useState} from "react";
import s from "../../css/VideoForm.module.css";
import { Ivideo } from "../../interfaces/interfaces";


const VideoForm = () => {
  let [input, setInput] = useState<Ivideo>({
    title: '', 
    url: '', 
    description: ''
  })

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
      })
  }
  return (
    <div className={s.formContainer}>
      <form>
        
          <h2>New Video</h2>
      
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={handleChange}/>
        
      
          <label htmlFor="url">Url</label>
          <input type="text" name="url" onChange={handleChange}/>
        
      
          <label htmlFor="description">Description</label>
          <input type="text" name="description" onChange={handleChange}/>
        
      
            <input type="submit" value={'Create'} />
        
      </form>
    </div>
  );
};

export default VideoForm;
