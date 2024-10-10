import BannerKategori from "@/components/bannerKategori";
import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";

export const dynamic = 'force-dynamic'
import { GetListKategori, GetKategori } from "@/service/userNew";

export default async function Page({ params }) {
    const [dataKategori, dataListKategori] = await Promise.all([
        GetKategori(params.slug),
        GetListKategori(),
    ])

    return (
        <HeaderFooter data={dataListKategori}>
            <div>
                <BannerKategori data={dataKategori[0]} />
                <ListProduct
                    Listdata={dataKategori[0]?.listProducts}
                    FilterCategory={dataListKategori}
                    Lfilter={true}
                />
            </div>
        </HeaderFooter>
    );
}
