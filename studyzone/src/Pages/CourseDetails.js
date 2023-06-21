import React from 'react'
// import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
import Card from '../Components/Card'
import CardSlider from '../Components/Card_Slider';
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

            <div className="course__rating__stars text-center"><Rating size="small" name="half-rating-read" defaultValue={1.5} precision={0.5} readOnly />
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

          <div className="course__comments col-12 col-md-12 col-xl-12" >
            <div className="course__comment__all d-flex gap-2 flex-column">
            <div className="course__comment__info d-flex justify-content-between align-items-center">
            <div className="profile__comment d-flex align-items-center gap-1">
              <img src="..\Images\profile.png" alt="" className="profile__img rounded" style={{width:"45px"}}/>
              <div className='user__name__comment fw-bold text-black'>User</div>            
            </div>
            <div className='course__user__time d-flex align-items-center gap-1'>
            <img src="..\Images\time.svg" alt="" className="comment__time" style={{width:"20px"}}/>
            <div className="time__value small">3 hours</div>
            </div>
            
            </div>
            <div>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
            <hr />
            
            </div>
            <div className="course__comment__all d-flex gap-2 flex-column">
            <div className="course__comment__info d-flex justify-content-between align-items-center">
            <div className="profile__comment d-flex align-items-center gap-1">
              <img src="..\Images\profile.png" alt="" className="profile__img rounded" style={{width:"45px"}}/>
              <div className='user__name__comment fw-bold text-black'>User</div>            
            </div>
            <div className='course__user__time d-flex align-items-center gap-1'>
            <img src="..\Images\time.svg" alt="" className="comment__time" style={{width:"20px"}}/>
            <div className="time__value small">3 hours</div>
            </div>
            
            </div>
            <div>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
            <hr />
            
            </div>
            <div className="course__comment__all d-flex gap-2 flex-column">
            <div className="course__comment__info d-flex justify-content-between align-items-center">
            <div className="profile__comment d-flex align-items-center gap-1">
              <img src="..\Images\profile.png" alt="" className="profile__img rounded" style={{width:"45px"}}/>
              <div className='user__name__comment fw-bold text-black'>User</div>            
            </div>
            <div className='course__user__time d-flex align-items-center gap-1'>
            <img src="..\Images\time.svg" alt="" className="comment__time" style={{width:"20px"}}/>
            <div className="time__value small">3 hours</div>
            </div>
            
            </div>
            <div>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
            
            </div>
          </div>
      </div>




      <div className="course__info col-4 col-sm-4 col-md-4 border order-1 order-xl-2 mb-4 mx-auto bg-white rounded-4 p-3 border-0 shadow" style={{marginTop:"-12%"}}>
      <div className="course__img"><img src="..\Images\course-image.jpg" alt="img" width={"100%"}/></div>
      <h2 className="price text-black fw-bold my-3 ms-1">$49.99</h2>
      <button className='buy__button btn btn-info'>Buy Now</button>
      <hr />
      <div className="course__payment__info d-flex flex-column gap-3">
        <h5 className='text-dark fw-bold'>This Course includes :</h5>
        <div className="course__payment d-flex gap-2">
          <img width={"25px"} height={"25px"} src="..\Images\icon1.svg" alt="icon" />
          <div className="fw-bold">Money Back Guarantee</div>
        </div>
        <div className="course__payment d-flex gap-2">
        <img width={"25px"} height={"25px"} src="..\Images\camera.svg" alt="icon" />
        <div className="fw-bold">Access on all devices</div>
      
        </div>
        <div className="course__payment d-flex gap-2">
        <img width={"25px"} height={"25px"} src="..\Images\certificate.svg" alt="icon" />
        <div className="fw-bold">Certification of completion</div>
        </div>
        <div className="course__payment d-flex gap-2">
        <img width={"25px"} height={"25px"} src="..\Images\charts.svg" alt="icon" />
        <div className="fw-bold">32 lessons</div>

        </div>
        <div className="course__payment d-flex gap-2">
        <img width={"25px"} height={"25px"} src="..\Images\language.svg" alt="icon" />
        <div className="fw-bold">English</div>

        </div>
      </div>

      <hr />
      <div className="course__knowledge d-flex flex-column gap-2">
        <h5 className='course__learn text-dark fw-bold'>What you'll learn :</h5>
        <div className="course__learning__points d-flex flex-column gap-3">
        <div className="course__learning d-flex gap-2">
        <img width={"25px"} height={"25px"} src="..\Images\check.svg" alt="icon" />
        <div className="fw-bold">You will learn something</div>
        </div>

        <div className="course__learning d-flex gap-2">
        <img width={"25px"} height={"25px"} src="..\Images\check.svg" alt="icon" />
        <div className="fw-bold">You will learn something</div>
        </div>

        <div className="course__learning d-flex gap-2">
        <img width={"25px"} height={"25px"} src="..\Images\check.svg" alt="icon" />
        <div className="fw-bold">You will learn something</div>
        </div>
        </div>
      </div>
      </div>



    </div>

        <div className="m-auto card__slider__recommended pt-2">
          <div className='recommended__text d-flex justify-content-between m-auto mt-3' style={{width:"90%"}}>
            <h5 className="recommended">Recommended Courses</h5>
            <div className="see__all">see all</div>
          </div>
          
          <div className='m-auto' style={{width:"90%"}}><CardSlider /></div> </div>
        
    </>
  )
}


export default CourseDetails
