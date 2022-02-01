import React from 'react'
import Head from 'next/head';


function Layout({title, description, children}) {
    return (
        <div>
            <Head>
                <title>{title ? `${title}-Arna Ecommerce` : "ArNa E_commerce"}</title>
                {description && <meta name='description' content={description} /> }
            </Head>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;