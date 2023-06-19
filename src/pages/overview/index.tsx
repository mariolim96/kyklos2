import { type NextPage } from 'next'
import Head from 'next/head'

import Input from '../../components/atoms/Input'
import Button from 'components/atoms/Button'
import ThemeChanger from 'components/atoms/ThemeChanger'
import Select from 'components/atoms/Select'
import Table from 'components/atoms/Table'
import NavBar2 from 'components/organism/Navbar'

const Home: NextPage = () => {
  const options = ['hello', 'world']

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"> */}
      <NavBar2></NavBar2>
      <ThemeChanger />
      <Input value="hello" />
      <Button>hello</Button>
      <Select
        options={options}
        selected={options[0]}
        onChange={() => {
          console.log('hello')
        }}
      />
      <Table />
      {/* </main> */}
    </>
  )
}

export default Home
