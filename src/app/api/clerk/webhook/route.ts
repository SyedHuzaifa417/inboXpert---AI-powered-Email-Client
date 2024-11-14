import { db } from "~/server/db";

export const POST = async (req: Request) => {
  const { data } = await req.json();

  const id = data.id;
  const emailAddress = data.email_addresses[0].email_address;
  const firstName = data.first_name;
  const lastName = data.last_name;
  const imageUrl = data.image_url;

  await db.user.create({
    data: {
      id,
      emailAddress,
      firstName,
      lastName,
      imageUrl,
    },
  });

  return new Response("webhook recieved", { status: 200 });
};