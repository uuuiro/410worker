/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const html = 
    `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <title>外郎本舗 - 閉店のお知らせ</title>
      <style>
        body {
          font-family: "Yu Gothic", "Hiragino Kaku Gothic ProN", sans-serif;
          background-color: #f8f8f8;
          color: #444;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0 1em;
        }
        h1 {
          font-size: 2em;
          margin-bottom: 0.5em;
        }
        p {
          font-size: 1.2em;
          max-width: 700px;
          text-align: center;
          line-height: 1.6;
        }
        footer {
          margin-top: 2em;
          font-size: 0.9em;
          color: #999;
        }
      </style>
    </head>
    <body>
      <h1>閉店のお知らせ</h1>
      <p>
      この度、外郎本舗は2025/6/29をもちまして閉店しました。<br>
      短い間でしたが、ご愛顧いただきありがとうございました。<br>
      </p>
      <p>ういろう</p>
      <footer>&copy; 2025 uirohompo</footer>
    </body>
    </html>
    `;
    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
      status: 410,
      statusText: 'Gone'
    });
  },
};