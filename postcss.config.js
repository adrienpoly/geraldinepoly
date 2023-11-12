module.exports = {
  plugins: {
    tailwindcss: {},
    'tailwindcss/nesting': {},
    'postcss-mixins': {},
    'postcss-color-mod-function': {
      // Uncomment the following to import CSS variables for use in `color-mod`:
      // importFrom: "frontend/styles/variables.css"
    },
    rfs: {
      twoDimensional: false,
      baseValue: 16,
      unit: 'rem',
      breakpoint: 1200,
      breakpointUnit: 'px',
      factor: 5,
      safariIframeResizeBugFix: false
    },
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true
      }
    },
    cssnano: {
      preset: 'default'
    }
  }
}
