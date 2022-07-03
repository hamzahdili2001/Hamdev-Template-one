const menuBars = document.querySelector(".menu-toggle");
const navigation = document.querySelector("header nav");

menuBars.addEventListener("click", () => {
	navigation.classList.toggle("show");
});
