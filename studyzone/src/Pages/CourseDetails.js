import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Card from '../Components/Card'
const CourseDetails = () => {
  return (
    <>
    <div className='course__details__background'>
      <img className='w-100' src="..\Images\background.jpg" alt="img" />
    </div>

    <div className="course__details container row m-3 ">
      <div className="course__rating rounded p-3 col-7 col-sm-7 col-md-7">
          <div>dsd</div>
      </div>

      <div className="course__info col-4 col-sm-4 col-md-4"></div>

    </div>
    </>
  )
}


export default CourseDetails
