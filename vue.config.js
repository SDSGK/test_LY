
module.exports = {
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
    },

    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "./src/assets/style/main.scss";'
            }
        }
    },

    // http://localhost:8080/thinkphp/personal_blog/public/personal.php/personal/
    devServer: {
        // open: true,
        // port: 8001,
        proxy: {
            '/apis': {
                target: 'http://192.168.1.105:8080/StarRing/public/StarRing.php/StarRing/',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    },

    publicPath: './'
};
