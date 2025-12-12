export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 定義 GitHub 的基礎路徑 (改成你自己的!)
    const GITHUB_BASE = "https://raw.githubusercontent.com/你的用戶名/你的倉庫/main";

    // 處理 main.css
    if (url.pathname === "/main.css") {
      const response = await fetch(`${GITHUB_BASE}/main.css`);
      return new Response(response.body, {
        headers: { "content-type": "text/css;charset=UTF-8" }
      });
    }

    // 處理 app.js
    if (url.pathname === "/app.js") {
      const response = await fetch(`${GITHUB_BASE}/app.js`);
      return new Response(response.body, {
        headers: { "content-type": "application/javascript;charset=UTF-8" }
      });
    }

    // 處理 API 或者其他請求
    if (url.pathname.startsWith("/api")) {
      // 這裡寫你的 API 邏輯
      return new Response("這是 API 響應");
    }

    // 默認返回 (例如首頁)
    return new Response("這裡是首頁 (或者你也去 fetch index.html)", {
      headers: { "content-type": "text/html" }
    });
  }
};
