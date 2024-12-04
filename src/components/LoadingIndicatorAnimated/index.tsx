import { Brain } from "lucide-react";

export default function LoadingIndicatorAnimated() {
    return(
        <div 
            className={'w-12 h-12 flex items-center justify-center border-8 border-l-gray-200 border-r-gray-200 border-b-gray-200 border-t-green-600 animate-spin ease-linear rounded-full'}
        >
            {/* <Brain/> */}
        </div>
    )
}