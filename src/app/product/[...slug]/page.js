import HeaderFooter from "@/components/layout/headerFooter";
import Product from "@/components/product";
import ListProduct from "@/components/listProduct";
import Judul from "@/components/judul";
import { GetProduct, GetListProduct, GetListKategori } from "@/service/userNew";

export const dynamic = 'force-dynamic'

BigInt.prototype.toJSON = function () {
    return this.toString();
}

export default async function Page({ params }) {

    const [dataProduct, dataListProduct, dataListKategori] = await Promise.all([
        GetProduct(params.slug),
        GetListProduct(),
        GetListKategori()
    ])

    return (
        <HeaderFooter data={dataListKategori} >
            <Product
                data={dataProduct[0]}
            />
            <Judul judul={'Best Product'} />
            <ListProduct
                Listdata={dataListProduct}
                Lfilter={false}
            />
        </HeaderFooter>
    );
}
