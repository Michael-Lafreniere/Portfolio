const toggleTheme = event => {
  if (document.documentElement.hasAttribute('theme')) {
    document.documentElement.removeAttribute('theme');
  } else {
    document.documentElement.setAttribute('theme', 'dark');
  }
};

const moreInfo = event => {
  event.preventDefault();
  if (
    event.target.parentNode.parentNode.parentNode.parentNode.lastElementChild.classList.value.includes(
      'hidden'
    )
  ) {
    event.target.parentNode.parentNode.parentNode.parentNode.lastElementChild.classList.remove(
      'hidden'
    );
  } else {
    event.target.parentNode.parentNode.parentNode.parentNode.lastElementChild.classList.add(
      'hidden'
    );
  }
};
