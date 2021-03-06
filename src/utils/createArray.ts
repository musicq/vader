export default function createArray<T>(type: new() => T): Array<T> {
    const result = new Proxy< Array<T> >(new Array<T>(), {
        get: (target: any, name: string | number) => {
            if (target[name] === undefined) {
                target[name] = new type();
            }
            return target[name];
        }
    });
    return result;
}
