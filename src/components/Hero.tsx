import Image from 'next/image'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'

export function Hero() {
  return (
    <div className="overflow-hidden bg-[#002420] dark:mt-[-4.75rem]  dark:bg-[#0F172A] dark:pb-32 dark:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <h1 className="inline bg-gradient-to-r from-[#DFF1EF] to-[#6FA09A]  bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent">
                Ship your mobile apps faster. Your users are waiting...
              </h1>
              <p className="mt-3 text-2xl tracking-tight text-[#DDEFED]">
                The Expo and React Native boilerplate with all you need to build
                your next mobile app. Pre-built features including auth,
                payments, data handling, push notifications and more.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/#getting-started">
                  Get started
                </Button>
                <Button
                  variant="secondary"
                  target="_blank"
                  href="https://launchtoday.dev/"
                >
                  Purchase the boilerplate
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative">
              <div className="flex items-center justify-center pl-4 pt-4">
                <img
                  className="z-30 w-3/4 lg:absolute"
                  src="/images/hero-image.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
