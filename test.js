let regexp = /^(http)|(ftp)|(file)\:\/\/([a-z]+)\.([a-z0-9]+)\.([a-z]+)$/g
console.log(regexp.test("http://www.oppo"))