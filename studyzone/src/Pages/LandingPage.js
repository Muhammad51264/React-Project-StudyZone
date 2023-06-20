import React from "react";
import Card from "../Components/Card";
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

  return (
    <>
      {/* backgroundImage&info */}
      <div className="ctn">
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
      </div>
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
      
      {/* Top Categories  */}
    </>
  );
}

export default LandingPage;
