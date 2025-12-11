"use client";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen relative flex justify-center items-start pt-12">
      <div className="absolute z-10 animate-spin bottom-12">
        <Loader2 className="w-52 h-52" />
      </div>
      <div className="absolute z-10 animate-spin right-1/2 bottom-24 opacity-75" >
        <Loader2 className="w-44 h-44" />
      </div>
      <div className="absolute z-10 animate-spin left-1/2 bottom-24 opacity-75">
        <Loader2 className="w-44 h-44" />
      </div>
      <div className="z-20 flex flex-col items-center gap-8">
        <Link
          href={"/"}
          className="flex items-center  p-3 w-full justify-center  gap-2 my-4"
        >
          <Image
            src={"/logo.png"}
            alt="logo"
            width={52}
            height={52}
            className="mix-blend-multiply"
          />
          <span className=" text-dodgerBlue  font-bold text-2xl">
            Acadix
          </span>
        </Link>
        <h1 className="text-3xl font-extralight text-center">
          The pages are in development
        </h1>
        <button
          className="bg-dodgerBlue cursor-pointer hover:shadow-xl text-lavendar px-3 py-2 rounded-md shadow-md w-fit"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] z-0"></div>
    </div>
  );
};

export default NotFound;
