import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface ActiveLinkProps {
  href: string;
  as?: string;
  children: any;
}

export default ({ href, as, children }: ActiveLinkProps) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.asPath === href || router.asPath === as) {
    className = `${className} selected`;
  }

  return (
    <Link href={href} as={as}>
      {React.cloneElement(children, { className })}
    </Link>
  );
};
