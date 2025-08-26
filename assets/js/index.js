(function () {
    const grid = document.getElementById('products-grid');
    const plansData = (typeof plans !== 'undefined') ? plans : (window.plans || []);
    if (!grid || !Array.isArray(plansData)) return;

    const yen = (n) => `¥${n.toLocaleString('ja-JP')}`;

    // Map capacity to gradient classes used across the UI
    const capacityGradient = (capacity) => {
        if (capacity >= 10000) {
            return 'bg-gradient-to-r from-gray-800 to-blue-500'; // unlimited
        }
        if (capacity === 50) {
            return 'bg-gradient-to-r from-orange-400 to-red-400';
        }
        if (capacity === 20) {
            return 'bg-gradient-to-r from-green-400 to-yellow-400';
        }
        if (capacity === 10) {
            return 'bg-[linear-gradient(90deg,#22d3ee_0%,#34d399_100%)]'; // cyan -> green
        }
        if (capacity === 5) {
            return 'bg-[linear-gradient(90deg,#6366f1,#3b82f6,#22d3ee)]'; // indigo -> blue -> cyan
        }
        if (capacity === 3) {
            return 'bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500';
        }
        return 'bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500';
    };

    // Map duration to solid background color using the filter button palette
    const durationBgClass = (duration) => {
        if (duration >= 3 && duration <= 7) return 'bg-[#b3e5fcff]';
        if (duration >= 8 && duration <= 12) return 'bg-[#81d4faff]';
        if (duration >= 13 && duration <= 17) return 'bg-[#4fc3f7ff]';
        if (duration >= 18 && duration <= 22) return 'bg-[#03a9f4ff]';
        if (duration >= 23 && duration <= 27) return 'bg-[#008dd3ff]';
        if (duration >= 28 && duration <= 31) return 'bg-[#0277bdff]';
        if (duration === 180) return 'bg-[#005b9dff]';
        if (duration === 365) return 'bg-[#003e6aff]';
        return 'bg-[#4fc3f7ff]';
    };

    const cardHtml = ({ duration, capacity, price, url }) => {
        const capGradient = capacityGradient(capacity);
        const isUnlimited = capacity >= 10000;
        const durationBg = durationBgClass(duration);

        return `
            <div class="m-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl shadow-[5px_10px_0_#8db8ffc4] p-6 relative flex flex-col items-center text-center w-64 mx-auto">
                <div class="absolute border-blue-400 border-[1px] -top-4 right-4 bg-white rounded-xl justify-center flex items-center gap-1 w-20 h-20 shadow-[3px_3px_0_#8db8ff80]">
                    <img src="./assets/img/dSIM01.png" alt="Docomo" class="w-16 h-16 ">
                </div>

                <div class="flex items-start gap-2 mt-4 mb-3 ml-0 mr-auto">
                    <img src="https://storage.googleapis.com/studio-design-asset-files/projects/VGOKd1Beqn/s-2000x1333_v-frms_webp_cbc9c3df-d1d1-4a55-ba00-831b23b6520c_small.webp" alt="Japan" class="rounded-md w-10 h-6 shadow-[3px_3px_0_#8db8ff80]">
                    <span class="text-sm text-gray-700 font-medium">日本国内用</span>
                </div>

                <div class="mb-3 border-t-[1px] py-3 px-4 border-[#B3E5FC] border-b-[1px] w-full">
                    <div class="shadow-[3px_3px_0_#8db8ff80] rounded-lg">
                        <div class="${durationBg} text-white font-bold text-lg rounded-t-lg px-6 py-2 text-center">
                            <span class="text-3xl">${duration}</span>日間
                        </div>
                        <div class="${capGradient} text-white font-bold ${isUnlimited ? 'text-3xl' : 'text-lg'} rounded-b-lg px-6 py-2 text-center">
                            ${isUnlimited ? '無制限' : `<span class=\"text-3xl\">${capacity}</span>GBまで`}
                        </div>
                    </div>
                </div>

                <p class="line-through text-gray-400 font-bold text-xl">${yen(Math.round(price + 300))}</p>

                <div class="flex">
                    <p class="inline-block bg-[#FFCA28] text-white text-xs font-bold px-2 py-1 rounded-md my-1">BEST PRICE</p>
                    <p class="flex">
                        <svg class="text-gray-600 scale-150" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.1746043 8.1203717c.2096629-.17971108.5253129-.15543031.705024.05423261s.1554303.52531292-.0542326.70502399l-3.5 3c-.1872449.1604956-.4635465.1604956-.6507914 0l-3.49999999-3c-.20966292-.17971107-.23394369-.49536107-.05423261-.70502399.17971107-.20966292.49536107-.23394369.70502399-.05423261l3.17460431 2.7210894zm0 4c.2096629-.1797111.5253129-.1554303.705024.0542326s.1554303.5253129-.0542326.705024l-3.5 3c-.1872449.1604956-.4635465.1604956-.6507914 0l-3.49999999-3c-.20966292-.1797111-.23394369-.4953611-.05423261-.705024.17971107-.2096629.49536107-.2339437.70502399-.0542326l3.17460431 2.7210894z"/></svg>
                        <span class="text-xs my-auto text-gray-600">値下げしました！</span>
                    </p>
                </div>

                <p class="text-3xl font-extrabold text-red-500 mb-4">${yen(price)} <span class="text-sm text-gray-600">(税込)</span></p>

                <a href="${url}" target="_blank" class="border-2 text-sm border-blue-400 bg-white text-gray-500 font-bold px-6 py-1 w-full rounded-full hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white shadow-[3px_3px_0_#8db8ff80] transition-all duration-300">
                    お申込み<br><span class="text-xs">（プラン詳細）</span>
                </a>
            </div>
        `;
    };

    // Render all plans
    grid.innerHTML = plansData.map(cardHtml).join('');
})();
