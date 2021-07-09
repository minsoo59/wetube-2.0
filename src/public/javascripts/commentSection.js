const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const videoComments = document.querySelector(".video__comments ul");
const newComment = document.createElement("li");
const icon = document.createElement("i");
const span = document.createElement("span");
const span2 = document.createElement("span");

const deleteComment = async (event) => {
  let btn = event.target;
  let deleteForm = btn.parentNode;
  const id = deleteForm.dataset.id;
  const response = await fetch(`/wetube/api/comment/${id}`, {
    method: "DELETE",
  });
  if (response.status === 200) {
    videoComments.removeChild(deleteForm);
  }
};

const addComment = (text, id) => {
  icon.className = "fas fa-comment";
  newComment.className = "video__comment";
  span2.innerText = "❌";
  span2.style.cursor = "pointer";
  newComment.dataset.id = id;
  span.innerText = ` ${text}`;
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.videoid;
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

if (form) {
  form.addEventListener("submit", handleSubmit);
}
if (span2) {
  span2.addEventListener("click", deleteComment);
}
