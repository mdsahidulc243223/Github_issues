const loadPost=()=>{
const url="https://phi-lab-server.vercel.app/api/v1/lab/issues"
fetch(url)
.then(res=>res.json())
.then((data)=>displayPost(data));
}
// {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'}
const displayPost=(posts)=>{
    // 1.get the  container and empty the container
const postContainer=document.getElementById("container");
container.innerText="";
posts.forEach((post)=>{
// 2.create element
const postCard=document.createElement("div");
// {
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },
postCard.innerHTML=`
<div class="post-card">
    <h2 class="btn">${post.priority}</h2>
    <h2 id="title" class="text-2xl font-bold">${post.title}</h2>
    <P>${post.description}</P>
    <h2 class="btn">Bug</h2>
    <h2 class="btn">Help Wanted</h2>
    <P>#1by john_doe</P><br>
    <p>1/15/2024</p>    
`;

// 3. add to the container
container.appendChild(postCard);
});
}
loadPost(); ///ata korle button e ar click kora lagbe na card auto display hobe