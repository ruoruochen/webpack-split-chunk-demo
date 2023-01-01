const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        'pageA':'./src/pageA.js',
        'pageB':'./src/pageB.js',
        'pageC':'./src/pageC.js'
    },
    output:{
        path: path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    optimization:{
        chunkIds: "named", // 开发模式默认设置成name，提高debugger效率；生产模式默认被设置成deterministic，短id
        splitChunks:{
            minSize:0,
            cacheGroups:{
                commons:{
                    chunks:'initial',
                    minChunks: 2, // 被引用两次
                    maxInitialRequests:5,
                    name: 'commons'
                },
                vendor:{
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "initial",
                    minChunks: 1,
                    name: 'vendor',
                }
                
            }
        }
    }
    
}