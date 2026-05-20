/* ===== ROOT & RESET ===== */
:root {
  --gold: #f5c842;
  --gold2: #e8a000;
  --teal: #00c9a7;
  --teal2: #008f74;
  --deep: #0a0e1a;
  --surface: #111827;
  --surface2: #1c2536;
  --surface3: #243044;
  --text: #f0f4ff;
  --text2: #9aa5bc;
  --border: rgba(255,255,255,0.08);
  --shadow: 0 8px 40px rgba(0,0,0,0.5);
  --radius: 18px;
  --radius-sm: 10px;
  --font-display: 'Cinzel Decorative', serif;
  --font-body: 'Nunito', sans-serif;
  --header-h: 70px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  height: 100%;
  background: var(--deep);
  color: var(--text);
  font-family: var(--font-body);
  overflow: hidden;
}

/* ===== LOADER ===== */
#loader {
  position: fixed; inset: 0; z-index: 9999;
  background: radial-gradient(ellipse at center, #0d1a2e 0%, #040810 100%);
  display: flex; align-items: center; justify-content: center;
  transition: opacity 0.8s ease, visibility 0.8s;
}
#loader.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
.loader-inner { text-align: center; }
.loader-logo { font-size: 72px; animation: float 2s ease-in-out infinite; }
.loader-title {
  font-family: var(--font-display);
  font-size: 2.4rem; color: var(--gold);
  letter-spacing: 4px; margin: 12px 0;
  text-shadow: 0 0 40px rgba(245,200,66,0.6);
}
.loader-bar {
  width: 280px; height: 4px;
  background: rgba(255,255,255,0.1);
  border-radius: 4px; overflow: hidden;
  margin: 20px auto 12px;
}
.loader-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--teal), var(--gold));
  border-radius: 4px;
  animation: loadBar 2.5s ease-in-out forwards;
}
.loader-text { color: var(--text2); font-size: 0.9rem; }

@keyframes loadBar { from { width: 0 } to { width: 100% } }
@keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }

/* ===== HEADER ===== */
#header {
  position: fixed; top: 0; left: 0; right: 0;
  height: var(--header-h); z-index: 200;
  display: flex; align-items: center;
  padding: 0 20px;
  background: rgba(10,14,26,0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 4px 30px rgba(0,0,0,0.4);
}
.header-logo {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-display);
  font-size: 1.1rem; color: var(--gold);
  text-shadow: 0 0 20px rgba(245,200,66,0.4);
  white-space: nowrap;
}
.logo-icon { font-size: 1.6rem; }
.header-nav {
  display: flex; gap: 6px;
  margin: 0 auto;
}
.nav-btn {
  background: transparent; border: 1px solid transparent;
  color: var(--text2); padding: 8px 18px;
  border-radius: 30px; cursor: pointer;
  font-family: var(--font-body); font-size: 0.9rem;
  transition: all 0.3s; display: flex; align-items: center; gap: 6px;
}
.nav-btn:hover { color: var(--text); border-color: var(--border); background: var(--surface2); }
.nav-btn.active {
  color: var(--gold); border-color: var(--gold);
  background: rgba(245,200,66,0.1);
  box-shadow: 0 0 20px rgba(245,200,66,0.2);
}
.settings-btn {
  background: var(--surface2); border: 1px solid var(--border);
  color: var(--text); width: 42px; height: 42px;
  border-radius: 50%; cursor: pointer; font-size: 1.2rem;
  transition: all 0.3s; flex-shrink: 0;
}
.settings-btn:hover { background: var(--surface3); transform: rotate(90deg); }

/* ===== SECTIONS ===== */
.section {
  display: none; position: fixed;
  top: var(--header-h); left: 0; right: 0; bottom: 0;
}
.section.active { display: flex; flex-direction: column; }

/* ===== MAP ===== */
#map { width: 100%; height: 100%; }
.map-overlay-title {
  position: absolute; top: 90px; left: 50%;
  transform: translateX(-50%);
  text-align: center; pointer-events: none;
  z-index: 10;
}
.map-overlay-title h1 {
  font-family: var(--font-display);
  font-size: 1.8rem; color: var(--gold);
  text-shadow: 0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(245,200,66,0.4);
}
.map-overlay-title p { color: rgba(255,255,255,0.8); margin-top: 4px; font-size: 0.95rem; }

.category-bar {
  position: absolute; bottom: 30px; left: 50%;
  transform: translateX(-50%);
  display: flex; gap: 8px; z-index: 10;
  background: rgba(10,14,26,0.85);
  backdrop-filter: blur(20px);
  padding: 10px 16px; border-radius: 50px;
  border: 1px solid var(--border);
}
.cat-chip {
  background: var(--surface2); border: 1px solid var(--border);
  color: var(--text); padding: 8px 16px;
  border-radius: 20px; cursor: pointer;
  font-size: 0.85rem; transition: all 0.3s;
  font-family: var(--font-body);
}
.cat-chip:hover, .cat-chip.active {
  background: linear-gradient(135deg, var(--teal), var(--teal2));
  border-color: var(--teal); color: white;
  box-shadow: 0 4px 15px rgba(0,201,167,0.3);
}

/* ===== SETTINGS PANEL ===== */
.settings-panel {
  position: fixed; top: var(--header-h); right: 0;
  width: 320px; height: calc(100vh - var(--header-h));
  background: var(--surface);
  border-left: 1px solid var(--border);
  z-index: 300; overflow-y: auto;
  transform: translateX(0);
  transition: transform 0.3s ease;
  box-shadow: -10px 0 40px rgba(0,0,0,0.4);
}
.settings-panel.hidden { transform: translateX(100%); }
.settings-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px; border-bottom: 1px solid var(--border);
}
.settings-header h3 { font-size: 1.1rem; color: var(--gold); }
.settings-header button { background: none; border: none; color: var(--text2); cursor: pointer; font-size: 1.2rem; }
.settings-section { padding: 20px; border-bottom: 1px solid var(--border); }
.settings-section label { display: block; color: var(--text2); font-size: 0.85rem; margin-bottom: 10px; }
.settings-section select {
  width: 100%; padding: 10px 14px;
  background: var(--surface2); border: 1px solid var(--border);
  color: var(--text); border-radius: var(--radius-sm);
  font-family: var(--font-body); font-size: 0.9rem; cursor: pointer;
}
.filter-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.filter-tag {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 12px; background: var(--surface2);
  border: 1px solid var(--border); border-radius: var(--radius-sm);
  cursor: pointer; font-size: 0.82rem; color: var(--text2);
  transition: all 0.2s;
}
.filter-tag:hover { color: var(--text); border-color: var(--teal); }
.filter-tag input { accent-color: var(--teal); }
.geo-btn {
  width: 100%; padding: 12px;
  background: linear-gradient(135deg, var(--teal), var(--teal2));
  border: none; color: white; border-radius: var(--radius-sm);
  cursor: pointer; font-family: var(--font-body); font-size: 0.9rem;
  transition: all 0.3s; margin-bottom: 10px;
}
.geo-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,201,167,0.4); }
.geo-btn.secondary { background: var(--surface2); border: 1px solid var(--border); color: var(--text2); }
.geo-btn.secondary:hover { box-shadow: 0 4px 15px rgba(0,0,0,0.3); }

/* ===== MODAL ===== */
.modal {
  position: fixed; inset: 0; z-index: 500;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}
.modal.hidden { display: none; }
.modal-overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(6px);
}
.modal-content {
  position: relative; background: var(--surface);
  border-radius: var(--radius); border: 1px solid var(--border);
  max-width: 680px; width: 100%; max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 30px 80px rgba(0,0,0,0.6);
  animation: modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
}
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.85) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.modal-close {
  position: absolute; top: 14px; right: 14px; z-index: 10;
  background: rgba(0,0,0,0.5); border: none; color: white;
  width: 36px; height: 36px; border-radius: 50%;
  cursor: pointer; font-size: 1rem; transition: all 0.2s;
}
.modal-close:hover { background: rgba(255,255,255,0.2); }
.modal-photos { position: relative; }
.photo-main {
  width: 100%; height: 280px;
  background: var(--surface2);
  border-radius: var(--radius) var(--radius) 0 0;
  overflow: hidden; position: relative;
}
.photo-main img { width: 100%; height: 100%; object-fit: cover; }
.photo-main .no-photo {
  display: flex; align-items: center; justify-content: center;
  height: 100%; font-size: 80px; opacity: 0.3;
}
.photo-thumbs { display: flex; gap: 8px; padding: 10px; overflow-x: auto; }
.photo-thumbs img {
  width: 80px; height: 60px; object-fit: cover;
  border-radius: 8px; cursor: pointer; opacity: 0.7;
  transition: opacity 0.2s; flex-shrink: 0;
}
.photo-thumbs img:hover, .photo-thumbs img.active { opacity: 1; }
.modal-body { padding: 24px; }
.modal-header-info { margin-bottom: 16px; }
.modal-header-info h2 { font-size: 1.5rem; color: var(--text); margin-bottom: 8px; }
.modal-rating { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.stars { color: var(--gold); font-size: 1rem; }
.rating-num { color: var(--text2); font-size: 0.9rem; }
.modal-category {
  display: inline-block; padding: 4px 12px;
  background: rgba(0,201,167,0.15); border: 1px solid rgba(0,201,167,0.3);
  color: var(--teal); border-radius: 20px; font-size: 0.8rem;
}
.modal-details { background: var(--surface2); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 20px; }
.detail-item { padding: 8px 0; color: var(--text2); font-size: 0.9rem; border-bottom: 1px solid var(--border); }
.detail-item:last-child { border-bottom: none; }
.detail-item span.label { color: var(--text); font-weight: 600; margin-right: 8px; }
.modal-prices-section { margin-bottom: 20px; }
.modal-prices-section h3, .modal-reviews h3 { font-size: 1rem; color: var(--text); margin-bottom: 12px; }
.price-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 14px; background: var(--surface2);
  border-radius: var(--radius-sm); margin-bottom: 8px;
}
.price-item .item-name { color: var(--text2); }
.price-item .item-price { color: var(--gold); font-weight: 700; }
.review-card {
  background: var(--surface2); border-radius: var(--radius-sm);
  padding: 14px; margin-bottom: 10px;
}
.review-header { display: flex; justify-content: space-between; margin-bottom: 8px; }
.reviewer { font-weight: 600; font-size: 0.9rem; }
.review-date { color: var(--text2); font-size: 0.8rem; }
.review-text { color: var(--text2); font-size: 0.9rem; line-height: 1.5; }
.review-stars { color: var(--gold); font-size: 0.85rem; margin-bottom: 4px; }
.modal-actions { display: flex; gap: 12px; margin-top: 20px; }
.action-btn {
  flex: 1; padding: 12px; border-radius: var(--radius-sm);
  border: 1px solid var(--border); cursor: pointer;
  font-family: var(--font-body); font-size: 0.9rem; transition: all 0.3s;
  background: var(--surface2); color: var(--text);
}
.action-btn.primary {
  background: linear-gradient(135deg, var(--teal), var(--teal2));
  border-color: var(--teal); color: white;
}
.action-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }

/* ===== CHAT ===== */
#section-chat { overflow: hidden; }
.chat-container {
  display: flex; flex-direction: column;
  height: 100%; max-width: 800px; margin: 0 auto;
  width: 100%; padding: 20px;
}
.chat-header {
  display: flex; align-items: center; gap: 16px;
  padding: 20px 24px; background: var(--surface);
  border-radius: var(--radius); border: 1px solid var(--border);
  margin-bottom: 16px; flex-shrink: 0;
}
.chat-avatar { font-size: 2.5rem; }
.chat-header h2 { font-size: 1.1rem; color: var(--text); }
.chat-status { color: var(--teal); font-size: 0.85rem; }
.chat-messages {
  flex: 1; overflow-y: auto; padding: 10px 0;
  display: flex; flex-direction: column; gap: 12px;
  scrollbar-width: thin; scrollbar-color: var(--surface3) transparent;
}
.msg {
  display: flex; gap: 12px; align-items: flex-end;
  animation: msgIn 0.3s ease;
}
@keyframes msgIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.msg.user { flex-direction: row-reverse; }
.msg-avatar { font-size: 1.5rem; flex-shrink: 0; }
.msg-bubble {
  max-width: 70%; padding: 12px 18px;
  border-radius: 18px; font-size: 0.95rem; line-height: 1.6;
}
.msg.bot .msg-bubble {
  background: var(--surface2); color: var(--text);
  border-bottom-left-radius: 4px;
}
.msg.user .msg-bubble {
  background: linear-gradient(135deg, var(--teal), var(--teal2));
  color: white; border-bottom-right-radius: 4px;
}
.msg-bubble.typing { padding: 16px 20px; }
.msg-bubble.typing span {
  display: inline-block; width: 8px; height: 8px;
  background: var(--text2); border-radius: 50; margin: 0 2px;
  animation: typing 1.2s ease-in-out infinite;
}
.msg-bubble.typing span:nth-child(2) { animation-delay: 0.2s; }
.msg-bubble.typing span:nth-child(3) { animation-delay: 0.4s; }
@keyframes typing { 0%,80%,100% { opacity: 0.3; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-5px); } }
.quick-replies { display: flex; flex-wrap: wrap; gap: 8px; padding: 4px 0 8px; }
.quick-replies button {
  background: var(--surface2); border: 1px solid var(--border);
  color: var(--text2); padding: 7px 14px;
  border-radius: 20px; cursor: pointer;
  font-family: var(--font-body); font-size: 0.82rem;
  transition: all 0.2s;
}
.quick-replies button:hover { color: var(--teal); border-color: var(--teal); }
.chat-input-area {
  display: flex; gap: 10px; padding: 16px 0 0;
  border-top: 1px solid var(--border); flex-shrink: 0;
}
.chat-input-area input {
  flex: 1; padding: 13px 18px;
  background: var(--surface2); border: 1px solid var(--border);
  color: var(--text); border-radius: 30px;
  font-family: var(--font-body); font-size: 0.95rem;
  transition: border-color 0.3s;
}
.chat-input-area input:focus { outline: none; border-color: var(--teal); }
.send-btn {
  width: 48px; height: 48px; border-radius: 50%;
  background: linear-gradient(135deg, var(--teal), var(--teal2));
  border: none; color: white; cursor: pointer;
  font-size: 1.1rem; transition: all 0.3s; flex-shrink: 0;
}
.send-btn:hover { transform: scale(1.1); box-shadow: 0 6px 20px rgba(0,201,167,0.4); }

/* ===== ROUTE ===== */
#section-route { overflow-y: auto; padding: 24px; }
.route-container { max-width: 700px; margin: 0 auto; }
.section-title { font-size: 1.4rem; color: var(--text); margin-bottom: 24px; }
.route-form { background: var(--surface); border-radius: var(--radius); padding: 24px; border: 1px solid var(--border); }
.route-input-group { margin-bottom: 16px; }
.route-input-group label { display: block; color: var(--text2); font-size: 0.85rem; margin-bottom: 8px; }
.route-input-group input {
  width: 100%; padding: 12px 16px;
  background: var(--surface2); border: 1px solid var(--border);
  color: var(--text); border-radius: var(--radius-sm);
  font-family: var(--font-body); font-size: 0.95rem; transition: border-color 0.3s;
}
.route-input-group input:focus { outline: none; border-color: var(--teal); }
.use-loc-btn {
  margin-top: 8px; padding: 8px 16px;
  background: var(--surface3); border: 1px solid var(--border);
  color: var(--text2); border-radius: 20px; cursor: pointer;
  font-family: var(--font-body); font-size: 0.82rem; transition: all 0.2s;
}
.use-loc-btn:hover { color: var(--teal); border-color: var(--teal); }
.travel-modes { display: flex; gap: 8px; margin-bottom: 20px; }
.mode-btn {
  flex: 1; padding: 10px 8px;
  background: var(--surface2); border: 1px solid var(--border);
  color: var(--text2); border-radius: var(--radius-sm);
  cursor: pointer; font-family: var(--font-body); font-size: 0.82rem;
  transition: all 0.2s;
}
.mode-btn.active, .mode-btn:hover {
  background: rgba(0,201,167,0.15); border-color: var(--teal); color: var(--teal);
}
.build-route-btn {
  width: 100%; padding: 14px;
  background: linear-gradient(135deg, var(--gold), var(--gold2));
  border: none; color: var(--deep);
  border-radius: var(--radius-sm); cursor: pointer;
  font-family: var(--font-body); font-size: 1rem; font-weight: 700;
  transition: all 0.3s;
}
.build-route-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(245,200,66,0.4); }
.route-info {
  background: var(--surface); border-radius: var(--radius);
  padding: 20px; border: 1px solid var(--border); margin-top: 16px;
}
.route-info.hidden { display: none; }
.route-stat { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border); color: var(--text2); }
.route-stat:last-child { border-bottom: none; }
.route-stat strong { color: var(--text); }

/* ===== SEARCH ===== */
#section-search { overflow-y: auto; padding: 24px; }
.search-container { max-width: 700px; margin: 0 auto; }
.search-box {
  display: flex; gap: 10px; margin-bottom: 20px;
}
.search-box input {
  flex: 1; padding: 14px 20px;
  background: var(--surface); border: 1px solid var(--border);
  color: var(--text); border-radius: 30px;
  font-family: var(--font-body); font-size: 1rem; transition: border-color 0.3s;
}
.search-box input:focus { outline: none; border-color: var(--gold); }
.search-box button {
  width: 52px; height: 52px; border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--gold2));
  border: none; color: var(--deep); cursor: pointer;
  font-size: 1.1rem; transition: all 0.3s;
}
.search-box button:hover { transform: scale(1.1); }
.search-categories { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.search-categories button {
  padding: 8px 16px; background: var(--surface);
  border: 1px solid var(--border); color: var(--text2);
  border-radius: 20px; cursor: pointer;
  font-family: var(--font-body); font-size: 0.85rem; transition: all 0.2s;
}
.search-categories button:hover { color: var(--gold); border-color: var(--gold); }
.search-results { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.result-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); overflow: hidden; cursor: pointer;
  transition: all 0.3s;
}
.result-card:hover { border-color: var(--teal); transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.3); }
.result-card-img {
  width: 100%; height: 160px; background: var(--surface2);
  display: flex; align-items: center; justify-content: center;
  font-size: 50px; overflow: hidden;
}
.result-card-img img { width: 100%; height: 100%; object-fit: cover; }
.result-card-body { padding: 14px; }
.result-card-name { font-weight: 700; margin-bottom: 4px; }
.result-card-cat { color: var(--teal); font-size: 0.82rem; margin-bottom: 6px; }
.result-card-rating { color: var(--gold); font-size: 0.85rem; }
.result-card-addr { color: var(--text2); font-size: 0.82rem; margin-top: 6px; }

/* ===== NEARBY PANEL ===== */
.nearby-panel {
  position: fixed; bottom: 80px; left: 20px;
  width: 300px; background: var(--surface);
  border-radius: var(--radius); border: 1px solid var(--border);
  z-index: 100; max-height: 400px; overflow-y: auto;
  box-shadow: var(--shadow);
}
.nearby-panel.hidden { display: none; }
.nearby-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 16px; border-bottom: 1px solid var(--border);
}
.nearby-header h3 { font-size: 0.95rem; color: var(--gold); }
.nearby-header button { background: none; border: none; color: var(--text2); cursor: pointer; }
.nearby-item {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px; border-bottom: 1px solid var(--border);
  cursor: pointer; transition: background 0.2s;
}
.nearby-item:hover { background: var(--surface2); }
.nearby-item:last-child { border-bottom: none; }
.nearby-icon { font-size: 1.6rem; flex-shrink: 0; }
.nearby-name { font-size: 0.9rem; font-weight: 600; }
.nearby-dist { color: var(--text2); font-size: 0.8rem; }

/* ===== CUSTOM MAP MARKER ===== */
.custom-marker {
  background: white; border-radius: 50%;
  border: 3px solid; width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  transition: transform 0.2s;
}
.custom-marker:hover { transform: scale(1.2); }

/* ===== SCROLLBAR ===== */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--surface3); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--text2); }

/* ===== NOTIFICATION ===== */
.notification {
  position: fixed; bottom: 30px; right: 30px;
  background: var(--surface); border: 1px solid var(--border);
  color: var(--text); padding: 14px 20px;
  border-radius: var(--radius-sm); z-index: 1000;
  box-shadow: var(--shadow); animation: notifIn 0.3s ease;
  max-width: 320px; font-size: 0.9rem;
}
@keyframes notifIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

/* ===== MOBILE ===== */
@media (max-width: 600px) {
  .header-nav .nav-btn span:not([data-i18n]) { display: none; }
  .header-logo .logo-text { display: none; }
  .modal-content { max-height: 90vh; }
  .travel-modes { flex-wrap: wrap; }
  .category-bar { flex-wrap: nowrap; overflow-x: auto; max-width: 90vw; }
  .chat-messages .msg-bubble { max-width: 85%; }
}

/* ===== RTL for Arabic ===== */
[dir="rtl"] .header-nav { flex-direction: row-reverse; }
[dir="rtl"] .msg.user { flex-direction: row; }
[dir="rtl"] .msg.bot { flex-direction: row-reverse; }
