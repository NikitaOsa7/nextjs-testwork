import CustomLink from './CustomLink';
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"NikitaOsa7, next.js" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <CustomLink href={'/'} text="Главная"/>
                <CustomLink href={'/users'} text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: yellow;
                        padding: 15px;
                    }
                   
                `}
            </style>
        </>
    );
};

export default MainContainer;
