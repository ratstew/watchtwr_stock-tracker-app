import TradingViewChart from "@/components/TradingViewWidget";
import TradingViewHeatmap from "@/components/TradingViewHeatmap";

const Page = () => {
    return (
        <main className="min-h-screen home-wrapper">
            <section className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 lg:px-8">
                <h1 className="mb-4 text-2xl font-semibold text-gray-100">Market overview</h1>
                <TradingViewChart height={650} />

                <h2 className="mt-10 mb-4 text-2xl font-semibold text-gray-100">OMXS30 heatmap</h2>
                <TradingViewHeatmap height={600} />
            </section>
        </main>
    )
}

export default Page