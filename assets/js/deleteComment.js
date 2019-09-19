import axios from "axios";

const deleteComment = document.querySelectorAll("#jsDeleteComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const delComment = async (commentId, commentLi) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment/${commentId}/delete`,
    method: "POST"
  });
  if (response.status === 200) {
    decreaseNumber();
    commentList.removeChild(commentLi.parentNode);
  }
};

const handleClick = async event => {
  const { target } = event;
  const commentLi = target.parentNode;
  const commentId = commentLi.querySelector("span").innerHTML;
  delComment(commentId, commentLi);
};

function init() {
  deleteComment.forEach(del => {
    const Del = del;
    Del.addEventListener("click", handleClick);
  });
}

if (deleteComment) {
  init();
}
