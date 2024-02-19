import React from "react";
import styled, { keyframes, css } from "styled-components";
import "./text.css";
function Scroll1() {
  const row2 = [
    "  Opportunities ... BEYOND BORDERS ...  ",
    "  OPPORTUNITIES ... BEYOND BORDERS ...  ",
   "  Opportunities ... BEYOND BORDERS ...  ",
   "  Opportunities ... BEYOND BORDERS ...  ",
    "  Opportunities ... BEYOND BORDERS ...  ",
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Texto>
                 
                   <div>{el}</div>
                </Texto>
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          
        </Marquee>
      </Wrapper>
       
    </AppContainer>
  );
}

export default Scroll1;
const Texto = styled.div`
  background: #region;
  font-size: 70px;
font-weight:300;
  white-space: nowrap;

  text-align: center;
   @media (max-width: 768px) {
        font-size: 45px;
      }
`;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
   z-index: 4;
`;

const Wrapper = styled.div`
  width: 90%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 80%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  
  to {
    transform: translateX(100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 80%;
  animation: ${scrollX} 20s linear infinite ;
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -2s ;
`;

const ImageGroup = styled.div`
  // display: grid;
  place-items: center;
`;

// const Image = styled.img`
//   object-fit: contain;
//   width: 100%;
//   height: 1%;
//   /* border: 1px solid black; */
//   border-radius: 0.5rem;
//   aspect-ratio: 16/9;
//   // padding: 5px 20px;
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// `;
