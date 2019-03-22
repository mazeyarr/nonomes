import Vue from 'vue'
import VueSanitizeHtml from 'vue-sanitize-html-plugin'

Vue.use(VueSanitizeHtml, {
  allowedTags: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'p',
    'a',
    'ul',
    'ol',
    'nl',
    'li',
    'b',
    'i',
    'span',
    'strong',
    'em',
    'strike',
    'code',
    'hr',
    'br',
    'table',
    'thead',
    'caption',
    'tbody',
    'tr',
    'th',
    'td',
    'pre',
    'iframe',
    'img',
    'figure',
    'article'
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src', 'height', 'width', 'class'],
    div: ['class'],
    figure: ['class'],
    h1: ['class'],
    span: ['class']
  },
  selfClosing: ['img', 'br', 'hr', 'area', 'base', 'meta'],
  allowedSchemes: ['http', 'https', 'mailto'],
  allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
  allowProtocolRelative: true
})
