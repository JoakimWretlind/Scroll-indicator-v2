import styled from 'styled-components';
import { SharedSection, SharedHeader } from './sharedStyling';

const Section = styled.section`
    ${SharedSection};
    background: gray;
`

const Header = styled.h1`
    ${SharedHeader}
`

const Contact = () => {
    return (
        <Section>
            <Header>Contact</Header>
        </Section>
    )
}

export default Contact
