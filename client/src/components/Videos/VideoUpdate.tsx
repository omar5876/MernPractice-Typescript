import axios from "axios";
import React, { useEffect, useState} from "react";
import s from "../../css/VideoForm.module.css";
import { Ivideo } from "../../interfaces/interfaces";
import {toast} from 'react-toastify'
import { useNavigate, useParams } from "react-router-dom";


const VideoUpdate = () => {
    let {id} = useParams()
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

        if(!input.title || !input.url || !input.description) toast.warn("Some fields are missing")
        else {
          
          await axios.put(`http://localhost:5000/videos/${id}`, input)
          setInput({
            title: '', 
            url: '', 
            description: ''
          })
          toast.success('Video has been updated')
          navigate('/')
        }
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/videos/${id}`)
    .then(res => setInput(res.data))
    .catch(error => console.log(error))
  }, [])
  return (
    <div className={s.formContainer}>
      <form onSubmit={handleSubmit}>
        
          <h2>Update Video</h2>
      
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={input.title} onChange={handleChange}/>
        
      
          <label htmlFor="url">Url</label>
          <input type="text" name="url" value={input.url} onChange={handleChange}/>
        
      
          <label htmlFor="description">Description</label>
          <input type="text" name="description" value={input.description} onChange={handleChange}/>
        
      
            <input type="submit" value={'Update'} />
        
      </form>
      
    </div>
  );
};

export default VideoUpdate;
