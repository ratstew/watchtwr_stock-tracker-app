'use client';

import { useEffect, useRef } from "react";

type Props = {
    symbol?: string;
    height?: number;
};

const TradingViewChart = ({ symbol = "NASDAQ:AAPL", height = 600 }: Props) => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = container.current;
        if (!el || el.querySelector("script")) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            autosize: true,
            symbol,
            interval: "D",
            timezone: "Europe/Stockholm",
            theme: "dark",
            style: "1",
            locale: "en",
            allow_symbol_change: true,
            support_host: "https://www.tradingview.com",
        });
        el.appendChild(script);
    }, [symbol]);

    // Höjden ligger på den yttre diven eftersom TradingView-skriptet
    // skriver över stilen på sin egen container.
    return (
        <div className="w-full" style={{ height }}>
            <div className="tradingview-widget-container h-full w-full" ref={container}>
                <div className="tradingview-widget-container__widget h-full w-full" />
            </div>
        </div>
    );
};

export default TradingViewChart;