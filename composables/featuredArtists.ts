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
        name: "STADIUM",
        bio: "Stadium is a Sydney-based, Argentina-born artist reshaping sound through alternative hiphop, trap, indie, hard rock, and psychedelia. His imprint Premium Color Industries challenges music industry norms, offering raw energy and mythic vision in every release",
        photo: "https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/FeaturedArtists/STADIUM/Stadium.webp",
        videos: [
            {
                id: "JCQh45lJnHo",
                title: "Chrome Roses",
                description:
                    "Chrome Roses is a sonic offering born from devotion and ache. a love letter to music and those who choose to listen. Stadium fuses beauty and distortion, hope and heartbreak",
            },
            {
                id: "A_5hbmCjZiU",
                title: "Nicotine (Blues)",
                description:
                    "Nicotine is Stadium’s gritty confession wrapped in distortion and desire. A love song to the vice that haunts him. Written, produced, and performed in full, it drips with vulnerability and swagger, turning tobacco addiction into poetic obsession. A blues rock spiral where ache meets allure.",
            },
            {
                id: "qhDg6zQRZds",
                title: "Tell Me - Ft Urchin",
                description:
                    "Tell Me is a raw dispatch from the silence between lovers. Written, produced, and performed by Stadium, it threads heartbreak into every bar. chronicling the ache of feeling unheard by someone who once felt cosmic. Vulnerable and defiant, it's a plea wrapped in melody.",
            },
        ],
    },
];

export function GetFeaturedArtists() {
    return featuredArtists;
}
