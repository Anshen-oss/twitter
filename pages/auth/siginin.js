import {getProviders, signIn} from 'next-auth/react'

const siginin = ({ providers }) => {
  console.log(providers)
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <picture>
          <source srcSet="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch11signup.png.twimg.1920.png" type="image/webp" />
          <img
            src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch11signup.png.twimg.1920.png"
            alt="twitter image inside a phone"
            className="hidden object-cover md:w-44 md:h-80 rotate-6 md:inline-flex"
          />
        </picture>
        <div className="">
        {/* Nous bouclons sur les providers car nous pouvons avoir d'autres providers comme Facebook, Twitter, etc. pour se connecter */}
          {Object.values(providers).map((provider) => (
            <div className="flex flex-col items-center" key={provider.id} >
              <picture>
                <source srcSet="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" type="image/webp" />
                <img
                  src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                  alt="twitter logo"
                  className="w-36 object-cover"
                />
              </picture>
              <p className="text-center text-sm italic my-10">
                Cette application est créée à des fins d'apprentissage
              </p>
              <button onClick={() => signIn(provider.id, {callbackUrl: "/"} )} className="bg-red-400 rounded-lg p-3 text-white hover-bg-red-500 cursor-pointer">Sign in with {provider.name}</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    }
  }
}

export default siginin;
