import 'video.js/dist/video-js.css'; 
import 'video.js/dist/video.js';
import '../Styles/App.css'; 
import { useState } from 'react';
const CourseVideo = () => {
const Quiz =()=>{
  return(
    <div>car</div>
  )
}

const Video=()=>{
  return(<video
    id="my_video_1"
    className="video-js vjs-default-skin"
    controls
    height="500px"
    preload="none"
    poster="../Images/instructorr.jpg"
    data-setup='{ "aspectRatio":"640:400", "playbackRates": [1, 1.5, 2] }'
  >
    <source src="../Images/React_in_100 Seconds.mp4" type="video/mp4" />
    <source src="../Images/React_in_100 Seconds.mp4.webm" type="video/webm" />
  </video>)
}


let [output,setOutput]=useState("video")
const quizClick = () => {
  // Update the state with the desired component for the quiz
  setOutput("quiz");
};


  return (
    <div className='course__courses__tests container row p-4 border m-auto'>
      <div className="video__container col-12 col-xl-8" id='output-container'>
      {output === 'video' ? <Video /> : <Quiz />}
      </div>
      
      <div className="lessons__container col-12 col-xl-4 d-flex justify-content-start flex-column gap-3" style={{overflow:"auto" ,height:"550px"}}>
      <h4>Course content</h4>

      <div className="lesson rounded d-flex justify-content-around flex-wrap p-3">
        <div className="lesson__title__logo d-flex gap-1 align-items-center">

          <div className="course__title"><img src="../Images/book.svg" className='mx-2 mb-1' width={"20px"} height={"20px"} alt="book"/>
<b>Lesson 1 : </b>Introduction to React.</div>
        </div>
        <div className="course__time my-auto">30 min</div>

      </div>


      <div className="lesson rounded d-flex justify-content-around flex-wrap p-3">
        <div className="lesson__title__logo d-flex gap-1 align-items-center">

          <div className="course__title"><img src="../Images/book.svg" className='mx-2 mb-1' width={"20px"} height={"20px"} alt="book"/>
<b>Lesson 2 : </b>Introduction to React.</div>
        </div>
        <div className="course__time my-auto">30 min</div>

      </div>


      <div className="lesson rounded d-flex justify-content-around flex-wrap p-3">
        <div className="lesson__title__logo d-flex gap-1 align-items-center">

          <div className="course__title"><img src="../Images/book.svg" className='mx-2 mb-1' width={"20px"} height={"20px"} alt="book"/>
<b>Lesson 3 : </b>Introduction to React.</div>
        </div>
        <div className="course__time my-auto">30 min</div>

      </div>

      <div className="lesson rounded d-flex justify-content-around flex-wrap p-3">
        <div className="lesson__title__logo d-flex gap-1 align-items-center">

          <div className="course__title"><img src="../Images/book.svg" className='mx-2 mb-1' width={"20px"} height={"20px"} alt="book"/>
<b>Lesson 4 : </b>Introduction to React.</div>
        </div>
        <div className="course__time my-auto">30 min</div>

      </div>

      <div className="lesson rounded d-flex justify-content-around flex-wrap p-3">
        <div className="lesson__title__logo d-flex gap-1 align-items-center">

          <div className="course__title"><img src="../Images/book.svg" className='mx-2 mb-1' width={"20px"} height={"20px"} alt="book"/>
<b>Lesson 5 : </b>Introduction to React.</div>
        </div>
        <div className="course__time my-auto">30 min</div>

      </div>

      <div className="lesson rounded d-flex justify-content-around flex-wrap p-3">
        <div className="lesson__title__logo d-flex gap-1 align-items-center">

          <div className="course__title"><img src="../Images/book.svg" className='mx-2 mb-1' width={"20px"} height={"20px"} alt="book"/>
<b>Lesson 6 : </b>Introduction to React.</div>
        </div>
        <div className="course__time my-auto">30 min</div>

      </div>

      <div className="lesson rounded d-flex justify-content-around flex-wrap p-3">
        <div className="lesson__title__logo d-flex gap-1 align-items-center">

          <div className="course__title"><img src="../Images/book.svg" className='mx-2 mb-1' width={"20px"} height={"20px"} alt="book"/>
<b>Lesson 7 : </b>Introduction to React.</div>
        </div>
        <div className="course__time my-auto">30 min</div>

      </div>

      <div className="lesson rounded d-flex justify-content-around flex-wrap p-3">
        <div className="lesson__title__logo d-flex gap-1 align-items-center">

          <div className="course__title"><img src="../Images/book.svg" className='mx-2 mb-1' width={"20px"} height={"20px"} alt="book"/>
<b>Lesson 8 : </b>Introduction to React.</div>
        </div>
        <div className="course__time my-auto">30 min</div>

      </div>
      <div className="lesson Quiz rounded d-flex justify-content-around flex-wrap p-3" onClick={quizClick}>
        <div className="lesson__title__logo d-flex gap-1 align-items-center">

          <div className="course__title">
<b>Quiz 1: </b></div>
        </div>


      </div>
      </div>
      


    </div>
  );
};

export default CourseVideo;
