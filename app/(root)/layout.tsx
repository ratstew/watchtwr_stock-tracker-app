import React from 'react'
import Header from "@/components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col text-gray-400">
            <Header />

            <main className="container flex-1 py-10">
                {children}
            </main>

            <footer className="container py-6 text-center text-sm text-gray-500">
                Portfolio project. Not financial advice. Market data by TradingView.
            </footer>
        </div>
    )
}

export default Layout