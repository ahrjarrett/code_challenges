// Source : https://www.codewars.com/kata/extract-file-name/train/javascript
// Author : Andrew Jarrett
// Date   : 2018-09-30

class FileNameExtractor {
    static extractFileName (filename) {
        let [ prefix, ext ] = filename.split('.')
        prefix = prefix.split('_').slice(1).join('_')
        return prefix.concat('.', ext)
    }
}

