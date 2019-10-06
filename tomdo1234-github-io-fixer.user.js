// ==UserScript==
// @name         TomDo1234.github.io Fixer
// @namespace    de.idrinth
// @version      1.0.0
// @description  Fixing some issues with the idle rpg
// @author       Idrinth
// @match        https://tomdo1234.github.io/
// @grant        none
// ==/UserScript==

// ==UserScript==
// @name         TomDo1234.github.io Fixer
// @namespace    de.idrinth
// @version      1.0.0
// @description  Fixing some issues with the idle rpg
// @author       Idrinth
// @match        https://tomdo1234.github.io/
// @grant        none
// ==/UserScript==
(() => {
    const fix = () => {
        snake = new Foe("Generic Snake", 30, 5, 7, [playerbronze, 40, 1000], 3, 20, "", "genericsnake1.png");
        cryomancer1 = new Foe("Minor Cryomancer", 5000, 700, 3, [playerbronze, 10000000, 1000], 20, 5500000, "", "novicewitch.png", [
            ["Freeze"],
            ["Armor Pierce"]
        ])
        ogenemies[2] = [snake, snake, snake, snake];
        ogenemies[16][1] = cryomancer1;
        theenemies[2] = snake;
        theenemies[21] = cryomancer1;
        levelenemies = a2clone(ogenemies);
        for (let i = 0; i < 20; i++) {
            dungeondict[i + 2] = dungeondict[i % 2]
        }
        window.setInterval(() => {
            const nodes = document.querySelectorAll('button.class1.portal');
            let traps = [];
            for (const ability of playerabilities) {
                if (ability.name === 'Basic Arcane Trap') {
                    traps = ability.trapnum;
                    break;
                }
            }
            if (!traps.length) {
                return;
            }
            for (let i = 0; i < nodes.length; i++) {
                const id = Number.parseInt(nodes[i].id.split(' ')[1]);
                const images = nodes[i].getElementsByTagName('img');
                for (let j = images.length - 1; j >= 0; j--) {
                    nodes[i].removeChild(images[j]);
                }
                for (let j = 0; j < traps[id]; j++) {
                    const img = document.createElement('img');
                    img.setAttribute('width', '16');
                    img.setAttribute('height', '16');
                    img.setAttribute('src', 'img/basicarcanetrap.png');
                    nodes[i].appendChild(img);
                }
            }
        }, 1000);
    };
    const sc = document.createElement('script');
    sc.innerHTML = `(${ fix.toString() })()`;
    document.getElementsByTagName('head')[0].appendChild(sc);
})();
