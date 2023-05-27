// CSS and SASS files
import './index.scss';

import { default as Tobi } from '@midzer/tobii'
const tobi = new Tobi()

// Remove the two following lines to remove the product hunt floating prompt
import FloatingPrompt from 'producthunt-floating-prompt'
FloatingPrompt({ name: 'Factify Facts', url: 'https://www.producthunt.com/products/factify-facts', bottom: '96px', width: '450px' })
