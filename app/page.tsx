import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image src={"/logos/logoOne.png"} alt={"mama care"} width={300} height={300}/>
      <div className="grid grid-cols-2 gap-6 sm:gap-12 mt-4 border-2 border-black rounded-[20%] py-6 sm:py-10 px-4 sm:px-12">
        <Link href={'/pregnancy-navigator'} className="flex flex-col items-center justify-center gap-4">
          <Image src={'/ui/redHeart.png'} alt='heart' width={50} height={50}/>
          <div className="text-center">Pregnancy Navigator</div>
        </Link>
        <Link href={'/'} className="flex flex-col items-center gap-4">
          <Image src={'/ui/blueHeart.png'} alt='heart' width={50} height={50}/>
          <div className="text-center">Health Risk Detector</div>
        </Link>
        <Link href={'/'} className="flex flex-col items-center gap-4">
          <Image src={'/ui/greenHeart.png'} alt='heart' width={50} height={50}/>
          <div className="text-center">Symtom Checker</div>
        </Link>
        <Link href={'/'} className="flex flex-col items-center gap-4">
          <Image src={'/ui/orangeHeart.png'} alt='heart' width={50} height={50}/>
          <div className="text-center">Birth Planning Assitant</div>
        </Link>
        <Link href={'/'} className="flex flex-col items-center gap-4">
          <Image src={'/ui/purpleHeart.png'} alt='heart' width={50} height={50}/>
          <div className="text-center">Community Connector</div>
        </Link>
      </div>
    </div>
  );
}
