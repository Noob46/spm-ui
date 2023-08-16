import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { activate } from '../Actions/LoginActions.js';

const Activate = () => {
  const routeParams = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    activate({userToken: routeParams.userToken})
    navigate('/');
  }, [])

  return (
    <div></div>
  )
}

export default Activate;