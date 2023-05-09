import style from '@/styles/main.module.css';
import Image from 'next/image';
import React from "react";

const Main = ({heading, message})  => {
    return(
    <div className={style.bg}>
        <div className={style.logoPosition}>
        <Image src="/logo-grande.png" width={500} height={900} alt="logo" />
        </div>
        <div className={style.text}>
        <div  className="">
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
