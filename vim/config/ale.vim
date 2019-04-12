let g:ale_linters = {
\   'javascript': ['eslint'],
\   'typescript': ['eslint', 'tsserver'],
\   'html': [],
\   'ruby': ['rubocop']
\  }

let g:ale_linter_aliases = {
\  'typescript.tsx': 'typescript',
\  'typescriptreact': 'typescript'
\  }

let g:ale_fixers = {
\   'javascript': ['eslint'],
\   'typescript': ['eslint'],
\   'typescriptreact': ['eslint'],
\   'ruby': ['rubocop']
\   }
