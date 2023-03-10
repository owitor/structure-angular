export function getRandomString(len: number, charSet?: string): string {
    charSet =
        charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array(len)
        // @ts-ignore
        .fill("")
        .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
        .join("");
}

export const HashGenerator = length => {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const removeAccent = (source: string): string => {
    if (!source.length) {
        return;
    }

    const accent = [
        /[\300-\306]/g,
        /[\340-\346]/g, // A, a
        /[\310-\313]/g,
        /[\350-\353]/g, // E, e
        /[\314-\317]/g,
        /[\354-\357]/g, // I, i
        /[\322-\330]/g,
        /[\362-\370]/g, // O, o
        /[\331-\334]/g,
        /[\371-\374]/g, // U, u
        /[\321]/g,
        /[\361]/g, // N, n
        /[\307]/g,
        /[\347]/g // C, c
    ];

    const noaccent = [
        "A",
        "a",
        "E",
        "e",
        "I",
        "i",
        "O",
        "o",
        "U",
        "u",
        "N",
        "n",
        "C",
        "c"
    ];

    for (let i = 0; i < accent.length; i++) {
        source = source.replace(accent[i], noaccent[i]);
    }

    return source;
};

export function uniqueID(): string {
    const chr4 = () => Math.random().toString(16).slice(-4);
    // @ts-ignore
    return new Array(8).fill(0).map(chr4).join("-");
}

export function generateID() {
    return (
        // @ts-ignore
        Math.random().toString(16).substr(2, 10).padEnd(10, "f") +
        // @ts-ignore
        Math.random().toString(16).substr(2, 10).padEnd(10, "f")
    );
}
