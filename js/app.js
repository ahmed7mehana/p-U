let  count = 0;
const createSection = () => {
count++;

//content
const contents = 
`<section id="section${count}" data-nav="Section ${count}">

<div class="container">
<h2>Section ${count}</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Morbi fermentum metus faucibus lectus pharetra dapibus. 
Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue.
Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis.
Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum,
nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar 
quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra.
Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi 
a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
vitae elit. Integer nec libero venenatis libero ultricies molestie semper
in tellus. Sed congue et odio sed euismod.</p>
<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, 
ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu,
vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor,
eget elementum tortor mollis non.</p>
</div>

</section>`;

document.querySelector("main").insertAdjacentHTML("beforeend", contents);};

const navBar = document.getElementById("list_nav");
const createNavItems = () => {
navBar.innerHTML = "";
document.querySelectorAll("section").forEach((section) => {
const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" >${section.dataset.nav}</a></li>`
navBar.insertAdjacentHTML("beforeend", listItem);
});};
window.onscroll = function () {
document.querySelectorAll("section").forEach(function (active) {
let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);

//active link  -- active section
if (active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150 )
    {
    active.classList.add("active-C");
    activeLink.classList.add("active-L");
} else {
    active.classList.remove("active-C");
    activeLink.classList.remove("active-L");
}
});
};
navBar.addEventListener("click", (event) => {
event.preventDefault();
if (event.target.dataset.nav) {
document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });
setTimeout(() => {location.hash = `${event.target.dataset.nav}`; }, 100);
}});

for (let i = 1; i < 5; i++) createSection();
createNavItems();
// createSection action
document.getElementById("btn").addEventListener("click", () => {
createSection();
createNavItems();
});

//get item
const toTop = document.getElementById("top");
const header = document.querySelector(".header");

// go to top
toTop.addEventListener("click", () => { document.documentElement.scrollTo({ top: 0, behavior: "smooth" });});

let isScrolling;
document.onscroll = () => {
header.style.display = "block";
clearTimeout(isScrolling);
isScrolling = setTimeout(() => {
header.style.display = "none";
}, 3000);
// show top button
window.scrollY > 1200 ? (toTop.style.display = "block") : (toTop.style.display = "none");
};
