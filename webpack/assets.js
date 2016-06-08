import * as plugin from 'webpack-isomorphic-tools/plugin';

export default {
  assets: {
    fonts: {
      extensions: ['eot', 'ttf', 'woff', 'woff2'],
      parser: plugin.url_loader_parser
    },
    images: {
      extensions: ['gif', 'jpg', 'png', 'ico', 'svg'],
      parser: plugin.url_loader_parser
    },
    styles: {
      extensions: ['css', 'scss'],
      filter(module, regex, options, log) {
        return options.development
          ? plugin.style_loader_filter(module, regex, options, log)
          : regex.test(module.name);
      },
      path(module, options, log) {
        return options.development
          ? plugin.style_loader_path_extractor(module, options, log)
          : module.name;
      },
      parser(module, options, log) {
        return options.development
          ? plugin.css_modules_loader_parser(module, options, log)
          : module.source;
      }
    }
  }
};