
var request = require('request');

setInterval(doThe, 10);

function doThe() {
    var jar = request.jar();
    request('http://www.nhhs.net/apps/classes/show_class.jsp?classREC_ID=618291', {
        jar: jar,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36',
        }
    }, function (err, response, body) {
        request.post('http://www.nhhs.net/apps/quickpost/vote', {
            form: { postId: 213666 },
            jar: jar,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'http://www.nhhs.net',
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Referer': 'http://www.nhhs.net/apps/classes/show_class.jsp?classREC_ID=618291',
            },
        }, function (err, respinse, body) {
            if (err) throw err;
            console.log(JSON.stringify(body));
        });
    });
}
