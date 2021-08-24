import React from 'react';
import { Container } from '../../globalStyles';
import { InfoSec } from './InfoSectionElements';
const InfoSection = ( { lightBg }) => {
    return (
       <>
       <InfoSec lightBg={lightBg}>
         <Container>
           <InfoRow imagStart={imgStart}>
             <TextWrapper>
                 h
             </TextWrapper>
           </InfoRow>
         </Container>
       </InfoSec>
       </>
    )
}

export default InfoSection
