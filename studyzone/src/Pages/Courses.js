import React from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom';



const Courses = () => {
   
  const courses = [
    {
      title: 'Course 1',
      desc: 'Description of Course 1',
      price: '$49',
      categoryLogo: 'Images/design.svg',
      category: 'Design',
      hours: '30 Hours',
      
    },
    {
      title: 'Course 2',
      desc: 'Description of Course 2',
      price: '$59',
      categoryLogo: 'Images/programming.svg',
      category: 'Programming',
      hours: '45 Hours',
     
    },
    {
      title: 'Course 3',
      desc: 'Description of Course 2',
      price: '$59',
      categoryLogo: 'Images/programming.svg',
      category: 'Programming',
      hours: '45 Hours',
     
    },
    {
      title: 'Course 4',
      desc: 'Description of Course 2',
      price: '$59',
      categoryLogo: 'Images/programming.svg',
      category: 'Programming',
      hours: '45 Hours',
     
    },
    {
      title: 'Course 5',
      desc: 'Description of Course 1',
      price: '$49',
      categoryLogo: 'Images/design.svg',
      category: 'Design',
      hours: '30 Hours',
      
    },
    {
      title: 'Course 6',
      desc: 'Description of Course 2',
      price: '$59',
      categoryLogo: 'Images/programming.svg',
      category: 'Programming',
      hours: '45 Hours',
     
    },
    {
      title: 'Course 7',
      desc: 'Description of Course 2',
      price: '$59',
      categoryLogo: 'Images/programming.svg',
      category: 'Programming',
      hours: '45 Hours',
     
    },
    {
      title: 'Course 8',
      desc: 'Description of Course 2',
      price: '$59',
      categoryLogo: 'Images/programming.svg',
      category: 'Programming',
      hours: '45 Hours',
     
    },
    {
      title: 'Course 9',
      desc: 'Description of Course 2',
      price: '$59',
      categoryLogo: 'Images/programming.svg',
      category: 'Programming',
      hours: '45 Hours',
     
    },
   
  ];
  const recommendedCourses = courses.slice(0, 4);
  return (
    <>

      <img className='courses-jumbotron' src="Images/search-courses.jpg" alt="" />
  
    <div className='container my-5'>
      <div className='courses--heading'>
        <h3 className='courses--left'>Our Courses</h3>
        <div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li>
      <Link to='#' className="dropdown-item" href="#">
        Action
      </Link>
    </li>
    <li>
      <Link to='#' className="dropdown-item" href="#">
        Another action
      </Link>
    </li>
    <li>
      <Link to='#' className="dropdown-item" href="#">
        Something else here
      </Link>
    </li>
  </ul>
</div>
      </div>
      <div className="cards--container">
      {courses.map((course, index) => (
        <Card
          key={index}
          width='350px'
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
    <div className=" courses--recommended">
          {recommendedCourses.map((course, index) => (
            <Card
              key={index}
              width='300px'
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
    </>
    
  );
};

export default Courses
