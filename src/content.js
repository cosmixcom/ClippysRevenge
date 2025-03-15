function detectGrammarlyExtension() {
    if (document.querySelector("grammarly-extension")) {
        console.log("Grammarly extension detected!");

        // Optional: Mess with it
        document.querySelector("grammarly-extension").addEventListener("click", () => {
            console.log('Grammarly opened!');
            // Create a popup in the corner
            const popup = document.createElement("div");
            popup.innerText = "Clippy doesn't like Grammarly!";
            
            // Style the popup (bigger, rounded, and animated)
            Object.assign(popup.style, {
                position: "fixed",
                bottom: "-100px", // Start off-screen for animation
                right: "20px",
                padding: "15px 25px",
                backgroundColor: "#ff4d4d",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                zIndex: "9999",
                opacity: "0",
                transition: "opacity 0.5s ease, bottom 0.5s ease"
            });
            
            // Add popup to the page
            document.body.appendChild(popup);
            
            // Animate in (slide up & fade in)
            setTimeout(() => {
                popup.style.bottom = "20px";
                popup.style.opacity = "1";
            }, 100);
            
            // Remove popup after 3 seconds with fade-out
            setTimeout(() => {
                popup.style.opacity = "0";
                popup.style.bottom = "-100px";
                setTimeout(() => popup.remove(), 500); // Fully remove after animation
            }, 3000);
            

            // Remove Grammarly extension element
            const grammarlyElement = document.querySelector("grammarly-extension");
            if (grammarlyElement) {
                grammarlyElement.remove();
            }
            
        })
    }
}

// Run check every second (in case Grammarly loads dynamically)
setInterval(detectGrammarlyExtension, 1000);

if (window.location.hostname == `open.spotify.com` && window.location.pathname == `/`) {
    window.location = `https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8`
}

let played = false;

if (window.location == `https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8`) {
    setInterval(() => {
        if (played !== true) {
            const playBtn = document.querySelector(`#main > div > div.ZQftYELq0aOsg6tPbVbV > div.jEMA2gVoLgPQqAFrPhFw > div > div.main-view-container__scroll-node.main-view-container__scroll-node--offset-topbar.ZjfaJlGQZ42nCWjD3FDm > div:nth-child(2) > div > main > section > div.ZjfaJlGQZ42nCWjD3FDm > div:nth-child(2) > div > div > div > button`)
            if (playBtn) {
                playBtn.click()
                played = true
            }
        }

    }, 50)
}

const audio = new Audio(chrome.runtime.getURL('/static/no.mp3'));

document.querySelectorAll('button, a').forEach((button) => {
    button.addEventListener('click', () => {
        const fullScreenPopup = document.createElement("div");
        fullScreenPopup.innerText = "Computer says no";
        Object.assign(fullScreenPopup.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "48px",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            zIndex: "10000"
        });
        document.body.appendChild(fullScreenPopup);
        audio.play();

    })
})