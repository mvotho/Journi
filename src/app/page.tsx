import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Editor from "../components/Editor"
import Entry from '@/components/Entry';



async function getPosts() {
  const res = await fetch("http://172.27.176.1:8090/api/collections/posts/records")
  const data = await res.json();
  return data?.items as any[];
}


export default async function Home() {
  const records = await getPosts();


  return (
    <main>
      <div className="flex justify-center items-center pt-24">
        <div className='grid grid-cols-2 gap-8'>
          <div className='flex flex-row justify-center pr-8'>
            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <div className='flex justify-center mt-3 ml-1'>
                  <ArrowRightIcon className="h-6 w-6 text-black-500" />
                </div>
              </div>

              <div>{records.map((entry) => {
                return <Entry entry={entry}/>
              }
              )}</div>
            </div>
          </div>
          <div>
            <Editor></Editor>
          </div>
        </div>
      </div>
    </main>
  )
}
