import Image from "next/image"

export default async function BirthPlanningPage(){
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Image src={"/ui/orangeHeart.png"} alt={"heart"} width={24} height={20}/>
        <div>Birth Planning</div>
      </div>
    </div>
  )
}


