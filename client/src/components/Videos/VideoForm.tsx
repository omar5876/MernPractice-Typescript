import axios from "axios";
import React, { useState} from "react";
import s from "../../css/VideoForm.module.css";
import { Ivideo } from "../../interfaces/interfaces";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";


const VideoForm = () => {
  let [input, setInput] = useState<Ivideo>({
    title: '', 
    url: '', 
    description: ''
  })
  let navigate = useNavigate()

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
      })
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(input)
      try {
        await axios.post('http://localhost:5000/videos', input)
        setInput({
          title: '', 
          url: '', 
          description: ''
        })
        toast.success('New Video has been created')
        navigate('/')
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <div className={s.formContainer}>
      <form onSubmit={handleSubmit}>
        
          <h2>New Video</h2>
      
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={input.title} onChange={handleChange}/>
        
      
          <label htmlFor="url">Url</label>
          <input type="text" name="url" value={input.url} onChange={handleChange}/>
        
      
          <label htmlFor="description">Description</label>
          <input type="text" name="description" value={input.description} onChange={handleChange}/>
        
      
            <input type="submit" value={'Create'} />
        
      </form>
    </div>
  );
};

export default VideoForm;
