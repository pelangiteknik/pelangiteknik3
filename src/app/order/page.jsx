import DataPesanan from "@/components/user/dataPesanan";
import HeaderFooter from "@/components/layout/headerFooter";
import { GetListKategori } from "@/service/userNew";

export default async function Page() {
    const [dataKategori] = await Promise.all([
        GetListKategori()
    ])
    return (
        <HeaderFooter data={dataKategori}>
            <DataPesanan />
        </HeaderFooter >

    )
}
