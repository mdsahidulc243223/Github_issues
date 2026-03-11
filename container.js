const loadPost=()=>{
const url="https://phi-lab-server.vercel.app/api/v1/lab/issues"
fetch(url)
.then(res=>res.json())
.then((data)=>displayPost(data.data));
}
const displayPost=(posts)=>{
const postContainer=document.getElementById("container");
container.innerText="";
posts.forEach((post)=>{
const postCard=document.createElement("div");
postCard.innerHTML=`<div class="post-card bg-white ">
<div class="flex justify-between items-center">
    <img src="./assets/Open-Status.png">
    <h2 class="btn bg-amber-100 text-amber-700">${post.priority}</h2>
    </div>
    <h2 id="title" class="text-2xl font-bold">Fix navigation menu on mobile devices</h2>
    <P>The navigation menu doesn't collapse properly on mobile devices...</P>
    <h2 class="btn bg-secondary-content text-error"> <i class="fa-solid fa-bug"></i>Bug</h2>
    <h2 class="btn bg-white text-error-content"> <img class="w-4 h-4" src="./assets/Aperture.png">Help Wanted</h2>
    <hr>
    <P>#1by john_doe</P><br>
    <p>1/15/2024</p>
    `;
postContainer.appendChild(postCard);
});
}
loadPost();