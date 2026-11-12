import { User, UserCircle } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-4 pb-8">
      <div className="rounded-[26px] bg-[#e4e9ee] p-7 sm:p-9">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4b5b66]">
              Account · Identity
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-[#263640]">
              Profile
            </h1>
            <p className="mt-2 text-sm text-[#56646e]">
              Your personal details, role, and contact information.
            </p>
          </div>
          <User className="h-6 w-6 text-[#597484]" />
        </div>
      </div>

      <div className="rounded-[26px] bg-white p-10 shadow-[0_14px_45px_rgba(31,48,61,0.05)] md:p-14">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e4e9ee]">
            <UserCircle className="h-6 w-6 text-[#597484]" />
          </span>
          <h2 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-[#263640]">
            Profile details are on the way
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-[#56646e]">
            Your profile will appear here once authentication and account management are
            connected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
