import { services } from "../lib/services-data"
import ServiceCard from "../ui/service-card"

export default function Advisor() {
    return (
        <main className="h-full p-20 font-sans">
            <h1 className="text-center text-5xl font-extrabold">Stocks Advisor Features</h1>

            <p className="text-center my-32 font-bold text-3xl">Unlock the Feature of Investing With AI</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 my-5">
                {services.map(service =>(
                    <ServiceCard {...service} key={service.name}/>
                ))}
            </div>
             
        </main>
    )
}