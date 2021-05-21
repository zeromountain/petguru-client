import Head from 'next/head'
import HomeNavbar from '../src/components/HomeNavbar'


export default function MissingMain() {
  return (
    <>
      <Head>
        <title>펫그루 | 실종신고</title>
      </Head>
      <HomeNavbar />
      <h1>펫그루 실종신고 페이지 메인</h1>
    </>
  )
}