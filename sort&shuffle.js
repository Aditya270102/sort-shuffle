window.onload = () => {
  const shufflebtn = document.getElementById("shuffle");
  if (shufflebtn) {
    shufflebtn.addEventListener("click", (e) => {
      shuffleNodes();
    });
  }
  const sortBtn = document.getElementById("sort");
  if (sortBtn) {
    sortBtn.addEventListener("click", (e) => {
      sortList();
    });
  }
  
};
function shuffleNodes() {
    let list = document.getElementById("cards")
    let shuffled = Array.from(list.children)
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    shuffled.forEach((elem) => {
      list.appendChild(elem);
    });
  }

  function sortList() {
    let list = document.getElementById("cards")
    let sorted = Array.from(list.children)
      .map((value) => ({ value, sort: value.innerHTML }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    sorted.forEach((elem) => {
      list.appendChild(elem);
    });

    
  }
    
