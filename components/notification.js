import React from "react";

const Notification = ({ notificationText }) => (
  <div className="flex w-full bg-dark-green h-16 mx-auto py-4 px-4 items-center">
    <div className="py-4">{notificationText}</div>
  </div>
);

export default Notification;
