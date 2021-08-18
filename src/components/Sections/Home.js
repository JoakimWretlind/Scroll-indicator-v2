import styled from 'styled-components';
import { SharedSection, SharedHeader } from './sharedStyling';

const Section = styled.section`
    ${SharedSection};
    background: blue;
`

const Header = styled.h1`
    ${SharedHeader}
`

const Home = () => {
    return (
        <Section>
            <Header>Home</Header>
        </Section>
    )
}

export default Home
