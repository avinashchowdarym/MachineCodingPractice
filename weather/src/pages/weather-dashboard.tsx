import { Button } from "@/components/UI/Button"
import { useGeoLocation } from "@/hooks/use-geolocation"
import { RefreshCcw } from "lucide-react"

const WeatherDashboard = () => {
    const { coordinates , error , isLoading , getLocation} = useGeoLocation();
    // console.log(coordinates);
  return (
    <div className="space-y-4">
        {/* Favourite cities */}
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-tight"> My Location </h1>
            <Button 
                variant={"outline"}
                size={'icon'}
                onClick={getLocation}
                disabled={!isLoading}
            >
                <RefreshCcw className="h-4 w-4"/>
            </Button>
        </div>
        {/* current and hourly weather */}
    </div>
  )
}

export default WeatherDashboard