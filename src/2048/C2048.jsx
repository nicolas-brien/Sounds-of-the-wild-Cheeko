import React, { useEffect, useState } from 'react';

import useKeyup from '../hooks/keyup';

import Button from '../components/button/Button';
import PageContainer from '../components/page/container/PageContainer';
import PageContent from '../components/page/content/PageContent';

import Board from './Board';

import './c2048.scss';

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
    const [tiles, setTiles] = useState(def);
    const [shownTiles, setShownTiles] = useState(def);

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
        setPreviousMap(tiles);
        setRedoMap(null);
    };

    const endMove = () => {
        var empties = tiles.reduce((t, v, i) => {
            if (v === 0) return t.concat(i);
            return t;
        }, []);
        var index = empties[Math.floor(Math.random() * empties.length)];
        setTiles((s) => s.map((v, i) => (i === index ? 2 : v)));
    };

    const handleUp = () => {
        beginMove();
        var firstCol = [tiles[0], tiles[4], tiles[8], tiles[12]];
        var secondCol = [tiles[1], tiles[5], tiles[9], tiles[13]];
        var thridCol = [tiles[2], tiles[6], tiles[10], tiles[14]];
        var frouthCol = [tiles[3], tiles[7], tiles[11], tiles[15]];

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

        setTiles([
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
        var firstCol = [tiles[12], tiles[8], tiles[4], tiles[0]];
        var secondCol = [tiles[13], tiles[9], tiles[5], tiles[1]];
        var thridCol = [tiles[14], tiles[10], tiles[6], tiles[2]];
        var frouthCol = [tiles[15], tiles[11], tiles[7], tiles[3]];

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

        setTiles([
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
        var firstCol = [tiles[0], tiles[1], tiles[2], tiles[3]];
        var secondCol = [tiles[4], tiles[5], tiles[6], tiles[7]];
        var thridCol = [tiles[8], tiles[9], tiles[10], tiles[11]];
        var frouthCol = [tiles[12], tiles[13], tiles[14], tiles[15]];

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

        setTiles([
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
        var firstCol = [tiles[3], tiles[2], tiles[1], tiles[0]];
        var secondCol = [tiles[7], tiles[6], tiles[5], tiles[4]];
        var thridCol = [tiles[11], tiles[10], tiles[9], tiles[8]];
        var frouthCol = [tiles[15], tiles[14], tiles[13], tiles[12]];

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

        setTiles([
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
            setRedoMap(tiles);
            setTiles(previousMap);
            setPreviousMap(null);
        }
    };

    const redo = () => {
        if (redoMap) {
            setPreviousMap(tiles);
            setTiles(redoMap);
            setRedoMap(null);
        }
    };

    const restart = () => {
        setTiles(def);
        setPreviousMap(null);
    };

    useKeyup(handleUp, 'ArrowUp');
    useKeyup(handleDown, 'ArrowDown');
    useKeyup(handleLeft, 'ArrowLeft');
    useKeyup(handleRight, 'ArrowRight');
    useKeyup(undo, 'KeyZ');
    useKeyup(redo, 'KeyY');
    useKeyup(restart, 'KeyR');

    return (
        <PageContainer className="c2048">
            <PageContent>
                <Button className="c2048__restart" onClick={() => setTiles(def)}>
                    Restart
                </Button>
                <Board tiles={tiles} />
            </PageContent>
        </PageContainer>
    );
};

export default C2048;
