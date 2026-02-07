const sendEmail = document.querySelectorAll(".send-email");
const emailAddress = document.querySelectorAll(".email-address");

for (let i = 0; i < sendEmail.length; i++) {
  sendEmail[i].addEventListener("click", function () {
    const part1 = "bhati.ravindra919";
    const part2 = Math.pow(2, 6);
    const part3 = String.fromCharCode(part2);
    const part4 = "gmail.com";
    const address = part1 + part3 + part4;
    emailAddress[i].textContent = address;
    emailAddress[i].style.cssText = "opacity: 1;";
  });
}
