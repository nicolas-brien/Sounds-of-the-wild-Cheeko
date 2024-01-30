import { useCallback, useEffect } from 'react';

export default (keydownCallback, keyupCallback, keys) => {
    const keydownHandler = useCallback((e) => {
        if (e?.code && keys.includes(e.code)) {
            keydownCallback();
        }
    });
    const keyupHandler = useCallback((e) => {
        if (e?.code && keys.includes(e.code)) {
            keyupCallback();
        }
    });

    useEffect(() => {
        window.addEventListener('keydown', keydownHandler);
        window.addEventListener('keyup', keyupHandler);

        return () => {
            window.removeEventListener('keydown', keydownHandler);
            window.removeEventListener('keyup', keyupHandler);
        };
    }, [keys]);
};
