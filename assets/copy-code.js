"use strict";
const copyButton = document.getElementById("copy-code");
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const status = document.getElementById("copy-status");
    try {
      await navigator.clipboard.writeText(document.getElementById("canonical-code").textContent);
      status.textContent = "متن کد کپی شد؛ بایت‌های اصلی در فایل دریافت‌شدنی حفظ می‌شوند.";
    } catch {
      status.textContent = "کپی در دسترس نیست؛ فایل اصلی را دریافت کن.";
    }
  });
}
