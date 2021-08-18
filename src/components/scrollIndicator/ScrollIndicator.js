import { useState, useEffect } from 'react';
import {
    ProgressMainWrapper,
    ProgressMainStyle,
    ProgressCounter
} from './Indicator.styling';

const ScrollIndicator = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [percent, setPercent] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setPercent(scrolled.toFixed(0));
        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <>
            <ProgressMainWrapper>
                <ProgressMainStyle style={{
                    height: `${scrollTop}%`
                }}>
                    <ProgressCounter>
                        {percent}%
                    </ProgressCounter>
                </ProgressMainStyle>
            </ProgressMainWrapper>
        </>
    )
}

export default ScrollIndicator