
function showRecentDiaries() {
    const container = document.getElementById('recent-diary-list');
    if (!container) return; 


    const recent = allDiaries.slice(0, 3);

    recent.forEach(diary => {
        const a = document.createElement('a');
        a.href = diary.url;
        a.textContent = `${diary.date} : ${diary.title}`;
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        container.appendChild(a);
    });
}

function showAllDiaries() {
    const container = document.getElementById('all-diary-list');
    if (!container) return; 

    //const reversedDiaries = [...allDiaries].reverse();

    allDiaries.forEach((diary, index) => {
        const a = document.createElement('a');
        a.href = diary.url;
        a.textContent = `${diary.date} : ${diary.title}`;
        a.target = "_blank";
        a.rel = "noopener noreferrer";


        if (index === 0) {
            a.classList.add('new-post');
        }

        container.appendChild(a);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    showRecentDiaries();
    showAllDiaries();
});

//displayRecentDiaries();