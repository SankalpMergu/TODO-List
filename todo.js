
showtask();

var button = document.querySelector("#btn");
button.addEventListener('click',function taskadder(e) {
 

    let tasknm = document.getElementById('listfield').value;
	let date = document.getElementById('datefield').value;
	

	if(tasknm.trim() == '' && date == ''){
		alert("please add the Task and date");
	}else if(Number.isInteger(parseInt(tasknm))){
			 
	      	alert("Task should be written in alphabetic");
	}else{
		 let webtask = localStorage.getItem("localitems");
		 if(webtask == null){
		 	taskobj = [];

		 }else{
		 	taskobj = JSON.parse(webtask);//local storage storage in string format so convert into object
		 	
		 }
		 const jsobj = {
		 	name : tasknm,
		 	datet : date,
            selected : false
		 }
		 taskobj.push(jsobj);
		 localStorage.setItem("localitems",JSON.stringify(taskobj));
		 let tasknm1 = document.getElementById('listfield');
		 tasknm1.value = "";

		 showtask();

	}
});
 
 function showtask(rthis) {
 	let webtask = localStorage.getItem("localitems");
 	if(webtask == null){
 		taskobj = [];

 	}else{
 		taskobj = JSON.parse(webtask);
 	}
 	let html = '';
 	let tasktable = document.getElementById("tasktable");
 	//let adddate = document.getElementById("datefield");
 	taskobj.forEach((item,index)=>{
 		let adddate = document.getElementById("datefield");
 	  if(item.selected === true){
 		html += `<tr class="rowid">
                  <td>${item.name}</td>
                  <td>${item.datet}</td>
                  <td><i onclick="checktask(this,${index})" class="far fa-check-circle"></i></td>
                  <td><i id="trash" onclick="deletetask(${index})" class="fas fa-trash"></i></td>
               </tr>`
            }else{
            	html += `<tr>
                  <td>${item.name}</td>
                  <td>${item.datet}</td>
                  <td><i onclick="checktask(this,${index})" class="far fa-check-circle"></i></td>
                  <td><i id="trash" onclick="deletetask(${index})" class="fas fa-trash"></i></td>
               </tr>`
            }
 	});

 	tasktable.innerHTML = html;
 }
  
function checktask(othis,namw){

	//console.log(namw);
 let webtask = localStorage.getItem("localitems");
 	if(webtask == null){
 		taskobj = [];

 	}else{
 		taskobj = JSON.parse(webtask);
 	}
 	  taskobj[namw].selected = true;
 	  localStorage.setItem("localitems",JSON.stringify(taskobj));
 	  othis.parentNode.parentNode.style.textDecoration='line-through';
}
	   // rowid[i].cell[2].classList.add('completed-remove');
// const check = document.getElementsByClassName("far fa-check-circle");
// for(let i=0;i<check.length;i++){
// check[i].addEventListener('click',function(e){
// 	const completeid = document.getElementsByClassName("completeid");
// 	if(e.target.parentElement.parentElement.children[2].textContent == ''){
// 		 completeid[i].innerHTML = 'Completed';
//    var rows = e.target.parentElement.parentElement;
//    rows.classList.add('line-through');//creatng the line-through style in css and adding to parentelement
//    check[i].style.color="grey";
//    }
   // else{
   // 	var column = e.target.parentElement.parentElement;
   //      column.classList.remove('line-through');
   //       var removecompleted = e.target.parentElement.parentElement.children[2];
   //      removecompleted.classList.add('completed-remove');

   //      // const rowid = document.getElementsByClassName("rowid");

   // }

// });
// }

 
 function deletetask(index){
	 let webtask = localStorage.getItem("localitems");
	 let taskobj = JSON.parse(webtask);
	 taskobj.splice(index,1);
	 
     localStorage.setItem("localitems",JSON.stringify(taskobj));
     showtask();
 
}

let deletealltask = document.getElementById("deleteall");
deletealltask.addEventListener('click',function(){
	let webtask = localStorage.getItem("localitems");
	let taskobj = JSON.parse(webtask);
	if(taskobj != 0){
		taskobj = [];
	}else{
		taskobj= JSON.parse(webtask);
		taskobj =[];
	}
	localStorage.setItem("localitems",JSON.stringify(taskobj));
     showtask();
});





 