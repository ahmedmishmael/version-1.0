const aboutBtn = document.querySelector(`#about-btn`);
const portfolioBtn = document.querySelector(`#portfolio-btn`);
const servicesBtn = document.querySelector(`#services-btn`);
const contactBtn = document.querySelector(`#contact-btn`);
const about = document.querySelector(`#about`);
const portfolio = document.querySelector(`#portfolio`);
const services = document.querySelector(`#services`);
const contact = document.querySelector(`#contact`);

const buttons = [aboutBtn, portfolioBtn, servicesBtn, contactBtn];
const sections = [about, portfolio, services, contact];

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", () => {
    sections[index].scrollIntoView();
  });
}
