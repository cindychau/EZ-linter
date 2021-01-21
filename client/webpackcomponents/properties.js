// missing Enable all
const ourProps = {
    "React": {
        module: {
            test: '/\.(js|jsx)$/',
            loaders: 'babel-loader'
        }
    },
    "Svelte": {
        module: {
            test: '/\.svelte$/',
            loaders: 'svelte-loader',
            options: {
                preprocess:  `require('svelte-preprocess')({})`
              }
        }
    },
    "Vue": {
        import: {
            name: '{VueLoaderPlugin}',
            path: `require('vue-loader/lib/plugin')`
        },
        plugins: 'new VueLoaderPlugin()',
        module:{
            test: '/\.vue$/',
            loaders: 'vue-loader'
        }
    },
    "Bootstrap": {
        module: {
            test: '/\.css$/',
            loaders: `'style-loader','css-loader'`
        }
    },
    "Tailwind CSS": {
        module: {
            test: '/\.css$/',
            loaders: `'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1
                  }
                },
                'postcss-loader'
              `
        }
        
    },
    "Babel": {
      module: {
        test: '/\.js$/',
        loaders: 'babel-loader'
      }
    },
    "Typescript": {
        module: {
            test: '/\.ts(x)?$/',
            loaders: 'ts-loader',
        },
            entry: './src/index.ts',
            resolve: `{extensions: ['.tsx', '.ts', '.js']}`
    },
    "CSS": {
        module: {
            test: '/\.css$/',
            loaders: `'style-loader','css-loader'`
        }
    },
    "CSS Modules": {
        module: {
            test: '/\.css$/',
            loaders: `'style-loader', {loader: 'css-loader', options: {importLoaders: 1,modules: true}}`
        }
    },
    "Sass": {
        module: {
            test: '/\.scss$/',
            loaders: `'style-loader', 'css-loader', 'sass-loader'`
        }
    },
    "Less": {
        module: {
            test: '/\.less$/',
            loaders: `'style-loader', 'css-loader', 'less-loader'`
        }
    },
    "stylus": {
        module: {
            test: '/\.styl$/',
            loaders: `'style-loader', 'css-loader', 'stylus-loader'`
        }
    },
    "SVG": {
        module: {
            test: '/\.svg$/',
            use: 'file-loader',
        }
    },
    "PNG": {
        module: {
            test: '/\.png$/',
            use: `{loader: 'url-loader', options: {mimetype: 'image/png'}}`
        }
    },
    "moment": {
        plugins: `new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)`
    },
    "lodash": {
        import: {
            name: 'LodashModuleReplacementPlugin',
            path: 'lodash-webpack-plugin'
        },
        plugins: 'new LodashModuleReplacementPlugin'
    },
    "HTML webpack plugin": {
        import: {
            name: 'HtmlWebpackPlugin',
            path: 'html-webpack-plugin'
        },
        plugins: `new HtmlWebpackPlugin({appMountId: 'app',filename: 'index.html'})`
    },
    "Webpack bundle analyze": {
        import: {
            name: 'BundleAnalyzerPlugin', 
            path: 'webpack-bundle-analyzer'
        },
        plugins: `new BundleAnalyzerPlugin({analyzerMode: 'static', openAnalyzer: false,})`
    },
    "MiniCSSExtract plugin": {
        import: {
            name: 'MiniCssExtractPlugin',
            path: 'mini-css-extract-plugin'
        },
        plugins: `new MiniCssExtractPlugin()`
    },
    "CopyWebpack plugin": {
        import: {
            name: 'CopyPlugin',
            path: 'copy-webpack-plugin'
        },
        plugins: `new CopyPlugin({patterns: [{ from: 'src/index.html' }],})`
    },
    "CleanWebpack plugin": {
        import: {
            name: '{ CleanWebpackPlugin }', 
            path: 'clean-webpack-plugin'
        },
        plugins: `new CleanWebpackPlugin()`
    },
    "React hot loader": {
        entry: ['react-hot-loader/patch', './src/index.js'],
        resolve: `{alias: {'react-dom': '@hot-loader/react-dom'}}`,
        devServer: `{contentBase: './dist'}`
    }
  }
  
export default ourProps;