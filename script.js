Cnt = 0;
//alert("Website under construction")
function addRow(tableID){
	Cnt += 1;
	var table = document.getElementById(tableID);

	var rowCnt = table.rows.length;
	var c = document.getElementById("credit").value;
	var g = document.getElementById("grade").value.toUpperCase();
	if(c==""){
		alert("Credits can't be left empty!");
		return;
	}
	if(g==""){
		alert("Grades can't be empty!");
		return;
	}
	var newRow = table.insertRow(rowCnt);

	var codeCell = newRow.insertCell();//for course code
	codeCell.innerHTML = document.getElementById("course").value.toUpperCase();

	var creditsCell = newRow.insertCell();

	creditsCell.innerHTML = c;

	var gradeCell = newRow.insertCell();
	gradeCell.innerHTML = g;

	var delRef = newRow.insertCell();
	var button = document.createElement('input');
	button.setAttribute('type','button');
	button.setAttribute('value','Remove');
	button.setAttribute('id',"child"+Cnt);
	button.setAttribute('onclick', 'deleteRow(id)');
	delRef.append(button);
}
function deleteRow(row_id){
	console.log(row_id)
	table = document.getElementById("credit_grade");
	var n = table.rows.length;
	for(i=0;i<n;i++){
		if(table.rows[i].cells.item(3).firstChild.id==row_id){
			table.rows[i].remove();
			return;
		}
	}
	return -1;
}
function getPoint(grade) {
	if(grade == "O") return 10;
	if(grade == "A") return 9;
	if(grade == "B") return 8;
	if(grade == "C") return 7;
	if(grade == "D") return 6;
	if(grade == "P") return 5;
	return 0;
}
function getCGPA(tableID) {
	tbl = document.getElementById(tableID);
	n = tbl.rows.length;
	credits = [];
	grades = [];
	for(i=1;i<n;i++){
		credits.push(tbl.rows[i].cells.item(1).innerHTML);
		grades.push(tbl.rows[i].cells.item(2).innerHTML);
	}
	console.log(credits);
	console.log(grades);
	sum = 0;
	sum_credits = 0;
	for(i=0;i<credits.length;i++){
		sum += credits[i]*getPoint(grades[i]);
		sum_credits += parseInt(credits[i]);
	}
	console.log("sum="+sum);
	console.log("sum_credits="+sum_credits);
	CGPA = sum/sum_credits;
	CGPA = Number((CGPA).toFixed(2));
	document.getElementById("store-cgpa").innerHTML = CGPA;
	return CGPA;	
}
