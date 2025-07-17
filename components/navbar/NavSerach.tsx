
// we are using debounce custom hook to prevent frequent api trigger and api will only trigger if user stops typing.
// For that purpose we need to install ===> npm i use-debounce

"use client"
import {Input} from "@/components/ui/input"
import { useSearchParams, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import {useState,useEffect} from "react"

function NavSerach() {
  const searchParams = useSearchParams() // We are using searchParams to get the search query from the url
  const {replace} = useRouter()   // For replacing route
  const [search,setSearch] = useState(searchParams.get('search')||'')

  const handleSearch = useDebouncedCallback((value:string)=>{ // this value coming from function call
    const params = new URLSearchParams(searchParams)
    if(value){
      params.set("search",value)
    }
    else{
      params.delete("search")
    }
    replace(`/products?${params.toString()}`) // This will replace the current route with the new one
  },500)  // This means this function will be called after 500 milliseconds of user typing inactivity

  useEffect(()=>{
    if(!searchParams.get("search")){
      setSearch("")
    }
  },[searchParams.get("search")])

  return (
    <Input type="search" value={search} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      handleSearch(e.target.value)
    }} placeholder="Search for products" className="max-w-xs dark:bg-muted"/>
  )
}

export default NavSerach