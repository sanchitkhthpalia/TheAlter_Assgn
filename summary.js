window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('summaryList');
  const raw = sessionStorage.getItem('selectedPlayers');
  let players = [];
  try { players = JSON.parse(raw || '[]'); } catch {}
  container.innerHTML = '';
  players.sort((a,b)=>a.role.localeCompare(b.role) || a.name.localeCompare(b.name));
  for (const p of players) {
    const row = document.createElement('div');
    row.className = 'row';
    const left = document.createElement('div');
    left.className = 'name';
    left.textContent = `${p.name} — ${p.role} (${p.team_short_name})`;
    const right = document.createElement('div');
    right.className = 'credit';
    right.textContent = String(p.event_player_credit);
    row.appendChild(left);
    row.appendChild(right);
    container.appendChild(row);
  }
});


