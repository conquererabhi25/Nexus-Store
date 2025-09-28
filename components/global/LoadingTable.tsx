import {Skeleton} from "../ui/skeleton"

function LoadingTable({rows = 5,columns = 3}:{rows?:number,columns?:number}){
    const tableRows = Array.from({length: rows}, (_, i) => {
        return(
           <div className="mb-4" key={i}>
            <Skeleton className="w-full h-8 rounded"/>
           </div>
        )
    })

    return(
        <>
        {tableRows}
        </>
    )
  
}

export default LoadingTable