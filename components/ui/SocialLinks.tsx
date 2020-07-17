import React from 'react';
import {
  FaExternalLinkSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import styled from 'styled-components';

const Styled = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  font-size: 1.6rem;
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
}) => {
  return (
    <Styled className='social--links'>
      {strFacebook && (
        <a
          className='icon--style'
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
          className='icon--style'
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
          className='icon--style'
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
          className='icon--style'
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
};

export default SocialLinks;
