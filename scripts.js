// تفعيل/إيقاف الوضع الليلي
const themeToggleButton = document.getElementById("toggle-theme");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // تغيير نص الزر بناءً على الوضع
  if (document.body.classList.contains("dark-mode")) {
    themeToggleButton.textContent = "الوضع النهاري";
  } else {
    themeToggleButton.textContent = "الوضع الليلي";
  }
});

// تفعيل العدادات
const counterBoxes = document.querySelectorAll(".counter-box");

counterBoxes.forEach((box) => {
  const initialCount = parseInt(box.getAttribute("data-count"), 10);
  let currentCount = initialCount;
  const countValueSpan = box.querySelector(".count-value");

  // بدء العرض
  updateCountDisplay(currentCount);

  // نقص العدد عند النقر
  box.addEventListener("click", () => {
    if (currentCount > 0) {
      currentCount--;
      updateCountDisplay(currentCount);
    }
  });

  // إعادة الضبط
  const resetBtn = box.parentElement.querySelector(".reset-btn");
  resetBtn.addEventListener("click", () => {
    currentCount = initialCount;
    updateCountDisplay(currentCount);
  });

  function updateCountDisplay(num) {
    // تنسيق بحيث لو أقل من 10 تظهر بصيغة 0X
    countValueSpan.textContent = num < 10 ? `0${num}` : num;
  }
});
