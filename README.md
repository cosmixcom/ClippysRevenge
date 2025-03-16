# Clippy's Revenge - A Chrome Extension

## Overview
Clippy is back, and he's out for revenge! **Clippy's Revenge** is a playful Chrome extension that messes with common web interactions. From trolling Grammarly users to autocorrecting words in ridiculous ways, this extension ensures that your browsing experience is anything but ordinary.

## Features
- **Grammarly Sabotage**: Detects the Grammarly extension and removes it while displaying a sassy message.
- **Spotify Hijack**: Redirects the Spotify homepage to play "Never Gonna Give You Up."
- **Annoying Popups**: Clicking buttons and links triggers a full-screen popup saying "Computer says no."
- **Useless Autocorrect**: Replaces common words with absurd alternatives (e.g., "computer" → "compooter," "success" → "succ mess").

## Installation
1. Download or clone this repository.
2. Open **Chrome** and go to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle in the top right corner).
4. Click **Load Unpacked** and select the folder containing the extension files.
5. Enjoy the chaos!

## How It Works
### `content.js`
- Runs scripts to detect Grammarly and remove it.
- Redirects users on Spotify’s homepage to play a specific track.
- Injects full-screen messages when any button or link is clicked.

### `corrections.js`
- Intercepts typing and autocorrects words to nonsensical replacements.

## Disclaimer
This extension is purely for fun and **should not** be used in serious work environments (unless you want to get fired).

## License
MIT License – Use at your own risk.

## Credits
Inspired by Clippy, the beloved (and sometimes annoying) Microsoft Office assistant from the past.

---
> "It looks like you're trying to be productive... would you like some sabotage instead?"

