(function () {
    const grid = document.getElementById('products-grid');
    const plansData = (typeof plans !== 'undefined') ? plans : (window.plans || []);
    if (!grid || !Array.isArray(plansData)) return;

    const yen = (n) => `¥${n.toLocaleString('ja-JP')}`;

    // Filter state
    let selectedCapacity = null;
    let selectedDurationRange = null;
    let selectedSort = 'recommended'; // Default sort
    let selectedCount = 'all'; // Default display count

    // Map capacity to gradient classes used across the UI
    const capacityGradient = (capacity) => {
        if (capacity >= 10000) {
            return 'bg-gradient-to-r from-gray-800 to-blue-500'; // unlimited
        }
        if (capacity === 100) {
            return 'bg-[linear-gradient(90deg,#eea2a2_0%,#bbc1bf_19%,#57c6e1_42%,#b49fda_79%,#7ac5d8_100%)]';
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
                        <svg class="text-gray-600 scale-150" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.1746043 8.1203717c.2096629-.17971108.5253129-.15543031.705024.05423261s.1554303.52531292-.0542326.70502399l-3.5 3c-.1872449.1604956-.4635465.1604956-.6507914 0l-3.49999999-3c-.20966292-.17971107-.23394369-.49536107-.05423261-.70502399.17971107-.20966292.49536107-.23394369.70502399-.05423261l3.17460431 2.7210894zm0 4c.2096629-.1797111.5253129-.1554303.705024.0542326s.1554303.5253129-.0542326.705024l-3.5 3c-.1872449.1604956-.4635465.1604956-.6507914 0l-3.49999999-3c-.20966292-.1797111-.23394369-.4953611-.05423261-.705024.17971107-.2096629.49536107-.2339437.70502399-.0542326l3.17460431 2.7210894zm0 4c.2096629-.1797111.5253129-.1554303.705024.0542326s.1554303.5253129-.0542326.705024l-3.5 3c-.1872449.1604956-.4635465.1604956-.6507914 0l-3.49999999-3c-.20966292-.1797111-.23394369-.4953611-.05423261-.705024.17971107-.2096629.49536107-.2339437.70502399-.0542326l3.17460431 2.7210894z"/></svg>
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

    // Apply filters and render cards
    const applyFilters = () => {
        let filtered = plansData;
        
        // Filter by capacity
        if (selectedCapacity !== null) {
            if (selectedCapacity === 'unlimited') {
                filtered = filtered.filter(p => p.capacity >= 10000);
            } else {
                filtered = filtered.filter(p => p.capacity === selectedCapacity);
            }
        }
        
        // Filter by duration
        if (selectedDurationRange !== null) {
            if (Array.isArray(selectedDurationRange)) {
                const [min, max] = selectedDurationRange;
                filtered = filtered.filter(p => p.duration >= min && p.duration <= max);
            } else {
                filtered = filtered.filter(p => p.duration === selectedDurationRange);
            }
        }
        
        // Apply sorting
        filtered = applySorting(filtered);
        
        // Apply display count limit
        filtered = applyDisplayCount(filtered);
        
        // Update product count
        const productCount = document.querySelector('.text-gray-700 .font-medium');
        const totalCount = plansData.length;
        if (productCount) {
            if (selectedCount === 'all') {
                productCount.textContent = `${filtered.length}件の商品が見つかりました`;
            } else {
                productCount.textContent = `${filtered.length}件の商品が見つかりました`;
            }
        }
        
        // Update display count text
        const displayCountText = document.querySelector('.text-gray-700 p:last-child');
        if (displayCountText) {
            if (selectedCount === 'all') {
                displayCountText.textContent = `(${totalCount}件中 ${filtered.length}件表示)`;
            } else {
                displayCountText.textContent = `(${totalCount}件中 ${filtered.length}件表示)`;
            }
        }
        
        // Render filtered cards
        grid.innerHTML = filtered.map(cardHtml).join('');
        
        // Update active filters display
        updateActiveFiltersDisplay();
    };

    // Apply sorting to filtered data
    const applySorting = (data) => {
        const sorted = [...data];
        
        switch (selectedSort) {
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'capacity-high':
                return sorted.sort((a, b) => b.capacity - a.capacity);
            case 'capacity-low':
                return sorted.sort((a, b) => a.capacity - b.capacity);
            case 'duration-high':
                return sorted.sort((a, b) => b.duration - a.duration);
            case 'duration-low':
                return sorted.sort((a, b) => a.duration - b.duration);
            case 'recommended':
            default:
                // Keep original order for recommended
                return sorted;
        }
    };

    // Apply display count limit
    const applyDisplayCount = (data) => {
        if (selectedCount === 'all') {
            return data;
        }
        
        const count = parseInt(selectedCount);
        return data.slice(0, count);
    };

    // Update active filters display in #show div
    const updateActiveFiltersDisplay = () => {
        const showDiv = document.getElementById('show');
        if (!showDiv) return;
        
        let filtersHTML = '';
        
        // Add capacity filter tag if selected
        if (selectedCapacity !== null) {
            let capacityText = '';
            if (selectedCapacity === 'unlimited') {
                capacityText = '無制限';
            } else {
                capacityText = `${selectedCapacity}GB`;
            }
            filtersHTML += `
                <div class="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-2 rounded-full mr-3 mb-2">
                    <span class="text-sm font-medium">${capacityText}</span>
                    <button class="ml-2 text-purple-600 hover:text-purple-800" onclick="removeCapacityFilter()">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            `;
        }
        
        // Add duration filter tag if selected
        if (selectedDurationRange !== null) {
            let durationText = '';
            if (Array.isArray(selectedDurationRange)) {
                durationText = `${selectedDurationRange[0]}日〜${selectedDurationRange[1]}日`;
            } else {
                durationText = `${selectedDurationRange}日`;
            }
            filtersHTML += `
                <div class="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-2 rounded-full mr-3 mb-2">
                    <span class="text-sm font-medium">${durationText}</span>
                    <button class="ml-2 text-blue-600 hover:text-blue-800" onclick="removeDurationFilter()">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            `;
        }
        
        // Add reset button if any filters are active
        if (selectedCapacity !== null || selectedDurationRange !== null) {
            filtersHTML += `
                <div class="inline-flex items-center ml-auto">
                    <button class="text-gray-600 hover:text-gray-800 text-sm font-medium" onclick="resetAllFilters()">
                        条件をリセットする
                    </button>
                </div>
            `;
        }
        
        // Update the show div
        if (filtersHTML) {
            showDiv.innerHTML = `
                <div class="flex flex-wrap items-center justify-between p-4">
                    <div class="flex flex-wrap items-center">
                        ${filtersHTML}
                    </div>
                </div>
            `;
        } else {
            showDiv.innerHTML = '';
        }
    };

    // Remove capacity filter
    window.removeCapacityFilter = function() {
        selectedCapacity = null;
        // Remove active state from capacity buttons
        const capacityButtons = document.querySelectorAll('.grid.grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-6 button');
        capacityButtons.forEach(btn => btn.classList.remove('ring-4', 'ring-blue-300'));
        applyFilters();
    };

    // Remove duration filter
    window.removeDurationFilter = function() {
        selectedDurationRange = null;
        // Remove active state from duration buttons
        const durationButtons = document.querySelectorAll('.grid.grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-5 button');
        durationButtons.forEach(btn => btn.classList.remove('ring-4', 'ring-blue-300'));
        applyFilters();
    };

    // Reset all filters
    window.resetAllFilters = function() {
        selectedCapacity = null;
        selectedDurationRange = null;
        // Remove active state from all buttons
        const allButtons = document.querySelectorAll('.grid button');
        allButtons.forEach(btn => btn.classList.remove('ring-4', 'ring-blue-300'));
        applyFilters();
    };

    // Add event listeners for sorting and display count
    document.addEventListener('DOMContentLoaded', function() {
        // Display count dropdown
        const countSelect = document.querySelector('select option:first-child').parentElement;
        if (countSelect) {
            countSelect.addEventListener('change', function() {
                const value = this.value;
                if (value === 'すべて') {
                    selectedCount = 'all';
                } else {
                    selectedCount = value.replace('件', '');
                }
                applyFilters();
            });
        }

        // Sorting dropdown
        const sortSelect = document.querySelector('select:last-child');
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                const value = this.value;
                switch (value) {
                    case 'おすすめ順':
                        selectedSort = 'recommended';
                        break;
                    case '価格が高い順':
                        selectedSort = 'price-high';
                        break;
                    case '価格が低い順':
                        selectedSort = 'price-low';
                        break;
                    case '容量が大きい順':
                        selectedSort = 'capacity-high';
                        break;
                    case '容量が小さい順':
                        selectedSort = 'capacity-low';
                        break;
                    case '期間が長い順':
                        selectedSort = 'duration-high';
                        break;
                    case '期間が短い順':
                        selectedSort = 'duration-low';
                        break;
                    default:
                        selectedSort = 'recommended';
                }
                applyFilters();
            });
        }
    });

    // Add click event listeners to capacity buttons
    const capacityButtons = document.querySelectorAll('.grid.grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-6 button');
    capacityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            // Remove active state from all capacity buttons
            capacityButtons.forEach(btn => btn.classList.remove('ring-4', 'ring-blue-300'));
            
            if (buttonText === '無制限') {
                if (selectedCapacity === 'unlimited') {
                    selectedCapacity = null; // Toggle off
                } else {
                    selectedCapacity = 'unlimited';
                    this.classList.add('ring-4', 'ring-blue-300');
                }
            } else if (buttonText.includes('GB')) {
                const capacity = parseInt(buttonText.replace('GB', ''));
                if (selectedCapacity === capacity) {
                    selectedCapacity = null; // Toggle off
                } else {
                    selectedCapacity = capacity;
                    this.classList.add('ring-4', 'ring-blue-300');
                }
            }
            
            applyFilters();
        });
    });

    // Add click event listeners to duration buttons
    const durationButtons = document.querySelectorAll('.grid.grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-5 button');
    durationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            // Remove active state from all duration buttons
            durationButtons.forEach(btn => btn.classList.remove('ring-4', 'ring-blue-300'));
            
            if (buttonText.includes('〜')) {
                const [start, end] = buttonText.split('〜');
                const min = parseInt(start.replace(/[^0-9]/g, ''));
                const max = parseInt(end.replace(/[^0-9]/g, ''));
                
                if (selectedDurationRange && Array.isArray(selectedDurationRange) && 
                    selectedDurationRange[0] === min && selectedDurationRange[1] === max) {
                    selectedDurationRange = null; // Toggle off
                } else {
                    selectedDurationRange = [min, max];
                    this.classList.add('ring-4', 'ring-blue-300');
                }
            } else {
                const duration = parseInt(buttonText.replace(/[^0-9]/g, ''));
                if (selectedDurationRange === duration) {
                    selectedDurationRange = null; // Toggle off
                } else {
                    selectedDurationRange = duration;
                    this.classList.add('ring-4', 'ring-blue-300');
                }
            }
            
            applyFilters();
        });
    });

    // Initial render
    applyFilters();
})();
