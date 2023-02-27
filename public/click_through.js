function clicking_through(id){
    const list_hobbies = [
    "singing with my ukulele",
    "writing poetry on my substack",
    "brewing coffee with my v60",
    "cafe hopping around the city",
    "pretending to be busy",
    "walking through cities",
    "smashing birdies on the court",
    "shredding a mountain on my snowboard",
    "playing pump it up",
    "cooking mapo tofu",
    "walking through art galleries",
    "drafting up new songs",
    "bar hopping through neighbourhoods",
    "watching super smash bros melee",
    "trying to get on top of another mountain",
    "crafting a new spotify playlist"
    ];
    const places = [
        "corner",
        "fragment",
        "sliver",
        "pocket",
        "section",
        "node"
    ]
    if (id == 0){
        const randomIndex = Math.floor(Math.random() * list_hobbies.length);
        const item = list_hobbies[randomIndex];
        document.getElementById("hobbies").innerHTML = item;
    }
    else if (id == 1){
        const randomIndex = Math.floor(Math.random() * places.length);
        const item = places[randomIndex];
        document.getElementById("corner").innerHTML = item;
    }
}