// 铃兰之剑邂逅模拟器 - 核心逻辑
// 从 BWIKI Widget 移植到独立版本

// ==================== 卡池配置 ====================
const POOL_CONFIG = {
    chuyu: {
        name: "金辉与血律",
        char: "阿尔曼",
        img: "https://patchwiki.biligame.com/images/llzj/8/81/h5meu8dkp68dybk8112o7gsa10w3wg5.png",
        avatar: "https://patchwiki.biligame.com/images/llzj/3/36/3a3mg0bjgmycxx0wv5gt4hir6dl1m34.png"
    },
    chongfeng: {
        name: "重逢之时",
        chara: "露卡玛尔",
        charb: "波奇茸茸",
        img: "https://patchwiki.biligame.com/images/llzj/3/3f/oz7x9kar1ey4ss1neg0hyljbdgrsh76.png",
        avatara: "https://patchwiki.biligame.com/images/llzj/2/28/lsl0basrl2u7cksj9pqv1h6xiziihdu.png",
        avatarb: "https://patchwiki.biligame.com/images/llzj/3/37/q51rvg82quelf4ea0wzjspaxxuti251.png"
    }
};

const CHUYU_CONFIG = {
    poolName: POOL_CONFIG.chuyu.name,
    upCharacter: {
        name: POOL_CONFIG.chuyu.char,
        type: getCharacterType(POOL_CONFIG.chuyu.char),
        avatar: POOL_CONFIG.chuyu.avatar
    },
    img: POOL_CONFIG.chuyu.img
};

const CHONGFENG_CONFIG = {
    poolName: POOL_CONFIG.chongfeng.name,
    upCharacters: [
        { 
            name: POOL_CONFIG.chongfeng.chara, 
            type: getCharacterType(POOL_CONFIG.chongfeng.chara),
            avatar: POOL_CONFIG.chongfeng.avatara
        },
        { 
            name: POOL_CONFIG.chongfeng.charb, 
            type: getCharacterType(POOL_CONFIG.chongfeng.charb),
            avatar: POOL_CONFIG.chongfeng.avatarb
        }
    ],
    img: POOL_CONFIG.chongfeng.img
};

function buildCharactersDB() {
    const upNames = new Set([CHUYU_CONFIG.upCharacter.name, ...CHONGFENG_CONFIG.upCharacters.map(c => c.name)]);
    const legendList = [];
    
    legendList.push({ ...CHUYU_CONFIG.upCharacter, isUp: true, pool: 'chuyu' });
    CHONGFENG_CONFIG.upCharacters.forEach(char => legendList.push({ ...char, isUp: true, pool: 'chongfeng' }));
    
    ALL_LEGEND_CHARACTERS.forEach(char => {
        if (!upNames.has(char.name)) legendList.push({ name: char.name, type: char.type, isUp: false });
    });
    
    return { 
        legend: legendList, 
        epic: EPIC_ORDER, 
        elite: ELITE_ORDER, 
        common: COMMON_ORDER 
    };
}

let characters = buildCharactersDB();

function buildPoolConfig() {
    return {
        chuyu: {
            name: CHUYU_CONFIG.poolName,
            type: "初遇",
            upCharacters: [CHUYU_CONFIG.upCharacter],
            upRate: 0.5,
            specialPity: 180,
            specialPityText: "180抽内必得UP角色",
            img: CHUYU_CONFIG.img
        },
        chongfeng: {
            name: CHONGFENG_CONFIG.poolName,
            type: "重逢",
            upCharacters: CHONGFENG_CONFIG.upCharacters,
            upRate: 0.75,
            specialPity: 180,
            specialPityText: "180抽内必得未拥有UP角色",
            img: CHONGFENG_CONFIG.img
        }
    };
}

let pools = buildPoolConfig();

let currentPool = 'chuyu';
let globalPity = 0;
let specialPity = { chuyu: 0, chongfeng: 0 };
let ownedCharacters = new Set();
let stats = { 
    total: 0, 
    legend: 0, 
    epic: 0, 
    elite: 0, 
    common: 0, 
    history: [], 
    legendStats: {} 
};

function getImageUrl(imgValue) {
    if (!imgValue) return '';
    if (imgValue.startsWith('http')) return imgValue;
    if (imgValue.startsWith('//')) return imgValue;
    if (imgValue.startsWith('/')) return imgValue;
    return imgValue;
}

function getAvatarUrl(charName, customUrl) {
    if (customUrl && (customUrl.startsWith('http') || customUrl.startsWith('//'))) {
        return customUrl;
    }
    return `https://patchwiki.biligame.com/images/llzj/thumb/头像_${charName}.png`;
}

function init() { 
    const chuyuImgContainer = document.getElementById('chuyu-image-container');
    const chuyuImgUrl = getImageUrl(pools.chuyu.img);
    if (chuyuImgUrl) {
        chuyuImgContainer.innerHTML = `<img src="${chuyuImgUrl}" alt="初遇卡池" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'placeholder-text\\'>初遇卡池</div>';">`;
    } else {
        chuyuImgContainer.innerHTML = '<div class="placeholder-text">初遇卡池</div>';
    }
    
    const chongfengImgContainer = document.getElementById('chongfeng-image-container');
    const chongfengImgUrl = getImageUrl(pools.chongfeng.img);
    if (chongfengImgUrl) {
        chongfengImgContainer.innerHTML = `<img src="${chongfengImgUrl}" alt="重逢卡池" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'placeholder-text\\'>重逢卡池</div>';">`;
    } else {
        chongfengImgContainer.innerHTML = '<div class="placeholder-text">重逢卡池</div>';
    }
    
    updateUI(); 
}

function switchPool(pool) {
    currentPool = pool;
    document.querySelectorAll('.pool-card').forEach(card => card.classList.remove('active'));
    document.getElementById(`pool-card-${pool}`).classList.add('active');
    updateUI();
}

function resetStats() {
    if (!confirm('确定要重置所有统计数据吗？')) return;
    globalPity = 0;
    specialPity = { chuyu: 0, chongfeng: 0 };
    ownedCharacters.clear();
    stats = { total: 0, legend: 0, epic: 0, elite: 0, common: 0, history: [], legendStats: {} };
    updateUI();
    updateStats();
    document.getElementById('result-area').classList.add('hidden');
    alert('统计已重置！');
}

function updateUI() {
    const pool = pools[currentPool];
    document.getElementById('pool-name').textContent = pool.name;
    document.getElementById('pool-type').textContent = `邂逅类型：${pool.type}`;
    
    const upContainer = document.getElementById('up-characters');
    upContainer.innerHTML = pool.upCharacters.map(char => {
        const avatarUrl = getAvatarUrl(char.name, char.avatar);
        return `
        <div class="flex items-center bg-amber-50 px-4 py-2 rounded-lg border border-amber-200">
            <img src="${avatarUrl}" alt="${char.name}" class="up-character-avatar mr-3" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="up-character-avatar-fallback mr-3" style="display:none;">${char.name[0]}</div>
            <div>
                <div class="font-bold text-amber-900">${char.name}</div>
                <div class="text-xs text-amber-600">${char.type}</div>
            </div>
            <div class="ml-3 text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded">UP</div>
        </div>
    `;
    }).join('');
    
    document.getElementById('global-pity-count').textContent = globalPity;
    document.getElementById('global-pity-remain').textContent = Math.max(0, 100 - globalPity);
    document.getElementById('global-pity-bar').style.width = `${Math.min((globalPity / 100) * 100, 100)}%`;
    
    const currentSpecialPity = specialPity[currentPool];
    document.getElementById('special-pity-title').textContent = `${pool.type}保底`;
    document.getElementById('special-pity-desc').textContent = pool.specialPityText;
    document.getElementById('special-pity-count').textContent = currentSpecialPity;
    document.getElementById('special-pity-remain').textContent = Math.max(0, pool.specialPity - currentSpecialPity);
    document.getElementById('special-pity-bar').style.width = `${Math.min((currentSpecialPity / pool.specialPity) * 100, 100)}%`;
    
    document.getElementById('special-rule').textContent = 
        pool.type === '初遇' ? '初遇保底：180抽内必得UP角色' : '重逢保底：180抽内必得未拥有UP角色';
}

function gacha(times) {
    const results = [];
    const pool = pools[currentPool];
    
    for (let i = 0; i < times; i++) {
        globalPity++;
        specialPity[currentPool]++;
        let result;
        
        if (specialPity[currentPool] >= pool.specialPity) {
            if (pool.type === '初遇') {
                result = { ...pool.upCharacters[0], rarity: 'legend', isUp: true };
            } else {
                const unowned = pool.upCharacters.filter(c => !ownedCharacters.has(c.name));
                const target = unowned.length > 0 ? unowned[Math.floor(Math.random() * unowned.length)] : pool.upCharacters[Math.floor(Math.random() * pool.upCharacters.length)];
                result = { ...target, rarity: 'legend', isUp: true };
            }
            specialPity[currentPool] = 0;
        } else if (globalPity >= 100) {
            result = getRandomLegend(pool);
            globalPity = 0;
        } else {
            const rand = Math.random();
            if (rand < 0.02) { 
                result = getRandomLegend(pool); 
                globalPity = 0; 
            }
            else if (rand < 0.22) result = { name: characters.epic[Math.floor(Math.random() * characters.epic.length)], rarity: 'epic' };
            else if (rand < 0.62) result = { name: characters.elite[Math.floor(Math.random() * characters.elite.length)], rarity: 'elite' };
            else result = { name: characters.common[Math.floor(Math.random() * characters.common.length)], rarity: 'common' };
        }
        
        if (result.isUp) specialPity[currentPool] = 0;
        if (result.rarity === 'legend') {
            ownedCharacters.add(result.name);
            if (!stats.legendStats[result.name]) {
                stats.legendStats[result.name] = 0;
            }
            stats.legendStats[result.name]++;
        }
        
        results.push(result);
        stats.total++;
        if (result.rarity === 'legend') stats.legend++;
        else if (result.rarity === 'epic') stats.epic++;
        else if (result.rarity === 'elite') stats.elite++;
        else stats.common++;
        
        stats.history.unshift({
            time: new Date().toLocaleTimeString(),
            name: result.name,
            rarity: result.rarity,
            isUp: result.isUp,
            pool: pool.name
        });
    }
    
    if (stats.history.length > 50) stats.history = stats.history.slice(0, 50);
    displayResults(results);
    updateStats();
    updateUI();
}

function getRandomLegend(pool) {
    const isUp = Math.random() < pool.upRate;
    if (isUp) {
        const upChar = pool.upCharacters[Math.floor(Math.random() * pool.upCharacters.length)];
        return { ...upChar, rarity: 'legend', isUp: true };
    } else {
        const nonUp = characters.legend.filter(c => !c.isUp);
        const char = nonUp[Math.floor(Math.random() * nonUp.length)];
        return { name: char.name, type: char.type || '未知', rarity: 'legend', isUp: false };
    }
}
function displayResults(results) {
    const area = document.getElementById('result-area');
    const grid = document.getElementById('result-grid');
    const count = document.getElementById('result-count');
    
    area.classList.remove('hidden');
    count.textContent = `(${results.length}次)`;
    
    grid.innerHTML = results.map((r, i) => {
        const rarityClass = `card-rarity-${r.rarity}`;
        const rarityText = r.rarity === 'legend' ? '传说' : r.rarity === 'epic' ? '史诗' : r.rarity === 'elite' ? '精英' : '普通';
        const upBadge = r.isUp ? '<div class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded z-10">UP</div>' : '';
        
        const charInfo = getCharacterInfo(r.name, r.rarity);
        const pixelUrl = charInfo.pixelUrl || '';
        
        return `
    <div class="character-card relative ${rarityClass} rounded-lg text-white text-center cursor-pointer transform hover:scale-105 transition flex flex-col items-center justify-between p-0" style="animation-delay: ${i * 0.05}s; min-height: 120px;">
        ${upBadge}
        <div class="rarity-label w-full text-center mb-1">${rarityText}</div>
        <div class="flex-1 flex items-center justify-center w-full">
            <img src="${pixelUrl}" alt="${r.name}" class="pixel-character-img" 
                 onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'text-2xl\\'>?</div>';">
        </div>
        <div class="character-name w-full text-center mt-1">${r.name}</div>
    </div>
`;
    }).join('');
}

function updateStats() {
    document.getElementById('stat-total').textContent = stats.total;
    document.getElementById('stat-legend').textContent = stats.legend;
    document.getElementById('stat-epic').textContent = stats.epic;
    document.getElementById('stat-avg').textContent = stats.legend > 0 ? (stats.total / stats.legend).toFixed(1) : 0;
    
    const historyList = document.getElementById('history-list');
    if (stats.history.length === 0) {
        historyList.innerHTML = '<div class="text-center text-gray-400 py-8">暂无记录</div>';
    } else {
        historyList.innerHTML = stats.history.map(h => {
            const colorClass = h.rarity === 'legend' ? 'text-amber-600 font-bold' : h.rarity === 'epic' ? 'text-purple-600' : h.rarity === 'elite' ? 'text-blue-600' : 'text-gray-500';
            const upMark = h.isUp ? ' <span class="text-red-500 text-xs">[UP]</span>' : '';
            return `
                <div class="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
                    <div>
                        <span class="text-gray-400 text-xs mr-2">${h.time}</span>
                        <span class="${colorClass}">${h.name}</span>${upMark}
                    </div>
                    <span class="text-xs text-gray-400">${h.pool}</span>
                </div>
            `;
        }).join('');
    }
    
    const historyListMobile = document.getElementById('history-list-mobile');
    if (stats.history.length === 0) {
        historyListMobile.innerHTML = '<div class="text-center text-gray-400 py-8">暂无记录</div>';
    } else {
        historyListMobile.innerHTML = stats.history.map(h => {
            const colorClass = h.rarity === 'legend' ? 'text-amber-600 font-bold' : h.rarity === 'epic' ? 'text-purple-600' : h.rarity === 'elite' ? 'text-blue-600' : 'text-gray-500';
            const upMark = h.isUp ? ' <span class="text-red-500 text-xs">[UP]</span>' : '';
            return `
                <div class="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
                    <div>
                        <span class="text-gray-400 text-xs mr-2">${h.time}</span>
                        <span class="${colorClass}">${h.name}</span>${upMark}
                    </div>
                    <span class="text-xs text-gray-400">${h.pool}</span>
                </div>
            `;
        }).join('');
    }
    
    updateLegendStats();
}

function updateLegendStats() {
    const legendStats = stats.legendStats;
    const legendEntries = Object.entries(legendStats);
    
    const mobileContainer = document.getElementById('legend-stats-list-mobile');
    if (legendEntries.length === 0) {
        mobileContainer.innerHTML = '<div class="text-center text-gray-400 py-8 col-span-2">暂无传说角色</div>';
    } else {
        mobileContainer.innerHTML = legendEntries.map(([name, count]) => {
            const countDisplay = count > 1 ? `×${count}` : '';
            return `
                <div class="flex items-center justify-between p-2 bg-amber-50 rounded border border-amber-200">
                    <span class="text-amber-600 font-semibold text-sm">${name}</span>
                    ${countDisplay ? `<span class="text-amber-600 font-bold text-sm">${countDisplay}</span>` : ''}
                </div>
            `;
        }).join('');
    }
    
    const desktopContainer = document.getElementById('legend-stats-list-desktop');
    if (legendEntries.length === 0) {
        desktopContainer.innerHTML = '<div class="text-center text-gray-400 py-8 col-span-3">暂无传说角色</div>';
    } else {
        desktopContainer.innerHTML = legendEntries.map(([name, count]) => {
            const countDisplay = count > 1 ? `×${count}` : '';
            return `
                <div class="flex items-center justify-between p-2 bg-amber-50 rounded border border-amber-200">
                    <span class="text-amber-600 font-semibold text-sm">${name}</span>
                    ${countDisplay ? `<span class="text-amber-600 font-bold text-sm">${countDisplay}</span>` : ''}
                </div>
            `;
        }).join('');
    }
}

function renderCharacterLists() {
    const pool = pools[currentPool];
    const legendContainer = document.getElementById('legend-list');
    let legendHTML = '';
    
    const currentUpNames = new Set(pool.upCharacters.map(c => c.name));
    
    if (pool.type === '初遇') {
        const upChar = pool.upCharacters[0];
        legendHTML += `<div class="flex justify-between items-center p-2 bg-amber-50 rounded border border-amber-200"><span class="font-semibold text-amber-900">${upChar.name} <span class="text-xs bg-red-500 text-white px-1 rounded">UP</span></span><span class="text-amber-700 font-mono">1.000%</span></div>`;
    } else {
        pool.upCharacters.forEach(char => {
            legendHTML += `<div class="flex justify-between items-center p-2 bg-amber-50 rounded border border-amber-200"><span class="font-semibold text-amber-900">${char.name} <span class="text-xs bg-red-500 text-white px-1 rounded">UP</span></span><span class="text-amber-700 font-mono">0.750%</span></div>`;
        });
    }
    
    const nonUpRate = pool.type === '初遇' ? '0.014%' : '0.007%';
    LEGEND_ORDER.forEach(name => {
        if (!currentUpNames.has(name)) {
            legendHTML += `<div class="flex justify-between items-center p-2 bg-gray-50 rounded"><span class="text-gray-700">${name}</span><span class="text-gray-500 font-mono text-xs">${nonUpRate}</span></div>`;
        }
    });
    legendContainer.innerHTML = legendHTML;
    
    document.getElementById('epic-list').innerHTML = EPIC_ORDER.map(name => 
        `<div class="flex justify-between items-center p-2 bg-gray-50 rounded"><span class="text-gray-700 text-xs">${name}</span><span class="text-gray-500 font-mono text-xs">0.741%</span></div>`
    ).join('');
    
    document.getElementById('elite-list').innerHTML = ELITE_ORDER.map(name => 
        `<div class="flex justify-between items-center p-2 bg-gray-50 rounded"><span class="text-gray-700 text-xs">${name}</span><span class="text-gray-500 font-mono text-xs">2.222%</span></div>`
    ).join('');
    
    document.getElementById('common-list').innerHTML = COMMON_ORDER.map(name => 
        `<div class="flex justify-between items-center p-2 bg-gray-50 rounded"><span class="text-gray-700 text-xs">${name}</span><span class="text-gray-500 font-mono text-xs">3.455%</span></div>`
    ).join('');
}

function showDetails() { 
    renderCharacterLists(); 
    document.getElementById('details-modal').classList.remove('hidden'); 
}

function closeDetails() { 
    document.getElementById('details-modal').classList.add('hidden'); 
}

document.getElementById('details-modal').addEventListener('click', function(e) { 
    if (e.target === this) closeDetails(); 
});

document.addEventListener('DOMContentLoaded', init);
