export const changeRootBgColor = (colorVariable, color) => {
  document.documentElement.style.setProperty(colorVariable, `${color}`);
};

export const addActiveNav = (item) => {
  item.classList.add("side-nav__item--active");
};

export const removeActiveNav = (item) => {
  item.classList.remove("side-nav__item--active");
};

export const changeImage = (image, link) => {
  image.src = `${link}`;
};

export const changeText = (item, content) => {
  item.textContent = `${content}`;
};
