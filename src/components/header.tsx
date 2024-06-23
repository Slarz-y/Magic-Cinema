import React from 'react';

const Header: React.FC = () => {
    return (
        <>
            <header className="bg-transparent p-4 text-white">
                <div className="container mx-auto px-20 flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <a href="">Magic Cinema</a>
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-gray-400 px-2">Home</a></li>
                            <li><a href="#" className="hover:text-gray-400 px-2">Schedule</a></li>
                            <li><a href="#" className="hover:text-gray-400 px-2">Movies</a></li>
                            <li><a href="#" className="hover:text-gray-400 px-2">News</a></li>
                            <li><button className='bg-red-500 px-4 pw-1 mx-7 font-bold'>Sing in</button></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
        
    );
}

export default Header;
