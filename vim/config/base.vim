" basic setup
filetype plugin indent on
let mapleader=" "
let maplocalleader = " "
set clipboard=unnamedplus

set t_Co=256   " This is may or may not needed.
colorscheme PaperColor
set background=light
highlight jsxAttrib cterm=italic ctermfg=214
highlight Comment cterm=italic
" colorscheme nova

let g:node_host_prog = '/Users/dieguit/.nvm/versions/node/v8.15.0/bin/neovim-node-host'

syntax enable
let g:netrw_liststyle = 3
let g:netrw_altv = 1
let g:netrw_winsize = 25
set tabstop=2
set shiftwidth=2
set softtabstop=0
set expandtab smarttab
set number
set relativenumber
set list
set listchars=tab:»\ ,extends:›,precedes:‹,nbsp:·,trail:·,space:·
set cursorline
set wildmenu
set wildignore+=*/tmp/*,*.so,*.swp,*.zip,*/min/*,*/vendor/*,*/node_modules/*,*/bower_components/*
set lazyredraw
set showmatch
set incsearch
set hlsearch
set ignorecase
set smartcase

let g:ale_sign_error = '●' " Less aggressive than the default '>>'
let g:ale_sign_warning = '.'
let g:ale_lint_on_enter = 0 " Less distracting when opening a new file
let g:ale_lint_delay = 300
