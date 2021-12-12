import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const file = fileURLToPath(import.meta.url)
const directory = dirname(file)

export default {
  entry: './src/ts/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(directory, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif|tiff|woff|woff2|otf|ttf|eot)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.([jt]sx?)?$/,
        use: ['swc-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(directory, 'dist')
    },
    port: 8080,
    compress: true
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}
