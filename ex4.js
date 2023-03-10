const addCollegeOfBusinessLink = () => {
    const collegeOfBusinessLink = document.createElement("a");
    collegeOfBusinessLink.href = "https://www.csulb.edu/college-of-business";
    collegeOfBusinessLink.textContent = "College of Business";
    
    const linksList = document.getElementById("links");
    const csulbLink = document.getElementById("csulb");
    linksList.insertBefore(collegeOfBusinessLink, isLink.nextSibling);
  }
  
  addCollegeOfBusinessLink();