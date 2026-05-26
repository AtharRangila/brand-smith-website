const CONTACT_EMAIL = "agency.brandsmith@gmail.com";

const form = document.querySelector("#enquiryForm");
const note = document.querySelector("#formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const company = String(data.get("company") || "").trim();
  const email = String(data.get("email") || "").trim();

  const subject = `Brand Smith enquiry from ${name || "website visitor"}`;
  const body = [
    "New Brand Smith enquiry",
    "",
    `Name: ${name}`,
    `Phone Number: ${phone}`,
    `Company Name: ${company || "Not provided"}`,
    `Email: ${email}`,
  ].join("\n");

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  note.textContent = "Opening your email app with the enquiry details.";
  window.location.href = mailto;
});
