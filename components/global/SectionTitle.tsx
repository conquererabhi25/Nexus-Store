import { Separator } from "@/components/ui/separator"


// trackingwider tailwind css property is used to increase the letter spacing of the text

const SectionTitle = ({text}:{text:string}) => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">{text}</h2> 
      <Separator />
    </div>
  )
}

export default SectionTitle
