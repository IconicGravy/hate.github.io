/**
  _________  ___  ___  _______            _____    _____          ___      ___ ___  _______   ___       __      
|\___   ___\\  \|\  \|\  ___ \          / __  \  / __  \        |\  \    /  /|\  \|\  ___ \ |\  \     |\  \    
\|___ \  \_\ \  \\\  \ \   __/|        |\/_|\  \|\/_|\  \       \ \  \  /  / | \  \ \   __/|\ \  \    \ \  \   
     \ \  \ \ \   __  \ \  \_|/__      \|/ \ \  \|/ \ \  \       \ \  \/  / / \ \  \ \  \_|/_\ \  \  __\ \  \  
      \ \  \ \ \  \ \  \ \  \_|\ \          \ \  \   \ \  \       \ \    / /   \ \  \ \  \_|\ \ \  \|\__\_\  \ 
       \ \__\ \ \__\ \__\ \_______\          \ \__\   \ \__\       \ \__/ /     \ \__\ \_______\ \____________\
        \|__|  \|__|\|__|\|_______|           \|__|    \|__|        \|__|/       \|__|\|_______|\|____________|
                                                                                                               
      This utility was made @ The 11 View by Gravy (p2w8) for the project hate.ink (hash: 3460bfd44562ee3c288bb287bae7530c)
   Name: index.js
   Description: This handles the music player and the pages logic
   License: undefined
   Notes: Please do not edit anything unless you know exactly what you are editing and what you are replacing it with.
         This project is open source, so feel free to use, modify, or build upon it (Skid it).
 */
// Multi instances data
const gradoBanner = "/assets/imgs/banners/grado.gif";
const vinceBanner = "/assets/imgs/banners/vince.jpg";
const m6Banner = "";  
const conBanner = "";  
const gradoID = "922095744691892224";
const vinceID = "1343575439008071842";
const m6ID = "1338555188570755182";
const connID = "1422596995503095852";
const gradoName = "epicepicvampireface";
const vinceName = "vibinn_vibes";
const m6Name = "m6gh";
const connName = "connectionconclusion";

const PLAYLISTS = {
   1: [
      {
         title: "never the same",
         artist: "requiem for you",
         url: "/assets/audio/never-requiem.mp3",
         cover: "/assets/imgs/covers/cover-1.jpg",
      },
      {
         title: "idc what she doin",
         artist: "wifiskeleton",
         url: "/assets/audio/idc-wifiskeleton.mp3",
         cover: "/assets/imgs/covers/cover-2.jpg",
      },
      {
         title: "it's easier to talk to you in my head",
         artist: "wifiskeleton",
         url: "/assets/audio/itseasier-wifiskeleton.mp3",
         cover: "/assets/imgs/covers/cover-3.jpeg",
      },
      {
         title: "suicide is the only way out",
         artist: "i miss our memories",
         url: "/assets/audio/imiss-suicide.mp3",
         cover: "/assets/imgs/covers/cover-4.jpeg",
      },
      {
         title: "whatiwishforsucks",
         artist: "up!r, Cw!zz",
         url: "/assets/audio/whatiwishforsucks.mp3",
         cover: "/assets/imgs/covers/cover-5.jpg",
      },
      {
         title: "on the count of three",
         artist: "wifiskeleton, witchbox",
         url: "/assets/audio/on-witchbox.mp3",
         cover: "/assets/imgs/covers/cover-6.jpg",
      },
      {
         title: "can't have you",
         artist: "coldwntr",
         url: "/assets/audio/cant-coldwntr.mp3",
         cover: "/assets/imgs/covers/cover-7.jpeg",
      },
      {
         title: "cinco de mayo was a nightmare lol",
         artist: "wifiskeleton",
         url: "/assets/audio/wifiskeleton-cincodemayo.mp3",
         cover: "/assets/imgs/covers/cover-8.jpeg",
      },
   ],
   2: [
      {
         title: "BLOODSWEAT",
         artist: "$UICIDEBOY$",
         url: "/assets/audio/Blood.mp3",
         cover: "/assets/imgs/covers/cover-10.jpg",
      },
      {
         title: "Whatever Floats Your Boat Will Definitely Sink My Ship",
         artist: "$UICIDEBOY$",
         url: "/assets/audio/BOY-floats.mp3",
         cover: "/assets/imgs/covers/cover-10.jpg",
      },
      {
         title: "Void",
         artist: "POUYA",
         url: "/assets/audio/V-POUYA.mp3",
         cover: "/assets/imgs/covers/cover-9.jpg",
      },
      {
         title: "BROKEN ANGEL HOSPITAL",
         artist: "SEMATARY",
         url: "/assets/audio/SEMATARY-BROKEN.mp3",
         cover: "/assets/imgs/covers/cover-11.jpg",
      },
      {
         title: "Hour Glass",
         artist: "BLP Kosher",
         url: "/assets/audio/BLP.mp3",
         cover: "/assets/imgs/covers/cover-12.jpeg",
      }
   ],
   3: [
      {
         title: "NaN",
         artist: "NaN",
         url: "",
         cover: "",
      },
      {
         title: "NaN",
         artist: "NaN",
         url: "",
         cover: "",
      },
      {
         title: "NaN",
         artist: "NaN",
         url: "",
         cover: "",
      }
   ],
   4: [
      {
         title: "NaN",
         artist: "NaN",
         url: "",
         cover: "",
      },
      {
         title: "NaN",
         artist: "NaN",
         url: "",
         cover: "",
      }
   ]
};

// Utilities for multi instances (handlers)
const playlistId = document.body.getAttribute('data-playlist-id') || "1";
let currentPlaylistId = parseInt(playlistId);
let MUSIC_PLAYLIST = PLAYLISTS[currentPlaylistId];
let activeBanner = gradoBanner;

if (currentPlaylistId === 2) activeBanner = vinceBanner;
if (currentPlaylistId === 3) activeBanner = m6Banner;
if (currentPlaylistId === 4) activeBanner = conBanner;

MUSIC_PLAYLIST.forEach(track => {
    track.banner = activeBanner;
});

let USER_ID = gradoID;
if (currentPlaylistId === 2) USER_ID = vinceID;
if (currentPlaylistId === 3) USER_ID = m6ID;
if (currentPlaylistId === 4) USER_ID = connID;

let activeUsername = gradoName;
if (currentPlaylistId === 2) activeUsername = vinceName;
if (currentPlaylistId === 3) activeUsername = m6Name;
if (currentPlaylistId === 4) activeUsername = connName;

// Variables
const landing = document.getElementById('landing-screen');
const main = document.getElementById('main-content');
const card = document.getElementById('main-card');
const banner = document.getElementById('banner');
const audio = document.getElementById('audio-player');
const notifContainer = document.getElementById('notification-container');
const pfp = document.getElementById('pfp');
const statusDot = document.getElementById('status-dot');
const actBox = document.getElementById('activity-box');
const actImg = document.getElementById('act-img');
const actIcon = document.getElementById('act-icon');
const actType = document.getElementById('act-type');
const actName = document.getElementById('act-name');
const actState = document.getElementById('act-state');
const musicDock = document.getElementById('music-dock');
const mThumb = document.getElementById('m-thumb');
const mSong = document.getElementById('m-song');
const mArtist = document.getElementById('m-artist');
const mPlay = document.getElementById('m-play');
const mProgress = document.getElementById('m-progress');
const progressThumb = document.getElementById('progress-thumb'); 
const progressWrapper = document.getElementById('progress-wrapper');
const currTimeEl = document.getElementById('curr-time');
const durTimeEl = document.getElementById('dur-time');
const volumeSlider = document.getElementById('volume-slider');
// General Data
let currentTrackIndex = 0;
let isDragging = false;
let lanyardSocket = null;

function showToast(title, message, duration = 4000) {
   const toast = document.createElement('div');
   toast.className = 'toast-card';

   let iconClass = 'fa-info-circle';
   if (title.includes('Success')) iconClass = 'fa-check';
   if (title.includes('Opening')) iconClass = 'fa-external-link-alt';
   if (title.includes('Shop')) iconClass = 'fa-shopping-cart';

   toast.innerHTML = `
                <div class="toast-icon-wrapper">
                    <i class="fas ${iconClass}"></i>
                </div>
                <div class="toast-content">
                    <div class="toast-title">${title}</div>
                    <div class="toast-message">${message}</div>
                </div>
                <button class="toast-close"><i class="fas fa-times"></i></button>
                <div class="toast-progress-bar" style="width: 100%"></div>
            `;

   notifContainer.appendChild(toast);

   const progressBar = toast.querySelector('.toast-progress-bar');
   progressBar.style.transition = `width ${duration}ms linear`;
   requestAnimationFrame(() => {
      progressBar.style.width = '0%';
   });

   const dismiss = () => {
      toast.classList.add('hiding');
      setTimeout(() => {
         if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
   };

   toast.querySelector('.toast-close').addEventListener('click', dismiss);
   setTimeout(dismiss, duration);
}

document.getElementById('username-trigger').addEventListener('click', () => {
   navigator.clipboard.writeText(activeUsername).then(() => {
      showToast('Success', `Username "${activeUsername}" copied to clipboard.`);
   }).catch(err => {
      console.error('Failed to copy: ', err);
      showToast('Error', 'Failed to copy name');
   });
});

function handleLinkClick(e, name) {
   e.preventDefault();
   showToast('Redirecting', `Opening ${name}...`);
}

document.getElementById('enter-btn').addEventListener('click', () => {
   landing.classList.add('hidden');
   setTimeout(() => {
      landing.style.display = 'none';
      main.classList.add('visible');
      musicDock.classList.add('active');
      initLanyard();
      loadTrack(0);
      togglePlay();
   }, 800);
});

card.addEventListener('mousemove', (e) => {
   const rect = card.getBoundingClientRect();
   card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
   card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
});

audio.volume = volumeSlider.value;
volumeSlider.addEventListener('input', (e) => {
   audio.volume = e.target.value;
});

function formatTime(seconds) {
   if (isNaN(seconds)) return "0:00";
   const min = Math.floor(seconds / 60);
   const sec = Math.floor(seconds % 60);
   return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function loadTrack(index) {
   const track = MUSIC_PLAYLIST[index];
   audio.src = track.url;
   mSong.textContent = track.title;
   mArtist.textContent = track.artist;
   mThumb.src = track.cover;

   currTimeEl.textContent = "0:00";
   durTimeEl.textContent = "0:00";
   updateSlider(0); 

   if (track.banner) {
      banner.style.backgroundImage = `url('${track.banner}')`;
   }

   currentTrackIndex = index;
}

function updateSlider(pct) {
   mProgress.style.width = `${pct}%`;

   progressThumb.style.left = `calc(${pct}% - 8px)`;
}

function updatePlayButtonUI() {
   if (audio.paused) {
      mPlay.innerHTML = '<i class="fas fa-play"></i>';
      document.querySelector('.play-overlay i').className = 'fas fa-play';
      musicDock.classList.remove('playing');
   } else {
      mPlay.innerHTML = '<i class="fas fa-pause"></i>';
      document.querySelector('.play-overlay i').className = 'fas fa-pause';
      musicDock.classList.add('playing');
   }
}

async function togglePlay() {
   if (audio.paused) {
      try {
         await audio.play();
         updatePlayButtonUI();
      } catch (e) {
         console.error("Playback failed", e);
         showToast('Error', 'Could not play audio track.');
      }
   } else {
      audio.pause();
      updatePlayButtonUI();
   }
}

async function nextTrack() {
   currentTrackIndex = (currentTrackIndex + 1) % MUSIC_PLAYLIST.length;
   loadTrack(currentTrackIndex);
   try {
      await audio.play();
      updatePlayButtonUI();
   } catch (e) {
      console.error("Auto-play prevented", e);
      updatePlayButtonUI();
   }
}

async function prevTrack() {
   currentTrackIndex = (currentPlaylistId - 1 + MUSIC_PLAYLIST.length) % MUSIC_PLAYLIST.length;
   loadTrack(currentTrackIndex);
   try {
      await audio.play();
      updatePlayButtonUI();
   } catch (e) {
      console.error("Auto-play prevented", e);
      updatePlayButtonUI();
   }
}

function updateSliderUI(e) {
   const rect = progressWrapper.getBoundingClientRect();
   const clientX = e.clientX || (e.touches && e.touches[0].clientX);

   let x = clientX - rect.left;
   if (x < 0) x = 0;
   if (x > rect.width) x = rect.width;

   const pct = (x / rect.width) * 100;

   updateSlider(pct);

   const duration = audio.duration;
   if (!isNaN(duration)) {
      audio.currentTime = (x / rect.width) * duration;
   }
}

progressWrapper.addEventListener('mousedown', (e) => {
   isDragging = true;
   updateSliderUI(e);
});

function openModal() {
    document.getElementById('project-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('active');
}

document.getElementById('project-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('project-modal')) {
        closeModal();
    }
});

window.addEventListener('mousemove', (e) => {
   if (!isDragging) return;
   e.preventDefault();
   updateSliderUI(e);
});

window.addEventListener('mouseup', () => {
   if (isDragging) {
      isDragging = false;
   }
});

progressWrapper.addEventListener('touchstart', (e) => {
   isDragging = true;
   updateSliderUI(e);
}, {
   passive: false
});

window.addEventListener('touchmove', (e) => {
   if (!isDragging) return;
   e.preventDefault();
   updateSliderUI(e);
}, {
   passive: false
});

window.addEventListener('touchend', () => {
   if (isDragging) {
      isDragging = false;
   }
});

audio.addEventListener('timeupdate', () => {
   if (!isDragging) {
      const duration = audio.duration;
      const current = audio.currentTime;

      if (!isNaN(duration)) {
         const pct = (current / duration) * 100;

         updateSlider(pct);

         currTimeEl.textContent = formatTime(current);

         if (durTimeEl.textContent === "0:00") {
            durTimeEl.textContent = formatTime(duration);
         }
      }
   }
});

audio.addEventListener('loadedmetadata', () => {
   durTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('play', updatePlayButtonUI);
audio.addEventListener('pause', updatePlayButtonUI);
audio.addEventListener('ended', nextTrack);

function initLanyard() {
   lanyardSocket = new WebSocket("wss://api.lanyard.rest/socket");

   lanyardSocket.onopen = () => {
      lanyardSocket.send(JSON.stringify({
         op: 2,
         d: {
            subscribe_to_id: USER_ID
         }
      }));
   };

   lanyardSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.op === 1) {
         setInterval(() => lanyardSocket.send(JSON.stringify({
            op: 3
         })), data.d.heartbeat_interval);
      } else if (data.op === 0) {
         handleData(data.d);
      }
   };

   lanyardSocket.onerror = () => {
      console.error("Lanyard connection failed.");
   };
}

function handleData(data) {

   if (data.discord_user.avatar) {
      const avatarUrl = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=256`;
      if (pfp.src !== avatarUrl) pfp.src = avatarUrl;
   }

   const status = data.discord_status;
   let color = "#2f3136";
   if (status === 'online') color = "#3ba55c";
   if (status === 'idle') color = "#faa61a";
   if (status === 'dnd') color = "#ed4245";
   statusDot.style.backgroundColor = color;
   statusDot.style.boxShadow = `0 0 8px ${color}`;

   const activities = data.activities || [];
   let displayActivity = null;
   let iconClass = "fa-gamepad";
   let typeText = "PLAYING";

   if (data.spotify) {
      displayActivity = data.spotify;
      displayActivity.name = "Spotify";
      iconClass = "fa-headphones";
      typeText = "LISTENING TO";

      if (actImg.src !== data.spotify.album_art_url) actImg.src = data.spotify.album_art_url;
      actName.textContent = data.spotify.song;
      actState.textContent = data.spotify.artist;
   }

   else {
      const vsCode = activities.find(a => a.application_id === "353628040318906369");
      if (vsCode) {
         displayActivity = vsCode;
         iconClass = "fa-code";
         typeText = "DEVELOPING IN";

         if (vsCode.assets && vsCode.assets.large_image) {
            actImg.src = vsCode.assets.large_image.startsWith('http') ?
               vsCode.assets.large_image :
               `https://cdn.discordapp.com/app-assets/${vsCode.application_id}/${vsCode.assets.large_image}.png`;
         } else {
            actImg.src = pfp.src;
         }
         actName.textContent = "VS Code";
         actState.textContent = vsCode.details || vsCode.state || "Working on a project";
      }

      else {
         const game = activities.find(a => a.type === 0);
         if (game) {
            displayActivity = game;
            iconClass = "fa-gamepad";
            typeText = "PLAYING";

            if (game.assets && game.assets.large_image) {
               actImg.src = game.assets.large_image.startsWith('http') ?
                  game.assets.large_image :
                  `https://cdn.discordapp.com/app-assets/${game.application_id}/${game.assets.large_image}.png`;
            } else {
               actImg.src = pfp.src;
            }
            actName.textContent = game.name;
            actState.textContent = game.details || game.state || "";
         }
      }
   }

   if (displayActivity) {
      actBox.classList.add('show');
      actType.textContent = typeText;
      actIcon.innerHTML = `<i class="fas ${iconClass}"></i>`;
   } else {
      actBox.classList.remove('show');
   }
}

function openTab(tabName) {
   document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
   document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
   event.currentTarget.classList.add('active');
   document.getElementById(`${tabName}-tab`).classList.add('active');
}
