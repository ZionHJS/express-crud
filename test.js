var div = document.getElementsByTagName("div");
for(var i=0,len=div.length;i<len;i++){
  function click(n){
      div[n].onclick = function(){
      console.log(n);
    }
  };
  click(i);
}