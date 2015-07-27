// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){

//make array


var results = [];


var search = function(node){
//check for class == className

var parts = node.className.split(" ");

if (parts.indexOf(className) >= 0){

//if className save
  results.push(node);
}


//if not check if Check if Children

//if Children then iterate over children
  for (var i = 0; i<node.children.length; i++){

    search(node.children[i]);
  }
}


search(document.body);

return results;

  // your code here
};
