type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]): string{
    const classes = [cls, ...additional];

    const entries = Object.keys(mods).map(key => [key, mods[key]]);

    for (const [cls, value] of entries) {
        if (value) {
            classes.push(`${cls}`);
        }
    }
    return classes.join(' ');
}
