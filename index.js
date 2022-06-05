/*
There are 3  types of DOM
1.Core Dom
2.XML Dom
3.HTML DOm->
#Object
##Properties
##Method
##Event
*/
//Selecting Element
//1.document.getElementById()
let d_get_1=document.getElementById('id_1')
d_get_1.innerHTML="I am a Software Enginner";
d_get_1.style.color="yellow"
d_get_1.style.backgroundColor="green";
d_get_1.style.fontSize="50px";

//2.document.getElementsByClassName()
let class_get_2=document.
getElementsByClassName('class_1')[0];
class_get_2.innerHTML="I am working as a softwre Enginner";
let class_get_3=document.
getElementsByClassName('class_1')[1];
class_get_3.innerHTML="I am also a Web Application Developer"
//3.document.getElementsByName()
let Heading5=document.getElementsByName("Heading_5")[0];
Heading5.innerHTML="Heading5 is Calling";
//4.document.getElementsByTagName()
let getTagNameIs=document.getElementsByTagName('span')[0];
getTagNameIs.innerHTML="This is Calling tag-name";
getTagNameIs.color="pink";
getTagNameIs.style.textDecoration="Underline"
getTagNameIs.style.fontWeight="bolder";
getTagNameIs.style.fontSize="40px"
//5.document.Selector()
let my_QuerySelectorIs=document.querySelector(".class_1");
my_QuerySelectorIs.style.backgroundColor="black";
my_QuerySelectorIs.style.color="white";
my_QuerySelectorIs.style.padding="10px 20px";
//6.document.querySelectorAll
let querySecetion_all=document.querySelectorAll("h5")[3];
querySecetion_all.innerHTML="This is my h5 "
querySecetion_all.style.color="yellow";
querySecetion_all.style.backgroundColor="green";