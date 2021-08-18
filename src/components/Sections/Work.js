import styled from 'styled-components';
import { SharedSection, SharedHeader } from './sharedStyling';

const Section = styled.section`
    ${SharedSection};
    background: green;
`

const Header = styled.h1`
    ${SharedHeader}
`

const Work = () => {
    return (
        <Section>
            <Header>Work</Header>
        </Section>
    )
}

export default Work
