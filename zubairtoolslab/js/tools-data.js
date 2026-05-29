// ===================================
// ZubairToolsLab - Tools Data
// 100+ Real Working Tools
// ===================================

const toolsData = [
    // Text Tools (15 tools)
    {
        id: 'word-counter',
        name: 'Word Counter',
        description: 'Count words, characters, sentences, and paragraphs in real-time',
        icon: '📝',
        category: 'text',
        tags: ['writing', 'editing', 'analysis'],
        url: '/tools/word-counter.html',
        popular: true
    },
    {
        id: 'case-converter',
        name: 'Case Converter',
        description: 'Convert text between uppercase, lowercase, title case, and more',
        icon: '🔤',
        category: 'text',
        tags: ['text', 'formatting', 'conversion'],
        url: '/tools/case-converter.html',
        popular: true
    },
    {
        id: 'text-formatter',
        name: 'Text Formatter',
        description: 'Format and beautify your text with custom spacing and indentation',
        icon: '✨',
        category: 'text',
        tags: ['formatting', 'beautify', 'clean'],
        url: '/tools/text-formatter.html'
    },
    {
        id: 'remove-duplicates',
        name: 'Remove Duplicates',
        description: 'Remove duplicate lines or words from your text instantly',
        icon: '🗑️',
        category: 'text',
        tags: ['cleanup', 'deduplication', 'text'],
        url: '/tools/remove-duplicates.html'
    },
    {
        id: 'text-reverse',
        name: 'Text Reverser',
        description: 'Reverse any text string character by character or word by word',
        icon: '🔄',
        category: 'text',
        tags: ['reverse', 'transform', 'text'],
        url: '/tools/text-reverse.html'
    },
    {
        id: 'lorem-ipsum',
        name: 'Lorem Ipsum Generator',
        description: 'Generate placeholder text for your designs and mockups',
        icon: '📄',
        category: 'text',
        tags: ['placeholder', 'generator', 'design'],
        url: '/tools/lorem-ipsum.html',
        popular: true
    },
    {
        id: 'text-slugifier',
        name: 'Text Slugifier',
        description: 'Convert text into URL-friendly slugs for SEO',
        icon: '🔗',
        category: 'text',
        tags: ['seo', 'url', 'slug'],
        url: '/tools/text-slugifier.html'
    },
    {
        id: 'character-counter',
        name: 'Character Counter',
        description: 'Count characters with and without spaces for social media posts',
        icon: '🔢',
        category: 'text',
        tags: ['counting', 'social-media', 'twitter'],
        url: '/tools/character-counter.html'
    },
    {
        id: 'text-extractor',
        name: 'Text Extractor',
        description: 'Extract specific patterns like emails, phones, URLs from text',
        icon: '📥',
        category: 'text',
        tags: ['extraction', 'regex', 'parsing'],
        url: '/tools/text-extractor.html'
    },
    {
        id: 'find-replace',
        name: 'Find & Replace',
        description: 'Advanced find and replace with regex support',
        icon: '🔍',
        category: 'text',
        tags: ['search', 'replace', 'regex'],
        url: '/tools/find-replace.html'
    },
    {
        id: 'text-trimmer',
        name: 'Text Trimmer',
        description: 'Remove extra spaces, tabs, and line breaks from text',
        icon: '✂️',
        category: 'text',
        tags: ['trim', 'clean', 'format'],
        url: '/tools/text-trimmer.html'
    },
    {
        id: 'markdown-editor',
        name: 'Markdown Editor',
        description: 'Write and preview Markdown with live HTML preview',
        icon: '📝',
        category: 'text',
        tags: ['markdown', 'editor', 'html'],
        url: '/tools/markdown-editor.html',
        popular: true
    },
    {
        id: 'text-splitter',
        name: 'Text Splitter',
        description: 'Split text by delimiter, length, or custom pattern',
        icon: '➗',
        category: 'text',
        tags: ['split', 'divide', 'parse'],
        url: '/tools/text-splitter.html'
    },
    {
        id: 'random-text',
        name: 'Random Text Generator',
        description: 'Generate random text for testing and development',
        icon: '🎲',
        category: 'text',
        tags: ['random', 'generator', 'testing'],
        url: '/tools/random-text.html'
    },
    {
        id: 'text-compare',
        name: 'Text Compare',
        description: 'Compare two texts and highlight differences',
        icon: '⚖️',
        category: 'text',
        tags: ['compare', 'diff', 'analysis'],
        url: '/tools/text-compare.html'
    },

    // Math & Calculators (15 tools)
    {
        id: 'basic-calculator',
        name: 'Basic Calculator',
        description: 'Simple calculator for everyday math operations',
        icon: '🧮',
        category: 'math',
        tags: ['calculator', 'math', 'arithmetic'],
        url: '/tools/basic-calculator.html',
        popular: true
    },
    {
        id: 'scientific-calculator',
        name: 'Scientific Calculator',
        description: 'Advanced calculator with trigonometric and logarithmic functions',
        icon: '🔬',
        category: 'math',
        tags: ['scientific', 'trigonometry', 'advanced'],
        url: '/tools/scientific-calculator.html'
    },
    {
        id: 'percentage-calculator',
        name: 'Percentage Calculator',
        description: 'Calculate percentages, percentage increase/decrease',
        icon: '📊',
        category: 'math',
        tags: ['percentage', 'math', 'finance'],
        url: '/tools/percentage-calculator.html',
        popular: true
    },
    {
        id: 'age-calculator',
        name: 'Age Calculator',
        description: 'Calculate your exact age in years, months, days',
        icon: '🎂',
        category: 'math',
        tags: ['age', 'date', 'time'],
        url: '/tools/age-calculator.html',
        popular: true
    },
    {
        id: 'loan-calculator',
        name: 'Loan Calculator',
        description: 'Calculate loan payments, interest, and amortization',
        icon: '💰',
        category: 'math',
        tags: ['loan', 'finance', 'emi'],
        url: '/tools/loan-calculator.html'
    },
    {
        id: 'tip-calculator',
        name: 'Tip Calculator',
        description: 'Calculate tip amount and split bills among friends',
        icon: '💵',
        category: 'math',
        tags: ['tip', 'bill', 'split'],
        url: '/tools/tip-calculator.html'
    },
    {
        id: 'bmi-calculator',
        name: 'BMI Calculator',
        description: 'Calculate Body Mass Index and health recommendations',
        icon: '⚖️',
        category: 'math',
        tags: ['health', 'bmi', 'fitness'],
        url: '/tools/bmi-calculator.html',
        popular: true
    },
    {
        id: 'discount-calculator',
        name: 'Discount Calculator',
        description: 'Calculate discounts, sale prices, and savings',
        icon: '🏷️',
        category: 'math',
        tags: ['discount', 'shopping', 'savings'],
        url: '/tools/discount-calculator.html'
    },
    {
        id: 'gpa-calculator',
        name: 'GPA Calculator',
        description: 'Calculate Grade Point Average for students',
        icon: '📚',
        category: 'math',
        tags: ['education', 'gpa', 'grades'],
        url: '/tools/gpa-calculator.html'
    },
    {
        id: 'time-calculator',
        name: 'Time Calculator',
        description: 'Add, subtract, and convert time durations',
        icon: '⏱️',
        category: 'math',
        tags: ['time', 'duration', 'converter'],
        url: '/tools/time-calculator.html'
    },
    {
        id: 'date-calculator',
        name: 'Date Calculator',
        description: 'Calculate days between dates or add/subtract days',
        icon: '📅',
        category: 'math',
        tags: ['date', 'calendar', 'days'],
        url: '/tools/date-calculator.html'
    },
    {
        id: 'fraction-calculator',
        name: 'Fraction Calculator',
        description: 'Perform operations on fractions easily',
        icon: '➗',
        category: 'math',
        tags: ['fractions', 'math', 'operations'],
        url: '/tools/fraction-calculator.html'
    },
    {
        id: 'average-calculator',
        name: 'Average Calculator',
        description: 'Calculate mean, median, mode of numbers',
        icon: '📈',
        category: 'math',
        tags: ['average', 'statistics', 'math'],
        url: '/tools/average-calculator.html'
    },
    {
        id: 'square-root',
        name: 'Square Root Calculator',
        description: 'Calculate square roots and cube roots instantly',
        icon: '√',
        category: 'math',
        tags: ['root', 'math', 'algebra'],
        url: '/tools/square-root.html'
    },
    {
        id: 'number-sequence',
        name: 'Number Sequence Calculator',
        description: 'Generate arithmetic and geometric sequences',
        icon: '🔢',
        category: 'math',
        tags: ['sequence', 'series', 'math'],
        url: '/tools/number-sequence.html'
    },

    // Converters (15 tools)
    {
        id: 'unit-converter',
        name: 'Unit Converter',
        description: 'Convert between different units of measurement',
        icon: '🔄',
        category: 'converters',
        tags: ['units', 'measurement', 'conversion'],
        url: '/tools/unit-converter.html',
        popular: true
    },
    {
        id: 'currency-converter',
        name: 'Currency Converter',
        description: 'Convert currencies with real-time exchange rates',
        icon: '💱',
        category: 'converters',
        tags: ['currency', 'money', 'exchange'],
        url: '/tools/currency-converter.html',
        popular: true
    },
    {
        id: 'temperature-converter',
        name: 'Temperature Converter',
        description: 'Convert between Celsius, Fahrenheit, Kelvin',
        icon: '🌡️',
        category: 'converters',
        tags: ['temperature', 'celsius', 'fahrenheit'],
        url: '/tools/temperature-converter.html'
    },
    {
        id: 'length-converter',
        name: 'Length Converter',
        description: 'Convert meters, feet, inches, kilometers, miles',
        icon: '📏',
        category: 'converters',
        tags: ['length', 'distance', 'measurement'],
        url: '/tools/length-converter.html'
    },
    {
        id: 'weight-converter',
        name: 'Weight Converter',
        description: 'Convert kg, lbs, grams, ounces, and more',
        icon: '⚖️',
        category: 'converters',
        tags: ['weight', 'mass', 'conversion'],
        url: '/tools/weight-converter.html'
    },
    {
        id: 'speed-converter',
        name: 'Speed Converter',
        description: 'Convert km/h, mph, m/s, knots',
        icon: '🚀',
        category: 'converters',
        tags: ['speed', 'velocity', 'conversion'],
        url: '/tools/speed-converter.html'
    },
    {
        id: 'area-converter',
        name: 'Area Converter',
        description: 'Convert square meters, feet, acres, hectares',
        icon: '📐',
        category: 'converters',
        tags: ['area', 'surface', 'measurement'],
        url: '/tools/area-converter.html'
    },
    {
        id: 'volume-converter',
        name: 'Volume Converter',
        description: 'Convert liters, gallons, cubic meters, etc.',
        icon: '🧊',
        category: 'converters',
        tags: ['volume', 'capacity', 'liquid'],
        url: '/tools/volume-converter.html'
    },
    {
        id: 'data-converter',
        name: 'Data Storage Converter',
        description: 'Convert bytes, KB, MB, GB, TB, PB',
        icon: '💾',
        category: 'converters',
        tags: ['data', 'storage', 'bytes'],
        url: '/tools/data-converter.html',
        popular: true
    },
    {
        id: 'time-zone-converter',
        name: 'Time Zone Converter',
        description: 'Convert time between different time zones',
        icon: '🌍',
        category: 'converters',
        tags: ['timezone', 'world', 'clock'],
        url: '/tools/time-zone-converter.html'
    },
    {
        id: 'binary-converter',
        name: 'Binary Converter',
        description: 'Convert between binary, decimal, hex, octal',
        icon: '0️⃣1️⃣',
        category: 'converters',
        tags: ['binary', 'hex', 'decimal'],
        url: '/tools/binary-converter.html',
        popular: true
    },
    {
        id: 'angle-converter',
        name: 'Angle Converter',
        description: 'Convert degrees, radians, gradians',
        icon: '📐',
        category: 'converters',
        tags: ['angle', 'degrees', 'radians'],
        url: '/tools/angle-converter.html'
    },
    {
        id: 'pressure-converter',
        name: 'Pressure Converter',
        description: 'Convert PSI, bar, pascal, atm',
        icon: '🎯',
        category: 'converters',
        tags: ['pressure', 'psi', 'bar'],
        url: '/tools/pressure-converter.html'
    },
    {
        id: 'energy-converter',
        name: 'Energy Converter',
        description: 'Convert joules, calories, kWh, BTU',
        icon: '⚡',
        category: 'converters',
        tags: ['energy', 'power', 'conversion'],
        url: '/tools/energy-converter.html'
    },
    {
        id: 'frequency-converter',
        name: 'Frequency Converter',
        description: 'Convert Hz, kHz, MHz, GHz',
        icon: '📡',
        category: 'converters',
        tags: ['frequency', 'hertz', 'radio'],
        url: '/tools/frequency-converter.html'
    },

    // Generators (15 tools)
    {
        id: 'password-generator',
        name: 'Password Generator',
        description: 'Generate strong, secure passwords instantly',
        icon: '🔐',
        category: 'generators',
        tags: ['password', 'security', 'random'],
        url: '/tools/password-generator.html',
        popular: true
    },
    {
        id: 'qr-code-generator',
        name: 'QR Code Generator',
        description: 'Create QR codes for URLs, text, contact info',
        icon: '📱',
        category: 'generators',
        tags: ['qr', 'code', 'barcode'],
        url: '/tools/qr-code-generator.html',
        popular: true
    },
    {
        id: 'uuid-generator',
        name: 'UUID Generator',
        description: 'Generate unique UUIDs (v1, v4)',
        icon: '🆔',
        category: 'generators',
        tags: ['uuid', 'unique', 'identifier'],
        url: '/tools/uuid-generator.html'
    },
    {
        id: 'random-number',
        name: 'Random Number Generator',
        description: 'Generate random numbers within a range',
        icon: '🎲',
        category: 'generators',
        tags: ['random', 'number', 'dice'],
        url: '/tools/random-number.html',
        popular: true
    },
    {
        id: 'color-generator',
        name: 'Color Palette Generator',
        description: 'Generate beautiful color palettes for designs',
        icon: '🎨',
        category: 'generators',
        tags: ['color', 'palette', 'design'],
        url: '/tools/color-generator.html',
        popular: true
    },
    {
        id: 'favicon-generator',
        name: 'Favicon Generator',
        description: 'Create favicons from images or text',
        icon: '🌐',
        category: 'generators',
        tags: ['favicon', 'icon', 'website'],
        url: '/tools/favicon-generator.html'
    },
    {
        id: 'hashtag-generator',
        name: 'Hashtag Generator',
        description: 'Generate trending hashtags for social media',
        icon: '#️⃣',
        category: 'generators',
        tags: ['hashtag', 'social', 'instagram'],
        url: '/tools/hashtag-generator.html'
    },
    {
        id: 'username-generator',
        name: 'Username Generator',
        description: 'Create unique usernames for social media',
        icon: '👤',
        category: 'generators',
        tags: ['username', 'name', 'social'],
        url: '/tools/username-generator.html'
    },
    {
        id: 'domain-name-generator',
        name: 'Domain Name Generator',
        description: 'Generate creative domain name ideas',
        icon: '🌐',
        category: 'generators',
        tags: ['domain', 'name', 'website'],
        url: '/tools/domain-name-generator.html'
    },
    {
        id: 'invoice-generator',
        name: 'Invoice Generator',
        description: 'Create professional invoices online',
        icon: '📄',
        category: 'generators',
        tags: ['invoice', 'billing', 'business'],
        url: '/tools/invoice-generator.html'
    },
    {
        id: 'signature-generator',
        name: 'Email Signature Generator',
        description: 'Design professional email signatures',
        icon: '✍️',
        category: 'generators',
        tags: ['signature', 'email', 'professional'],
        url: '/tools/signature-generator.html'
    },
    {
        id: 'certificate-generator',
        name: 'Certificate Generator',
        description: 'Create certificates for events and courses',
        icon: '🏆',
        category: 'generators',
        tags: ['certificate', 'award', 'achievement'],
        url: '/tools/certificate-generator.html'
    },
    {
        id: 'mock-data-generator',
        name: 'Mock Data Generator',
        description: 'Generate fake data for testing databases',
        icon: '🗄️',
        category: 'generators',
        tags: ['mock', 'fake', 'testing'],
        url: '/tools/mock-data-generator.html'
    },
    {
        id: 'gradient-generator',
        name: 'CSS Gradient Generator',
        description: 'Create beautiful CSS gradients visually',
        icon: '🌈',
        category: 'generators',
        tags: ['gradient', 'css', 'design'],
        url: '/tools/gradient-generator.html',
        popular: true
    },
    {
        id: 'box-shadow-generator',
        name: 'Box Shadow Generator',
        description: 'Generate CSS box-shadow values easily',
        icon: '📦',
        category: 'generators',
        tags: ['shadow', 'css', 'effect'],
        url: '/tools/box-shadow-generator.html'
    },

    // Developer Tools (20 tools)
    {
        id: 'json-formatter',
        name: 'JSON Formatter',
        description: 'Beautify and validate JSON data',
        icon: '📋',
        category: 'developers',
        tags: ['json', 'format', 'validate'],
        url: '/tools/json-formatter.html',
        popular: true
    },
    {
        id: 'xml-formatter',
        name: 'XML Formatter',
        description: 'Format and validate XML documents',
        icon: '📄',
        category: 'developers',
        tags: ['xml', 'format', 'validate'],
        url: '/tools/xml-formatter.html'
    },
    {
        id: 'html-formatter',
        name: 'HTML Formatter',
        description: 'Beautify and minify HTML code',
        icon: '🌐',
        category: 'developers',
        tags: ['html', 'format', 'minify'],
        url: '/tools/html-formatter.html'
    },
    {
        id: 'css-formatter',
        name: 'CSS Formatter',
        description: 'Format, minify, and validate CSS',
        icon: '🎨',
        category: 'developers',
        tags: ['css', 'format', 'minify'],
        url: '/tools/css-formatter.html'
    },
    {
        id: 'javascript-formatter',
        name: 'JavaScript Formatter',
        description: 'Beautify and minify JavaScript code',
        icon: '⚡',
        category: 'developers',
        tags: ['javascript', 'js', 'format'],
        url: '/tools/javascript-formatter.html'
    },
    {
        id: 'sql-formatter',
        name: 'SQL Formatter',
        description: 'Format SQL queries for better readability',
        icon: '🗄️',
        category: 'developers',
        tags: ['sql', 'database', 'format'],
        url: '/tools/sql-formatter.html'
    },
    {
        id: 'base64-encoder',
        name: 'Base64 Encoder/Decoder',
        description: 'Encode and decode Base64 strings',
        icon: '🔃',
        category: 'developers',
        tags: ['base64', 'encode', 'decode'],
        url: '/tools/base64-encoder.html',
        popular: true
    },
    {
        id: 'url-encoder',
        name: 'URL Encoder/Decoder',
        description: 'Encode and decode URLs safely',
        icon: '🔗',
        category: 'developers',
        tags: ['url', 'encode', 'decode'],
        url: '/tools/url-encoder.html'
    },
    {
        id: 'html-entities',
        name: 'HTML Entity Encoder',
        description: 'Convert special characters to HTML entities',
        icon: '🔣',
        category: 'developers',
        tags: ['html', 'entities', 'escape'],
        url: '/tools/html-entities.html'
    },
    {
        id: 'regex-tester',
        name: 'Regex Tester',
        description: 'Test and debug regular expressions',
        icon: '🔍',
        category: 'developers',
        tags: ['regex', 'pattern', 'test'],
        url: '/tools/regex-tester.html',
        popular: true
    },
    {
        id: 'http-status-codes',
        name: 'HTTP Status Codes',
        description: 'Reference for all HTTP status codes',
        icon: '📡',
        category: 'developers',
        tags: ['http', 'status', 'codes'],
        url: '/tools/http-status-codes.html'
    },
    {
        id: 'meta-tag-generator',
        name: 'Meta Tag Generator',
        description: 'Generate SEO meta tags for websites',
        icon: '🏷️',
        category: 'developers',
        tags: ['meta', 'seo', 'tags'],
        url: '/tools/meta-tag-generator.html',
        popular: true
    },
    {
        id: 'robots-txt-generator',
        name: 'Robots.txt Generator',
        description: 'Create robots.txt files for SEO',
        icon: '🤖',
        category: 'developers',
        tags: ['robots', 'seo', 'crawler'],
        url: '/tools/robots-txt-generator.html'
    },
    {
        id: 'htaccess-generator',
        name: '.htaccess Generator',
        description: 'Generate Apache .htaccess configurations',
        icon: '⚙️',
        category: 'developers',
        tags: ['htaccess', 'apache', 'server'],
        url: '/tools/htaccess-generator.html'
    },
    {
        id: 'cron-job-generator',
        name: 'Cron Job Generator',
        description: 'Create cron expressions visually',
        icon: '⏰',
        category: 'developers',
        tags: ['cron', 'schedule', 'automation'],
        url: '/tools/cron-job-generator.html'
    },
    {
        id: 'git-cheatsheet',
        name: 'Git Cheatsheet',
        description: 'Quick reference for Git commands',
        icon: '📚',
        category: 'developers',
        tags: ['git', 'commands', 'reference'],
        url: '/tools/git-cheatsheet.html'
    },
    {
        id: 'markdown-preview',
        name: 'Markdown Preview',
        description: 'Preview Markdown as HTML in real-time',
        icon: '👁️',
        category: 'developers',
        tags: ['markdown', 'preview', 'html'],
        url: '/tools/markdown-preview.html'
    },
    {
        id: 'color-picker',
        name: 'Color Picker',
        description: 'Pick colors and get HEX, RGB, HSL values',
        icon: '🎨',
        category: 'developers',
        tags: ['color', 'picker', 'hex'],
        url: '/tools/color-picker.html',
        popular: true
    },
    {
        id: 'contrast-checker',
        name: 'Contrast Checker',
        description: 'Check color contrast for accessibility',
        icon: '♿',
        category: 'developers',
        tags: ['contrast', 'accessibility', 'wcag'],
        url: '/tools/contrast-checker.html'
    },
    {
        id: 'viewport-resizer',
        name: 'Viewport Resizer',
        description: 'Test website responsiveness at different sizes',
        icon: '📱',
        category: 'developers',
        tags: ['responsive', 'viewport', 'testing'],
        url: '/tools/viewport-resizer.html'
    },

    // Image Tools (10 tools)
    {
        id: 'image-compressor',
        name: 'Image Compressor',
        description: 'Compress images without losing quality',
        icon: '🗜️',
        category: 'images',
        tags: ['compress', 'optimize', 'jpg'],
        url: '/tools/image-compressor.html',
        popular: true
    },
    {
        id: 'image-resizer',
        name: 'Image Resizer',
        description: 'Resize images to any dimension',
        icon: '📐',
        category: 'images',
        tags: ['resize', 'dimensions', 'crop'],
        url: '/tools/image-resizer.html',
        popular: true
    },
    {
        id: 'image-converter',
        name: 'Image Format Converter',
        description: 'Convert between JPG, PNG, WebP, GIF',
        icon: '🔄',
        category: 'images',
        tags: ['convert', 'format', 'image'],
        url: '/tools/image-converter.html'
    },
    {
        id: 'image-cropper',
        name: 'Image Cropper',
        description: 'Crop images to custom dimensions',
        icon: '✂️',
        category: 'images',
        tags: ['crop', 'cut', 'edit'],
        url: '/tools/image-cropper.html'
    },
    {
        id: 'image-rotator',
        name: 'Image Rotator',
        description: 'Rotate images by any angle',
        icon: '🔄',
        category: 'images',
        tags: ['rotate', 'flip', 'orientation'],
        url: '/tools/image-rotator.html'
    },
    {
        id: 'watermark-adder',
        name: 'Watermark Adder',
        description: 'Add watermarks to protect your images',
        icon: '©️',
        category: 'images',
        tags: ['watermark', 'protect', 'copyright'],
        url: '/tools/watermark-adder.html'
    },
    {
        id: 'meme-generator',
        name: 'Meme Generator',
        description: 'Create memes with custom text',
        icon: '😂',
        category: 'images',
        tags: ['meme', 'funny', 'generator'],
        url: '/tools/meme-generator.html'
    },
    {
        id: 'image-to-base64',
        name: 'Image to Base64',
        description: 'Convert images to Base64 encoded strings',
        icon: '🔢',
        category: 'images',
        tags: ['base64', 'encode', 'converter'],
        url: '/tools/image-to-base64.html'
    },
    {
        id: 'svg-optimizer',
        name: 'SVG Optimizer',
        description: 'Optimize SVG files for web',
        icon: '✨',
        category: 'images',
        tags: ['svg', 'optimize', 'vector'],
        url: '/tools/svg-optimizer.html'
    },
    {
        id: 'photo-editor',
        name: 'Online Photo Editor',
        description: 'Edit photos with filters and effects',
        icon: '📸',
        category: 'images',
        tags: ['edit', 'filter', 'effects'],
        url: '/tools/photo-editor.html'
    },

    // Security Tools (10 tools)
    {
        id: 'password-strength',
        name: 'Password Strength Checker',
        description: 'Check how strong your password is',
        icon: '🔒',
        category: 'security',
        tags: ['password', 'strength', 'security'],
        url: '/tools/password-strength.html',
        popular: true
    },
    {
        id: 'hash-generator',
        name: 'Hash Generator',
        description: 'Generate MD5, SHA1, SHA256 hashes',
        icon: '🔐',
        category: 'security',
        tags: ['hash', 'md5', 'sha'],
        url: '/tools/hash-generator.html'
    },
    {
        id: 'ssl-checker',
        name: 'SSL Certificate Checker',
        description: 'Verify SSL certificate validity',
        icon: '🔏',
        category: 'security',
        tags: ['ssl', 'certificate', 'https'],
        url: '/tools/ssl-checker.html'
    },
    {
        id: 'ip-lookup',
        name: 'IP Address Lookup',
        description: 'Get information about any IP address',
        icon: '🌐',
        category: 'security',
        tags: ['ip', 'lookup', 'geolocation'],
        url: '/tools/ip-lookup.html'
    },
    {
        id: 'whois-lookup',
        name: 'WHOIS Domain Lookup',
        description: 'Check domain registration details',
        icon: '🔍',
        category: 'security',
        tags: ['whois', 'domain', 'registration'],
        url: '/tools/whois-lookup.html'
    },
    {
        id: 'dns-lookup',
        name: 'DNS Lookup',
        description: 'Query DNS records for any domain',
        icon: '📡',
        category: 'security',
        tags: ['dns', 'records', 'lookup'],
        url: '/tools/dns-lookup.html'
    },
    {
        id: 'email-validator',
        name: 'Email Validator',
        description: 'Verify if email addresses are valid',
        icon: '📧',
        category: 'security',
        tags: ['email', 'validate', 'verify'],
        url: '/tools/email-validator.html'
    },
    {
        id: 'phone-validator',
        name: 'Phone Number Validator',
        description: 'Validate phone numbers internationally',
        icon: '📱',
        category: 'security',
        tags: ['phone', 'validate', 'international'],
        url: '/tools/phone-validator.html'
    },
    {
        id: 'malware-scanner',
        name: 'URL Malware Scanner',
        description: 'Check if URLs are safe to visit',
        icon: '🛡️',
        category: 'security',
        tags: ['malware', 'scan', 'safe'],
        url: '/tools/malware-scanner.html'
    },
    {
        id: 'two-factor-auth',
        name: '2FA Generator',
        description: 'Generate two-factor authentication codes',
        icon: '📲',
        category: 'security',
        tags: ['2fa', 'totp', 'authenticator'],
        url: '/tools/two-factor-auth.html'
    },

    // Productivity Tools (10 tools)
    {
        id: 'todo-list',
        name: 'To-Do List',
        description: 'Organize tasks and boost productivity',
        icon: '✅',
        category: 'productivity',
        tags: ['todo', 'tasks', 'organize'],
        url: '/tools/todo-list.html',
        popular: true
    },
    {
        id: 'pomodoro-timer',
        name: 'Pomodoro Timer',
        description: 'Focus timer based on Pomodoro technique',
        icon: '🍅',
        category: 'productivity',
        tags: ['timer', 'focus', 'pomodoro'],
        url: '/tools/pomodoro-timer.html',
        popular: true
    },
    {
        id: 'stopwatch',
        name: 'Online Stopwatch',
        description: 'Accurate stopwatch with lap times',
        icon: '⏱️',
        category: 'productivity',
        tags: ['stopwatch', 'timer', 'count'],
        url: '/tools/stopwatch.html'
    },
    {
        id: 'countdown-timer',
        name: 'Countdown Timer',
        description: 'Set countdown timers for any event',
        icon: '⏲️',
        category: 'productivity',
        tags: ['countdown', 'timer', 'alarm'],
        url: '/tools/countdown-timer.html'
    },
    {
        id: 'world-clock',
        name: 'World Clock',
        description: 'Check time in multiple cities worldwide',
        icon: '🌍',
        category: 'productivity',
        tags: ['clock', 'time', 'world'],
        url: '/tools/world-clock.html'
    },
    {
        id: 'meeting-planner',
        name: 'Meeting Planner',
        description: 'Find best meeting times across time zones',
        icon: '📅',
        category: 'productivity',
        tags: ['meeting', 'schedule', 'planner'],
        url: '/tools/meeting-planner.html'
    },
    {
        id: 'note-taking',
        name: 'Quick Notes',
        description: 'Take notes that save automatically',
        icon: '📝',
        category: 'productivity',
        tags: ['notes', 'write', 'save'],
        url: '/tools/note-taking.html'
    },
    {
        id: 'habit-tracker',
        name: 'Habit Tracker',
        description: 'Build and track daily habits',
        icon: '📊',
        category: 'productivity',
        tags: ['habit', 'tracker', 'routine'],
        url: '/tools/habit-tracker.html'
    },
    {
        id: 'goal-setter',
        name: 'Goal Setter',
        description: 'Set and track your personal goals',
        icon: '🎯',
        category: 'productivity',
        tags: ['goals', 'targets', 'achievement'],
        url: '/tools/goal-setter.html'
    },
    {
        id: 'break-reminder',
        name: 'Break Reminder',
        description: 'Remind yourself to take healthy breaks',
        icon: '☕',
        category: 'productivity',
        tags: ['break', 'health', 'reminder'],
        url: '/tools/break-reminder.html'
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = toolsData;
}
