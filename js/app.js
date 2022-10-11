const aboutBtn = document.querySelector(`#about-btn`);
const portfolioBtn = document.querySelector(`#portfolio-btn`);
const contactBtn = document.querySelector(`#contact-btn`);
const about = document.querySelector(`#about`);
const portfolio = document.querySelector(`#portfolio`);
const contact = document.querySelector(`#contact`);

const buttons = [aboutBtn, portfolioBtn, contactBtn];
const sections = [about, portfolio, contact];

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", () => {
    sections[index].scrollIntoView();
  });
}

// const selectedBtn = document.getElementById(`selected-btn`);
// const allBtn = document.getElementById(`all-btn`);
// const selected = document.getElementById(`selected`);
// const all = document.getElementById(`all`);

// selectedBtn.addEventListener("click", () => {
//   all.style.display = `none`;
//   selected.style.display = `flex`;
// });
// allBtn.addEventListener("click", () => {
//   selected.style.display = `none`;
//   all.style.display = `flex`;
// });
