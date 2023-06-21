import React from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
function LandingPage() {
  const allCourses_landing_page = [
    {
      id: 1,
      title: "Introduction to Programming",
      description:
        "Learn the fundamentals of programming with a focus on problem-solving and logic.",
      instructor: "John Smith",
      duration: "6 weeks",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Build dynamic and responsive websites using HTML, CSS, and JavaScript.",
      instructor: "Jane Doe",
      duration: "8 weeks",
    },
    {
      id: 3,
      title: "Data Science",
      description:
        "Explore the field of data science, including data analysis and machine learning.",
      instructor: "Alex Johnson",
      duration: "10 weeks",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "Create mobile applications for iOS and Android using popular frameworks.",
      instructor: "Sarah Adams",
      duration: "12 weeks",
    },
  ];
  const success = [
    { num: "15K", desc: "Students" },
    { num: "75%", desc: "TotalSuccess" },
    { num: "35%", desc: "Main question" },
    { num: "26%", desc: "Chief experts" },
    { num: "16%", desc: "Years of experience" },
  ];
  return (
    <>
      {/* backgroundImage&info */}
      <div className="container_img-slide">
        <div>
          <div className=" textBox_header_landing_page">
            <h2 className="card-title " id="title_in_bg">
              Online is now
            </h2>
            <h2>much easier</h2>
            <span className="card-text brief_bg">
              StudyZone is an interesting platform that will teach
            </span>
            <p className=" brief_bg">you in more an interactive way</p>
            <button
              className="btn btn-secondary "
              id="btn_landing_page_Join_for_free"
              type="button"
            >
              Join for free
            </button>
          </div>
        </div>
        <div></div>
      </div>
      {/* <div className="ctn">
        <img
          src="Images/header_width_bg.png"
          className="card-img bg_landing_page "
          alt="Stony Beach"
        />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className=" textBox_header_landing_page">
                <h2 className="card-title " id="title_in_bg">
                  Online is now
                </h2>
                <h2>much easier</h2>
                <span className="card-text brief_bg">
                  StudyZone is an interesting platform that will teach
                </span>
                <p className=" brief_bg">you in more an interactive way</p>
                <button
                  className="btn btn-secondary "
                  id="btn_landing_page_Join_for_free"
                  type="button"
                >
                  Join for free
                </button>
              </div>
            </div>
            <div className="col">
              <div className="girl_img ">
                <img
                  src="Images/girl_landing_page.png"
                  className="card-img border_girl_img"
                  alt="Stony Beach"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* /backgroundImage&info */}
      {/* A Broad Selection Of Courses. */}
      <div className="broad_selection">
        <h4 className="color_broad_selection"> </h4>
        <span>
          StudyZone is one powerful online software suite that combines all the
          tools
        </span>
        <p>needed to run a successful school or office.</p>
      </div>
      {/*/ A Broad Selection Of Courses. */}

      {/* All courses  */}

      <div className="container">
        <button
          className="btn btn-secondary "
          id="btn_all_courses"
          type="button"
        >
          All courses
        </button>
      </div>

      <div className="container all_courses_card_landing_page">
        {allCourses_landing_page.map((allCourses_landing_page) => (
          <Card
            key={allCourses_landing_page.id}
            title={allCourses_landing_page.title}
            desc={allCourses_landing_page.description}
          />
        ))}
      </div>
      {/* /All courses  */}

      {/* /Top Categories  */}

      <section className="topCategories_section">
        <div className="row">
          <h2 className="section_heading_topCategories"></h2>
        </div>
        <div className="row topCategories_landing_page">
          <div className="column topCategories_col">
            <div className="card  mx-auto card_topCategories">
              <div className="icon-wrapper">
                <i className="fa-solid fa-file-invoice-dollar"></i>{" "}
              </div>
              <h4 className="card_title_topCategories">Service Heading</h4>
              <p className="desc_of_topCategories">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column topCategories_col">
            <div className="card  mx-auto card_topCategories">
              <div className="icon-wrapper">
                <i className="fa-solid fa-calendar-days"></i>{" "}
              </div>
              <h4 className="card_title_topCategories">Service Heading</h4>
              <p className="desc_of_topCategories">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column topCategories_col">
            <div className="card  mx-auto card_topCategories">
              <div className="icon-wrapper">
                <i className="fas fa-wrench"></i>
              </div>
              <h4 className="card_title_topCategories">Service Heading</h4>
              <p className="desc_of_topCategories">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column topCategories_col">
            <div className="card mx-auto card_topCategories">
              <div className="icon-wrapper">
                <i className="fas fa-truck-pickup"></i>
              </div>
              <h4 className="card_title_topCategories">Service Heading</h4>
              <p className="desc_of_topCategories">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories  */}
      {/* what is studyZone */}

      <div className="container text-center">
        <div className="what_SZ">
          <h2 className="What_is_StudyZone_section"></h2>
        </div>
        <div className="about_us_sz">
          <p className="what_sz_about">
            SZ is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className="row">
          <div className="col instructor_img">
            <img
              src="Images/instructorr.jpg"
              className="aboutUs_img"
              alt="..."
            />
            <h5 className="instructor_text">FOR INSTRUCTORS</h5>
          </div>
          <div className="col instructor_img">
            <img src="Images/student.png" className="aboutUs_img" alt="..." />
            <h5 className="instructor_text">For STUDENTS</h5>
          </div>
        </div>
      </div>
      {/* what is studyZone */}

      {/* Our success */}

      <div className="container text-center our_success_container">
        <div className="container what_SZ ">
          <h2 className="our_success"></h2>
        </div>
        <div className="about_us_sz">
          <p className="what_sz_about">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.{" "}
          </p>
        </div>
      </div>
      <div className="num_of_succses">
        {success.map((success,id) => (
          <div key={id}>
 <h1 >{success.num}</h1>
            <p>{success.desc}</p>      
              </div>
          
        ))}
      </div>

      {/* /Our success */}
  <Footer/>

    </>
  );
}

export default LandingPage;
