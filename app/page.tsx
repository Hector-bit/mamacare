import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Image src={"/logos/logoOne.png"} alt={"mama care"}/>
    </div>
  );
}
