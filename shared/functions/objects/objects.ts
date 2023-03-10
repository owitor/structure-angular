/**
 * Clone object without keeping the reference
 * @param object
 */
export default function clone<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
}
