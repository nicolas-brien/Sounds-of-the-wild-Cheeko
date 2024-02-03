const values = ["center", "left", "right"];
export default values;

export const SelectTypes = values.map(x => ({ value: x, label: x }));

export const obj = Object.freeze({
    Center: "center",
    Right: "right",
    Left: "left"
})