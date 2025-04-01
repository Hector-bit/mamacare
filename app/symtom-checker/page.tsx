import Image from "next/image"

export default async function SymtomCheckerPage(){
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Image src={"/ui/greenHeart.png"} alt={"heart"} width={24} height={20}/>
        <div>Symtom Checker</div>
      </div>
    </div>
  )
}


