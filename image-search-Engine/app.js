const accesskey = "G6UlYk56c2phAbx107I4zsRHcNxXmm_V6K511flgHtU";

let searchform = document.querySelector("#search-form");
let searchbox = document.querySelector("#search-box");
let searchresult = document.querySelector("#search-result");
let showmorebtn = document.querySelector("#show-more-btn");

let keyword = "";
let page = 1;

async function searchimages() {
    keyword = searchbox.value;
    if (!keyword.trim()) return; // Don't search if empty

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (page === 1) {
            searchresult.innerHTML = "";
        }

        const results = data.results;

        if (results.length === 0) {
            searchresult.innerHTML = "<p style='font-size: 1.6rem; text-align: center; grid-column: 1/-1;'>No images found. Try a different search term.</p>";
            showmorebtn.style.display = "none";
            return;
        }

        results.map((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;
            image.alt = result.alt_description || "Search result image";

            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.appendChild(image);

            searchresult.appendChild(imageLink);
        });

        showmorebtn.style.display = "block";
    } catch (error) {
        console.error("Error fetching images:", error);
        searchresult.innerHTML = "<p style='font-size: 1.6rem; text-align: center; grid-column: 1/-1;'>Failed to load images. Please try again.</p>";
        showmorebtn.style.display = "none";
    }
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchimages();
});

showmorebtn.addEventListener("click", () => {
    page++;
    searchimages();
});