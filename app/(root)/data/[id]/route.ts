import { apiDatas } from "../data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  let { id } = await params;
  let data = apiDatas.find((d) => d.id === parseInt(id));
  if (!data) {
    return new Response("Data not found", { status: 404 });
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  let { id } = await params;
  let data = await request.json();
  let index = apiDatas.findIndex((d) => d.id === parseInt(id));

  apiDatas[index].title = data.title;
  return new Response(JSON.stringify(apiDatas[index]), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  let { id } = await params;
  let index = apiDatas.findIndex((d) => d.id === parseInt(id));
  if (index === -1) {
    return new Response("Data not found", { status: 404 });
  }
  apiDatas.splice(index, 1);
  return new Response(null, { status: 204 });
}
