import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get sty editing <code>pages/index.js</code>
        </p>
        <h1><center>Calculator App</center></h1>
  <p>Change:</p>
  20 dollar bills:<p id="20">0</p>
  10 dollar bills:<p id="10">0</p>
  5 dollar bills:<p id="5">0</p>
  1 dollar bills:<p id="1">0</p>
  Quarters:<p id="0.25">0</p>
  Dimes:<p id="0.1">0</p>
  Nickels:<p id="0.05">0</p>
  Pennies:<p id="0.01">0</p>
  <button class="clickme">click me</button>
      </main>

      <Footer />
    </div>
  )
}
