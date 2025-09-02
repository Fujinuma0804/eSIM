
// Auto-render world product cards from plans1 into #products-world-grid
(function () {
    const worldGrid = document.getElementById('products-world-grid');
    const regionsData = (typeof plans1 !== 'undefined') ? plans1 : (window.plans1 || null);
    if (!worldGrid || !regionsData) return;

    const toSlug = (text) => (text || '').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const formatPrice = (price) => {
        if (!price || isNaN(price)) return '';
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const imageSrc = (item) => {
        const name = item.img || item.flag_img;
        return name ? `./assets/img/${name}` : './assets/img/flag_asia.png';
    };

    const twoColumnListHtml = (items) => {
        const list = Array.isArray(items) ? items.map(String) : [];
        const mid = Math.ceil(list.length / 2);
        const col1 = list.slice(0, mid);
        const col2 = list.slice(mid);
        const renderCol = (arr) => arr.map(v => `<li>${v}</li>`).join('');
        return `
            <div class="grid grid-cols-2 gap-x-6">
                <ul class="space-y-1">${renderCol(col1)}</ul>
                <ul class="space-y-1">${renderCol(col2)}</ul>
            </div>
        `;
    };

    const detailListHtml = (info) => {
        if (!Array.isArray(info)) return '';
        return `
            <ul class="space-y-3">
                ${info.map(i => `
                    <li class="flex items-start gap-2">
                        <span class="text-[#1f2d88]">${getIconHtml(i.icon)}</span>
                        <div>
                            <div class="font-semibold text-xs">${i.title || ''}</div>
                            <div class="text-[10px] leading-5 whitespace-pre-line">${i.text || ''}</div>
                        </div>
                    </li>
                `).join('')}
            </ul>
        `;
    };

    const getIconHtml = (iconName) => {
        if (!iconName) return '';
        // Return the HTML for a Material Symbol using the iconName from data.js
        return `<span class="material-symbols-outlined !text-sm">${iconName}</span>`;
    };

    const worldcardHtml = (regionKey, item, index) => {
        const slug = `${toSlug(regionKey)}-${toSlug(item.name_en || item.name_jp || index)}-${index}` || `card-${index}`;
        const countriesId = `${slug}-countries`;
        const detailId = `${slug}-detail`;
        const buyUrl1 = item.url_1 || item.url || '';
        const buyUrl2 = item.url_2 || item.url || '';
        const priceText = (typeof item.price !== 'undefined' && item.price !== null && item.price !== '') ? `${item.price}` : '';
        const hasPrice = !!priceText && !isNaN(Number(priceText));
        const hasBuy1 = !!buyUrl1;
        const hasBuy2 = !!buyUrl2;
        const hasInfo = Array.isArray(item.info) && item.info.length > 0;

        // Check if this is a region card (has img) or country card (has flag_img)
        const isRegionCard = item.img && !item.flag_img;
        const isCountryCard = item.flag_img;

        return `
            <div class="product-card m-6 ${isCountryCard ? 'bg-[#e9f3ffff]' : 'bg-gradient-to-b from-[#ace0f9] to-[#fff1eb]'} rounded-3xl shadow-[5px_10px_0_#8db8ffc4] p-6 relative flex flex-col items-center text-center w-64 mx-auto">
                <div class="absolute border-blue-400 border-[1px] -top-4 right-4 bg-white rounded-2xl justify-center flex items-center gap-1 w-16 h-12 shadow-[3px_3px_0_#8db8ff80]">
                    <img src="./assets/img/dSIM02.png" alt="Docomo" class="w-10 h-10 ">
                </div>

                <div class="flex justify-center items-center flex-col bg-transparent text-[#333333] font-bold text-[22px] leading-[1.4] m-0 p-[2px] text-center w-auto max-w-full h-auto">
                    <span class=" bg-transparent text-[#333333] text-[22px] font-bold leading-[1.4] m-0 p-[2px] text-center [text-shadow:4px_3px_2px_#8db8ff] w-auto max-w-full flex justify-center">${item.name_jp || ''}</span>
                    <span class="bg-transparent text-[#333333] font-bold text-[14px] leading-[1.4] m-0 p-[2px] text-center [text-shadow:4px_3px_2px_#9ac0ff] w-auto max-w-full flex justify-center">${item.name_en || ''}</span>
                    <div class="rounded-md">
                        <img src="${imageSrc(item)}" alt="${item.name_en || ''}" class="rounded-lg shadow-[3px_3px_rgba(0,0,0,0.2)] flex-none h-auto my-[10px] ${isCountryCard ? 'w-20 h-16' : 'w-full'}">
                    </div>
                    <div class="text-xs p-2 text-[#333]">${item.description || ''}</div>
                </div>

                ${isRegionCard ? `
                <div class="w-full mb-3 border-t border-t-[#42a5f5b3] mt-[10px] pt-[10px]">
                    <button class="country-toggle flex items-center justify-center gap-2 text-[#2c3e94] text-[13px] font-bold mx-auto" data-target="${countriesId}">
                        <span>利用可能国一覧</span>
                        <span class="toggle-icon inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#1f2d88] text-white text-[10px] leading-none">＋</span>
                    </button>
                    <div id="${countriesId}" class="country-panel hidden mt-3 rounded-2xl text-left bg-white p-2 text-gray-700 text-xs shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                        ${twoColumnListHtml(item.available)}
                    </div>
                </div>
                ` : ''}

                <div class="flex flex-col flex-nowrap items-center justify-start border-y border-y-[#42a5f5b3] w-full py-2">
                    ${hasPrice && hasBuy1 ? `
                        <p class="text-sm text-[#333]"><span class="text-[#cb1bf6ff] text-lg font-extrabold">無制限</span>プラン<span class="text-[#cb1bf6ff] text-lg font-extrabold">${formatPrice(priceText)}</span>円～</p>
                        <a href="${buyUrl1}" class="text-sm bg-[linear-gradient(90deg,#00dbde_0%,#fc00ff_100%)] text-white font-bold px-6 py-1 w-full rounded-full hover:bg-none hover:bg-[#d500f9] shadow-[3px_3px_0_#8db8ff80] transition-all duration-300">
                            お申込み<br><span class="text-xs">（プラン料金はこちら）</span>
                        </a>
                    ` : `
                        <p class="text-sm text-[#333]"><span class="text-[#cb1bf6ff] text-lg font-extrabold">無制限</span>プラン</p>
                        <p class="text-sm text-[#555]">現在お取り扱いがございません</p>
                    `}
                </div>

                <div class="flex flex-col flex-nowrap items-center justify-start border-t border-t-[#42a5f5b3] w-full py-2">
                    ${hasPrice && hasBuy2 ? `
                        <p class="text-sm text-[#333]"><span class="text-[#1e88e5ff] text-lg font-extrabold">1日1GB</span>プラン<span class="text-[#1e88e5ff] text-lg font-extrabold">${formatPrice(priceText - 150)}</span>円～</p>
                        <a href="${buyUrl2}" class="text-sm bg-gradient-to-r from-[#0acffe] to-[#495aff] text-white font-bold px-6 py-1 w-full rounded-full hover:bg-none hover:bg-[#495aff] shadow-[3px_3px_0_#8db8ff80] transition-all duration-300">
                            お申込み<br><span class="text-xs">（プラン料金はこちら）</span>
                        </a>
                    ` : `
                        <p class="text-sm text-[#333]"><span class="text-[#1e88e5ff] text-lg font-extrabold">1日1GB</span>プラン</p>
                        <p class="text-sm text-[#555]">現在お取り扱いがございません</p>
                    `}
                </div>

                ${hasInfo ? `
                <div class="w-full mb-3 border-t border-t-[#42a5f5b3] mt-[10px] pt-[10px]">
                    <button class="country-toggle group flex items-center justify-center gap-2 text-[#2c3e94] text-[13px] font-bold mx-auto tracking-wide" data-target="${detailId}">
                        <span>eSIM詳細</span>
                        <span class="toggle-icon inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#1f2d88] text-white text-[12px] leading-none transition-colors group-hover:bg-[#14206a]">＋</span>
                    </button>
                    <div id="${detailId}" class="country-panel text-left hidden mt-3 rounded-2xl bg-white p-4 text-gray-700 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#e3f2fd]">
                        ${detailListHtml(item.info)}
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    };

    const titleshow = (regionKey) => {
        return `
            <div id=${regionKey} class="region-title col-span-full text-center mt-20 mb-8">
                <h2 class="text-[36px] leading-[1.4] tracking-[0.02em] [text-shadow:4px_3px_2px_#8db8ff] font-extrabold text-[#0D47A1] mb-4">${regionKey}</h2>
            </div>
        `;
    }

    const cards = [];
    Object.keys(regionsData).forEach((regionKey) => {
        const arr = regionsData[regionKey];
        cards.push(titleshow(regionKey));

        if (!Array.isArray(arr)) return;

        // Separate region cards and country cards
        const regionCards = [];
        const countryCards = [];

        arr.forEach((item, idx) => {
            const isRegionCard = item.img && !item.flag_img;
            if (isRegionCard) {
                regionCards.push(worldcardHtml(regionKey, item, idx));
            } else {
                countryCards.push(worldcardHtml(regionKey, item, idx));
            }
        });



        // Add region cards first (in 1 line), centered
        if (regionCards.length > 0) {
            cards.push('<div class="flex justify-center mb-8">');
            cards.push('<div class="flex flex-wrap gap-6">');
            cards.push(...regionCards);
            cards.push('</div>');
            cards.push('</div>');
        }
        // Add country cards in the next section
        if (countryCards.length > 0) {
            cards.push('<div class="flex flex-wrap justify-center">');
            cards.push('<div class="flex flex-wrap gap-6">');
            cards.push(...countryCards);
            cards.push('</div>');
            cards.push('</div>');
        }
    });

    worldGrid.innerHTML = cards.join('');
})();

// Search dropdown and toggle behavior
(function () {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const clearBtn = document.getElementById('clearSearch');

    // Build a flat list of all items for searching
    const dataset = [];
    const data = (typeof plans1 !== 'undefined') ? plans1 : (window.plans1 || {});
    Object.keys(data).forEach(regionKey => {
        const list = data[regionKey];
        if (!Array.isArray(list)) return;
        list.forEach(item => {
            dataset.push({
                id: `${regionKey}:${item.name_jp || item.name_en}`,
                name_jp: item.name_jp || '',
                name_en: item.name_en || '',
                image: item.flag_img || item.img || 'flag_asia.png',
                region: regionKey
            });
        });
    });

    function renderResults(results) {
        if (!results.length) {
            searchResults.innerHTML = '<div class="p-4 text-center text-white text-xl font-bold">該当なし</div>';
            searchResults.classList.remove('hidden');
            return;
        }
        const html = results.map(r => `
            <div class="result-row flex items-center px-4 py-3 cursor-pointer hover:bg-[#2b2b2b] border-b border-[#444] last:border-b-0" data-id="${r.id}">
                <img src="./assets/img/${r.image}" alt="${r.name_jp}" class="w-10 h-7 mr-4 rounded-sm">
                <span class="text-white text-lg font-bold">${r.name_jp}</span>
            </div>
        `).join('');
        searchResults.innerHTML = html;
        searchResults.classList.remove('hidden');
    }

    function setTitlesVisible(visible) {
        document.querySelectorAll('.region-title').forEach(el => {
            el.style.display = visible ? '' : 'none';
        });
    }

    function search(q) {
        // Convert hiragana to katakana for better Japanese text matching
        const convertHiraganaToKatakana = (text) => {
            return text.replace(/[ぁ-ん]/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) + 0x60);
            });
        };
        
        const query = convertHiraganaToKatakana((q || '').trim()).toLowerCase();
        if (!query) {
            searchResults.classList.add('hidden');
            searchResults.innerHTML = '';
            setTitlesVisible(true);
            return;
        }
        setTitlesVisible(false);
        
        // Only show countries that START with the search query
        const raw = dataset.filter(r =>
            r.name_jp.toLowerCase().startsWith(query) ||
            r.name_en.toLowerCase().startsWith(query)
        );
        
        // Deduplicate by Japanese name, keep first occurrence
        const seen = new Set();
        const results = [];
        for (const r of raw) {
            const key = r.name_jp || r.name_en;
            if (!seen.has(key)) {
                seen.add(key);
                results.push(r);
                if (results.length >= 8) break;
            }
        }
        renderResults(results);
    }

    if (searchInput) {
        searchInput.addEventListener('input', e => search(e.target.value));
        searchInput.addEventListener('focus', e => search(e.target.value));
    }
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchResults.classList.add('hidden');
            searchResults.innerHTML = '';
            // Restore all cards
            const cards = document.querySelectorAll('#products-world-grid .product-card');
            cards.forEach(c => c.style.display = 'block');
            setTitlesVisible(true);
        });
    }

    function showOnlyCardsByNames(names) {
        const cards = Array.from(document.querySelectorAll('#products-world-grid .product-card'));
        const targets = new Set(names);
        const shown = new Set();
        cards.forEach(card => {
            const title = card.querySelector('span')?.textContent?.trim();
            if (title && targets.has(title) && !shown.has(title)) {
                card.style.display = 'block';
                shown.add(title);
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Clicking a result filters the grid to only that card (no scrolling)
    document.addEventListener('click', e => {
        const row = e.target.closest('.result-row');
        if (row) {
            const id = row.getAttribute('data-id');
            const [, name] = id.split(':');
            showOnlyCardsByNames([name]);
            searchInput.value = name;
            searchResults.classList.add('hidden');
            setTitlesVisible(false);
            // Scroll to the first visible product card
            const firstVisibleCard = document.querySelector('#products-world-grid .product-card:not([style*="display: none"])');
            if (firstVisibleCard && typeof firstVisibleCard.scrollIntoView === 'function') {
                firstVisibleCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            return;
        }

        // Toggle sections behaviour
        const btn = e.target.closest('.country-toggle');
        if (btn) {
            const targetId = btn.getAttribute('data-target');
            if (!targetId) return;
            const panel = document.getElementById(targetId);
            if (!panel) return;
            const icon = btn.querySelector('.toggle-icon');
            const isHidden = panel.classList.contains('hidden');
            if (isHidden) {
                panel.classList.remove('hidden');
                if (icon) icon.textContent = '－';
            } else {
                panel.classList.add('hidden');
                if (icon) icon.textContent = '＋';
            }
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            searchResults.classList.add('hidden');
        }
    });
})();
