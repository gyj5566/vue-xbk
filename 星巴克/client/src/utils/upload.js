import api from "../api/"
function Upload() {

}
Upload.prototype = {
    constructor: Upload,
    init: function (options) {
        this.opts = options
        this.filesBtn = this.opts.fileBtn
        this.annex=this.opts.annex
        this.upload()
    },
    upload: function () {
        var that = this
        var filesObj = this.filesBtn.files
        for (var i = 0; i < filesObj.length; i++) {
            var imgName = filesObj[i].name
            var data = /\.(\w+)$/g.exec(imgName)[1]
            var reg = new RegExp(that.opts.type.join("|"), "i")
            if (!reg.test(data)) {
                alert("您可以试试 " + that.opts.type.join(" , ") + " 类型的文件")
                continue;
            }
            if (filesObj[i].size > that.opts.size * 1024 * 1024) {
                alert("最大可以上传" + that.opts.size + "MB大小的文件")
                continue;
            }
            if (that.annex.length > that.opts.maxPic) {
                continue;
            }
            let parmo=new FormData()
            parmo.append("file", filesObj[i])
            api.commitFile(parmo).then(res=>{
                this.annex.push(res.url)
                console.log(this.annex)
            })
        }
    }
}
export default function (opts) {
    let defaults = {
        size: 3,
        maxPic: 5,
        type: ['jpg', 'png', 'gif', 'jpeg', 'bmp', 'svg']
    }
    opts = Object.assign({annex:opts.annex}, defaults, { ...{ fileBtn: opts.fileBtn}})
    new Upload().init(opts)
}