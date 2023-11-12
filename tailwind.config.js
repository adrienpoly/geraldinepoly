/** @type {import("tailwindcss").Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
    './plugins/**/*.rb'
  ],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  theme: {
    fontFamily: {
      serif: ['Oswald', ...defaultTheme.fontFamily.serif],
      sans: ['Cera Pro', ...defaultTheme.fontFamily.sans]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      colors: {
        primary: '#161F90',
        'primary-dark': colors.blue[800],
        secondary: colors.teal[400],
        dark: colors.slate[500],
        gray: colors.zinc[500],
        'gray-light': colors.zinc[300],
        'gray-lightest': colors.zinc[200]
      }
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: 'rfs(0.125rem)',
      1: 'rfs(0.25rem)',
      1.5: 'rfs(0.375rem)',
      2: 'rfs(0.5rem)',
      2.5: 'rfs(0.625rem)',
      3: 'rfs(0.75rem)',
      3.5: 'rfs(0.875rem)',
      4: 'rfs(1rem)',
      5: 'rfs(1.25rem)',
      6: 'rfs(1.5rem)',
      7: 'rfs(1.75rem)',
      8: 'rfs(2rem)',
      9: 'rfs(2.25rem)',
      10: 'rfs(2.5rem)',
      11: 'rfs(2.75rem)',
      12: 'rfs(3rem)',
      14: 'rfs(3.5rem)',
      16: 'rfs(4rem)',
      20: 'rfs(5rem)',
      24: 'rfs(6rem)',
      28: 'rfs(7rem)',
      32: 'rfs(8rem)',
      36: 'rfs(9rem)',
      40: 'rfs(10rem)',
      44: 'rfs(11rem)',
      48: 'rfs(12rem)',
      52: 'rfs(13rem)',
      56: 'rfs(14rem)',
      60: 'rfs(15rem)',
      64: 'rfs(16rem)',
      72: 'rfs(18rem)',
      80: 'rfs(20rem)',
      96: 'rfs(24rem)',
      ...defaultTheme.spacing
    },
    fontSize: {
      xs: ['rfs(0.8125rem)', { lineHeight: 'rfs(1.5rem)' }],
      sm: ['rfs(0.875rem)', { lineHeight: 'rfs(1.5rem)' }],
      base: ['rfs(1rem)', { lineHeight: 'rfs(1.75rem)' }],
      lg: ['rfs(1.125rem)', { lineHeight: 'rfs(1.75rem)' }],
      xl: ['rfs(1.25rem)', { lineHeight: 'rfs(2rem)' }],
      '2xl': ['rfs(1.5rem)', { lineHeight: 'rfs(2rem)' }],
      '3xl': ['rfs(1.875rem)', { lineHeight: 'rfs(2.25rem)' }],
      '4xl': ['rfs(2.25rem)', { lineHeight: 'rfs(2.75rem)' }],
      '5xl': ['rfs(3rem)', { lineHeight: 'rfs(3.5rem)' }],
      '6xl': ['rfs(3.75rem)', { lineHeight: '1' }],
      '7xl': ['rfs(4.5rem)', { lineHeight: '1' }],
      '8xl': ['rfs(6rem)', { lineHeight: '1' }],
      '9xl': ['rfs(8rem)', { lineHeight: '1' }]
    },
    safelist: ['h1', 'h2', 'h3'],
    typography: (theme) => ({
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.zinc.700'),
          '--tw-prose-headings': theme('colors.zinc.900'),
          '--tw-prose-links': theme('colors.primary.600'),
          '--tw-prose-links-hover': theme('colors.primary.700'),
          '--tw-prose-underline': theme('colors.primary.500 / 0.2'),
          '--tw-prose-underline-hover': theme('colors.primary.500'),
          '--tw-prose-bold': theme('colors.zinc.900'),
          '--tw-prose-counters': theme('colors.zinc.900'),
          '--tw-prose-bullets': theme('colors.zinc.900'),
          '--tw-prose-hr': theme('colors.zinc.100'),
          '--tw-prose-quote-borders': theme('colors.zinc.200'),
          '--tw-prose-captions': theme('colors.zinc.400'),
          '--tw-prose-code': theme('colors.zinc.700'),
          '--tw-prose-code-bg': theme('colors.zinc.300 / 0.2'),
          '--tw-prose-pre-code': theme('colors.zinc.100'),
          '--tw-prose-pre-bg': theme('colors.zinc.900'),
          '--tw-prose-pre-border': 'transparent',
          '--tw-prose-th-borders': theme('colors.zinc.200'),
          '--tw-prose-td-borders': theme('colors.zinc.100'),

          // Base
          color: 'var(--tw-prose-body)',
          lineHeight: theme('lineHeight.7'),
          '> *': {
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.10')
          },
          p: {
            marginTop: theme('spacing.7'),
            marginBottom: theme('spacing.7')
          },
          "[class~='lead']": {
            fontSize: theme('fontSize.xl')[0],
            lineHeight: theme('lineHeight.7'),
            marginTop: theme('spacing.12'),
            marginBottom: theme('spacing.8')
          },

          // Headings
          'h2, h3, h4': {
            color: 'var(--tw-prose-headings)',
            fontWeight: theme('fontWeight.semibold'),
            marginBottom: theme('spacing.4'),
            marginTop: theme('spacing.4')
          },
          h1: {
            fontSize: theme('fontSize.4xl')[0],
            lineHeight: theme('lineHeight.7')
          },
          h2: {
            fontSize: theme('fontSize.2xl')[0],
            lineHeight: theme('lineHeight.7')
          },
          h3: {
            fontSize: theme('fontSize.xl')[0],
            lineHeight: theme('lineHeight.7')
          },
          h4: {
            fontSize: theme('fontSize.base')[0],
            lineHeight: theme('lineHeight.7')
          },
          ':is(h2, h3, h4) + *': {
            marginTop: 0
          },

          // Inline elements
          a: {
            color: 'var(--tw-prose-links)',
            fontWeight: theme('fontWeight.semibold'),
            textDecoration: 'underline',
            textDecorationColor: 'var(--tw-prose-underline)',
            transitionProperty: 'color, text-decoration-color',
            transitionDuration: theme('transitionDuration.150'),
            transitionTimingFunction: theme('transitionTimingFunction.in-out')
          },
          'a:hover': {
            color: 'var(--tw-prose-links-hover)',
            textDecorationColor: 'var(--tw-prose-underline-hover)'
          },
          strong: {
            color: 'var(--tw-prose-bold)',
            fontWeight: theme('fontWeight.semibold')
          },

          // Lists
          ul: {
            listStyleType: 'disc'
          },
          ol: {
            listStyleType: 'decimal'
          },
          'ul, ol': {
            paddingLeft: theme('spacing.6')
          },
          li: {
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4'),
            paddingLeft: theme('spacing[3.5]')
          },
          'li::marker': {
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.semibold')
          },
          'ol > li::marker': {
            color: 'var(--tw-prose-counters)'
          },
          'ul > li::marker': {
            color: 'var(--tw-prose-bullets)'
          },
          'li :is(ol, ul)': {
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4')
          },
          'li :is(li, p)': {
            marginTop: theme('spacing.3'),
            marginBottom: theme('spacing.3')
          },

          // Horizontal rules
          hr: {
            marginTop: theme('spacing.20'),
            marginBottom: theme('spacing.20'),
            borderTopWidth: '1px',
            borderColor: 'var(--tw-prose-hr)',
            '@screen lg': {
              marginLeft: `calc(${theme('spacing.12')} * -1)`,
              marginRight: `calc(${theme('spacing.12')} * -1)`
            }
          }
        }
      }
    })
  }
}
