import Image from "next/image"

export default async function HealthRiskPage(){
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Image src={"/ui/blueHeart.png"} alt={"heart"} width={24} height={20}/>
        <div>Health Risk</div>
      </div>
    </div>
  )
}


