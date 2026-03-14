let allIssues=[];
const loadPost=()=>{
const url="https://phi-lab-server.vercel.app/api/v1/lab/issues"
fetch(url)
.then(res=>res.json())
.then((data)=>{
    allIssues=(data.data);
    displayPost(allIssues);
})
};

const displayPost=(posts)=>{
const postContainer=document.getElementById("container");
postContainer.innerHTML="";
posts.forEach((post)=>{
const borderColor = post.status === "open" ? "green" : "red";
const statusIcon = post.status === "open"
? "./assets/Open-Status.png"
:"./assets/Closed- Status .png";
const postCard=document.createElement("div");
postCard.innerHTML=`
 <div class="post-card bg-white border-5 p-3 rounded-lg" style="border-color:${borderColor}">
<div class="flex justify-between items-center">
    <img src="${statusIcon}">
    <h2 class="btn bg-amber-100 text-amber-700">${post.priority}</h2>
    </div>
    <h2 id="title" class="text-2xl font-bold">Fix navigation menu on mobile devices</h2>
    <P>The navigation menu doesn't collapse properly on mobile devices...</P>
    <h2 class="btn bg-secondary-content text-error"> <i class="fa-solid fa-bug"></i>Bug</h2>
    <h2 class="btn bg-white text-error-content"> <img class="w-4 h-4" src="./assets/Aperture.png">Help Wanted</h2>
    <hr>
    <p>#${post.id} by ${post.author}</p>
    <p>1/15/2024</p>
    </div>
    `;
postContainer.appendChild(postCard);
});
}
loadPost();
// btn color change ///
const cngBtnColor = (id) => {

document.getElementById("All-btn").classList.remove("bg-black","text-white");
document.getElementById("Open-btn").classList.remove("bg-black","text-white");
document.getElementById("Close-btn").classList.remove("bg-black","text-white");
document.getElementById(id).classList.add("bg-black","text-white");

}
// toggle function  /////
const toggleStyle = (status) => {
if(status === "All"){
displayPost(allIssues);
cngBtnColor("All-btn");
}

else if(status === "Open"){
const openPosts = allIssues.filter(post => post.status === "open");
console.log(openPosts.length);
count.innerHTML=(openPosts.length)+' '+'Issues';
displayPost(openPosts);
cngBtnColor("Open-btn");
}
else if(status === "Closed"){
const closedPosts = allIssues.filter(post => post.status === "closed");
console.log(closedPosts.length);
count.innerHTML=(closedPosts.length)+' '+'Issues';
displayPost(closedPosts);
cngBtnColor("Close-btn");
}
}
