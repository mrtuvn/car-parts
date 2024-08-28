import Container from '@components/ui/container';
import { Metadata } from 'next';
import FeatureCarousel from '@components/common/featured-carousel';
import BannerGridTwo from '@components/common/banner-grid-two';
import HeroSliderBlock from '@components/hero/hero-slider-block';
import BannerAllCarousel from '@components/common/banner-all-carousel';
import CategoryGridListBlock from '@components/common/category-grid-list-block';
import BestSellerProductFeed from '@components/product/feeds/best-seller-product-feed';
//import { bundleDataTwo as bundle } from '@framework/static/bundle';
import { siteSettings } from '@settings/site-settings';
//import SupperCategoryElectronicFeed from '@components/product/feeds/suppercategory-electronic-feed';
//import SupperCategoryClothFeed from '@components/product/feeds/suppercategory-cloth-feed';
import {
  bannerBrand,
  homeOnesGridHero as bannerTwo,
  homeOnesGridHero2 as bannerTwo2,
  homeOneHeroBanner as heroBanner,
} from '@framework/static/banner';
import BannerHome from '@/components/common/banner-home';

export const metadata: Metadata = {
  title: siteSettings.name,
  description: siteSettings.description,
};

export default async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  return (
    <>
      <Container>
        <HeroSliderBlock
          heroBanner={heroBanner}
          className={`mb-7 mt-6`}
          lang={lang}
        />
        <FeatureCarousel lang={lang} />
        <BestSellerProductFeed lang={lang} />
        {/* <BannerGridTwo
          lang={lang}
          data={bannerTwo}
          className="mb-8 lg:mb-12"
          girdClassName="xl:gap-5 "
        /> */}
        {/* <SupperCategoryElectronicFeed lang={lang} /> */}
        {/* <BannerGridTwo
          lang={lang}
          data={bannerTwo2}
          className="mb-8 lg:mb-12"
          girdClassName="xl:gap-5 2xl:grid-cols-[minmax(1138px,_1fr)_1fr] "
        /> */}
        {/* <SupperCategoryClothFeed lang={lang}/> */}
        {/* <CategoryGridListBlock lang={lang} className="mb-6 lg:mb-8" /> */}
        <BannerHome lang={lang} pathAsset='/assets/images/banner/quy-trinh.jpg' width={1118} height={700} bannerTopTitle='proceed'/>
        <BannerAllCarousel
          lang={lang}
          data={bannerBrand}
          className="mb-8 lg:mb-12"
        />
      </Container>
    </>
  );
}
