const path = require("path"); // Importing the 'path' module from Node.js
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Importing the 'html-webpack-plugin' module
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // Importing the 'webpack-bundle-analyzer' module

module.exports = {
  mode: "development", // Set the mode to 'development'

  entry: {
    bundle: path.resolve(__dirname, "src/index.js"), // Entry point for your application
  },

  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
    filename: "[name][contenthash].js", // Output file name with a content hash for cache busting
    clean: true, // Clean the 'dist' directory before each build
    assetModuleFilename: "[name][ext]", // Output file name for asset files
  },

  devtool: "source-map", // Generate source maps for better debugging

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Serve files from the 'dist' directory
    },
    port: 3000, // Specify the port for the development server
    open: true, // Open the application in the default browser
    hot: true, // Enable Hot Module Replacement (HMR)
    compress: true, // Enable gzip compression
    historyApiFallback: true, // Enable history API fallback
  },

  module: {
    rules: [
      {
        test: /\.scss$/, // Use SCSS files
        use: ["style-loader", "css-loader", "sass-loader"], // Apply loaders for SCSS files
      },
      {
        test: /\.js$/, // Use JavaScript files
        exclude: /node_modules/, // Exclude 'node_modules' directory from processing
        use: {
          loader: "babel-loader", // Use Babel loader for JavaScript files
          options: {
            presets: ["@babel/preset-env"], // Apply preset for configuring Babel
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Use image files
        type: "asset/resource", // Output image files as resources
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App", // HTML title for the generated index.html file
      filename: "index.html", // Output filename for the generated HTML file
      template: "src/template.html", // Use the provided template for generating the HTML file
    }),
    new BundleAnalyzerPlugin(), // Use the BundleAnalyzerPlugin to analyze the bundle size
  ],
};
