import { size } from 'config/devices';
import { useState, useEffect } from 'react';

export enum ScreenType {
    Desktop = 'desktop',
    Laptop = 'laptop',
    Tablet = 'tablet',
    Mobile = 'mobile',
}
function getScreenType() {
    const { innerWidth: width } = window;

    let screenType = ScreenType.Desktop;
    if (width < size.laptop && width >= size.tablet) {
        screenType = ScreenType.Laptop;
    }
    if (width < size.tablet && width >= size.mobileL) {
        screenType = ScreenType.Tablet;
    }
    if (width < size.mobileL) {
        screenType = ScreenType.Mobile;
    }

    return screenType;
}

export default function useScreenType() {
    const [screenType, setScreenType] = useState(getScreenType());

    useEffect(() => {
        function handleResize() {
            setScreenType(getScreenType());
        }

        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenType;
}
