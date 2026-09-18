import React from "react";
import { Share2 } from "lucide-react";

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
        <div>Completion Badge</div>
        <div className="text-sm text-gray-600 flex flex-col items-center">
          <h3 className="font-bold">{name}</h3>
          <p>Earned {date_earned} EDT</p>
        </div>
      </div>
      <div className="items-center flex flex-col gap-4">
        <div className="rounded-4xl p-3 border border-gray-700">learn more</div>
        <div>
          <Share2 />
        </div>
      </div>
    </article>
  );
}

export default Badge;
