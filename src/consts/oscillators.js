const values = ["sine", "sawtooth", "square", "triangle"];
export default values;

export const SelectOscillators = values.map(x => ({ value: x, label: x }));

export const obj = Object.freeze({
    Sine: "sine",
    Sawtooth: "sawtooth",
    Square: "square",
    Triangle: "triangle"
})