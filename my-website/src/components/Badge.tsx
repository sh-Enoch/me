import React from "react";

type BadgeProps = {
  name: string;
  date_earned: string;
  issued_by: string;
  cert_id: string;
};

function Badge({ name, date_earned, issued_by, cert_id }: BadgeProps) {
  return (
    <article className=" flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105">
        
    </article>
  );
}

export default Badge;
