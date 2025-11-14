// Project : Carousel User Profile

// User Data
const data = [
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.q4enYaUJkp1HiDUCeUVOBgHaHa?pid=Api&P=0&h=220",
    name: "Muhammad Hamza",
    role: "Frontend Developer",
    desc: "Passionate about building beautiful and functional user interfaces",
  },
  {
    img: "https://tse2.mm.bing.net/th/id/OIP.5s4VtYXCE3WLKJ-lFbZ60AHaE7?pid=Api&P=0&h=220",
    name: "Umer Irfan",
    role: "Graphic Designer",
    desc: "Passionate about building beautiful and post and reels",
  },
  {
    img: "https://tse1.mm.bing.net/th/id/OIP.PQsK346siggBL9wuuO_BEQHaHa?pid=Api&P=0&h=220",
    name: "Muhammad Qasim",
    role: "Full Stack Developer",
    desc: "Passionate about building beautiful and functional user interfaces",
  },
  {
    img: "https://tse4.mm.bing.net/th/id/OIP.AggFLHA_yUp6NZR6_rWTXgHaLH?pid=Api&P=0&h=220",
    name: "Zaid Ali Khan",
    role: "Full Stack Developer",
    desc: "Passionate about building beautiful and functional user interfaces",
  },
  {
    img: "https://tse1.mm.bing.net/th/id/OIP.wrbji7aCnPkhDipl0UMKsQHaNK?pid=Api&P=0&h=220",
    name: "Hassan Raja",
    role: "Backend Developer",
    desc: "Passionate about building beautiful and functional user interfaces",
  },
];

// ---------- Selectors ----------
const profile = document.querySelector(".profile");
const userName = document.querySelector(".name");
const userRole = document.querySelector(".role");
const userDesc = document.querySelector(".desc");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

// ---------- Update UI ----------
function updateProfile() {
  const user = data[index];
  profile.src = user.img;
  userName.textContent = user.name;
  userRole.textContent = user.role;
  userDesc.textContent = user.desc;
}

// ---------- Event Listeners ----------
next.addEventListener("click", () => {
  index = (index + 1) % data.length; 
  updateProfile();
});

prev.addEventListener("click", () => {
  index = (index - 1 + data.length) % data.length; 
  updateProfile();
});

// Initial load
updateProfile();
