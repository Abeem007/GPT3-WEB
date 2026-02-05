import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import "./toast.css"

const Toast = () => {
  const { notification } = useAuth();
  if (!notification) return null;
  return (
    <div className='toast'>{notification}</div>
  )
}

export default Toast;