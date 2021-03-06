function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('.ranked-list li')

  for (let i = 0, l = ranked.length; i < l; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
  }
  return ranked
}

function deepestChild() {
  return document.querySelector("#grand-node:last-child")

}
