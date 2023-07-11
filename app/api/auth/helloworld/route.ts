
import { NextRequest } from "next/server";


export const POST = async (request:NextRequest) => {
  const body =  request.body;
  console.log(body);

  return new Response(JSON.stringify({ hello: "world" }), { status: 200 });
};
