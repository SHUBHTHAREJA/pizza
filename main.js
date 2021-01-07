var names=[
    "shubh thareja",
    "siddh thareja",
    "ridhima thareja",
    "surbhi thareja",
    "manav thareja"
  ];
  var  image=[
    "https://img.freepik.com/free-vector/cute-happy-smiling-child-isolated-white_1308-32243.jpg?size=338&ext=jpg" ,
    "https://webstockreview.net/images/boy-clipart-animated.jpg",
    "https://st.depositphotos.com/1526816/3206/v/950/depositphotos_32060185-stock-illustration-a-cute-little-girl-with.jpg",
    "https://webstockreview.net/images/mother-clipart-cartoon.jpg",
    "https://www.seekpng.com/png/detail/373-3737886_man-clipart-dad-animated-picture-of-father.png"
  ];
  var i=0;

  function nextSlide (){
    document.getElementById("album").src=image[i];
    document.getElementById("names").innerHTML=names[i];
    i++;
  }
