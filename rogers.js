function spawn(){
    const spawnItem = document.createElement('div');
    spawnItem.className = 'spawn-container';
    spawnItem.innerHTML = 'SPAWNED'
    document.body.appendChild(spawnItem)
}

spawn();