import React from 'react';
// 响应式布局
// 存储当前视口大小的状态以及计算逻辑
const viewportContext = React.createContext({});
export const ViewportProvider = (children) => {
    // 监听高度，备用
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    React.useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    );
};
export const userViewPort = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
};
