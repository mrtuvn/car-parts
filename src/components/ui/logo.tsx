import Image from 'next/image';
import Link from '@components/ui/link';
import cn from 'classnames';
import { siteSettings } from '@settings/site-settings';

import React from "react";
interface Props {
  lang: string;
  variant?: string;
  className?: string;
  href?: string;
}
const Logo: React.FC<Props> = ({
  className,
  variant,
  href = siteSettings.logo.href,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn('inline-flex focus:outline-none ', className)}
      {...props}
    >
      {variant === 'black' ? (
        <Image
          className="logo"
          src={siteSettings.logo.urlReverse}
          alt={siteSettings.logo.alt}
          width={siteSettings.logo.width}
          height={siteSettings.logo.height}
          loading="eager"
        />
      ) : (
        <Image
          className="logo"
          src={siteSettings.logo.url}
          alt={siteSettings.logo.alt}
          width={siteSettings.logo.width}
          height={siteSettings.logo.height}
          loading="eager"
        />
      )}
    </Link>
  );
};

export default Logo;
