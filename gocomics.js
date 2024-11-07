window.addEventListener("load", (e) => {
  const image = document.querySelector('div.comic__image picture img');
  const href = image.getAttribute('src');

  const parent = document.querySelector('.gc-container h1');
  const link = document.createElement('a');
  const p = document.createElement('p');
  p.setAttribute('class', 'text-center');

  link.setAttribute('href', href);
  link.append(href);

  p.append(link);
  parent.after(p);

  window.scrollTo(0, 300);

  const right = document.querySelector('.fa-caret-right');
  const left = document.querySelector('.fa-caret-left');
  window.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowRight' && ! e.altKey) {
      location.href = right.getAttribute('href');
    } else if (e.code === 'ArrowLeft' && ! e.altKey) {
      location.href = left.getAttribute('href');
    }
  });
});