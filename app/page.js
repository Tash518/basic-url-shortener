import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppinsfont = localFont({
  src: "./fonts/Poppins-Bolditalic.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
export default function Home() {
  return (
    <>
      <main className="bg-purple-100">
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="flex flex-col gap-4 px-2 justify-center items-end bg-rose-50">
            <p className={`${poppinsfont.className} text-2xl font-bold`}>The most convinient url shortener ever</p>
            <p>No signups , very straight forwsards</p>
            <div className='flex w-[100%] gap-2 text-white justify-center items-center'>
              <Link href="/generate" className='bg-slate-700 rounded-2xl p-2'><button>TRY NOW</button></Link>
              <Link href="/github" className='bg-slate-700 rounded-2xl p-2'><button>Github</button></Link>
            </div>
          </div>
          <div className="relative flex justify-start">
            <Image className="mix-blend-darken" src={"/vector.jpg"} fill={true} alt="vector" />
          </div>
        </section>
      </main>
    </>
  );
}
