try {
  const navItem = document.querySelector(".nav__items");
  const openNavBtn = document.querySelector("#open__nav-btn");
  const closeNavBtn = document.querySelector("#close__nav-btn");
  const openNav = () => {
    navItem.style.display = "flex";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block";
  };
  const closeNav = () => {
    navItem.style.display = "none";
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none";
  };
  openNavBtn.addEventListener("click", openNav);
  closeNavBtn.addEventListener("click", closeNav);
} catch (error) {
  //   console.error("Error occurred in toggle functionality:", error);
}
if (window.innerWidth <= 600)
  try {
    const sidebar = document.querySelector("aside");
    const showSidebarBtn = document.querySelector("#show__sidebar-btn");
    const hideSidebarBtn = document.querySelector("#hide__sidebar-btn");

    const showSidebar = () => {
      sidebar.style.left = "0";
      showSidebarBtn.style.display = "none";
      hideSidebarBtn.style.display = "inline-block";
    };

    const hideSidebar = () => {
      sidebar.style.left = "-100%";
      showSidebarBtn.style.display = "inline-block";
      hideSidebarBtn.style.display = "none";
    };

    showSidebarBtn.addEventListener("click", showSidebar);
    hideSidebarBtn.addEventListener("click", hideSidebar);

    window.onload = showSidebar;
  } catch (error) {
    //   console.error("Error occurred in sidebar functionality:", error);
  }
const contactForm = document.getElementById('contactForm');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notificationMessage');
const closeNotification = document.getElementById('closeNotification');

// Tambahkan event listener untuk form submission
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Cegah form dari pengiriman default

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Set pesan notifikasi
    notificationMessage.innerHTML = `
        Terima kasih, <strong>${name}</strong>! Pesan Anda telah terkirim.<br>
        Kami akan segera menghubungi Anda di email: <strong>${email}</strong>.
    `;

    // Tampilkan notifikasi
    notification.classList.remove('hidden');
    notification.style.display = 'block';

    // Bersihkan form
    contactForm.reset();
});

// Tambahkan event listener untuk tombol "Close"
closeNotification.addEventListener('click', function () {
    notification.style.display = 'none';
});
