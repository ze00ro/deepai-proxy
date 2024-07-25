const DEEPAI_API_HOST = "api.deepai.org";

Deno.serve(async (request) => {
  const originalUrl = new URL(request.url);

  // 构建新的 URL
  const targetUrl = new URL(originalUrl.pathname + originalUrl.search, `https://${DEEPAI_API_HOST}`);

  // 创建新的请求
  const newRequest = new Request(targetUrl.toString(), {
    headers: request.headers,
    method: request.method,
    body: request.body,
    redirect: "follow",
  });

  // 发送请求并返回响应
  return await fetch(newRequest);
});