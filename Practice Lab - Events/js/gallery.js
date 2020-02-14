/*Name this external file gallery.js*/

function upDate(previewPic){
       let source = previewPic.getAttribute("src");
       let alt = previewPic.getAttribute("alt");
       let image = document.getElementById("image");
       image.style.backgroundImage = "url('" + source + "')";
       image.innerHTML = alt;
     
       }
   
       function unDo(){
      document.getElementById("image").style.backgroundImage = "url('')";
      document.getElementById("image").innerHTML = "Hover over an image below to display here.";
       }