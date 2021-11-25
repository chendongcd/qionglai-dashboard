function createURL(path, param/*链接和参数*/) {
    let i, url = ''
    for (i in param) url += '&' + i + '=' + param[i]
    return path + url.replace(/./, '?')
  }
export default function request(url, options, token) {
    return new Promise(function (resolve, reject) {
      var req = new XMLHttpRequest()
      if (options.method === 'GET') {
        let _url = createURL(url, options.body)
        req.open(options.method, _url)
      } else {
        req.open(options.method, url)
      }

      if (token) {
        // console.log(token)
        // console.log(url)
        req.setRequestHeader('Authorization', `${token}`)
      }
  
      req.onload = function () {
          if (req.readyState === 4 && (req.status == 200||req.status == 401||req.status == 402)) {
            resolve(JSON.parse(req.response))
          } else {
            reject(Error(req.statusText))
          }
      }
      req.onerror = function (e) {
        req.abort()
        resolve({error: true})
      }
      req.timeout = 20000;
      req.ontimeout = function () {
        req.abort()
        resolve({timeout: true})
      }
      if (options.method !== 'GET') {
        req.send(JSON.stringify(options.body))
      } else {
        req.send()
      }
    })
  }