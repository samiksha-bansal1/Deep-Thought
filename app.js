const contentBox = document.querySelector(".content");
const tasksmode = document.querySelector(".tasksmode");
const taskDes = document.querySelector(".taskDes");
const para = document.createElement("div");
const notifications = document.createElement("div");
notifications.className = "para";
notifications.classList.add("notifications");
notifications.classList.add("boxShadow");
document.querySelector("body").appendChild(notifications);
notifications.innerHTML = `<div class="heading"><div class="nbox">Journey Board:</div> <div class="btnClick"><i class="fa-solid fa-arrow-right "></i></div>
                    </div>`;
para.innerHTML = `<div class="para">
              <div class="bold1">Title:</div>
              <input class="inputPlaceholder" placeholder="" type="text" fdprocessedid="c4p7in">
              <div class="bold1">Content:</div>
              <div class="fieldBox">
                <div class="boxoptions">
                  <div class="options">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Insert</span>
                    <span>Format</span>
                    <span>Tools</span>
                    <span>Table</span>
                    <span>Help</span>
                  </div>
                  <div class="editOptions">
                    <div class="undo">
                      <i class="fa-solid fa-rotate-left"></i>
                    </div>
                    <div class="redo">
                      <i class="fa-solid fa-rotate-right"></i>
                    </div>
                    <div class="zoomOut">
                      <i class="fa-solid fa-expand"></i>
                    </div>
                    <div class="paragraph">Paragraph</div>
                    <div><i class="fa-solid fa-ellipsis"></i></div>
                  </div>
                </div>
              </div>
            </div>`;
para.className = "para";
para.classList.add("boxShadow");
async function fetchJSONData() {
  const url = `./script.json`;
  let response = await fetch(url);
  var data = await response.json();
  console.log(data.tasks[0].assets);
  let assetsF = data.tasks[0].assets;
  let count = data.tasks[0].assets.length;
  const h1 = document.createElement("h3");
  h1.innerHTML = data.tasks[0].task_title;
  tasksmode.appendChild(h1);

  console.log(data.tasks);

  const div = document.createElement("div");
  div.innerHTML = data.tasks[0].task_description;
  const ptr = document.createElement("h4");
  ptr.innerText = data.tasks[0].task_title;
  console.log(ptr);
  notifications.appendChild(ptr);
  tasksmode.appendChild(div);
  for (let i = 0; i < count; i++) {
    additingData(assetsF[i]);
  }
}

fetchJSONData();
function additingData(assets) {
  const div = document.createElement("div");
  div.className = "box";
  div.classList.add("boxShadow");
  const title = document.createElement("div");
  title.className = "heading";
  const description = document.createElement("div");
  description.innerHTML = `<b>Description:</b> ` + assets.asset_description;
  description.className = "description";
  //title:
  title.innerHTML = assets.asset_title;
  title.innerHTML += `<i class="fa-solid fa-info"></i>`;
  //description:
  div.appendChild(title);
  div.appendChild(description);
  const section = document.querySelector("div");
  if (assets.asset_content_type == "article") {
    section.innerHTML = para.innerHTML;
    div.appendChild(section);
    section.className = "para";
    console.log(assets.asset_content_type);
    console.log(assets.asset_description);
  }
  contentBox.appendChild(div);
  const ptr = document.createElement("li");
  ptr.innerText = assets.asset_title;
  console.log(ptr);
  notifications.appendChild(ptr);
}
const btnClick = document.querySelector(".btnClick");
const nbox = document.querySelector(".nbox");
let open = true;
btnClick.addEventListener("click", () => {
  if (open == false) {
    open = true;
    notifications.style.left = "-300px";
    btnClick.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`;
  } else {
    open = false;
    notifications.style.left = "0px";
    btnClick.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;
  }
});
