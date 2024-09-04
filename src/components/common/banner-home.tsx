'use client';

import Image from "next/image";
import { useTranslation } from 'src/app/i18n/client';

type BannerProps = {
  lang: string;
  pathAsset: string;
  className: string;
  width: number;
  height: number;
  bannerTopTitle: string;
}

const BannerHome: React.FC<BannerProps> = ({
  lang,
  pathAsset,
  className = 'mb-3 md:mb-4 lg:mb-5 xl:mb-6',
  width,
  height,
  bannerTopTitle
}) => {
  const {t} = useTranslation(lang, 'common');
  const title = bannerTopTitle;
  return (
    <div className={`bannerHomeGlobal heightFull ${className}`}>
      <h2 className="text-title-lg text-center font-medium text-fill-base sm:mb-4 mb-12 uppercase md:text-2xl">{ t(title) }</h2>
      <Image
        src={pathAsset}
        width={width}
        height={height}
        alt="banner"
        className={`w-full aspect-auto object-cover`}
      />
    </div>
  );
};

export default BannerHome;
