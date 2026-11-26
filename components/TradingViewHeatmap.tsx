import { createElement } from "react";
import Script from "next/script";

type Props = {
    dataSource?: string;
    height?: number;
};

const TradingViewHeatmap = ({ dataSource = "OMXS30", height = 600 }: Props) => {
    return (
        <div className="w-full overflow-hidden rounded-lg" style={{ height }}>
            <Script
                type="module"
                src="https://widgets.tradingview-widget.com/w/en/tv-heatmap.js"
            />
            {/* createElement används eftersom TypeScript inte känner till taggen tv-heatmap */}
            {createElement("tv-heatmap", {
                "heatmap-type": "stock",
                "data-source": dataSource,
                grouping: "sector",
                "block-size": "market_cap_basic",
                "block-color": "change",
                theme: "dark",
                style: { display: "block", width: "100%", height: "100%" },
            })}
        </div>
    );
};

export default TradingViewHeatmap;
