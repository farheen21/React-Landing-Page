import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { InfoSec , InfoRow , InfoColumn , TextWrapper ,TopLine , Heading , Subtitle} from './InfoSectionElements';
const InfoSection = ( { lightBg ,imgStart , lightTopLine ,lightTextDesc ,buttonLabel , description , headLine , lightText, topLine , primary}) => {
    return (
       <>
       <InfoSec lightBg={lightBg}>
         <Container>
           <InfoRow imagStart={imgStart}>
             <TextWrapper>
                 <TopLine lightTopLine= {lightTopLine}>{topLine} </TopLine>
                 <Heading lightText={lightText}>{headLine}</Heading>
                 <Subtitle lightTextDes={lightTextDesc}>{description}</Subtitle>
                 <Link to="/sign-up">
                   <Button big fontBig primary={primary}>
                     {buttonLabel}
                   </Button>
                 </Link>
             </TextWrapper>
           </InfoRow>
         </Container>
       </InfoSec>
       </>
    )
}

export default InfoSection
