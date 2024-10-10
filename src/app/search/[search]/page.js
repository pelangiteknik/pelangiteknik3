import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";

export const dynamic = 'force-dynamic'
import { GetListKategori, GetSearch } from "@/service/userNew";

export default async function Page({ params }) {

    const [dataListKategori, dataListProduct] = await Promise.all([
        GetListKategori(),
        GetSearch(params.search)
    ])

    return (
        <HeaderFooter data={dataListKategori}>
            <div>
                <ListProduct
                    Listdata={dataListProduct}
                    FilterCategory={dataListKategori}
                    Lfilter={true}
                />
            </div>
        </HeaderFooter>
    );
}
