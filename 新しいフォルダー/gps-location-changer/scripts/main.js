document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    fetch('https://your-backend-service.com/set_location', {  // Herokuや別のホスティングサービスで公開されたエンドポイントに置き換えてください
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitude: latitude, longitude: longitude }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('位置情報が変更されました。緯度: ' + data.new_latitude + ', 経度: ' + data.new_longitude);
        } else {
            alert('位置情報の変更に失敗しました。');
        }
    })
    .catch((error) => {
        console.error('エラー:', error);
    });
});
