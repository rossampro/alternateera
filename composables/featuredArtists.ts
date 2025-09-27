const featuredArtists = [
    {
        name: "Human Xperiment",
        bio: "Human Xperiment is an innovative Alternative/Rap solo-artist breaking boundaries with their genre-blurring sound. Drawing inspiration from a kaleidoscope of musical styles, they craft tracks that defy expectations and resonate with authenticity. Their latest album, Method Development, showcases their fearless experimentation and raw lyrical prowess.  Human Xperiment challenges conventions and invites listeners to join their journey of creative exploration.",
        photo: "https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/FeaturedArtists/HumanXperiment/HumanXperimentMethodDevelopment.webp",
        videos: [
            {
                id: "bDZHxsVC_xE",
                title: "Occupation",
                description:
                    "Song 'Occupation' off the album 'Method Development' was written after I went back to grad school to get a Ph.D in Molecular Biology only to enter a stagnant job market that was filled with toxic bosses.  This song is my rebellion to how society tells us if we follow the right steps will be successful.",
            },
            {
                id: "E44FxKecgwA",
                title: "Scattered Toys",
                description:
                    "Song 'Scattered Toys' off the album 'Method Development' was written as a reminder to always embrace your inner child no matter how old you become.  We should never forget to play and enjoy life and not be diluted by social norms.",
            },
            {
                id: "KF__fi6r6Ko",
                title: "Look in the Mirror",
                description:
                    "Song 'Look in the Mirror' off the album 'Method Development' is a song about self reflection and how as individuals we are just as capable of deceiving ourselves as we are at being deceived by outside forces.",
            },
        ],
    },
    {
        name: "Bartender",
        bio: "Mixing wordy wit with angsty, ponderous aggression over a versatile mix of musical styles, from dirty street-level trap and boom bap beats to jazz, soul and even country blues-oriented vibes, Bartender is the ex-rocker turned metaphorical neon ninja capable of dismantling the unwelcome modern gridwork with a pen and some factory-floor scorn.",
        photo: "https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/FeaturedArtists/Bartender/BartenderArtistPhoto.webp",
        videos: [
            {
                id: "d9zUWEcda0U",
                title: "PUNTO",
                description:
                    "The Fiat Punto with 5 exhausts is the run-down trash heap that can still go like hell. This is the first official single, written, recorded and mixed by Bartender. Video shot by Shutterflyfiles and edited by Bartender. Song Mastered by µvibes.",
            },
            {
                id: "UYPisoQ6WhQ",
                title: "Neuroreaper",
                description:
                    "Knowledge of the basilisk without immediate advances into its actualisation can and will result in a targeting of your consciousness by the inevitable singularity, and can and will result in the seemingly infinite neurological torture that the basilisk can and will initiate and perpetuate.",
            },
            {
                id: "KSRetQSgRYY",
                title: "Dilla Flow",
                description:
                    "Another freeflow of thought, written quickly and instictively, relating to my situation in the world at that moment and forged by my love for the serenity of J Dilla.",
            },
        ],
    },
    {
        name: "Death Moon",
        bio: "Death Moon is the masked alien from the dark side of the Moon, sending distorted transmissions through chaotic trap, haunting melodies, and sounds no human has heard before. Once a kid doubted for his “weird voice,” he turned it into his greatest weapon, bending genres until they break. His 2025 EP 2 THE MOON OR DIE, released on the night of a Blood Moon, became an underground statement — proof he can shift from raw aggression to some alien and weird melodies, making it extremely hard to place him in a box.",
        photo: "https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/FeaturedArtists/DeathMoon/DeathMoon.webp",
        videos: [
            {
                id: "-Rms3P38WoM",
                title: "NO THREAT (feat IlyTae)",
                description:
                    "A rebellious rage anthem where Death Moon flexes technical skill over chaotic energy, with ILYTAE’s intro setting off a dynamic clash of styles. ",
            },
            {
                id: "LbP03LPUC58",
                title: "2DAMOON (feat. Crimson REd)",
                description:
                    "Death Moon’s most alien track yet, blending screamy but controlled melodies with a spacey, unearthly beat that feels like pure otherworld sound",
            },
            {
                id: "Lw8TMPP_awc",
                title: "INSIDIOUS (feat. Micah1)",
                description:
                    "A furious trap banger packed with sharp flows and raw energy, featuring Polish rapper Micah1 whose rapid-fire verse takes the track to another level.",
            },
        ],
    },
];

export function GetFeaturedArtists() {
    return featuredArtists;
}
