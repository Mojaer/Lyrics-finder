

const songName = document.getElementById('song-name');

const showResult = document.getElementById('show-result');


document.getElementById('search-btn').addEventListener('click', getTitle);

function getTitle() {

    fetch(`https://api.lyrics.ovh/suggest/${songName.value}`)
        .then(resp => resp.json())
        .then(data => {

            const resultData = data.data.splice(0, 5);



            for (i = 0; i <= 5; i++) {
                const results = document.createElement('div');

                var songTitle = resultData[i].title;
                var artistName = resultData[i].artist.name

                results.innerHTML = `
                <div class="single-result row align-items-center my-3 p-3">

                <div class="col-md-9">
                    <h3 class="lyrics-name">${songTitle}</h3>
                    <p class="author lead">Album by<span> ${artistName}</span></p>
                </div>
                <div class="col-md-3 text-md-right text-center">
                    <button onclick="lyricsCreat('${artistName}','${songTitle}')" class="btn btn-success">Get Lyrics</button>
                </div>
                </div>`

                showResult.appendChild(results);

            }




        }

        )
}

const lyrics = document.getElementById('lyrics')

function lyricsCreat(artist, title) {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(respon => respon.json())
        .then(data=>
            console.log(data))
}


