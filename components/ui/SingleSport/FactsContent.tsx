import React from 'react';
import styled from 'styled-components';
import setDateFormat from '../../../utility/setDateFormat';
import { Sport } from '../../interfaces/Sport';
import ImgColum from '../ImgColum';
import Paragraph from '../Paragraph';

const Styled = styled.section`
  background-color: var(--clr-second);

  .facts {
    text-align: center;
    margin-bottom: 2em;
    /* grid-column: 2 / 2; */

    .para {
      font-weight: bold;
      width: 100%;
      margin-bottom: 1em;
      text-transform: capitalize;
    }

    .img--colum {
      max-width: 250px;
      margin: auto;
    }
  }

  .fact--text {
    text-align: left;
    padding-left: 1em;
    & > :last-child {
      color: var(--clr-grey);
    }
  }
`;

interface FactsContentProps {
  data: Sport;
}

const FactsContent: React.FC<FactsContentProps> = ({ data }) => {
  const getYearsOld = () =>
    data.intFormedYear === '0'
      ? 'Note Available'
      : `${data.intFormedYear} (${
          new Date().getFullYear() - parseInt(data.intFormedYear)
        }) years old`;

  return (
    <Styled className='facts--content column gridMinMax'>
      <div className='facts'>
        <Paragraph text='Poster' clr />
        <ImgColum item={data.strPoster} />
      </div>
      <div className='facts'>
        <Paragraph text='Badge' clr />
        <ImgColum item={data.strBadge} />
      </div>
      <div className='facts'>
        <Paragraph text='Trophy' clr />
        <ImgColum item={data.strTrophy} />
      </div>
      <div className='facts'>
        <Paragraph text='Logo' clr />
        <ImgColum item={data.strLogo} />
      </div>
      <div className='facts fact--text'>
        <Paragraph text='Established' clr />
        <Paragraph text={getYearsOld()} />
      </div>
      <div className='facts fact--text'>
        <Paragraph text='First Recorded Event' clr />
        <Paragraph
          text={
            data.dateFirstEvent !== '0000-00-00'
              ? setDateFormat(data.dateFirstEvent)
              : 'Not Found'
          }
        />
      </div>
      <div className='facts fact--text'>
        <Paragraph text='Current Season' clr />
        <Paragraph text={data.strCurrentSeason} />
      </div>
      <div className='facts fact--text'>
        <Paragraph text='Sport' clr />
        <Paragraph text={data.strSport} />
      </div>
      <div className='facts fact--text'>
        <Paragraph text='Location' clr />
        <Paragraph text={data.strCountry} />
      </div>
      <div className='facts fact--text'>
        <Paragraph text='Sport Gender' clr />
        <Paragraph text={data.strGender} />
      </div>
      {data.strLeagueAlternate && (
        <div className='facts fact--text'>
          <Paragraph text='Alternate Namesn' clr />
          <Paragraph text={data.strLeagueAlternate} />
        </div>
      )}
    </Styled>
  );
};

export default FactsContent;
