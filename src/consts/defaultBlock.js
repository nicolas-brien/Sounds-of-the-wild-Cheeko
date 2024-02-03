import defaultSound from './defaultSound';

export default Object.freeze({
    index: 0,
    freq: defaultSound.frequency,
    gain: defaultSound.gain,
    type: defaultSound.type,
    osc: defaultSound.oscillator,
    beg: 0,
    len: 200,
});
