export const POST = async (request, { params }) => {
  console.log(request.body);

  return new Response(JSON.stringify({ hello: "world" }), { status: 200 });
};
