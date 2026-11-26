import TradingViewChart from "@/components/TradingViewWidget";
import TradingViewHeatmap from "@/components/TradingViewHeatmap";
import TradingViewMarketSummary from "@/components/TradingViewMarketSummary";
import TradingViewNewsFeed from "@/components/TradingViewNewsFeed";
import TradingViewEconomicCalendar from "@/components/TradingViewEconomicCalendar";

const Page = () => {
    return (
        <div className="home-wrapper">
            <section className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="min-w-0 lg:col-span-2">
                    <TradingViewMarketSummary />
                </div>

                <div className="min-w-0">
                    <h1 className="mb-4 text-2xl font-semibold text-gray-100">Market overview</h1>
                    <TradingViewChart height={600} />
                </div>

                <div className="min-w-0">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-100">OMXS30 heatmap</h2>
                    <TradingViewHeatmap height={600} />
                </div>

                <div className="min-w-0">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-100">News</h2>
                    <TradingViewNewsFeed height={600} />
                </div>

                <div className="min-w-0">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-100">Economic calendar</h2>
                    <TradingViewEconomicCalendar height={600} />
                </div>
            </section>
        </div>
    )
}

export default Page
