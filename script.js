document.addEventListener("DOMContentLoaded", () => {
  //get the input field values
  let title = document.querySelector("#title");
  let link = document.querySelector("#link");
  let allArticles = document.querySelector(".all-articles");

  const store = [];
  let temp = [];

  //render function
  const render = () => {
    temp.forEach(elem =>
      allArticles.insertAdjacentHTML(
        "beforeend",

        `
    <div id='all-contain'>
      <div class="container">
      <div class="points">
        <p class="num">${elem.points}</p>
        <p class="num-des">points</p>
      </div>
      <div class="details">
        <div>
          <p class="article" data-key=${elem.id} >${elem.article}</p>
          <p class="link">(${elem.link})</p>
        </div>
        <div class="love">
          <i data-key=${elem.id} class="fas fa-heart"></i>
        </div>
        <div class="vote">
          <span data-key=${elem.id} class="upvote"> <span>&#8593;</span> upvote</span
          ><span data-key=${elem.id} class='downvote'><span>&#8595;</span> downvote</span>
        </div>
      </div>
    </div>  
    </div>
      `
      )
    );
  };
  // get the button
  let submitBtn = document.querySelector("button");

  //send the value on click
  submitBtn.addEventListener("click", e => {
    e.preventDefault();
    if (title.value && link.value) {
      store.push({
        id: Date.now(),
        points: 0,
        article: title.value,
        link: link.value
      });

      temp = [store[store.length - 1]];

      render();
      title.value = "";
      link.value = "";
    }
  });

  allArticles.addEventListener("click", e => {
    let num = document.querySelectorAll(".num");
    let heart = document.querySelectorAll(".fa-heart");

    store.forEach((elem, index) => {
      if (
        e.target.className === "upvote" &&
        Number(e.target.dataset.key) === elem.id
      ) {
        num[index].innerHTML++;
      }

      if (
        e.target.className === "downvote" &&
        Number(e.target.dataset.key) === elem.id
      ) {
        if (num[index].innerHTML === "0") {
          return;
        } else num[index].innerHTML--;
      }

      if (
        e.target.className === "fas fa-heart" &&
        Number(e.target.dataset.key) === elem.id
      ) {
        heart[index].className = "far fa-heart";
      } else if (
        e.target.className === "far fa-heart" &&
        Number(e.target.dataset.key) === elem.id
      ) {
        heart[index].className = "fas fa-heart";
      }
    });
  });
});
