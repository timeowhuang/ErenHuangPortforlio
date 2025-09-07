// 公共脚本：初始化页面中的 Phaser 游戏嵌入
function initPhaserEmbeds() {
  document.querySelectorAll('.game-box').forEach(box => {
    const url = box.dataset.url;
    const width = box.dataset.width;
    const height = box.dataset.height;
    const aspect = box.dataset.aspect;

    if (width) box.style.width = width + 'px';
    if (height) box.style.height = height + 'px';
    if (!height && aspect) box.style.aspectRatio = aspect; // 可选: 使用宽高比

    const frame = box.querySelector('.game-frame');
    const start = box.querySelector('.start-overlay');
    const close = box.querySelector('.close-btn');

    start.addEventListener('click', () => {
      frame.src = url;
      start.style.display = 'none';
      close.style.display = 'block';
    });

    close.addEventListener('click', () => {
      frame.src = '';
      start.style.display = 'flex';
      close.style.display = 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', initPhaserEmbeds);