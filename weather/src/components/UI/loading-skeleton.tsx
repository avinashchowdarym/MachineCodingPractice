import { Skeleton } from "./skeleton"

const LoadingSkeleton = () => {
  return (
    <div className="space-y-6">
        <div className="grid gap-6">
            <Skeleton className="h-[300px] w-full rounded-lg"/>
            <Skeleton className="h-[300px] w-full rounded-lg"/>
        </div>
        <div className="grid grid-cols-2 gap-6">
            <Skeleton className="h-[300px] w-full rounded-lg"/>
            <Skeleton className="h-[300px] w-full rounded-lg"/>
        </div> 
    </div>
  )
}

export default LoadingSkeleton