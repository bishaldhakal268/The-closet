
 
window.onload=function(){
  
  var cSizeY = 650, cSizeX = 750, imgSizeBig = 350, imgSizeSmall = 100, ww, wh, xB = 0, yB, imgSize, bigElement = 4;
    
    var elements = [
      "../images/sale/1.jpg",
      "../images/sale/2.jpg",
      "../images/sale/3.jpg",
      "../images/sale/4.jpg",
      "../images/sale/5.jpg",
      "../images/sale/6.jpg",
      "../images/sale/7.jpg",
      "../images/sale/8.jpg",
      "../images/sale/9.jpg",
      
      
    ];
    
    ww = window.innerWidth;
    wh = window.innerHeight;
        
    var moveB = function(moveType, arr){
      if (moveType == "up"){
        element = arr[0];
        arr.splice(0,1);
        arr.splice(arr.length ,0,element);
      }
      if (moveType == "down") {
        element = arr[arr.length-1];
        arr.splice(arr.length - 1,1);
        arr.splice(0,0,element);
      }
      return arr;
    }
        
        // this is for the arrows
        var left = d3.select("#left").on("click", function(){
            xB = 0;
            elements = moveB("up", elements);            
            d3.range(9).map(drawB);
        });
        var right = d3.select("#right").on("click", function(){
            xB = 0;
            elements = moveB("down", elements);
            d3.range(9).map(drawB);
        });
    
    var bClick = function() {
      xB = 0;
      var id = +d3.select(this).attr("id").replace("id","");
      if(id > bigElement){
        elements = moveB("up", elements);
      }
      if(id < bigElement){
        elements = moveB("down", elements);
      }
      d3.range(9).map(drawB);
      return;
    }
    
    var drawB = function(d,i) {
      if (i == bigElement) {
        yB = cSizeY / 2 - (imgSizeBig - imgSizeSmall / 2);
        imgSize = imgSizeBig;
      }
      else {
        yB = cSizeY / 2 - imgSizeSmall;
        imgSize = imgSizeSmall;
      }
            
      var b = images
          .select("#id" + i)
          .attr("class", "rect")
          .attr("xlink:href", elements[i])
          .attr("x", xB + "px")
          .attr("y", yB + "px")
          .attr("width", imgSize + "px")
          .attr("height", imgSize + "px")
          .on("click", bClick);
      xB = (i == bigElement) ? xB + imgSizeBig : xB + imgSizeSmall;
      return;
    }
    
    var images = d3.select("#images")
    .append("svg")
    .style("margin-top",  "100px")
    .style("margin-left", "0px")
    .style("width", "" + 1300 +  "px")
    .style("height", "" + 450 + "px");
  
    d3.range(9).map(function(d,i){images.append("svg:image").attr("id","id" + i)});
    d3.range(9).map(drawB);
    
};