import { NextRequest } from "next/server";
import { apiDatas } from "./data";

export async function GET(req: NextRequest) {
  let seachParams = req.nextUrl.searchParams;
  let search = seachParams.get("search");
  let filteredData = search
    ? apiDatas.filter((data) => {
        return data.title.toLowerCase().includes(search.toLowerCase());
      })
    : apiDatas;
  return new Response(JSON.stringify(filteredData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
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
