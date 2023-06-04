type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    const modifierEntries = mods ? Object.entries(mods) : [];
    return [
        cls,
        ...additional.filter(Boolean),
        ...modifierEntries
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
