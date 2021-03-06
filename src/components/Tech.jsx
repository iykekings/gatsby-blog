import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 0;
  background: #fafbfc;
  border-top: 1px #eaeaea solid;
  border-bottom: 1px #eaeaea solid;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow-X: hidden;

  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

const LogoWrapper = styled.div`
  width: 1200px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media (max-width: 600px) {
    animation: slide 30s infinite linear;
  }
  
  @keyframes slide {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }
`;

const ImgWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  filter: grayscale(100%) brightness(40%);
`;

const MobImgs = styled.div`
  display: flex;

  @media(min-width: 900px) {
    display: none;
  }
`;

export const techQuery = graphql`
  query TechQuery {
    tech: file(absolutePath: { regex: "/tech.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function Tech() {
  return (
    <StaticQuery
      query={techQuery}
      render={({ tech }) => (
        <Container>
          <Wrapper>
            <LogoWrapper>
              <ImgWrapper>
                <Image
                  fluid={tech.childImageSharp.fluid}
                  alt="tech logos"
                  style={{ padding: 0, margin: 0, width: 400 }}
                />
                <MobImgs>
                  <Image
                    fluid={tech.childImageSharp.fluid}
                    alt="tech logos"
                    style={{ padding: 0, margin: 0, width: 400 }}
                  />
                  <Image
                    fluid={tech.childImageSharp.fluid}
                    alt="tech logos"
                    style={{ padding: 0, margin: 0, width: 400 }}
                  />
                  <Image
                    fluid={tech.childImageSharp.fluid}
                    alt="tech logos"
                    style={{ padding: 0, margin: 0, width: 400 }}
                  />
                  <Image
                    fluid={tech.childImageSharp.fluid}
                    alt="tech logos"
                    style={{ padding: 0, margin: 0, width: 400 }}
                  />
                  <Image
                    fluid={tech.childImageSharp.fluid}
                    alt="tech logos"
                    style={{ padding: 0, margin: 0, width: 400 }}
                  />
                </MobImgs>
              </ImgWrapper>
            </LogoWrapper>
          </Wrapper>
        </Container>
      )}
    />
  );
}

export default Tech;
