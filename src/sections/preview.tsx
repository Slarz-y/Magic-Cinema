import React from "react";
import Header from "../components/header";

const Preview: React.FC = () => {
    return (
        <>
            <div className="relative w-auto h-[850px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/kYgQzzjNis5jJalYtIHgrom0gOx.jpg')` }}>
                <Header/>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-black"></div>
            </div>
        </>
    );
}

export default Preview;