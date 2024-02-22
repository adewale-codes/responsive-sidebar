import Head from 'next/head';
import Sidebar from './components/Sidebar';

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Head>
                <title>Banking product page</title>
                <meta property="og:title" content="Brytatutors official website" key="title" />
            </Head>
            <div className="bg-neutral-100 overflow-hidden flex flex-row">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    {/* <Topbar /> */}
                    {children}
                </div>
            </div>
            
        </>
    );
}