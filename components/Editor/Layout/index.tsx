import * as React from 'react'
import { Toaster } from 'react-hot-toast'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <main
        role="main"
        className={`font-sans text-black antialiased leading-tight bg-white w-full min-h-full flex overflow-hidden`}
        >
            <Toaster />
            <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
                min-height: 100%;
            }
            `}</style>

            {children}
        </main>
    )
}

export { Layout }