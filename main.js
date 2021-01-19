
nam =[];
function submit()
{
display_studentarray=[]
for (var j=1;j<=4;j++)
{var all_students=document.getElementById("name_of_the_student_"+j).value
console.log(all_students);
nam.push(all_students)

}

console.log(nam)
var len=nam.length;
console.log(len)

for(var k=0;k<len;k++)
{

display_studentarray.push("name_"+nam[k]+"<br>");
console.log(display_studentarray);










}
document.getElementById("display_name_with_commas").innerHTML=display_studentarray
var remove_commas=display_studentarray.join(" ");
console.log(remove_commas)
document.getElementById("display_name_without_commas").innerHTML=remove_commas



}
