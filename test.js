function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "TopNav") {
      x.className += "responsive";
    } else {
      x.className = "TopNav";
    }
  }

// const function1=(time)=>{
//   setTimeout(()=> console.log(time),time);
// }
// function1(3000);

// const currtime=new Date().getSeconds();
// setTimeout(()=> console.log("waiting"),20000);
// while(currtime+2>=new Date().getSeconds()){
//   console.log("Awaitng");
// }