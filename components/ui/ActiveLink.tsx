import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default ({ href, as, children }: any) => {
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
