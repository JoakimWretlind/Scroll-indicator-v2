import styled from 'styled-components';
import { SharedSection, SharedHeader } from './sharedStyling';

const Section = styled.section`
    ${SharedSection};
    background: red;
`

const Header = styled.h1`
    ${SharedHeader}
`

const About = () => {
    return (
        <Section>
            <Header>About</Header>
        </Section>
    )
}

export default About
