module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    devServer: {
        proxy: {
            '/api': {
                //http://test.m.naoffer.com
                target: 'http://app1.naoffer.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // host:"192.168.101.150",
        // disableHostCheck:true,
    }
   
}