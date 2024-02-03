import { useCallback, useEffect } from 'react';

export default (callback, key) => {
    const keyupHandler = useCallback((e) => {
        if (e?.code && key === e.code) {
            callback();
        }
    });

    useEffect(() => {
        window.addEventListener('keyup', keyupHandler);

        return () => {
            window.removeEventListener('keyup', keyupHandler);
        };
    }, [key]);
};
