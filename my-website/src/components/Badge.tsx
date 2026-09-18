import React from "react";
import { ShareIcon } from "lucide-react";

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
          <h3 className="font-">{name}</h3>
          <p>Earned {date_earned} EDT</p>
        </div>
      </div>
      <div className="items-center flex flex-col gap-4">
        <div className="rounded-4xl p-2 border border-gray-700">learn more</div>
        <div>
          <ShareIcon />
        </div>
      </div>
    </article>
  );
}

export default Badge;
