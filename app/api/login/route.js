import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const credentials = await request.json();
  const user = await prisma.user.findFirst({
    where: { username: credentials.username, password: credentials.password },
  });
  return Response.json(user);
}
