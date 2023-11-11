import React from "react";

export default function BusinessTabContents({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full justify-center items-center flex p-8">
      {children}
    </div>
  );
}
