import { SignUp } from '@clerk/nextjs'
import HeaderFooter from "@/components/layout/headerFooter";
import { GetListKategori } from "@/service/userNew";

export default async function Page() {
  const [dataKategori] = await Promise.all([
    GetListKategori()
  ])
  return (
    <HeaderFooter data={dataKategori}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px 0' }}>
        <SignUp />
      </div>
    </HeaderFooter>
  )
}