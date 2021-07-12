const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const videoComments = document.querySelector(".video__comments ul");
const delBtn = document.querySelectorAll(".deleteBtn");

const deleteComment = async (event) => {
  let btn = event.target;
  let deleteForm = btn.parentNode;
  const id = deleteForm.dataset.id; //commentId

  const response = await fetch(`/wetube/api/comment/${id}`, {
    method: "DELETE",
  });
  if (response.status === 200) {
    videoComments.removeChild(deleteForm);
  }
};

const addComment = (text, id) => {
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";

  const span = document.createElement("span");
  span.innerText = ` ${text}`;

  const span2 = document.createElement("span");
  span2.innerText = "❌";
  span2.style.cursor = "pointer";
  span2.className = "deleteBtn";
  span2.addEventListener("click", deleteComment);

  const newComment = document.createElement("li");
  newComment.className = "video__comment";
  newComment.dataset.id = id;
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);

  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const videoId = videoContainer.dataset.videoid;
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  if (text === "") {
    return;
  }
  const response = await fetch(`/wetube/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

if (form) form.addEventListener("submit", handleSubmit);

delBtn.forEach((btn) => btn.addEventListener("click", deleteComment));
