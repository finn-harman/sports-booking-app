import { db } from "@/lib/kysely";
// import { timeAgo } from '@/lib/utils'
// import Image from 'next/image'
import { seed } from "@/lib/seed";

export default async function Home() {
  let users;
  let startTime = Date.now();

  try {
    users = await db.selectFrom("users").selectAll().execute();
  } catch (e: any) {
    if (e.message === "relation \"users\" does not exist") {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      // Table is not created yet
      await seed();
      startTime = Date.now();
      users = await db.selectFrom("users").selectAll().execute();
    } else {
      throw e;
    }
  }

  console.log("users", users);

  return (
    <div>
      Hi
    </div>
  );
}
