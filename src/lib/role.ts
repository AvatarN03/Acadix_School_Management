import { auth } from "@clerk/nextjs/server";

export default async  function assignRole (){
    const {sessionClaims} = await auth();

    return (sessionClaims?.metadata as {role?:string})?.role;
}