import React from "react";

interface UserCardProps {
  user: any;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="border-2 border-blue-800 rounded-md p-2">
      {user.username}
    </div>
  );
};

export default UserCard;
