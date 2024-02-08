document.getElementById('animatedTitle').addEventListener('mouseover', function() {
    this.style.color = '#555'; // 鼠标悬停时改变标题颜色
});

document.getElementById('animatedTitle').addEventListener('mouseout', function() {
    this.style.color = '#333'; // 鼠标移出时恢复标题颜色
});
