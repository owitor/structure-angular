export function copy(value: string): string {
    const el = document.createElement("textarea");
    el.value = value;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    return value;
}

export function copyRelativeLink(relativePath, externalLink): string {
    if (externalLink) {
        return copy(`${relativePath}`);
    }
    return copy(`${window.location.origin}${relativePath}`);
}
