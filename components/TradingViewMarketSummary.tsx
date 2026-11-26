import { createElement } from "react";
import Script from "next/script";

type Props = {
    exchange?: string;
};

const TradingViewMarketSummary = ({ exchange = "OMXSTO" }: Props) => {
    return (
        <div className="w-full">
            <Script
                type="module"
                src="https://widgets.tradingview-widget.com/w/en/tv-market-summary.js"
            />
            {createElement("tv-market-summary", {
                exchange,
                direction: "horizontal",
                theme: "dark",
                style: { display: "block", width: "100%" },
            })}
        </div>
    );
};

export default TradingViewMarketSummary;
