import React from "react";
import { CircleCheck, Share2 } from "lucide-react";

type BadgeProps = {
  name: string;
  date_earned: string;
  issued_by: string;
  cert_id: string;
};

function Badge({ name, date_earned, issued_by, cert_id }: BadgeProps) {
  return (
    <article className="flex flex-col gap-4 p-6">
      <div className="items-center flex flex-col gap-4 ">
        <div className="p-6 shadow-md  bg-[#f7f5f0]/90 rounded-3xl border border-gray-300 flex flex-col items-center justify-center gap-4">
          <div className="font-bold text-xl">
            <span>{issued_by}</span>
          </div>
          <div className="max-w-sm text-center text-lg font-normal leading-loose text-neutral-500 text-balance">
            {name}
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="flex items-center justify-center gap-2">
              -----
              <CircleCheck />
              -----
            </span>
            <span className="text-sm font-normal text-neutral-500">
              COMPLETION BADGE
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-600 flex flex-col items-center">
          <h3 className="max-w-xs text-center text-base font-semibold leading-snug text-neutral-900 text-balance">
            {name}
          </h3>
          <p>Earned {date_earned} EDT</p>
        </div>
      </div>
      <div className="items-center flex flex-col gap-4">
        <button className=" tracking-wider rounded-full p-3 border border-gray-700 inline-flex items-center justify-center bg-neutral-950 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#006d77] focus-visible:ring-offset-2 active:scale-[0.98]">
          learn more
        </button>
        <div>
          <Share2 />
        </div>
      </div>
    </article>
  );
}

export default Badge;
