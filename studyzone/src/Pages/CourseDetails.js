import React from 'react'
// import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
import Card from '../Components/Card'
const CourseDetails = () => {
  return (
    <>
    <div className='course__details__background'>
      <img className='w-100' src="..\Images\background.jpg" alt="img" />
    </div>

    <div className="course__details container row m-auto my-4 ">
      <div className="course__rating rounded p-3 col-12 col-md-12 col-xl-7 mx-auto row gap-5 order-2 order-xl-1">
          <div className="course__rating-stats mx-auto col-3 bg-white d-flex justify-content-center flex-column gap-3 rounded-2 py-4">
            <h4 className="course__rating__number text-center">4 out of 5</h4>

            <div className="course__rating__stars text-center"><Rating size="small" name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
          </div>
          </div>

          <div className="course__all__ratings col-12 col-md-12 col-xl-7">
            <div className="course__star d-flex gap-4 mb-2">
              <div className='stars__bar__title small'>5 Stars</div> 
              <div className="rating__bar my-auto">
                <div className="rating__bar__filled my-auto"></div>
              </div>
              </div>
              <div className="course__star d-flex gap-4 mb-2">
              <div className='stars__bar__title small'>4 Stars</div> 
              <div className="rating__bar my-auto">
                <div className="rating__bar__filled my-auto w-50"></div>
              </div>
              </div>
              <div className="course__star d-flex gap-4 mb-2">
              <div className='stars__bar__title small'>3 Stars</div> 
              <div className="rating__bar my-auto">
                <div className="rating__bar__filled my-auto w-75"></div>
              </div>
              </div>
              <div className="course__star d-flex gap-4 mb-2">
              <div className='stars__bar__title small'>2 Stars</div> 
              <div className="rating__bar my-auto">
                <div className="rating__bar__filled my-auto" style={{width:"9%"}}></div>
              </div>
              </div>
              <div className="course__star d-flex gap-4">
              <div className='stars__bar__title small'>1 Stars</div> 
              <div className="rating__bar my-auto">
                <div className="rating__bar__filled my-auto" style={{width:"16%"}}></div>
              </div>
              </div>
          </div>
      </div>

      <div className="course__info col-4 col-sm-4 col-md-4 border order-1 order-xl-2 mb-4 mx-auto">
      this

      </div>

    </div>
    </>
  )
}


export default CourseDetails
