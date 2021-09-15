import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
const Layout =({children})=>{
    return(
        <>
        <Head>
        <title>Sumaiya Tasmeem</title>
        </Head>
        <Nav className="fixed"/>
        <div >
            <main >
            {children}
            </main>
        </div>
        <Footer/>
        </>
    )
}
export default Layout;