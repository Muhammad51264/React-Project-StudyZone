import React from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import CardSlider from '../Components/Card_Slider';

import { useState } from "react";

const Courses = () => {
  const courses = [
    {
      title: "Course 1",
      desc: "Description of Course 1",
      price: "$49",
      categoryLogo: "Images/design.svg",
      category: "Design",
      hours: "30 Hours",
    },
    {
      title: "Course 2",
      desc: "Description of Course 2",
      price: "$59",
      categoryLogo: "Images/programming.svg",
      category: "Programming",
      hours: "45 Hours",
    },
    {
      title: "Course 3",
      desc: "Description of Course 2",
      price: "$59",
      categoryLogo: "Images/programming.svg",
      category: "Programming",
      hours: "45 Hours",
    },
    {
      title: "Course 4",
      desc: "Description of Course 2",
      price: "$59",
      categoryLogo: "Images/programming.svg",
      category: "Programming",
      hours: "45 Hours",
    },
    {
      title: "Course 5",
      desc: "Description of Course 1",
      price: "$49",
      categoryLogo: "Images/design.svg",
      category: "Design",
      hours: "30 Hours",
    },
    {
      title: "Course 6",
      desc: "Description of Course 2",
      price: "$59",
      categoryLogo: "Images/programming.svg",
      category: "Programming",
      hours: "45 Hours",
    },
    {
      title: "Course 7",
      desc: "Description of Course 2",
      price: "$59",
      categoryLogo: "Images/programming.svg",
      category: "Programming",
      hours: "45 Hours",
    },
    {
      title: "Course 8",
      desc: "Description of Course 2",
      price: "$59",
      categoryLogo: "Images/programming.svg",
      category: "Programming",
      hours: "45 Hours",
    },
    {
      title: "Course 9",
      desc: "Description of Course 2",
      price: "$59",
      categoryLogo: "Images/programming.svg",
      category: "Programming",
      hours: "45 Hours",
    },
  ];

  // recomended section
  const recommendedCourses = courses.slice(0, 4);

  const [filters, setFilters] = useState("");
// filter function to filter the courses according to hours
  const filter1 = () => {
    setFilters("45 Hours");
  };

  const filteredCourses = courses.filter((course) => {
    return course.hours === filters;
  });

  const filter2 = () => {
    setFilters("30 Hours");
  };

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
                <Link onClick={filter1} className="dropdown-item" href="#">
                  45 hours
                </Link>
              </li>
              <li>
                <Link onClick={filter2} className="dropdown-item" href="#">
                  30 hours
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="cards--container">
          {filters
            ? filteredCourses.map((course, index) => (
                <Card
                  key={index}
                  width="350px"
                  title={course.title}
                  desc={course.desc}
                  price={course.price}
                  categoryLogo={course.categoryLogo}
                  category={course.category}
                  hours={course.hours}
                />
              ))
            : courses.map((course, index) => (
                <Card
                  key={index}
                  width="350px"
                  title={course.title}
                  desc={course.desc}
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
