import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { InfoSec , InfoRow , InfoColumn , TextWrapper ,TopLine , Heading ,Subtitle , ImgWrapper , Img , } from './InfoSectionElements';
const InfoSection = ( { lightBg ,imgStart , lightTopLine ,lightTextDesc ,buttonLabel , description , headLine , lightText, topLine , primary ,start , img, alt}) => {
    return (
       <>
       <InfoSec lightBg={lightBg}>
         <Container>
           <InfoRow imgStart={imgStart}>
             <InfoColumn>
             <TextWrapper>
                 <TopLine lightTopLine= {lightTopLine}>{topLine} </TopLine>
                 <Heading lightText={lightText}>{headLine}</Heading>
                 <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                 <Link to="/sign-up">
                   <Button big fontBig primary={primary}>
                     {buttonLabel}
                   </Button>
                 </Link>
             </TextWrapper>
             </InfoColumn>
             <InfoColumn>
               < ImgWrapper start={start}> 
                 <Img src={ img } alt={alt}></Img>
               </ImgWrapper>
             </InfoColumn>
           </InfoRow>
         </Container>
       </InfoSec>
       </>
    )
}

export default InfoSection
