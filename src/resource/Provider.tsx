import axios from 'axios'
import { useState, useEffect } from 'react'
import Cookies from "js-cookie";

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

function useAxios(){
  const token = Cookies.get("token")
  return axios.create({
    baseURL : "http://localhost:3000",
    headers : {
      Authorization : "Bearer " + token
    }
  })
}

export default useWindowSize;

