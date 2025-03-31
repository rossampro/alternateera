class Link {
    name: string;
    uri: string;
    icon: string;

    constructor(name: string, uri: string, icon: string) {
        this.name = name;
        this.uri = uri;
        this.icon = icon;
    }
}

const links: Link[] = [
    new Link(
        "Apple",
        "https://music.apple.com/us/artist/alternate-era/1387195090",
        "simple-icons:applemusic",
    ),
    new Link(
        "Spotify",
        "https://open.spotify.com/artist/6cMj7gCifUnUqsc6QJn2Y8",
        "simple-icons:spotify",
    ),
    new Link(
        "Instagram",
        "https://www.instagram.com/alternateera",
        "simple-icons:instagram",
    ),
    new Link("X", "https://x.com/AlternateEra", "simple-icons:x"),
    new Link(
        "Youtube",
        "https://youtube.com/@alternateeraofficial",
        "simple-icons:youtube",
    ),
    new Link(
        "TikTok",
        "https://www.tiktok.com/@alternateera",
        "simple-icons:tiktok",
    ),
    new Link(
        "BlueSky",
        "https://bsky.app/profile/alternateera.bsky.social",
        "simple-icons:bluesky",
    ),
];

export function GetSocialLinks() {
    return links;
}

export function GetSpecificLink(name: string) {
    return links.find((link) => link.name === name);
}
