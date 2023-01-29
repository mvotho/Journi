import { Inter } from '@next/font/google'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Editor from "../components/Editor"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center pt-8">
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-row justify-center items-center'>
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            <div className='flex justify-center items-center'>
              <ArrowRightIcon className="h-6 w-6 text-black-500" />
            </div>
          </div>
        <div><Editor></Editor></div>
        </div>
      </div>
    </main>
  )
}
