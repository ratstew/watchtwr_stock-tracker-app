import { createElement } from "react";
import Script from "next/script";

type Props = {
    countries?: string;
    height?: number;
};

const TradingViewEconomicCalendar = ({ countries = "se,us,at,no,ch,gb,eu,dk", height = 600 }: Props) => {
    return (
        <div className="w-full overflow-hidden rounded-lg" style={{ height }}>
            <Script
                type="module"
                src="https://widgets.tradingview-widget.com/w/en/tv-economic-calendar.js"
            />
            {createElement("tv-economic-calendar", {
                countries,
                theme: "dark",
                style: { display: "block", width: "100%", height: "100%" },
            })}
        </div>
    );
};

export default TradingViewEconomicCalendar;
