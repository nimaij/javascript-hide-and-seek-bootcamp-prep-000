/*function getFirstSelector(selector){
  return   document.querySelector(selector)[0]
}

function nestedTarget(){
  
}
*/

function increaseRankBy(n){
  const lis = document.getElementById('all').querySelectorAll('ul.ranked-list li')
  
  for (let i=0; i<lis.length; i++){
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n
  }
}

