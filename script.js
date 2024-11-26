
document.getElementById("calcBtn").addEventListener("click", function() {
  console.log("dhas dhas");
    const birthdate = document.getElementById("birthdate").value;
    const result = document.getElementById("result");
  
    if (birthdate) {
      const birthDay = new Date(birthdate);
      const today = new Date();
  
      let age = today.getFullYear() - birthDay.getFullYear();
      const monthDiff = today.getMonth() - birthDay.getMonth();
      const dayDiff = today.getDate() - birthDay.getDate();
  
    
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }
  
      result.textContent = `Your age is ${age} years.`;
    } else {
      result.textContent = "Please enter your birthdate.";
    }
  });
