import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";

export const dynamic = 'force-dynamic'
import { GetListKategori, GetListProduct } from "@/service/userNew";

export default async function Page() {
    const [dataListKategori, dataListProduct] = await Promise.all([
        GetListKategori(),
        GetListProduct()
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
