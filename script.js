document.getElementById('kpop-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const songTitle = document.getElementById('song-title').value;
    const artistName = document.getElementById('artist-name').value;

    // 유튜브에서 노래 검색 URL 생성
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(songTitle + ' ' + artistName)}`;

    // 샘플 노래 목록
    const sampleSongList = [
        { title: "Attention", artist: "NewJeans" },
        { title: "Hype Boy", artist: "NewJeans" },
        { title: "Cookie", artist: "NewJeans" },
        { title: "Ditto", artist: "NewJeans" },
        { title: "OMG", artist: "NewJeans" },
        { title: "ASAP", artist: "NewJeans" },
        { title: "Zero", artist: "NewJeans" },
        { title: "How Sweet", artist: "NewJeans" },
        { title: "Super Shy", artist: "NewJeans" },
        { title: "Supernatural", artist: "NewJeans" },
        { title: "Bubble Gum", artist: "NewJeans" },
        { title: "New Jeans", artist: "NewJeans" },
        { title: "Right Now", artist: "NewJeans" },
        { title: "ETA", artist: "NewJeans" },
        { title: "GODS", artist: "NewJeans" },
        { title: "Cool With You", artist: "NewJeans"}

    ];
    

    const songExists = sampleSongList.some(song => song.title === songTitle && song.artist === artistName);
    
    if (songExists) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${youtubeSearchUrl}" target="_blank">${songTitle} - ${artistName}</a>`;
        document.getElementById('kpop-list').appendChild(li);
        document.getElementById('message').textContent = ''; // 이전 메시지 초기화
    } else {
        document.getElementById('message').textContent = "존재하지 않는 노래입니다."; // 메시지 표시
    }

    // 입력 필드 초기화
    document.getElementById('song-title').value = '';
    document.getElementById('artist-name').value = '';
});
