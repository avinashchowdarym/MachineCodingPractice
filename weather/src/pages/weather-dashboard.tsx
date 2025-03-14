import { Button } from "@/components/UI/Button"
import { Alert, AlertDescription, AlertTitle } from "@/components/UI/alert";
import LoadingSkeleton from "@/components/UI/loading-skeleton";
import { useGeoLocation } from "@/hooks/use-geolocation"
import {  AlertTriangle, MapPin, RefreshCcw } from "lucide-react"

const WeatherDashboard = () => {
    const { coordinates, error: LocationError, isLoading: LocationLoading, getLocation } = useGeoLocation();
    // console.log(coordinates);
    if (LocationLoading) {
        return <LoadingSkeleton />
    }
    if (LocationError) {
        return (
        <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>{LocationError}</AlertTitle>
            <AlertDescription>
                <p>{LocationError}</p>
                <Button onClick={getLocation} variant={'outline'}><MapPin className="h-4 w-4 mr-2"/> Enable Location</Button>
            </AlertDescription>
        </Alert>
        )
    }
    if (!coordinates) {
        return (
        <Alert variant="destructive">
            {/* <AlertTriangle className="h-4 w-4" /> */}
            <AlertTitle>{'Location Required '}</AlertTitle>
            <AlertDescription>
                <p>{'Please Enable Location Access to see your local weather'}</p>
                <Button onClick={getLocation} variant={'outline'}><MapPin className="h-4 w-4 mr-2"/> Enable Location</Button>
            </AlertDescription>
        </Alert>
        )
    }

    return (
        <div className="space-y-4">
            {/* Favourite cities */}
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-tight"> My Location </h1>
                <Button
                    variant={"outline"}
                    size={'icon'}
                    onClick={getLocation}
                    disabled={!LocationLoading}
                >
                    <RefreshCcw className="h-4 w-4" />
                </Button>
            </div>
            {/* current and hourly weather */}
        </div>
    )
}

export default WeatherDashboard