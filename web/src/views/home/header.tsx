import Image from 'next/image'

import { SearchInput } from '@/components/shared'
import { Types } from '@/lib/home'
import SearchGif from '@/assets/gif/search-isbn.gif'
import PaypalImage from '@/assets/images/paypal.png'
import VenmoImage from '@/assets/images/venmo.png'
import CheckImage from '@/assets/images/checkPayment.png'
import GooglePlayImage from '@/assets/images/google_play.png'
import AppleStoreImage from '@/assets/images/apple_store.png'
import { Text } from '@/components/ui'

export const Header = ({}: { type?: Types }) => {
  return (
    <header className="bg-tertiary py-16 text-tertiary-foreground">
      <div className="container grid min-h-48 grid-cols-12 gap-6">
        <div className="col-span-8 flex flex-col gap-12">
          <SearchInput />
          <Text variant={'heading1'}>
            Sell Textbooks For The Highest Price Guaranteed
          </Text>
          <div className="space-y-4">
            <Text variant={'large'}>100% Free To Use. Get Paid Quickly.</Text>
            <ul className="flex flex-nowrap gap-4">
              <li className="relative aspect-video h-10">
                <Image src={PaypalImage} alt="paypal" fill />
              </li>
              <li className="relative aspect-video h-10">
                <Image src={VenmoImage} alt="venmo" fill />
              </li>
              <li className="relative aspect-video h-10">
                <Image src={CheckImage} alt="check" fill />
              </li>
            </ul>
            <ul className="flex flex-nowrap items-center gap-4">
              <li className="relative aspect-[16/7] h-16">
                <Image src={GooglePlayImage} alt="google play" fill />
              </li>
              <li className="relative aspect-[16/5.5] h-11">
                <Image src={AppleStoreImage} alt="apple store" fill />
              </li>
            </ul>
          </div>
        </div>
        <div className="relative col-span-4">
          <Image src={SearchGif} alt="search-gif" fill />
        </div>
      </div>
    </header>
  )
}
