import Image from "next/image"

export default async function CommunityConnectorPage(){
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Image src={"/ui/purpleHeart.png"} alt={"heart"} width={24} height={20}/>
        <div>Community Connector</div>
      </div>
    </div>
  )
}


