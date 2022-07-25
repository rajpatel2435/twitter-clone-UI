import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'
import Widgets from '../Components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="mx-auto overflow-hidden max-h-screen lg:max-w-6xl">
      <Head>
        <title>Twitter</title>
       </Head>

<main className='grid grid-cols-9'>
  {/* Sidebar */}
  <Sidebar />
  {/* Feed */}
  <Feed/>
  {/* widgets */}
  <Widgets />
</main>
    </div>
  )
}

export default Home
