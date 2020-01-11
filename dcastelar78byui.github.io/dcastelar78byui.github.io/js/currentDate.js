  const options= {year:"numeric"};
          
 document.getElementById('currentDate').textContent=new Date().toLocaleDateString("en-US", options);

 document.getElementById('lastModified').textContent=document.lastModified;
// Copy from Heather Stratton Page
