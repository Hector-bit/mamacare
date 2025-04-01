import Image from "next/image"

export default async function PregnancyPage(){
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Image src={"/ui/redHeart.png"} alt={"heart"} width={24} height={20}/>
        <div>Pregnancy Navigator</div>
      </div>
    </div>
  )
}


