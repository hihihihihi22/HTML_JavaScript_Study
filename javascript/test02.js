//  test02.js
/*
    html요소에 일어나는 이벤트 종류

    클릭하면 => click
    마우스를 커서를 올리면 => mouseover
    마우스 커서가 요소를 벗어나면 => mouseout
    마우스를 클릭하면 => mousedown
    마우스를 클릭후 때면 => mouseup
    포커스가 오면 => focus
    포커스를 잃으면 => blur ... 등등
// */
// <button>눌러보셈</button>

// document.querySelector("button").addEventListener("click",function(){
//     console.log("hi");
// })

// <button id="myBtn">눌러보셈</button>

// document.querySelector("#myBtn").addEventListener("click",function(){

// })

// <div id="one"></div>
// document.querySelector("#one").addEventListener("mouseover",function()=>{});

{/* <input id="inputMsg"></input>
document.querySelector("#inputMsg").value="안녕하세요"; */}

<p id="one"></p>
doucument.querySelector("#one").innerText="p1 입니다";