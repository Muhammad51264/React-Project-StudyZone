import React from 'react'
import CardSlider from '../Components/Card_Slider';
import CourseBeforePayment from '../Components/CourseBeforePayment';
import CourseAfterPayment from '../Components/CourseAfterPayment';
import { useParams } from 'react-router-dom';
import CoursesInfo from '../Pages/CoursesInfo';

const CourseDetails = () => {
  let id=useParams().courseId;
    let course=CoursesInfo.find(course=>course.id===id);
    console.log("dddddd")
    console.log(course)
  console.log(localStorage.getItem("coursePayed"));
  if (localStorage.getItem("coursePayed") === null) {
    localStorage.setItem("coursePayed", "false");
  }
  
  return (
    <>

    {localStorage.getItem("coursePayed") === 'true'&& <CourseAfterPayment course={course}/>}
    {localStorage.getItem("coursePayed") === 'false'&& <CourseBeforePayment course={course}/>}

        <div className="m-auto card__slider__recommended pt-2">
          <div className='recommended__text d-flex justify-content-between m-auto mt-3' style={{width:"90%"}}>
          <h4 className="p-2">
            <b>Recommended for you</b>
          </h4>            <div className="see__all">see all</div>
          </div>
          
          <div className='m-auto' style={{width:"90%"}}><CardSlider /></div> </div>
        

    
    </>
  )
}


export default CourseDetails
