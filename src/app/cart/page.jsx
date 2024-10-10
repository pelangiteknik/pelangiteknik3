import Carts from "@/components/user/cart"
import HeaderFooter from "@/components/layout/headerFooter";
import { GetListKategori } from "@/service/userNew";

export const dynamic = 'force-dynamic'

export default async function Page() {

    const [dataKategori] = await Promise.all([
        GetListKategori()
    ])

    return (
        <HeaderFooter data={dataKategori}>
            <Carts />
        </HeaderFooter >
    )
}
