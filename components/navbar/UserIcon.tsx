import {LuUser} from "react-icons/lu"
import {currentUser} from "@clerk/nextjs/server"



async function UserIcon() {
  const user = await currentUser()
  const ProfileImage = user?.imageUrl

  if(ProfileImage){
    return(
      <img src={ProfileImage} alt="Profile Image" className="w-6 h-6 rounded-full object-cover"/>
    )
  }

  return(
    <LuUser className="w-12 h-12 rounded-full bg-primary text-white  p-1"/>
  )
}   

export default UserIcon