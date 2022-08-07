import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react"

const Input = () => {
  const { data: session } = useSession();
  console.log('session: ', session);

  return (
    /* Si la session existe on affiche l'image du user et le champ input */
    <>
      {session && (
       <div className="flex border-b border-gray-200 p-3 space-x-3">
        <picture>
          <source srcSet={session?.user.image} type="image/webp" />
          <img
            onClick={signOut}
            src={session?.user.image}
            alt="user-img"
            className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
          />
        </picture>
        <div className="w-full divide-y divide-gray-200">
          <div className="">
            <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" rows="2" placeholder="What's happening" />
          </div>
          <div className="flex items-center justify-between pt-2">
              <div className="flex">
                <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
              </div>
              <button className="rounded-full bg-blue-400 px-4 py-1.5 text-white font-semibold shadow-md hover:brightness-95 disabled:opacity-50">
                Tweet
              </button>
          </div>
        </div>
    </div>
    )}
    </>
  );
}

export default Input;
