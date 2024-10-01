import BannerKategori from "@/components/bannerKategori";
import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";
import { FCategory, ListFilterProductsKategori, ListProductsKategori } from "@/service/user";

export const dynamic = 'force-dynamic'

export default async function Page({ params }) {
    const [dataListdata, dataCategory, dataFCategory] = await Promise.all([
        ListProductsKategori(params.slug, params.slug == 'best-products'),
        ListFilterProductsKategori(params.slug),
        FCategory(),
    ])

    return (
        <HeaderFooter >
            <div>
                <BannerKategori Category={dataCategory} />
                <ListProduct
                    Listdata={dataListdata}
                    FilterCategory={dataFCategory}
                    Lfilter={true}
                />
            </div>
        </HeaderFooter>
    );
}
