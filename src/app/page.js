import BannerMain from "@/components/bannerMain";
import Category from "@/components/category";
// import { ContentWithWatermark } from "@/components/ContentWithWatermark";
import Hpo from "@/components/hpo";
import Judul from "@/components/judul";
import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";
// import UploadGambar from "@/components/UploadGambar";
import { GetListKategori, GetListProduct } from "@/service/userNew";


export const dynamic = 'force-dynamic'

export default async function Home() {

  const [dataKategori, dataListProduct] = await Promise.all([
    GetListKategori(),
    GetListProduct()
  ])


  return (
    <HeaderFooter data={dataKategori}  >
      <BannerMain data={dataKategori} />
      <Hpo />
      {/* <ContentWithWatermark /> */}
      {/* <UploadGambar /> */}
      <Judul judul={'Best Product'} />
      <ListProduct
        Listdata={dataListProduct}
        Lfilter={false}
      />
      <Judul judul={'Categories'} />
      <Category data={dataKategori} />

    </HeaderFooter>
  );
}
