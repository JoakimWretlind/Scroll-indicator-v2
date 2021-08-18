import styled from 'styled-components';
import { SharedSection, SharedHeader } from './sharedStyling';

const Section = styled.section`
    ${SharedSection};
    background: burlywood;
`

const Header = styled.h1`
    ${SharedHeader}
`

const Portfolio = () => {
    return (
        <Section>
            <Header>Portfolio</Header>
        </Section>
    )
}

export default Portfolio
