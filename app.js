// 等待網頁內容加載完畢
document.addEventListener('DOMContentLoaded', () => {
    console.log("BLRRA System Online...");

    // 1. 處理按鈕點擊效果
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            // 平滑滾動到聯絡區域
            document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // 2. 處理表單提交 (防止頁面刷新)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // 阻止瀏覽器默認的提交刷新行為
            
            // 獲取用戶輸入
            const email = form.querySelector('input[type="email"]').value;
            
            // 這裡之後可以對接你的後端 API
            alert(`感謝您的訊息！我們已收到來自 ${email} 的聯絡請求。\n(這是演示，後端尚未連接)`);
            
            // 清空表單
            form.reset();
        });
    }
});
