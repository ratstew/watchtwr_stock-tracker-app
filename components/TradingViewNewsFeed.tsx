import { createElement } from "react";
import Script from "next/script";

type Props = {
    height?: number;
};

const TradingViewNewsFeed = ({ height = 600 }: Props) => {
    return (
        <div className="w-full overflow-hidden rounded-lg" style={{ height }}>
            <Script
                type="module"
                src="https://widgets.tradingview-widget.com/w/en/tv-news-feed.js"
            />
            {createElement("tv-news-feed", {
                theme: "dark",
                style: { display: "block", width: "100%", height: "100%" },
            })}
        </div>
    );
};

export default TradingViewNewsFeed;
