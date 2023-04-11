import React from 'react';
import Styles from './Styles.module.css'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h2>About</h2>
            <main className={Styles.main}>
                {children}
            </main>
        </>
    );
}
