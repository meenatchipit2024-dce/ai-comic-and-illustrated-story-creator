function generateComic() {

    const topic = document.getElementById("topic").value.trim();

    const genre = document.getElementById("genre").value;

    const comic = document.getElementById("comic");

    if (topic === "") {
        alert("Please enter a story topic!");
        return;
    }

    const scenes = [
        {
            title: "Scene 1: The Beginning",
            emoji: "🌍",
            story: `Once upon a time, an exciting ${genre.toLowerCase()} story began about ${topic}. Our hero was ready for a new adventure!`
        },
        {
            title: "Scene 2: The Challenge",
            emoji: "⚡",
            story: `Suddenly, an unexpected challenge appeared. Our hero had to think carefully and find a solution.`
        },
        {
            title: "Scene 3: The Adventure",
            emoji: "🚀",
            story: `With courage and determination, our hero started the journey and discovered something amazing!`
        },
        {
            title: "Scene 4: The Happy Ending",
            emoji: "🏆",
            story: `Finally, the challenge was solved. Everyone celebrated the success. The adventure became an unforgettable story!`
        }
    ];

    comic.innerHTML = "";

    scenes.forEach((scene, index) => {

        comic.innerHTML += `
            <div class="panel">
                <div class="illustration">
                    ${scene.emoji}
                </div>

                <h3>${scene.title}</h3>

                <p>${scene.story}</p>
            </div>
        `;

    });

    document.getElementById("downloadBtn").style.display = "inline-block";

}

function downloadComic() {

    const comic = document.getElementById("comic").innerText;

    const blob = new Blob(
        [comic],
        { type: "text/plain" }
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "My-AI-Comic-Story.txt";

    link.click();

    URL.revokeObjectURL(link.href);
}