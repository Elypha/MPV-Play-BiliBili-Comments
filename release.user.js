// ==UserScript==
// @name        bilibili.com: Copy video cid
// @namespace   Violentmonkey Scripts
// @match       https://www.bilibili.com/bangumi/play/*
// @match       https://www.bilibili.com/video/*
// @grant       none
// @version     1.0
// @author      Elypha
// @description -
// @require     https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==


(function () {
    'use strict';

    function doAction() {
        let ep_id = window.location.href.match(/ep(\d+)/);
        let episode_data = {};
        console.log(ep_id[1]);
        fetch(`https://api.bilibili.com/pgc/view/web/season?ep_id=${ep_id[1]}`)
            .then(response => response.json())
            .then(data => {
                let episode_data = {};
                data.result.episodes.forEach(episode => {
                    episode_data[episode.share_copy] = episode.cid.toString().padEnd(12, ' ');
                });
                return episode_data;
            })
            .then(episode_data => {
                let text_to_copy = Object.entries(episode_data)
                    .map(([title, cid]) => `${cid}: ${title}`)
                    .join('\n');
                console.log(text_to_copy);
                navigator.clipboard.writeText(text_to_copy);
            });
    }

    function main() {
        let copy = document.createElement("button");
        copy.textContent = "Copy Cid";
        copy.style.marginRight = "0.5em";

        copy.addEventListener("click", () => {
            doAction();
        });

        $("div[class^='eplist_right_wrap_']")[0].firstChild.before(copy);
    }

    const observer = new MutationObserver(() => {
        const element = $("div[class^='eplist_right_wrap_']");
        if (element.length > 0) {
            // Stop observing
            observer.disconnect();
            main();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
