import {ReactNode} from 'react'
import { Separator } from "@/components/ui/separator"
import SidebarElement from './Sidebar'


const DasboardLayout = ({children}:{children:ReactNode}) => {
  return (
    <>
      <h2 className='text-2xl pl-4'>DashBoard</h2>
      <Separator/>
      <section className='grid lg:grid-cols-12 gap-12 mt-12'>
        <div className='lg:col-span-2'>
            <SidebarElement/>
        </div>
       <div className='lg:col-span-10 px-4'>
         {children}
       </div>
      </section>
    </>
  )
}

export default DasboardLayout
