const indicator = document.querySelector(".notification-number");
const notifications = document.querySelectorAll(".notification");
const hrefs = document.querySelectorAll("a");
let button = document.querySelector(".mark-as-read");
let markAll = () => {
  notifications.forEach((notification) => {
    delete notification.dataset.new;
  });
  indicator.dataset.notifications = "0";
};
button.addEventListener("click", markAll);
hrefs.forEach((href) => {
  href.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
