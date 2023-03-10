export function rgba2hex(orig) {
    const rgb = orig
        .replace(/\s/g, "")
        .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);
    const hex = rgb
        ? // eslint-disable-next-line no-bitwise
        (rgb[1] | (1 << 8)).toString(16).slice(1) +
        // eslint-disable-next-line no-bitwise
        (rgb[2] | (1 << 8)).toString(16).slice(1) +
        // eslint-disable-next-line no-bitwise
        (rgb[3] | (1 << 8)).toString(16).slice(1)
        : orig;

    return `#${hex}`;
}
