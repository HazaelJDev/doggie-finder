export function slugify(str :string) : string {
    return str.trim().replace(" ", "-").toLowerCase();
}