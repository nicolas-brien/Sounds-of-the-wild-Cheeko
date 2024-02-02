import React, { useState } from 'react';

import useInputs from '../hooks/useInputs';

import PageContainer from '../components/page/container/PageContainer';
import PageContent from '../components/page/content/PageContent';
import Button from '../components/button/Button';

import './c2048.scss';
import Tile from './Tile';

// map = [
//     0, 0, 0, 0,
//     0, 0, 0, 0,
//     2, 0, 0, 0,
//     0, 0, 2, 0,
// ];
const def = [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0];

const C2048 = () => {
    const [previousMap, setPreviousMap] = useState(null);
    const [redoMap, setRedoMap] = useState(null);
    const [s, setS] = useState(def);

    const comp = (a, b) => {
        if (a === 0 && b > 0) return [b, 0];
        if (a === b) return [a * 2, 0];
        return [a, b];
    };

    const squeeze = (col, current, i) => {
        if (Array.isArray(col)) {
            if (current === 0) return [...col, 0];
            var last = col.slice(-1)[0];
            return [...col.slice(0, col.length - 1), ...comp(last, current)];
        } else {
            return comp(col, current);
        }
    };

    const beginMove = () => {
        setPreviousMap(s);
        setRedoMap(null);
    };

    const endMove = () => {
        var empties = s.reduce((t, v, i) => {
            if (v === 0) return t.concat(i);
            return t;
        }, []);
        var index = empties[Math.floor(Math.random() * empties.length)];
        setS((s) => s.map((v, i) => (i === index ? 2 : v)));
    };

    const handleUp = () => {
        beginMove();
        var firstCol = [s[0], s[4], s[8], s[12]];
        var secondCol = [s[1], s[5], s[9], s[13]];
        var thridCol = [s[2], s[6], s[10], s[14]];
        var frouthCol = [s[3], s[7], s[11], s[15]];

        firstCol.sort((a, _) => {
            return a === 0 ? 1 : -1;
        });
        var uno = firstCol.reduce(squeeze);

        secondCol.sort((a, _) => {
            return a === 0 ? 1 : -1;
        });
        var dos = secondCol.reduce(squeeze);

        thridCol.sort((a, _) => {
            return a === 0 ? 1 : -1;
        });
        var tres = thridCol.reduce(squeeze);

        frouthCol.sort((a, _) => {
            return a === 0 ? 1 : -1;
        });
        var quattro = frouthCol.reduce(squeeze);

        setS([
            uno[0],
            dos[0],
            tres[0],
            quattro[0],
            uno[1],
            dos[1],
            tres[1],
            quattro[1],
            uno[2],
            dos[2],
            tres[2],
            quattro[2],
            uno[3],
            dos[3],
            tres[3],
            quattro[3],
        ]);
        endMove();
    };

    const handleDown = () => {
        beginMove();
        var firstCol = [s[12], s[8], s[4], s[0]];
        var secondCol = [s[13], s[9], s[5], s[1]];
        var thridCol = [s[14], s[10], s[6], s[2]];
        var frouthCol = [s[15], s[11], s[7], s[3]];

        firstCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var uno = firstCol.reduce(squeeze);

        secondCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var dos = secondCol.reduce(squeeze);

        thridCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var tres = thridCol.reduce(squeeze);

        frouthCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var quattro = frouthCol.reduce(squeeze);

        setS([
            uno[3],
            dos[3],
            tres[3],
            quattro[3],
            uno[2],
            dos[2],
            tres[2],
            quattro[2],
            uno[1],
            dos[1],
            tres[1],
            quattro[1],
            uno[0],
            dos[0],
            tres[0],
            quattro[0],
        ]);
        endMove();
    };

    const handleLeft = () => {
        beginMove();
        var firstCol = [s[0], s[1], s[2], s[3]];
        var secondCol = [s[4], s[5], s[6], s[7]];
        var thridCol = [s[8], s[9], s[10], s[11]];
        var frouthCol = [s[12], s[13], s[14], s[15]];

        firstCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var uno = firstCol.reduce(squeeze);

        secondCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var dos = secondCol.reduce(squeeze);

        thridCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var tres = thridCol.reduce(squeeze);

        frouthCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var quattro = frouthCol.reduce(squeeze);

        setS([
            uno[0],
            uno[1],
            uno[2],
            uno[3],
            dos[0],
            dos[1],
            dos[2],
            dos[3],
            tres[0],
            tres[1],
            tres[2],
            tres[3],
            quattro[0],
            quattro[1],
            quattro[2],
            quattro[3],
        ]);
        endMove();
    };

    const handleRight = () => {
        beginMove();
        var firstCol = [s[3], s[2], s[1], s[0]];
        var secondCol = [s[7], s[6], s[5], s[4]];
        var thridCol = [s[11], s[10], s[9], s[8]];
        var frouthCol = [s[15], s[14], s[13], s[12]];

        firstCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var uno = firstCol.reduce(squeeze);

        secondCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var dos = secondCol.reduce(squeeze);

        thridCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var tres = thridCol.reduce(squeeze);

        frouthCol.sort((a, b) => {
            return a === 0 ? 1 : -1;
        });
        var quattro = frouthCol.reduce(squeeze);

        setS([
            uno[3],
            uno[2],
            uno[1],
            uno[0],
            dos[3],
            dos[2],
            dos[1],
            dos[0],
            tres[3],
            tres[2],
            tres[1],
            tres[0],
            quattro[3],
            quattro[2],
            quattro[1],
            quattro[0],
        ]);
        endMove();
    };

    const undo = () => {
        if (previousMap) {
            setRedoMap(s);
            setS(previousMap);
            setPreviousMap(null);
        }
    };

    const redo = () => {
        if (redoMap) {
            setPreviousMap(s);
            setS(redoMap);
            setRedoMap(null);
        }
    };

    const restart = () => {
        setS(def);
        setPreviousMap(null);
    };

    useInputs(() => {}, handleUp, ['ArrowUp']);
    useInputs(() => {}, handleDown, ['ArrowDown']);
    useInputs(() => {}, handleLeft, ['ArrowLeft']);
    useInputs(() => {}, handleRight, ['ArrowRight']);
    useInputs(() => {}, undo, ['KeyZ']);
    useInputs(() => {}, redo, ['KeyY']);
    useInputs(() => {}, restart, ['KeyR']);

    return (
        <PageContainer>
            <PageContent>
                <div className="c2048">
                    {s.map((v, i) => {
                        return (
                            <div className="c2048__tile" key={i}>
                                <Tile value={v} />
                            </div>
                        );
                    })}
                </div>
                <Button onClick={() => setS(def)}>Restart</Button>
            </PageContent>
        </PageContainer>
    );
};

export default C2048;
