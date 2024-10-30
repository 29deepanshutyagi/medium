// components/AvatarMenu.tsx
import React, { useState } from "react";

interface AvatarMenuProps {
    username: string;
}

export const AvatarMenu: React.FC<AvatarMenuProps> = ({ username }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prev => !prev);
    };

    // Function to extract initials from the username
    const getInitials = (name: string) => {
        const nameArray = name.split(" ");
        const initials = nameArray.map(word => word[0].toUpperCase()).join("");
        return initials;
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-semibold text-lg"
            >
                {getInitials(username)}
            </button>
            {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-2 px-4 text-sm text-gray-700">
                        <p className="font-semibold">{username}</p>
                    </div>
                    <hr />
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Profile
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Settings
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};
