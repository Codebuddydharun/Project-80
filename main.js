var name_of_the_guest_array=[];
function submit(){
var guest_name_array=document.getElementById("enter_name").value;
name_of_the_guest_array.push(guest_name);
document.getElementById("display_names").innerHTML=name_of_the_guest_array;
var length_of_the_array=name_of_the_guest_array.length;
}
function show_list(){
    var i=name_of_the_guest_array.join("<br>");
    document.getElementById("show_names").innerHTML=i.toString();
}
function sorting(){
    name_of_the_guest_array.sort();
    var i=name_of_the_guest_array.join("<br>");
    document.getElementById("sorted_names").innerHTML=i.toString();
}
function search(){
    var s=document.getElementById("search_names").value;
    var found=0;
    var j;
    for(j=0; j<name_of_the_guest_array.length; j++){
        if(s==name_of_the_guest_array[j]){
            found=found+1;
        }
    }
    document.getElementById("search_names").innerHTML="Name Found"+found+"Time/s";
}