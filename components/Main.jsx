import React from "react";

const Main = ({heading, message})  => {
    return(
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-bragi-logo">
        <div className="p-5 y-10 text-white z-[2] ml-[-35rem] mt-[-1rem]">
        <div  className="shadow">
            <h1 className="text-5xl font-bold mb-2">{heading}</h1>
            <h2 className="text-2xl font-bold mb-2">{message}</h2>
            <p className="font-medium">SOMOS UM PEQUENO</p>
            <p className="font-medium">ESTÚDIO BAIANO</p>
            <p className="font-medium">DESENVOLVENDO</p>
            <p className="font-medium">JOGOS</p>
        </div>

        </div>
    </div>
    );
}

export default Main;
