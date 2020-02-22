const moreInfo = event => {
  event.preventDefault();
  // console.log('more info clicked:', event);
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
