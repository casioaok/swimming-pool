// ถ้าใช้ Vite แนะนำให้ใส่บรรทัดนี้ด้วย
import './style.css'

const ageInput = document.querySelector('#age');
const adultSelect = document.querySelector('#hasAdult');
const checkBtn = document.querySelector('#checkBtn');
const resultDiv = document.querySelector('#result');

checkBtn.addEventListener('click', () => {
    const age = parseInt(ageInput.value);
    const has_adult = adultSelect.value === 'true';

    if (isNaN(age)) {
        resultDiv.innerText = "⚠️ กรุณากรอกอายุก่อนครับ";
        resultDiv.style.color = "#e11d48";
        return;
    }

    let message = "";
    let color = "#0f172a";

    if (age >= 10) {
        if (age < 13) {
            if (has_adult) {
                message = "You can enter with adult supervision! ✅";
                color = "#059669";
            } else {
                message = "Sorry, you need an adult with you 🛑";
                color = "#dc2626";
            }
        } else {
            message = "You can enter by yourself! 🎉";
            color = "#2563eb";
        }
    } else {
        message = "Sorry, you are too young 👶";
        color = "#94a3b8";
    }

    resultDiv.innerText = message;
    resultDiv.style.color = color;
});