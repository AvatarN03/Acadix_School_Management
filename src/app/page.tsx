import { Loader } from "lucide-react";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="w-screen h-screen relative flex justify-center items-center flex-col">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]" />
      <h1 className="text-3xl text-center md:text-6xl font-semibolds my-8">Acadix - Management Platform</h1>
      <p className="flex items-center justify-center gap-2">
        Development in progress{" "}
        <span>
          <Loader className="animate-spin block" />
        </span>
      </p>
      <div className="mt-12 text-center">
        <h1>Links to the role based Page</h1>
        <div className="flex justify-between items-center flex-wrap my-8 gap-4">
          <Link className="bg-periwinkle text-babyBlue hover:text-dodgerBlue hover:bg-lavendar p-2 rounded-md" href={"/admin"}>Admin</Link>
          <Link className="bg-periwinkle text-babyBlue hover:text-dodgerBlue hover:bg-lavendar p-2 rounded-md" href={"/student"}>Student</Link>
          <Link className="bg-periwinkle text-babyBlue hover:text-dodgerBlue hover:bg-lavendar p-2 rounded-md" href={"/teacher"}>Teacher</Link>
          <Link className="bg-periwinkle text-babyBlue hover:text-dodgerBlue hover:bg-lavendar p-2 rounded-md" href={"/parent"}>Parents</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
