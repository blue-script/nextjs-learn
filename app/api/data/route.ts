export async function GET() {
  const data = {
    name: 'Bob',
    age: 25,
    bio: 'Some info'
  }

  return new Response(JSON.stringify(data));
}

export async function POST(request: any) {
  return new Response(request.body);
}

export async function DELETE(request: any) {
  return new Response(request.body);
}