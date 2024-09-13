import Image from "next/image"

export default function Home() {
  return (
    <main className=" bg-yellow min-h-screen flex items-center justify-center">
      <div className=" w-[327px] h-[501px] rounded-xl bg-white p-6 border-solid border-2 border-black drop-shadow-custom-black">
        <Image
          className="rounded-lg mb-6"
          src={"/illustration-article.svg"}
          alt="card-illustration"
          width={279}
          height={200}
        ></Image>
        <div className="flex flex-col justify-between gap-4 mb-6">
          <div className="w-[73px] h-[26px] bg-yellow rounded-md flex items-center justify-center">
            <p className=" font-extrabold text-xs font-figtree text-gray-950">
              Learning
            </p>
          </div>
          <p className="h-[18px] text-xs font-figtree font-medium">
            Published 21 Dec 2023
          </p>
          <h1 className="text-xl h-[30px] font-figtree font-medium text-gray-950">
            HTML & CSS foundations
          </h1>
          <p className="font-figtree font-medium text-gray-500 text-sm h-[63px] ">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src={"/image-avatar.webp"}
            alt="avatar"
            width={32}
            height={32}
          ></Image>
          <p className="font-extrabold text-sm text-gray-950 font-figtree">
            Greg Hooper
          </p>
        </div>
      </div>
    </main>
  )
}
