import React from "react";

const Notification = ({ notificationText, type }) => {
  const notificationType = type || "error";
  return (
    <div
      className={`notification-bg-${notificationType} flex w-full h-12 mx-auto py-2 px-4 items-center justify-center`}
    >
      <div className="font-bold text-center text-base text-gray-900 md:text-lg leading-6 py-2">
        {notificationText}
      </div>
    </div>
  );
};

export default Notification;
