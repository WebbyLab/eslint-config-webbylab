module.exports = {
    'plugins': [
        'security'
    ],

    'rules': {
        'security/detect-unsafe-regex': 'error',
        'security/detect-buffer-noassert': 'error',
        'security/detect-child-process': 'error',
        'security/detect-eval-with-expression': 'error',
        'security/detect-non-literal-regexp': 'error',
        'security/detect-possible-timing-attacks': 'error',
        'security/detect-pseudoRandomBytes': 'error'
    }
};
