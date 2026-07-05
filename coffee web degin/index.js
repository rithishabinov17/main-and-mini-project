
  function openContact(){
  window.location.href = "contact.html";
}
 function orderBtn(){
  window.location.href = "order.html";
}
// casual
    let ima= ["./image/c1.jpg","./image/c2.jpg","./image/c3.jpg","img/c4.jpg"];
    i=0;

    document.getElementById("im").src=ima[i];

    function pre() {
        i--;
        if (i<0) {
            i=ima.length-1; // Reset to the beginning
        }
        document.getElementById("im").src=im[i];
    }

    function next() {
        i++;;
        if (i>ima.length-1) {
            i=0; // Wrap around to the last image
        }
        document.getElementById("im").src=im[i]
      }
      setInterval(next,5000);
    //   selection
       
  function optionClick(value) {
      if (value !== "") {
        alert("OK 👍 You selected " + value);
      }
    }