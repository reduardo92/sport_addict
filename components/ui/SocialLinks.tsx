import React from 'react';
import styled from 'styled-components';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaExternalLinkSquareAlt,
  FaYoutube,
} from 'react-icons/fa';

const Styled = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  font-size: 1.6rem;

  a {
    margin-right: 1em;
    color: var(--clr-white);
    transition: var(--cubicbezier);
    cursor: pointer;
    border: 1.5px solid var(--clr-white);
    border-radius: 50%;
    display: flex;
    padding: 0.4em;
    font-size: 1rem;

    & svg:hover,
    & svg:focus {
      color: var(--clr-primary);
      transform: scale(0.9);
    }

    &:hover,
    &:focus {
      border-color: var(--clr-primary);
      color: var(--clr-primary);
      transform: scale(0.9);
    }
  }

  /* & > a:last-child {
    margin-right: 0;
  } */
`;

interface SocialLinksProps {
  data: {
    strFacebook: string;
    strTwitter: string;
    strYoutube: string;
    strWebsite: string;
  };
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  data: { strFacebook, strTwitter, strYoutube, strWebsite },
}) => (
  <Styled className='social--links'>
    {strFacebook && (
      <a
        href={strFacebook}
        target='_blank'
        aria-label='facebook link'
        title='Facebook'
      >
        <FaFacebookF className='social--link' />
      </a>
    )}
    {strTwitter && (
      <a
        href={strTwitter}
        target='_blank'
        aria-label='twitter link'
        title='Twitter'
      >
        <FaTwitter className='social--link' />
      </a>
    )}
    {strYoutube && (
      <a
        href={strYoutube}
        target='_blank'
        aria-label='Youtube Link'
        title='Youtube'
      >
        <FaYoutube className='social--link' />
      </a>
    )}
    {strWebsite && (
      <a
        href={strWebsite}
        target='_blank'
        aria-label='website link'
        title='Website'
      >
        <FaExternalLinkSquareAlt className='social--link' />
      </a>
    )}
  </Styled>
);

export default SocialLinks;
