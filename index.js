


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('move-left');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.active-left');
  
  for (let elm of elements) {
    observer.observe(elm);
  }




  function onEntryRight(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('move-right');
      }
    });
  }
  
  let options2 = {
    threshold: [0.5] };
  let observer2 = new IntersectionObserver(onEntryRight, options2);
  let elements2 = document.querySelectorAll('.active-right');
  
  for (let elm of elements2) {
    observer2.observe(elm);
  }
  


  function onEntryAppear1(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('move-appear1');
   
      }
    });
  }
  
  let options3 = {
    threshold: [0.5] };
  let observer3 = new IntersectionObserver(onEntryAppear1, options3);
  let elements3 = document.querySelectorAll('.active-appear1');
  
  for (let elm of elements3) {
    observer3.observe(elm);
  }



  function onEntryAppear2(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('move-appear2');
   
      }
    });
  }
  
  let options4 = {
    threshold: [0.5] };
  let observer4 = new IntersectionObserver(onEntryAppear2, options4);
  let elements4 = document.querySelectorAll('.active-appear2');
  
  for (let elm of elements4) {
    observer4.observe(elm);
  }

  function onEntryAppear3(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('move-appear3');
   
      }
    });
  }
  
  let options5 = {
    threshold: [0.5] };
  let observer5 = new IntersectionObserver(onEntryAppear3, options5);
  let elements5 = document.querySelectorAll('.active-appear3');
  
  for (let elm of elements5) {
    observer5.observe(elm);
  }

  function onEntryAppear4(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('move-appear4');
   
      }
    });
  }
  
  let options6 = {
    threshold: [0.5] };
  let observer6 = new IntersectionObserver(onEntryAppear4, options6);
  let elements6 = document.querySelectorAll('.active-appear4');
  
  for (let elm of elements6) {
    observer6.observe(elm);
  }