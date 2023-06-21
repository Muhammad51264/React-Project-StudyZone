import React, { useState } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import CardSlider from '../Components/Card_Slider';
import CoursesInfo from "./CoursesInfo";

const Courses = () => {
 const [filters, setFilters] = useState("");

  // Filter function to filter the courses according to category
  const filterCourses = (category) => {
    setFilters(category);
  };

  const filteredCourses = CoursesInfo.filter((course) => {
    return course.category === filters;
  });

  return (
    <>
      <div className="test"></div>
      <img className="courses-jumbotron" src="Images/jumbotron.jpg" alt="" />

      <div className="container my-5">
        <div className="courses--heading">
          <h3 className="courses--left">Our Courses</h3>
          <div className="dropdown courses--filterbtn">
            <button
              className="btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-sliders"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
              <Link
              onClick={() => filterCourses("programming")}
              className="dropdown-item"
              href="#"
            >
              Programming
            </Link>
              </li>
              <li>
                <Link onClick={() => filterCourses("Marketing")}  className="dropdown-item" href="#">
                  Marketing
                </Link>
              </li>
              <li>
                <Link onClick={() => filterCourses("Design")} className="dropdown-item" href="#">
                  Design
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="cards--container "> {filters
          ? filteredCourses.map((course) => (
            <Card
            key={course.id}
            width="350px"
            imgLink={course.image}
            title={course.courseName}
            desc={course.description}
            price={course.price}
            categoryLogo={course.categoryLogo}
            category={course.category}
            hours={course.hours}
          />
            ))
          : CoursesInfo.map((course) => (
            <Card
            key={course.id}
            width="350px"
            imgLink={course.image}
            title={course.courseName}
            desc={course.description}
            price={course.price}
            categoryLogo={course.categoryLogo}
            category={course.category}
            hours={course.hours}
          />
            ))}
      </div>
      </div>
      <div className="courses--recommended--background">
        <div className="container courses--recommended--heading">
          <h4 className="p-2">
            <b>Recommended for you</b>
          </h4>
          <Link className="p-2 courses--recommended--heading--link" to="#">
            See all..
          </Link>
        </div>
        <div className="container courses--recommended">
         
         <CardSlider />
       
        </div>
      </div>
    </>
  );
};
export default Courses;