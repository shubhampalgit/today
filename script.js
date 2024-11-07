document.addEventListener("DOMContentLoaded", () => {
    const qList = document.querySelectorAll(".que > div"); 
    const subBtn = document.querySelector("button[type='submit']");
    const ans = {
        q1: "Paris",  
        q2: "Mars", 
        q3: "Pacific",
        q4: "Andromeda"
    };
    let qIdx = 0;
    let score = 0;
    function showQ(idx) {
        qList.forEach((q, i) => {
            q.style.display = i === idx ? "block" : "none";
        });
    }
    showQ(qIdx);
    function calcScore() {
        score = 0; 
        qList.forEach((q) => {
            const name = q.querySelector("input").name;
            const selected = q.querySelector("input:checked");

            if (selected && selected.value === ans[name]) {
                score += 25;
            }
        });
        alert(`quiz socre is :  ${score} / 100`);
    }
    qList.forEach((q) => {
        const next = q.querySelector(".next");
        const prev = q.querySelector(".prev");
        if (next) {
            next.addEventListener("click", () => {
                if (qIdx < qList.length - 1) {
                    qIdx++;
                    showQ(qIdx);
                }
            });
        }
        if (prev) {
            prev.addEventListener("click", () => {
                if (qIdx > 0) {
                    qIdx--;
                    showQ(qIdx);
                }
            });
        }
    });
    subBtn.addEventListener("click", () => {
        calcScore(); 
    });
});
