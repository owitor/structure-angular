export function toBase64(blob: Blob): Promise<string> {
    // @ts-ignore
    return new Promise<string>(resolve => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result as string);
        };
        reader.readAsDataURL(blob);
    });
}

