import { apiDatas } from "./data";

export async function GET() {
  return new Response(JSON.stringify(apiDatas));
}

export async function POST(request: Request) {
  const data = await request.json();
  let newData = {
    id: apiDatas.length + 1,
    title: data.title,
  };
  apiDatas.push(newData);
  return new Response(JSON.stringify(newData), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
